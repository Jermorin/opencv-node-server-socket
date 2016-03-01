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
