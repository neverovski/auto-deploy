import { Express, Response, NextFunction, Request } from 'express';

import { DeployRouter } from '@modules/deploy';
import { responseError, HttpExceptionType } from '@utils/index';

export default (app: Express): void => {
  app.use('/deploy', new DeployRouter().init());

  app.use((req: Request, _res: Response, next: NextFunction) =>
    !req.route
      ? next(responseError(HttpExceptionType.ROUTE_NOT_FOUND))
      : next(),
  );
};
