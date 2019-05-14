import { observable, action, flow } from 'mobx';
import API from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

class MemberData {
    @observable id = '';
    @observable profile_image = '';
    @observable birthday = '';
    @observable name = '';
    @observable telno = '';
    @observable gender = '';
    @observable user_type = '';


    setUserData(data: any) {
        let self = this as any;
        for (let key in data) {
            if (data.hasOwnProperty(key) && self.hasOwnProperty(key) && self[key] != data[key]) {
                self[key] = data[key];
            }
        }
        self.user_type = "10";
        console.log("User setUserData: ", this);
    }

    clear() {
        this.id = '';
        this.profile_image = '';
        this.birthday = '';
        this.name = '';
        this.telno = '';
        this.gender = '';
        this.user_type = '';
    }
    
}
export default class MemberStore {
    @observable user = new MemberData();
    @observable isLogined: boolean = false;
    @observable accesskey = '';
    @observable email = "";
    @observable password = "";

    @action async login(email: string, password: string) {
        let result: any = {};

        if (!email || !password) {
            result = {
                status: "NG",
                error: "Invalid email or password"
            }
        } else {
            let [err, res] = await API.userService.login(email, password);
            result = this.convertResultFromAPI(err, res);

            if(result.status == "OK") {
                this.isLogined = true;
                await AsyncStorage.setItem('@Session:accesskey', result.accesskey);
                return this.fetchUserData();
            }
        }

        return result;
    }

    @action async fetchUserData() {
        let [err, res] = await API.memberService.getPrivate();
        let result = this.convertResultFromAPI(err, res);
        if(result.status == "OK") {
            this.user.setUserData(result.member);
        }
        return result;
    }

    convertResultFromAPI(err: any, res: any) {
        let result: any = {};
        if(err) {
            result = {
                status: "NG",
                error: err.toString()
            }
        } else {
            result = res;
        }
        return result;
    }
    @action
    emailOnChange(email:any) {
        this.email = email;
    }
    @action
    passwordOnChange(pwd:any) {
        this.password = pwd;
    }
    @action
    clearDataLogin() {
      this.email = "";
      this.password = "";
    }
}