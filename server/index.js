import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';

const app = express();
const PORT = 8000;

// demi content for visitor of backend api
app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Welcome to crud api',
    });
});

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/post', postRouter);

Connection();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});