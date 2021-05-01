class HttpError extends Error {
    constructor(message, errorCode){
        super(message);// this add a message property
        this.code = errorCode;
    }
}
module.exports = HttpError;