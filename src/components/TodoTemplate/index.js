import { useState, useEffect } from 'react';
import './TodoTemplate.scss';
import TodoHead from '../TodoHead';
import TodoList from '../TodoList';
import TodoCreate from '../TodoCreate';
import axios from "axios";

function TodoTemplate() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("/api/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  const onToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };
  const onRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const onCreate = (text) => {
    const newTodos = [...todos, { id: nextId, text, done: false }];
    setTodos(newTodos);
    setNextId(nextId + 1);
  };

  return (
    <div className="template-container">
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoCreate onCreate={onCreate} />
    </div>
  );
}

export default TodoTemplate;
