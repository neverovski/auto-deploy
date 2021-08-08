# AUTO Deploy

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Deploy you Node.js app in production and use it to automate your deployment. Use a webhook GitHub, BitBucket, GitLab or other.

### Generating a new SSH key.
```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
$ cat ~/.ssh/id_rsa.pub
```
### Add your SSH key to the ssh-agent.

Start the ssh-agent in the background.

```bash
$ eval "$(ssh-agent -s)"
```

Add your SSH private key to the ssh-agent.

```bash
$ ssh-add -K ~/.ssh/id_rsa
```

After that, open ~/.ssh/config file in some editor (create on if you don’t find it), then add following in that file:

```bash
$ nano ~/.ssh/config

Host *
  IgnoreUnknown AddKeysToAgent,UseKeychain
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa

$ chmod 600 ~/.ssh/config
```

### Start server
```bash
$ node server.js
```
