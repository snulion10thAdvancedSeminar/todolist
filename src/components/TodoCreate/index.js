import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoCreate.scss';

function TodoCreate() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="insert-form-positioner">
          <div className="insert-form">
            <input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" />
          </div>
        </div>
      )}
      <button
        className={open ? 'circle-button button-open' : 'circle-button'}
        onClick={() => setOpen(!open)}
      >
        <MdAdd />
      </button>
    </>
  );
}

export default TodoCreate;
