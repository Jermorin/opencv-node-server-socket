<big><h1 align="center">opencv-server-socket</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/opencv-server-socket">
    <img src="https://img.shields.io/npm/v/opencv-server-socket.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/Jermorin/opencv-server-socket">
    <img src="https://img.shields.io/coveralls/Jermorin/opencv-server-socket.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/Jermorin/opencv-server-socket">
    <img src="https://img.shields.io/travis/Jermorin/opencv-server-socket.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/opencv-server-socket">
    <img src="http://img.shields.io/npm/dm/opencv-server-socket.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/Jermorin/opencv-server-socket.svg">
    <img src="https://david-dm.org/Jermorin/opencv-server-socket.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/Jermorin/opencv-server-socket/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/opencv-server-socket.svg?style=flat-square"
         alt="License">
  </a>
</p>
<p align="center">
  <a href="https://www.bithound.io/github/Jermorin/opencv-server-socket">
    <img src="https://www.bithound.io/github/Jermorin/opencv-server-socket/badges/score.svg"
         alt="bitHound Overall Score">
  </a>

  <a href="https://www.bithound.io/github/Jermorin/opencv-server-socket/master/dependencies/npm">
    <img src="https://www.bithound.io/github/Jermorin/opencv-server-socket/badges/dependencies.svg"
         alt="bitHound Dependencies">
  </a>

  <a href="https://www.bithound.io/github/Jermorin/opencv-server-socket/master/dependencies/npm">
    <img src="https://www.bithound.io/github/Jermorin/opencv-server-socket/badges/devDependencies.svg"
         alt="bitHound Dev Dependencies">
  </a>

  <a href="https://www.bithound.io/github/Jermorin/opencv-server-socket">
    <img src="https://www.bithound.io/github/Jermorin/opencv-server-socket/badges/code.svg"
         alt="bitHound Code">
  </a>
</p>

<p align="center">
  <big>
    Simple opencv server who emit faces position
  </big>
</p>

##Requirement

- install `OpenCv 2.4.*`

## Install

```sh
npm i -g opencv-server-socket
```

## Usage

###launch server

See also : [opencv-server-socket-docker](https://github.com/Jermorin/opencv-server-socket-docker)

```js
$: opencv-server-socket
```

###client usage

See also : [opencv-react-electron](https://github.com/Jermorin/opencv-react-electron)

```js
import socket from 'socket.io-client';

const serverUrl = 'http://localhost:3000';

const socketOptions = {
  transports: ['websocket'],
  'force new connection': true
};

const imageUrl = {url: 'https://pixabay.com/static/uploads/photo/2016/01/09/08/38/india-1129953_960_720.jpg'};
const base64 = {base64: 'kekekdi888'};
const path = {path: '../server/path'};

const client = socket.connect(serverUrl, socketOptions);

client.on('connect', () => {
  console.log('connection to server');
  client.emit('image', imageUrl);
  client.on('faces', faces => console.log(faces));
});
```

## License

MIT © [Jérémy Morin](http://jermor.in)
