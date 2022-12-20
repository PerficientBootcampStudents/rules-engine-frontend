import {BadSyntaxErrorCode} from "../constants/BadSyntaxErrorCode";

export default class BadSyntaxError extends Error {

    public static readonly CODE_01 = new BadSyntaxError(BadSyntaxErrorCode.CODE_01, 'CODE_01');
    public static readonly CODE_02 = new BadSyntaxError(BadSyntaxErrorCode.CODE_02, 'CODE_02');
    public static readonly CODE_03 = new BadSyntaxError(BadSyntaxErrorCode.CODE_03, 'CODE_03');
    public static readonly CODE_04 = new BadSyntaxError(BadSyntaxErrorCode.CODE_04, 'CODE_04');
    public static readonly CODE_05 = new BadSyntaxError(BadSyntaxErrorCode.CODE_05, 'CODE_05');

    public constructor(readonly message: string, private readonly code: string) {
        super(message);
    }

    getCode(): string {
        return this.code;
    }

    getMessage(): string {
        return this.message;
    }

}