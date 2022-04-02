import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Hello");
})

const server = app.listen(8080, () => {
    console.log("Server available");
})
const socketIO = new Server(server, {
    cors: {
        origin: "*"
    }
})

socketIO.on('connection', (socket) => {
    let message = 'Client is connected';
    console.log(message);
    socketIO.emit('eventName', message)
})
