<big><h1 align="center">opencv-node-server-socket</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/opencv-node-server-socket">
    <img src="https://img.shields.io/npm/v/opencv-node-server-socket.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/Jermorin/opencv-node-server-socket">
    <img src="https://img.shields.io/coveralls/Jermorin/opencv-node-server-socket.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/Jermorin/opencv-node-server-socket">
    <img src="https://img.shields.io/travis/Jermorin/opencv-node-server-socket.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/opencv-node-server-socket">
    <img src="http://img.shields.io/npm/dm/opencv-node-server-socket.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/Jermorin/opencv-node-server-socket.svg">
    <img src="https://david-dm.org/Jermorin/opencv-node-server-socket.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/Jermorin/opencv-node-server-socket/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/opencv-node-server-socket.svg?style=flat-square"
         alt="License">
  </a>
</p>
<p align="center">
  <a href="https://www.bithound.io/github/Jermorin/opencv-node-server-socket">
    <img src="https://www.bithound.io/github/Jermorin/opencv-node-server-socket/badges/score.svg"
         alt="bitHound Overall Score">
  </a>
  
  <a href="https://www.bithound.io/github/Jermorin/opencv-node-server-socket/master/dependencies/npm">
    <img src="https://www.bithound.io/github/Jermorin/opencv-node-server-socket/badges/dependencies.svg"
         alt="bitHound Dependencies">
  </a>
  
  <a href="https://www.bithound.io/github/Jermorin/opencv-node-server-socket/master/dependencies/npm">
    <img src="https://www.bithound.io/github/Jermorin/opencv-node-server-socket/badges/devDependencies.svg"
         alt="bitHound Dev Dependencies">
  </a>
  
  <a href="https://www.bithound.io/github/Jermorin/opencv-node-server-socket">
    <img src="https://www.bithound.io/github/Jermorin/opencv-node-server-socket/badges/code.svg"
         alt="bitHound Code">
  </a>
</p>

<p align="center">
  <big>
    Simple opencv server who emmit faces position
  </big>
</p>


## Install

```sh
npm i -g opencv-node-server-socket
```

## Usage

###launch server
```js
$: opencv-node-server-socket
```

###client usage
```js
import socket from 'socket.io-client';

const serverUrl = 'http://localhost:3000';

const socketOptions = {
  transports: ['websocket'],
  'force new connection': true
};

const imageUrl = {url: 'https://pixabay.com/static/uploads/photo/2016/01/09/08/38/india-1129953_960_720.jpg'};
const base64 = {base64: 'kekekdi888'};
const path = {base64: '../server/path'};

const client = socket.connect(serverUrl, socketOptions);

client.on('connect', () => {
  console.log('connection to server');
  client.emit('image', imageUrl);
  client.on('faces', faces => console.log(faces));
});
```

## License

MIT © [Jérémy Morin](http://jermor.in)
