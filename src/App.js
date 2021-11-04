import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.tasks";

function App() {
  const [input, setinput] = useState("");
  const [remaining, setRemaining] = useState(0);
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState([]);

  // Get from Local Storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTasks(saved);
  }, []);

  // Save to Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Update the Remaining Tasks
  useEffect(() => {
    const tasksLeft = tasks.filter((task) => !task.completed);

    setRemaining(tasksLeft.length);
  }, [tasks]);

  // Handle Input Text
  const handleInput = (e) => setinput(e.target.value);

  // Handle Date
  const handleDate = (e) => setDate(e.target.value);

  // Add Task
  const addTask = (e) => {
    e.preventDefault();

    if (!input || !date) return;

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        text: input,
        completed: false,
        date: date,
      },
    ]);

    setinput("");
    setDate("");
  };

  // Complete Task
  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
  };

  // Remove Task
  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <br />
      <br />
      <header>Tasks Remaining: {remaining}</header>
      <br />
      <Form
        input={input}
        date={date}
        handleInput={handleInput}
        handleDate={handleDate}
        addTask={addTask}
      />
      <br />
      <br />
      <List
        tasks={tasks}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
