import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import Post from './routes/Post';
import bodyParser from 'body-parser';
import multer from 'multer';
import { rename } from 'node:fs';


const app: Express = express();
const port = 3001;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' })

app.get('/', (req: Request, res: Response) => {
    res.send('Hello woold!');
});

app.post('/files', upload.single('image'), (req: Request, res: Response) => {
    if (!req.file) {
        res.send("file is required");
        return;
    }

    const ext = req.file.originalname.split('.').at(-1);
    const image_path = `${req.file.path}.${ext}`;
    rename(req.file.path, image_path, (err) => {
        if (err) throw err;
    });

    // same image_path to db
    res.send(image_path);
});

app.use('/posts', Post);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

// TODO:
// - improve naming convention
// - improve security (try/catch)
// - add authentication
// - add authorization