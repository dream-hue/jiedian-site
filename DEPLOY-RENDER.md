# Render 免费预览部署

本项目可用 Render Free Web Service 提供公网演示地址。Render 免费实例会在无访问时休眠、可能重启且不支持持久磁盘；本地 JSON 数据和后台会话可能重置，仅适合预览，不适合保存客户订单或长期运营。

## 部署步骤

1. 在 Render Dashboard 登录并连接 GitHub。
2. 创建 Blueprint，选择仓库 `dream-hue/jiedian-site` 和 `main` 分支。Render 会读取根目录的 `render.yaml`。
3. 本地运行 `node scripts/make-admin-hash.js`，输入两次管理员密码（至少 14 位；输入不会显示），复制输出的 scrypt 哈希。
4. 在 Blueprint 部署表单中，将该哈希填入 `ADMIN_PASSWORD_HASH`，检查计划是 Free，然后点击 Deploy Blueprint。
5. 部署完成后，Render 会提供 `https://...onrender.com` 地址。客户可以直接访问；首个请求可能要等待实例唤醒。
6. 管理后台地址为公网地址加 `/admin`，使用刚设置的密码登录。

请勿把密码本身或哈希提交到 GitHub。哈希仅填到 Render 的环境变量中。自定义域名可在服务 Settings → Custom Domains 添加，但域名注册通常需要付费。

## 功能限制

网站目前没有短信供应商适配器、支付或用户钱包；订单 API 明确返回 503，不能实际接码或收费。要运营真实服务，需要获授权的短信供应商、持久化数据库/存储、备份、支付、滥用防护、隐私及客服流程。

Render 免费服务限制详见 https://render.com/docs/free ；Blueprint 说明见 https://render.com/docs/blueprint-spec 。
