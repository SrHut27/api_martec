"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = exports.ServerError = void 0;
class HttpError extends Error {
    constructor(title, message, status) {
        super(message);
        this.name = title;
        this.status = status;
    }
}
class ServerError extends HttpError {
    constructor(message) {
        super("ServerError", message, 500);
    }
}
exports.ServerError = ServerError;
class BadRequest extends HttpError {
    constructor(message) {
        super("Bad Request", message, 400);
    }
}
exports.BadRequest = BadRequest;
