import socket, { io } from 'socket.io-client';

const socketIO = socket('http://localhost:8080');
socketIO.on('connect_error', (err) => {
    console.error(err);
});

