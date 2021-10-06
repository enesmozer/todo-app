import express from 'express';
import { queryTodo, addTodo } from '../service/todoService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json(await queryTodo());
  } catch (error) {
    res.send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTodo = await addTodo(req.body)
    res.status(201).json(newTodo);
  } catch (error) {
    res.send(error);
  }
});

export default router;
