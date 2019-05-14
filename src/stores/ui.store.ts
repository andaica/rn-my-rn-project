import { observable, action, computed } from 'mobx';

export default class UIStore {
  @observable loading: boolean = false;
  @observable loadingContent: string = '';
  @observable modal: any = { isModalVisible: false };

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

  @action
  showNotify(message: string, closeBtn: string, onClose: any) {
    const close = () => {
      onClose();
      this.hideNotify();
    }
    this.modal = {
      isModalVisible: true,
      message: message,
      closeBtn: closeBtn,
      onClose: close
    }
  }

  @action
  hideNotify() {
    this.modal.isModalVisible = false;
  }
}