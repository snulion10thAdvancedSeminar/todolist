import "./TodoHead.scss";

function TodoHead({ todos }) {
  const undoneTodos = todos.filter((todo) => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div className="head-container">
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="todos-left">할 일 {undoneTodos.length}개 남음</div>
    </div>
  );
}

export default TodoHead;
