import server from '../src/index';
import socket from 'socket.io-client';
import chai, {expect} from 'chai';

const serverUrl = 'http://localhost:3000';

const socketOptions = {
  transports: ['websocket'],
  'force new connection': true
};

const imageUrl = {url: 'https://pixabay.com/static/uploads/photo/2016/01/09/08/38/india-1129953_960_720.jpg'};


describe('socket', () => {
  var client;
  it('should connect on socket', done => {
    client = socket.connect(serverUrl, socketOptions);
    client.on('connect', () => {
      done();
    });
  });
  it('should send image', done => {
    client.emit('image', imageUrl);
    done();
  });
  it('should receive faces', done => {
    client.on('faces', (faces) => {
      expect(faces).to.be.a('array');
      done();
    });
  });
});
