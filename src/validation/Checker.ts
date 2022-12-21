import IChecker from './IChecker'
import OperatorsValidation from './validators/OperatorsValidation';
import ParenthesisValidation from './validators/ParenthesisValidation';
import SyntaxValidation from './validators/SyntaxValidation';

export default class Checker implements IChecker {

    private syntaxValidation: SyntaxValidation;
    private parenthesisValidation: ParenthesisValidation;
    private operatorsValidation: OperatorsValidation;

    private validators: IChecker[];

    constructor() {
        this.syntaxValidation = new SyntaxValidation();
        this.parenthesisValidation = new ParenthesisValidation();
        this.operatorsValidation = new OperatorsValidation();
        this.validators = [this.syntaxValidation, this.parenthesisValidation, this.operatorsValidation];
    }

    public validate(rule: String): void {
        rule = rule.toLowerCase();
        this.validators.forEach(validator => {
            validator.validate(rule);
        });
    }

}