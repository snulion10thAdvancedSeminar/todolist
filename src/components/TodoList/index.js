import './TodoList.scss';
import TodoItem from '../TodoItem';

function TodoList({ todos }) {
  return (
    <div className="list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
