import { useState } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import './TodoItem.scss';

function TodoItem({ todo, onToggle, onRemove }) {
  const { id, text, done } = todo;
  const [isRemoveIconVisible, setIsRemoveIconVisible] = useState(false);

  return (
    <div
      className="item-block"
      onMouseOver={() => setIsRemoveIconVisible(true)}
      onMouseLeave={() => setIsRemoveIconVisible(false)}
    >
      <div
        className={done ? 'check-circle circle-done' : 'check-circle'}
        onClick={() => onToggle(id)}
      >
        {done && <MdDone />}
      </div>
      <div className={done ? 'text text-done' : 'text'}>{text}</div>
      <div
        className="remove-icon"
        style={{ display: isRemoveIconVisible ? 'initial' : 'none' }}
        onClick={() => onRemove(id)}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
