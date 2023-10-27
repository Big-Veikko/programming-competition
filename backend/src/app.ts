import express from 'express';
import { AuthRouter } from './api/auth';
import { EventRouter } from './api/event';
import { MailRouter } from './api/mail';
import { LogRouter } from './api/log';
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
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', AuthRouter);
app.use('/api', EventRouter);
app.use('/api', MailRouter);
app.use('/api', LogRouter);


export default app;