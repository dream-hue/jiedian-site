# 接点 · 公网静态演示

仓库包含一个用于公开预览的静态演示页，以及一个尚未公开部署的 Node 服务端原型。

## GitHub Pages 演示

在仓库 Settings → Pages 中，将 Build and deployment 设为 Deploy from a branch，Branch 选 main，Folder 选 /docs，然后保存。几分钟后可从以下网址访问：

https://dream-hue.github.io/jiedian-site/

静态演示只展示服务目录与示例价格。它不会分配号码、发送短信、生成验证码、注册账户或收取费用。

## Node 服务原型

Node 服务端原型在仓库根目录。它尚未接入真实短信供应商、支付或持久化数据库，因此不能用于真实接码和收费。免费静态托管不会运行这个后端。

Render 部署说明保留在 [DEPLOY-RENDER.md](DEPLOY-RENDER.md)。
