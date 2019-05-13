import { API } from './api.service';

export default class UserService {
  private api: API = new API();
  constructor() {}

  async login(email: string, password: string) {
    let [err, data] = await this.api.post('user/login', {
      login_id: email,
      password: password,
      login_type: 1,
    })
    return [err, data];
  }

}