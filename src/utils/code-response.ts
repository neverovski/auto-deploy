import { HttpExceptionType, IHttpException, HttpStatus } from './utility-types';

export const CodeResponse = {
  [HttpExceptionType.OK]: {
    status: HttpStatus.OK,
    code: HttpExceptionType.OK,
    message: 'Ok',
  },
  [HttpExceptionType.BAD_REQUEST]: {
    status: HttpStatus.BadRequest,
    code: HttpExceptionType.BAD_REQUEST,
    message: 'Bad Request',
  },
  [HttpExceptionType.TOKEN_EXPIRED]: {
    status: HttpStatus.Unauthorized,
    code: HttpExceptionType.TOKEN_EXPIRED,
    message: 'Token expired',
  },
  [HttpExceptionType.FORBIDDEN]: {
    status: HttpStatus.Forbidden,
    code: HttpExceptionType.FORBIDDEN,
    message: 'Forbidden',
  },
  [HttpExceptionType.NOT_FOUND]: {
    status: HttpStatus.NotFound,
    code: HttpExceptionType.NOT_FOUND,
    message: 'Not found',
  },
  [HttpExceptionType.ROUTE_NOT_FOUND]: {
    status: HttpStatus.NotFound,
    code: HttpExceptionType.ROUTE_NOT_FOUND,
    message: 'Route not found',
  },
  [HttpExceptionType.SERVER_ERROR]: {
    status: HttpStatus.InternalServerError,
    code: HttpExceptionType.SERVER_ERROR,
    message: 'Server error occurred',
  },
} as Record<HttpExceptionType, IHttpException>;
