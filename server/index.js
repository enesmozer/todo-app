import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db.js';
import todos from './routes/todo.js';

const app = express();
dotenv.config();

app.use(json());
app.use(cors());
app.use('/api/v1/todos', todos);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  connection()
    .then(console.log(`Listening on port ${port}`))
    .catch((err) => console.log(err))
);
