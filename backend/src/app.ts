import express from 'express';
import {TodoRouter} from './todos';
import cors from 'cors';

const app = express();
const corsConfig = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}


app.get('/', (req, res) => {
    res.send('Hello TypeScript!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', TodoRouter);


export default app;