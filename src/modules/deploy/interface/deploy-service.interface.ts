import { IHttpException } from '@utils/index';

export interface IDeployService {
  webhook(): IHttpException;
}
