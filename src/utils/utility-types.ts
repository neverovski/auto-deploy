export interface IHttpException {
  message: string;
  status: number;
  code: string;
}

export enum HttpExceptionType {
  OK = 'OK',
  BAD_REQUEST = 'BAD_REQUEST',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  ROUTE_NOT_FOUND = 'ROUTE_NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
}

export enum HttpStatus {
  OK = 200,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}
