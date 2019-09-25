# opencv-server-socket

Simple opencv server who emit faces position

## Requirement

- install `OpenCv 2.4.*`

## Install

```sh
npm i -g opencv-server-socket
```

## Usage

### launch server

See also : [opencv-server-socket-docker](https://github.com/Jermorin/opencv-server-socket-docker)

```js
$: opencv-server-socket
```

### client usage

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
