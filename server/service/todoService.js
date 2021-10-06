import Todo from '../models/todo.js';

export const queryTodo = async function () {
  const todos = await Todo.find();
  return todos
    .map((todo) => ({
      id: todo['_id'],
      name: todo.name,
      description: todo.description,
      createdAt: todo.createdAt,
    }))
    .sort((a, b) => b.createdAt - a.createdAt);
};
export const addTodo = async function (todo) {
  return await new Todo(todo).save();
};
