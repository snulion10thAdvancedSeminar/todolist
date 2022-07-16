import { useState } from 'react';
import './App.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
