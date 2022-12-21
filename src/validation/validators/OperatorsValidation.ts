import BadSyntaxError from "../../error/BadSyntaxError";
import IChecker from "../IChecker";
import { Operators } from "../../constants/Operators";

export default class OperatorsValidation implements IChecker {
    public validate(rule: String): boolean {
        return this.checkOperators(rule);
    }

    private checkOperators(rule: String): boolean {
        return this.isCorrect(rule);        
    }

    private isCorrect(rule: String): boolean {
        let logicalOperatorsCount: number = rule.match(Operators.AND || Operators.OR)!.length;
        if (logicalOperatorsCount > 3) {
            throw new BadSyntaxError(BadSyntaxError.CODE_03.getMessage(), BadSyntaxError.CODE_03.getCode());
        } else {
            let splitByLogicalOperators: string[] = rule.split(Operators.AND || Operators.OR);
            for (let i = 0; i < splitByLogicalOperators.length; i++) {
                let splittedRule: string = splitByLogicalOperators[i];
                let operatorsValues: string[] = Object.values(Operators);
                let operatorCount: number = 0;
                operatorsValues.forEach(operator => {
                    if (splittedRule.includes(operator) && operator !== Operators.AND && operator !== Operators.OR) {
                        operatorCount++;
                    }
                });
                if (operatorCount !== 1) {
                    throw new BadSyntaxError(BadSyntaxError.CODE_04.getMessage(), BadSyntaxError.CODE_04.getCode());
                    ;
                }
            }
            return true
        }
    }

}