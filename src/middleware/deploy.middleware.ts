import { Response, Request, NextFunction, RequestHandler } from 'express';

import { AppConfig } from '@config/index';
import { MiddlewareCore } from '@core/index';
import {
  responseError,
  HttpExceptionType,
  AUTH_DEPLOY_HEADER,
} from '@utils/index';

class DeployMiddleware extends MiddlewareCore {
  handler(): RequestHandler {
    return (req: Request, _res: Response, next: NextFunction) => {
      const token = req.headers[AUTH_DEPLOY_HEADER] as string;

      if (token === AppConfig.deployToken) {
        return next();
      }

      return next(responseError(HttpExceptionType.FORBIDDEN));
    };
  }
}

export default new DeployMiddleware();
