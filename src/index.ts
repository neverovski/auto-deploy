import { AppConfig } from '@config/index';
import Middleware, { ErrorMiddleware } from '@middleware/index';
import { EventEmitter, Logger } from '@utils/helpers';

import Server from './server';

const app = new Server({
  port: Number(AppConfig.port),
  middleware: Middleware,
  errorMiddleware: ErrorMiddleware,
});

app
  .start()
  .then((serverParams) => {
    EventEmitter.emit('start');
    Logger.info('Server initialized...', serverParams);
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
