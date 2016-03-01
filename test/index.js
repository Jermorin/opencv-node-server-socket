import server from '../src/index';
import socket from 'socket.io-client';
import chai, {should} from 'chai';

const serverUrl = 'http://localhost:3000';

const socketOptions = {
  transports: ['websocket'],
  'force new connection': true
};

describe('socket', () => {
  it('should connect on socket', (done) => {
    var client1 = socket.connect(serverUrl, socketOptions);
    client1.on('connect', () => {
      done();
    });
  });
});
