import express from 'express';
import { queryTodo, addTodo } from '../service/todoService';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json(queryTodo());
  } catch (error) {
    res.send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTodo = addTodo(req.body)
    res.status(201).json(newTodo);
  } catch (error) {
    res.send(error);
  }
});

export default router;
