import { observable, computed, action } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class ShopData {
    @observable id = '';
    @observable shop_code = '';
    @observable shop_name = '';
    @observable shop_type = '';
    @observable company_id = '';
    @observable company_name = '';
    @observable user_type = '';

    setUserData(data: any) {
        let self = this as any;
        for (let key in data) {
            if (data.hasOwnProperty(key) && self.hasOwnProperty(key) && self[key] != data[key]) {
                self[key] = data[key];
            }
        }
        self.user_type = "30";
        console.log("User setUserData: ", this);
    }

    clear() {
        this.id = '';
        this.shop_code = '';
        this.shop_name = '';
        this.shop_type = '';
        this.company_id = '';
        this.company_name = '';
        this.user_type = '';
    }
}

export default class ShopStore {
    @observable user = new ShopData();
    @observable isLogined : boolean = false;
    @observable accesskey = '';

    @action async login(name: string, password: string) {
        let result: any = {};

        if(!name || !password) {
            result = {
                status: "NG",
                message: "Invalid name or password"
            }
            return result;
        }

        // TODO: call API login
        result = {
            status: "OK",
            message: "Login success"
        }
        return result;
    }
}