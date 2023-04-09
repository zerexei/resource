import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import Post from './routes/Post';
import bodyParser from 'body-parser';

const app: Express = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello woold!');
});

app.use('/posts', Post);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

// TODO:
// - improve security (try/catch)
// - add authentication
// - add authorization