import { useState } from 'react';
//editIcon 추가
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import './TodoItem.scss';

function TodoItem({ todo, onToggle, onUpdate, onRemove }) {
  const { id, text, done } = todo;
  //todo text 수정 위한 editIcon 추가되면서 isRemoveIconVisible의 변수명을 아래와 같이 바꿈
  const [isIconVisible, setIsIconVisible] = useState(false);

  //edit icon 클릭시 div -> input으로 변경
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  //todo text
  const [todoText, setTodoText] = useState(text);

  // input change 및 submit
  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };
  const onSubmitTextUpdatedTodo = (e) => {
    e.preventDefault();
    onUpdate(id, todoText);
    setIsTodoEditable(false);
  };

  return (
    <div
      className="item-block"
      onMouseEnter={() => setIsIconVisible(true)}
      onMouseLeave={() => setIsIconVisible(false)}
    >
      <div
        className={done ? 'check-circle circle-done' : 'check-circle'}
        onClick={() => onToggle(id)}
      >
        {done && <MdDone />}
      </div>
      <div className={done ? 'text text-done' : 'text'}>
        {isTodoEditable ? (
          <form onSubmit={onSubmitTextUpdatedTodo}>
            <input value={todoText} onChange={onChangeText} />
          </form>
        ) : (
          text
        )}
      </div>
      <div
        className="edit-icon"
        style={{ display: isIconVisible ? "initial" : "none" }}
        onClick={() => setIsTodoEditable(true)}
      >
        <MdEdit />
      </div>
      <div
        className="remove-icon"
        style={{ display: isIconVisible ? "initial" : "none" }}
        onClick={() => onRemove(id)}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
