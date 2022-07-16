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
  return (
    <>
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
