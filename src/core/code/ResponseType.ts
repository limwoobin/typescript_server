type ResponseConfig<T> = { code: HttpStatusCode, message: string; data: T; error?: any };

enum HttpStatusCode {
    OK = 200,
    NOT_FOUND = 404,
}

export default class Response<T> {
    code: HttpStatusCode = HttpStatusCode.OK;
    message: string;
    data: T;
    error: any;
    
    Response(config:ResponseConfig<T>) {
        this.code = config.code;
        this.message = config.message;
        this.data = config.data;
        this.error = config.error;
    }
}