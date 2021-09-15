# AUTO Deploy

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Deploy you Node.js app in production and use it to automate your deployment. Use a webhook GitHub, BitBucket, GitLab or other.

### Before starting - dev stage
```bash
$ cp .env.example .env
$ docker-compose up -d --build
$ npm run start:dev
```

### Before starting - prod stage
```bash
$ cp .env.example .env
$ docker-compose up -d --build
$ npm run start:prod
```

## Next steps
  - Notifications
    - [x] Email
    - [ ] Telegram
    - [ ] Slack
    - [ ] ...

### 1. Why is my git pre-commit hook not executable by default?

- Because files are not executable by default; they must be set to be executable.

```
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

## Usage

- Set header: "x-deploy-token: SECRET_DEPLOY_TOKEN"
- Сall webhook: http://121.0.0.1/deploy/webhook

## Contribution

Happy to get your feedback, but also you are feel free to raise a pull request.

## License

This library is released under the MIT License.
