"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusMessage = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
var HttpStatusMessage;
(function (HttpStatusMessage) {
    HttpStatusMessage["OK"] = "OK";
    HttpStatusMessage["BAD_REQUEST"] = "BAD_REQUEST";
    HttpStatusMessage["FORBIDDEN"] = "FORBIDDEN";
    HttpStatusMessage["NOT_FOUND"] = "NOT_FOUND";
    HttpStatusMessage["SERVER_ERROR"] = "SERVER_ERROR";
})(HttpStatusMessage = exports.HttpStatusMessage || (exports.HttpStatusMessage = {}));
//# sourceMappingURL=HttpStatusCode.js.map