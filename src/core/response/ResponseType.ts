import { HttpStatusCode , HttpStatusMessage } from '../code/HttpStatusCode';

export class Response<T> {
    private code: HttpStatusCode = HttpStatusCode.OK;
    private message: HttpStatusMessage = HttpStatusMessage.OK;
    data: T;
    error: any;
}
 
export class ResponseException {
    private code: HttpStatusCode = HttpStatusCode.SERVER_ERROR;
    private message: HttpStatusMessage = HttpStatusMessage.SERVER_ERROR;
    data: any;
    error: any;
    
    constructor(errMessage: string) {
        this.error = errMessage;
    }
}