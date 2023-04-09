import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello woold!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});