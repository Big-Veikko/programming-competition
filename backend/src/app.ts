import express from 'express';
import {TodoRouter} from './api/todos';
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


export default app;