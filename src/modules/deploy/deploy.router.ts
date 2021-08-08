import { Router } from 'express';

import { RouterCore } from '@core/index';
import { AsyncMiddleware, DeployMiddleware } from '@middleware/index';

import DeployController from './deploy.controller';
import DeployService from './deploy.service';

export default class DeployRouter extends RouterCore {
  private readonly controller: DeployController;

  constructor() {
    super(Router());

    this.controller = new DeployController(new DeployService());
  }

  init() {
    this.router.get(
      '/webhook',
      DeployMiddleware.handler(),
      AsyncMiddleware(this.controller.webhook),
    );

    return this.router;
  }
}
