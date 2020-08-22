import React, { useState } from "react";
import { useTasks } from "../utils/TaskProvider";

const NewTaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const submit = (e) => {
    e.preventDefault();
    addTask("task");
    setTask("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={task}
        placeholder="What you need to do?"
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTaskForm;
