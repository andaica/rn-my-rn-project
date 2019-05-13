import Config from '../config';

export class API {
  constructor() {}

  private async raw(url: string, params: any, options?: any) {
    try {
      let res = await (fetch(url, params).then(response => response.text()));
      let convert = this.formatJsonReponse(res);
      return [null, convert.result];
    }
    catch (err) {
      console.warn(url, params, err);
      return [err, null];
    }
  }

  post(endpoint: string, params: any) {
    const config = Config.getInstance();
    return this.raw(config.base_url + endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: this.serializeData(params),
    });
  }

  get(endpoint: string, params: any) {
    const config = Config.getInstance();
    let url = config.base_url + endpoint + '?callback=JSONP_CALLBACK&' + this.serializeData(params);
    return this.raw(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      method: 'GET'
    });
  }

  private serializeData(data: any): string {
    // If this is not an object, defer to native stringification.
    if (!this.isObject(data)) {
      return ((data == null) ? "" : data.toString());
    }
    let buffer = [];
    // Serialize each key in the object.
    for (let name in data) {
      if (!data.hasOwnProperty(name)) {
        continue;
      }
      let value = data[name];
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          buffer.push(
            encodeURIComponent(name) + "=" + encodeURIComponent((value[i] == null) ? "" : value[i])
          );
        }
      } else {
        buffer.push(
          encodeURIComponent(name) + "=" + encodeURIComponent((value == null) ? "" : value)
        );
      }
    }
    // Serialize the buffer and clean it up for transportation.
    let source = buffer.join("&").replace(/%20/g, "+");
    // console.log("serializeData", source);
    return (source);
  }

  private isObject(x: any): x is Object {
    return x != null && typeof x === 'object';
  }

  private formatJsonReponse(response: string): any {
    let reponseFomat: string = response.replace('response(', '');
    reponseFomat = reponseFomat.substring(0, reponseFomat.length - 1);
    var n = reponseFomat.search("result") - 2;
    reponseFomat = reponseFomat.slice(n,reponseFomat.length);
    reponseFomat = unescape(reponseFomat);
    return JSON.parse(reponseFomat);
  }
}