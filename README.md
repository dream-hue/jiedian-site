# Jiedian public demo

Chinese verification-service directory and admin console, packaged for a Render free demo deployment.

Important: this project does not connect to an SMS provider and cannot receive real verification codes or accept payments. The free Render plan has ephemeral storage; admin-edited data and sessions can reset after restarts. See [deployment steps](DEPLOY-RENDER.md).

## Run locally

Requires Node.js 20+:

```sh
node server.js
```

Then visit http://localhost:3000. Configure an admin password with `node scripts/set-admin-password.js`.

## Deploy

See [DEPLOY-RENDER.md](DEPLOY-RENDER.md) and `render.yaml`.
