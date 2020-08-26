/** @jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
// import { styled } from "@emotion/styled";

import { useTasks } from "../utils/TaskProvider";

const NewTaskForm = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const submit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  const style = css`
    width: 100%;
    display: flex;

    input[type="text"] {
      height: 30px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px 0 0 5px;
      padding: 5px;
      outline-color: #42383b;
      font-size: 14pt;
    }

    button {
      background-color: #42383b;
      color: #fff;
      border: 0;
      padding: 0 20px;
      border-radius: 0px 5px 5px 0px;
      font-size: 14pt;
    }
  `;

  const Form = () => (
    <form onSubmit={submit} css={style}>
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

  // const styledForm = styled.form`
  //   form {
  //     width: 100%;
  //     display: flex;

  //     input[type="text"] {
  //       height: 30px;
  //       width: 100%;
  //       border: 1px solid #ccc;
  //       border-radius: 5px 0 0 5px;
  //       padding: 5px;
  //       outline-color: #42383b;
  //       font-size: 14pt;
  //     }

  //     button {
  //       background-color: #42383b;
  //       color: #fff;
  //       border: 0;
  //       padding: 0 20px;
  //       border-radius: 0px 5px 5px 0px;
  //       font-size: 14pt;
  //     }
  //   }
  // `;

  return (
    // <Form onSubmit={submit}>
    //   <input
    //     type="text"
    //     value={task}
    //     placeholder="What you need to do?"
    //     onChange={(e) => setTask(e.target.value)}
    //     required
    //   />
    //   <button type="submit">Add</button>
    // </Form>
    <Form />
  );
};

export default NewTaskForm;
