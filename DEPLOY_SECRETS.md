Setting deployment secrets for GitHub Actions (optional)

This repository contains an optional SSH deploy job in .github/workflows/ci-deploy.yml.
To enable automatic deploys, add the following repository secrets in GitHub (Repository Settings → Secrets & variables → Actions → New repository secret):

- DEPLOY_HOST: the server hostname or IP (e.g. 203.0.113.12)
- DEPLOY_USER: SSH username for the deploy user (e.g. deploy)
- DEPLOY_KEY: the private SSH key (PEM) for the deploy user. Paste the key contents as the secret value.
- DEPLOY_PATH: absolute path to the app directory on the server (e.g. /var/www/technews)

Recommended steps:
1. On your local machine, create an SSH keypair for deployments (do not reuse your personal key):

```bash
ssh-keygen -t ed25519 -f ~/.ssh/technews_deploy -C "technews-deploy" -N ""
```

2. Copy the public key to the server's deploy user:

```bash
ssh-copy-id -i ~/.ssh/technews_deploy.pub deploy@your-server
```

Or manually add `~/.ssh/technews_deploy.pub` contents to `~/.ssh/authorized_keys` on the server.

3. Add the private key contents to the GitHub secret `DEPLOY_KEY`:

```bash
# (locally -- prints key, then paste into GitHub secret)
cat ~/.ssh/technews_deploy
```

4. Set `DEPLOY_HOST`, `DEPLOY_USER`, and `DEPLOY_PATH` secrets via the GitHub UI.

Optional: set secrets using the GitHub CLI (if you have `gh` installed and authenticated):

```bash
echo "$(cat ~/.ssh/technews_deploy)" | gh secret set DEPLOY_KEY --repo 2005-DK/Laravel---TECHNEWS
gh secret set DEPLOY_HOST --repo 2005-DK/Laravel---TECHNEWS --body "203.0.113.12"
gh secret set DEPLOY_USER --repo 2005-DK/Laravel---TECHNEWS --body "deploy"
gh secret set DEPLOY_PATH --repo 2005-DK/Laravel---TECHNEWS --body "/var/www/technews"
```

Security notes:
- Keep the private key secret; never commit it to the repo.
- Use a dedicated deploy user with limited permissions.
- Consider using a deploy key tied to the repository instead of a general private key.
- Rotate the key if the server or key is ever compromised.
