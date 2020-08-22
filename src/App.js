import React from "react";
import "./App.css";
import "./assets/styles/Todo.scss";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Thing(s) what you need to do</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
