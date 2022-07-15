import './TodoList.scss';
import TodoItem from '../TodoItem';

function TodoList() {
  return (
    <div className="list-container">
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 만들기" done={true} />
      <TodoItem text="상태 관리 구현하기" done={false} />
    </div>
  );
}

export default TodoList;
