const Form = ({ input, date, handleInput, handleDate, addTask }) => {
  return (
    <form onSubmit={addTask}>
      <label>
        <p>Enter Task:</p>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Add Task..."
        />
      </label>
      <br />
      <br />
      <label>
        <p>Enter Date:</p>
        <input type="date" value={date} onChange={handleDate} required />
      </label>
      <br />
      <br />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default Form;
