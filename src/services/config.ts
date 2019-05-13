import { AsyncStorage } from 'react-native';

const APP_CONFIG = [
  {
    id: 'honban',
    base_url: "https://v5.interview-maker.com/webapi/v5/",
    websocket_endpoint: "https://backend-v5-prod.interview-maker.com/renew-mutilang-websocket",
    media_endpoint: "https://backend-v5-prod.interview-maker.com",
  },
  {
    id: 'stage',
    base_url: "https://v5.interview-maker.com/webapi/v5/",
    websocket_endpoint: "https://backend-v5-stage.interview-maker.com/renew-websocket",
    media_endpoint: "https://backend-v5-stage.interview-maker.com",
  },
  {
    id: 'dev',
    base_url: "https://www-dev5.interview-maker.com/webapi/v5/",
    websocket_endpoint: "https://backend.v5.sokujob.local.owslab.io/renew-websocket-waiting-room",
    media_endpoint: "https://backend.v5.sokujob.local.owslab.io",
  },
];

const COMMON_CONFIG = {
  update_server: "http://update.sokujob.com",
  app_id: "com.interviewMaker.app"
};

export default class Config {
  server_id: string = '';
  base_url: string = '';
  websocket_endpoint: string = '';
  media_endpoint: string = '';

  private constructor() {
    // this.initConfig();
  }

  async initConfig() {
    const serverId = await AsyncStorage.getItem('@Config:serverId');
    await this.setConfig(serverId || 'dev');
    console.log("Config service initialized!")
    return true;
  }

  async setConfig(serverId: string) {
    let configData = APP_CONFIG.filter(item => item.id == serverId);
    if(!configData || configData.length <= 0) {
      configData = [APP_CONFIG[0]];
    }
    this.server_id = configData[0].id;
    this.base_url = configData[0].base_url;
    this.websocket_endpoint = configData[0].websocket_endpoint;
    this.media_endpoint = configData[0].media_endpoint;
    await AsyncStorage.setItem('@Config:serverId', this.server_id);
  }

  private static instance: Config;
  public static getInstance() {
    if (!this.instance) {
      this.instance = new Config();
    }
    return this.instance;
  }

  getCommonConfig() {
    return COMMON_CONFIG;
  }
}