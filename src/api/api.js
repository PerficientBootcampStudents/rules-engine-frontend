import * as axios from 'axios';

export default class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8080/',
    });
  }

  get(path) {
    return this.api.get(path);
  }

  post(path, data) {
    return this.api.post(path, data);
  }
}