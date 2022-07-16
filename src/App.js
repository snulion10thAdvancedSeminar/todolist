import { useState } from 'react';
import './App.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '세미나 잘 듣기', done: false },
  ]);
  const onToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id: todo.id, text: todo.text, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };
  const onRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const onCreate = (todo) => setTodos({ ...todos, todo });

  return (
    <>
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        <TodoCreate onCreate={onCreate} />
      </TodoTemplate>
    </>
  );
}

export default App;
