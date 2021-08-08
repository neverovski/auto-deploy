import { Express, Response, NextFunction, Request } from 'express';

import { DeployRouter } from '@modules/deploy';

export default (app: Express): void => {
  app.use('/deploy', new DeployRouter().init());

  app.use((req: Request, _res: Response, next: NextFunction) =>
    !req.route ? next(new Error('ROUTE_NOT_FOUND')) : next(),
  );
};
