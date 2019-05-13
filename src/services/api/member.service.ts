import { API } from './api.service';
import { AsyncStorage } from 'react-native';

export default class MemberService {
  private api: API = new API();
  constructor() {}

  async getPrivate() {
    let accesskey = await AsyncStorage.getItem('@Session:accesskey');
    let [err, data] = await this.api.post('member/get_private', {
      accesskey: accesskey
    })
    return [err, data];
  }

}