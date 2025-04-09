// app.js

import { TodoList } from './todo.js';

const myTodos = new TodoList();

myTodos.addTask("Finish RsumeHub project");
myTodos.addTask("Read a Quraan");
myTodos.addTask("Smoke a cigarette:camel");

// Mark a task as complete
myTodos.markComplete("Read a Quraan");

// List all tasks
myTodos.listTasks();
