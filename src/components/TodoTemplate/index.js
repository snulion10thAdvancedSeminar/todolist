import { useState } from 'react';
import './TodoTemplate.scss';
import TodoHead from '../TodoHead';
import TodoList from '../TodoList';
import TodoCreate from '../TodoCreate';

function TodoTemplate() {
  const [nextId, setNextId] = useState(2);
  const [todos, setTodos] = useState([
    { id: 1, text: '세미나 잘 듣기', done: false },
  ]);
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
