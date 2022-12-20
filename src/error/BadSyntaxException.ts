import BadSyntaxError from "./BadSyntaxError";

export default class BadSyntaxException {

    private badSyntaxError: BadSyntaxError;

    constructor(badSyntaxError: BadSyntaxError) {
        this.badSyntaxError = badSyntaxError;
    }

    getBadSyntaxError(): BadSyntaxError {
        return this.badSyntaxError;
    }

}