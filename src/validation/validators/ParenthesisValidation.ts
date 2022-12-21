import BadSyntaxError from "../../error/BadSyntaxError";
import IChecker from "../IChecker";

export default class Parenthesis implements IChecker {
    public validate(rule: String): boolean {
        return this.checkParenthesis(rule);
    }

    private checkParenthesis(rule: String): boolean {
        if (!this.isRuleBalanced(rule)) {
            throw new BadSyntaxError(BadSyntaxError.CODE_02.getMessage(), BadSyntaxError.CODE_02.getCode());
        }
        return true;
    }

    private isRuleBalanced(rule: String): boolean {
        let stack = [];
        let ruleArray = rule.split('');
        for (let i = 0; i < ruleArray.length; i++) {
            let char = ruleArray[i];
            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                if (stack.length === 0) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    }
}