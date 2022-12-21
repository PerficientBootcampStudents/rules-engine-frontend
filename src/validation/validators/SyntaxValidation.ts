import BadSyntaxError from "../../error/BadSyntaxError";
import IChecker from "../IChecker";

export default class SyntaxValidation implements IChecker {
    public validate(rule: String): boolean {
        return this.check(rule);
    }

    private check(rule: String): boolean {
        if (rule === null || rule === undefined || rule === '') {
            throw new BadSyntaxError(BadSyntaxError.CODE_01.getMessage(), BadSyntaxError.CODE_01.getCode());
        }
        return true;
    }
}