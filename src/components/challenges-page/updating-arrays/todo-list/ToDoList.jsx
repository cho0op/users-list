import { useState } from "react";
import AddTodo from "./add-todo/AddTodo.jsx";
import TaskList from "./task-list/TaskList.jsx";
import styles from '../UpdatingArrays.module.css'


let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false }
];

export default function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        }
        return todo;
      })
    );

    const todo = todos.find((t) => t.id === nextTodo.id);
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    let newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <div className={styles.todo}>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}