const Task = ({ task, index, handleComplete, handleRemove }) => {
  return (
    <div
      style={{
        textDecoration: task.completed ? "line-through" : "",
        opacity: task.completed ? "0.5" : "",
      }}
    >
      <br />
      <p>{`${task.text}: ${task.date}`}</p>
      <button onClick={() => handleComplete(index)}>Complete</button>
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
};

export default Task;
