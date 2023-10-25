import express from 'express';
import {TodoRouter} from './api/todos';
import { EventRouter } from './api/event';
import cors from 'cors';

const app = express();
const corsConfig = {
    origin: 'https://programming-competition.vercel.app',
    optionsSuccessStatus: 200
}


app.get('/', (req, res) => {
    res.send('Hello TypeScript!');
});

app.use(cors(
    corsConfig
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', TodoRouter);
app.use('/api', EventRouter);


export default app;