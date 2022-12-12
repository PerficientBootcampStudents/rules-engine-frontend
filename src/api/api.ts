import axios from 'axios';

export default class Api {

  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/',
    });
  }

  get(path: String) {
    return this.api.get(path);
  }

  post(path: String, data: String) {
    return this.api.post(path, data);
  }
}