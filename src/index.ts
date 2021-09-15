import { AppConfig } from '@config/index';
import { Logger } from '@core/index';
import Middleware, { ErrorMiddleware } from '@middleware/index';
import { EventEmitter } from '@utils/index';

import Server from './server';

const app = new Server({
  port: Number(AppConfig.port),
  initMiddleware: Middleware,
  errorMiddleware: ErrorMiddleware,
});

app
  .init()
  .then(() => {
    EventEmitter.emit('start');
    Logger.info('Server start initialization...');
    Logger.debug('--- APP CONFIG ---');
    Logger.debug(`HOST: ${AppConfig.host}`);
    Logger.debug(`PORT: ${AppConfig.port}`);
    Logger.debug(`NAME: ${AppConfig.name}`);
  })
  .catch((error) => {
    EventEmitter.emit('close');
    Logger.error('Server fails to initialize...', error);
    process.exit(1);
  });
