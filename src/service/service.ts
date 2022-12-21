import Api from '../api/api';
import Validator from '../validation/Validator';

export default class Service {

    private api: Api;
    private validator: Validator;

    constructor() {
        this.api = new Api();
        this.validator = new Validator();
    }

    applyRule(rule: String) {
        try{
            this.validator.validate(rule);
            var body: any = {
                "rule": rule
            };
            var data: String = JSON.stringify(body);
            this.api.post('/query', data);   // TODO - complete path when Back API is ready

        } catch (bse) {
            throw bse;
        }
    }
}