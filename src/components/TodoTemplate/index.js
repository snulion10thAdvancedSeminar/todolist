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

  const onUpdate = (id, text) => {
    const newText = { text: text };
    axios
      .patch(`/api/todos/${id}/`, newText)
      .then(() => {
        const newTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, text: text } : todo
        );
        setTodos(newTodos);
      })
      .catch((err) => console.log(err));
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
