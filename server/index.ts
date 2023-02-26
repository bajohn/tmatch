import express, { Express, Request, Response } from 'express';
import { Server } from "socket.io";
import { createServer } from "http";



const app: Express = express();
const httpServer = createServer(app);

// 
const io = new Server(httpServer);

// NGINX default
const port = 8080;

// REST endpoints 
app.get('/', (req: Request, res: Response) => {
  res.send('Tennis matcher API');
});

// Websocket:
io.on("connection", (socket) => {
  console.log('Connection received')
  socket.emit("acknowledged", {
    data: 'Conn response'
  });
  console.log('connecting')
  socket.on('test', (arg) => {
    console.log('Received!! Test message data', arg)
    socket.emit("acknowledged", {
      data: 'Test response'
    });
  });

});


httpServer.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});