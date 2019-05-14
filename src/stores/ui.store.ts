import { observable, action, computed } from 'mobx';

export default class UIStore {
  @observable loading: boolean = false;
  @observable loadingContent: string = '';

  @action
  showLoadingScreen(msg: string) {
    this.loading = true;
    this.changeLoadingScreenMsg(msg);
  }

  @action
  changeLoadingScreenMsg(msg: string) {
    this.loadingContent = msg;
  }

  @action
  hideLoadingScreen() {
    this.loading = false;
    this.loadingContent = '';
  }
}