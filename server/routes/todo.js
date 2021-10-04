import express from 'express';
import Todo from '../models/todo.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(
      todos.map((todo) => ({
        id: todo['_id'],
        name: todo.name,
      }))
    );
  } catch (error) {
    res.send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = await new Todo(req.body).save();
    res.status(201).json(todo);
  } catch (error) {
    res.send(error);
  }
});

export default router;
