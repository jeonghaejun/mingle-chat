import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*", // Replace with your client URL
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Client connected...');
  socket.on('chat message', (message) => {
    console.log('Message received:', message);
    io.emit('chat message', message);
  });
});

const port = 5000; // Replace with your server port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});