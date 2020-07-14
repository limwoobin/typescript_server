import { HttpStatusCode , HttpStatusMessage } from '../code/HttpStatusCode';

type ResponseConfig<T> = { code: HttpStatusCode, message: HttpStatusMessage; data: T; error?: any };
type ResponseError<T> = { code: HttpStatusCode, message: HttpStatusMessage; data?: any; error: T};

export class Response<T> {
    code: HttpStatusCode = HttpStatusCode.OK;
    message: HttpStatusMessage = HttpStatusMessage.OK;
    data: T;
    error: any;
}
 
export class ResponseException {
    code: HttpStatusCode = HttpStatusCode.SERVER_ERROR;
    message: HttpStatusMessage = HttpStatusMessage.SERVER_ERROR;
    data: any;
    error: any;
    
    constructor(errMessage: string) {
        this.error = errMessage;
    }
}