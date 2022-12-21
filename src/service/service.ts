import Api from '../api/api';
import Checker from '../validation/Checker';
import Converter from './Converter';
import BadSyntaxException from '../error/BadSyntaxError';

export default class Service {

    private api: Api;
    private checker: Checker;
    private converter: Converter;

    constructor() {
        this.api = new Api();
        this.checker = new Checker();
        this.converter = new Converter();
    }

    applyRule(rule: String) {
        try{
            this.checker.validate(rule);
            var data: String = this.converter.toBody(rule)
            this.api.post('/', data);   // TODO - complete path when Back API is ready

        } catch (bse: unknown) {
            if (bse instanceof BadSyntaxException) {
                throw bse;
            } else {
                throw new Error("Unexpected error");
            }
        }
    }
}