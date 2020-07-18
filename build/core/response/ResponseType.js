"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseException = exports.Response = void 0;
const HttpStatusCode_1 = require("../code/HttpStatusCode");
class Response {
    constructor() {
        this.code = HttpStatusCode_1.HttpStatusCode.OK;
        this.message = HttpStatusCode_1.HttpStatusMessage.OK;
    }
}
exports.Response = Response;
class ResponseException {
    constructor(errMessage) {
        this.code = HttpStatusCode_1.HttpStatusCode.SERVER_ERROR;
        this.message = HttpStatusCode_1.HttpStatusMessage.SERVER_ERROR;
        this.error = errMessage;
    }
}
exports.ResponseException = ResponseException;
//# sourceMappingURL=ResponseType.js.map