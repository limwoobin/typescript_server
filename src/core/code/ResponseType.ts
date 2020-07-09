type ResponseConfig<T> = { code: HttpStatusCode, message: string; data: T; error?: any };

enum HttpStatusCode {
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
}

export default class Response<T> {
    code: HttpStatusCode = HttpStatusCode.OK;
    message: string = "OK";
    data: T;
    error: any;
    
    Response(response: ResponseConfig<T>) {
        this.code = response.code;
        this.message = response.message;
        this.data = response.data;
        this.error = response.error;
    }
}