class HttpError extends Error {
    public status: number;
    constructor(title: string, message: string, status: number) {
        super(message);
        this.name = title;
        this.status = status;
    }
}

export class ServerError extends HttpError {
    constructor(message: string) {
        super("ServerError", message, 500);
    }
}

export class BadRequest extends HttpError {
    constructor(message: string) {
        super("Bad Request", message, 400);
    }
}