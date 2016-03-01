import io from 'socket.io';

const socket = io();

socket.on('connection', (socket) => {
  console.log(socket)
});

socket.listen(3000);
