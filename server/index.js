import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db.js';
import todos from './routes/todo.js';

const app = express();
dotenv.config();

app.use(json());
app.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
app.use('/api/v1/todos', todos);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  connection()
    .then(console.log(`Listening on port ${port}`))
    .catch((err) => console.log(err))
);

export default app;
