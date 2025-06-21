export class CustomErrorHandler extends Error{
    constructor(statusCode, msg){
        super(msg);
        this.statusCode = statusCode;
        this.success = false;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
