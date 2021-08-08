import AutoBin from 'auto-bind';
import { Request, Response } from 'express';

import { ControllerCore } from '@core/index';

import { IDeployService } from './interface';

export default class DeployController extends ControllerCore {
  constructor(private readonly service: IDeployService) {
    super();

    this.init();
    AutoBin(this);
  }

  webhook(_req: Request, res: Response) {
    const data = this.service.webhook();

    return res.json(data);
  }
}
