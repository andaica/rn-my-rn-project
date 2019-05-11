import { observable, computed, action } from 'mobx';
import { AsyncStorage } from 'react-native';

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
    @observable isLogined : boolean = false;
    @observable accesskey = '';

    @action async login(email: string, password: string) {
        let result: any = {};

        if(!email || !password) {
            result = {
                status: "NG",
                message: "Invalid email or password"
            }
            return result;
        }

        // TODO: call API login
        let self = this;
        setTimeout(function() {
            self.user.setUserData({id: 1, name: "Andaica", user_type: "30"});
        }, 2000);
        
        result = {
            status: "OK",
            message: "Login success"
        }
        return result;
    }
}