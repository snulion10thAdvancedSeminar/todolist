import './TodoList.scss';
import TodoItem from '../TodoItem';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <div className="list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
