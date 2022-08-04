import { useState, useEffect } from "react";
import "./TodoTemplate.scss";
import TodoHead from "../TodoHead";
import TodoList from "../TodoList";
import TodoCreate from "../TodoCreate";
import axios from "axios";

function TodoTemplate() {
  //2주차 dummy data 제거
  const [todos, setTodos] = useState([]);

  //todos get
  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, []);

  //todo toggle
  const onToggle = (id) => {
    axios
      .patch(`/api/todos/${id}/check/`)
      .then(() => {
        const newTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newTodos);
      })
      .catch((err) => console.log(err));
  };

  //todo update(2주차 심화과제)
  const onUpdate = (id, text) => {
    axios
      .patch(`/api/todos/${id}/`, {text})
      .then(() => {
        const newTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, text: text } : todo
        );
        setTodos(newTodos);
      })
      .catch((err) => console.log(err));
  };

  //todo delete
  const onRemove = (id) => {
    axios
      .delete(`/api/todos/${id}/`)
      .then(() => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      })
      .catch((err) => console.log(err));
  };

  //todo post
  const onCreate = (text) => {
    const newTodo = { text };
    axios
      .post("/api/todos/create/", newTodo)
      .then((res) => {
        setTodos([...todos, res.data.todo]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="template-container">
      <TodoHead todos={todos} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onUpdate={onUpdate}
        onRemove={onRemove}
      />
      <TodoCreate onCreate={onCreate} />
    </div>
  );
}

export default TodoTemplate;
