# Render 免费预览部署

本项目可用 Render Free Web Service 提供公网演示地址。Render 免费实例会在无访问时休眠、可被重启，不支持持久磁盘。因此这里用 `ADMIN_PASSWORD_HASH` 配置管理员哈希，不依赖本地 `data/`；服务目录目前是演示目录，后台改价和会话会在实例重启/重新部署后丢失。仅适合预览，不适合收客户订单或长期运营。

## 准备

1. 创建 GitHub 账号和一个新的私有仓库。
2. 将本项目 `outputs` 文件夹内容上传到仓库根目录（包含 `render.yaml`、`Dockerfile`、`server.js`、`public/`）。
3. 进入 Render Dashboard，使用 GitHub 连接该仓库，并创建 Blueprint。Render 会读取 `render.yaml`，建立免费 Web Service。
4. 在环境变量设置里，为 `ADMIN_PASSWORD_HASH` 提供密码哈希。可在本机 Node.js 运行以下命令，输入两次密码后复制输出的哈希；密码本身不会打印：

```sh
node -e "const c=require('node:crypto'),r=require('node:readline').createInterface({input:process.stdin,output:process.stdout});r.question('New admin password (14+ chars): ',a=>r.question('Confirm password: ',b=>{if(a.length<14||a!==b){console.error('Password mismatch or too short');process.exit(1)}const s=c.randomBytes(16).toString('hex');console.log(s+':'+c.scryptSync(a,s,64).toString('hex'));r.close()}))"
```

为安全起见，在你自己的电脑终端执行，不要把密码发到聊天或提交到 Git。Render 环境变量名必须是 `ADMIN_PASSWORD_HASH`。

## 发布和访问

部署完成后，Render 会显示一个 `https://...onrender.com` 公网地址。发给客户即可打开。免费服务首个请求可能要等待实例唤醒。后续代码更新推送到 GitHub 后 Render 会自动部署。

## 自定义域名

在 Render 服务的 Settings → Custom Domains 添加你拥有的域名，并按控制台提示添加 DNS 记录。域名注册通常需要付费；免费 Render 子域名可用于演示。

## 上线限制

Render 官方说明免费服务没有持久磁盘，并会休眠/重启；免费 PostgreSQL 也有过期限制。真实运营至少需要稳定持久化存储、备份、支付和获授权的短信供应商接入。当前订单 API 明确返回 503，无法实际接码或收费。

Render 文档：
- https://render.com/docs/free
- https://render.com/docs/blueprint-spec

