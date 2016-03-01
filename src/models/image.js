import fs from 'fs';
import request from 'request';

class Image {
  constructor({path = null, url = null, base64 = null}) {
    this.path = path;
    this.url = url;
    this.base64 = base64;
  }

  load() {
    return new Promise((resolve, reject) => {
      if (this.path) {
        resolve(new Buffer(fs.readFileSync(this.path).toString('base64'), 'base64'));
      } else if (this.url) {
        this.loadRemote().then(resolve);
      } else if (this.base64) {
        // remove 'data:image/jpeg;base64,' if included
        this.base64 = this.base64.substring(this.base64.indexOf(',') + 1);
        resolve(new Buffer(this.base64, 'base64'));
      } else {
        reject({msg: 'Image : can\'t load from path, url, base64'});
      }
    });
  }

  loadRemote() {
    return new Promise((resolve, reject) => {
      request({
        url: this.url,
        encoding: null
      }, (err, response, body) => {
        if (!err && response.statusCode == 200) {
          resolve(new Buffer(body))
        } else {
          reject({msg: `Image : can\'t be load from url ${err}`});
        }
      })
    })
  }

  build() {
    return new Promise((resolve, reject) => {
      this.load().then((content) => {
        resolve(content)
      })
    })
  }
}

export default Image;
