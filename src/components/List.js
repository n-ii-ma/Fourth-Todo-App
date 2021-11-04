import Task from "./Task";

const List = ({ tasks, handleComplete, handleRemove }) => {
  return (
    <div>
      {!tasks.length ? (
        <p>No Tasks to Show</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={task.id}
            handleComplete={handleComplete}
            handleRemove={handleRemove}
          />
        ))
      )}
    </div>
  );
};

export default List;
