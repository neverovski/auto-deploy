import { exec } from 'child_process';

import { AppConfig } from '@config/index';
import { Logger } from '@core/index';
import { EmailQueue, EMAIL_DEPLOY } from '@providers/index';
import { responseOk, HttpExceptionType } from '@utils/index';

import { IDeployService } from './interface';

export default class DeployService implements IDeployService {
  webhook() {
    exec(`sh ${AppConfig.pathFileDeploy}`, (error, stdout, stderr) => {
      if (error) {
        Logger.error('DeployService - webhook', error);
      }

      void EmailQueue.add(EMAIL_DEPLOY, {
        subject: `Deploy completed ${error ? 'with error' : 'successfully'}`,
        text: error ? stderr : stdout,
      });
    });

    return responseOk(HttpExceptionType.OK);
  }
}
