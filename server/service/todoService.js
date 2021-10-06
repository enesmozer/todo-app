import Todo from '../models/todo.js';

export const queryTodo = function () {
  const todos = await Todo.find();
  return todos.map((todo) => ({
    id: todo['_id'],
    name: todo.name,
  }));
};
export const addTodo = function (todo) {
  return await new Todo(todo).save();
};
