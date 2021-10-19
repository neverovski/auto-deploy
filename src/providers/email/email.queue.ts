import Bull from 'bull';
import ms from 'ms';

import { AppConfig, EmailConfig, RedisConfig } from '@config/index';
import { Logger } from '@core/index';
import { EventEmitter } from '@utils/index';

import { EMAIL_QUEUQ, EMAIL_DEPLOY } from './email.constant';
import EmailService from './email.service';
import { DeployEmail } from './email.type';

export const EmailQueue = new Bull(EMAIL_QUEUQ, {
  redis: {
    port: RedisConfig.port,
    host: RedisConfig.host,
    password: RedisConfig.password,
  },
  prefix: AppConfig.name,
  limiter: { max: 30, duration: ms('5s') },
  defaultJobOptions: {
    attempts: 30,
    backoff: {
      type: 'fixed',
      delay: ms('1m'),
    },
  },
});

EventEmitter.once('close', async () => {
  await EmailQueue.close();
});

EmailQueue.on('error', Logger.error);

EventEmitter.once('start', () => {
  void EmailQueue.process(EMAIL_DEPLOY, async (job: Bull.Job<DeployEmail>) => {
    try {
      const { subject, text } = job.data;

      await EmailService.sendEmail({
        to: EmailConfig.mailTo,
        from: EmailConfig.username,
        subject,
        text,
      });

      await job.progress(100);

      return await Promise.resolve();
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Logger.error(`${EMAIL_QUEUQ} ${EMAIL_DEPLOY}`, err);

      return Promise.reject(err);
    }
  });
});
