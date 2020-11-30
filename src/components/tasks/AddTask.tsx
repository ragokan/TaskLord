import React, { useContext, useState } from "react";
import TaskInterface from "../../context/interfaces/TaskInterface";
import { TaskContext } from "../../context/TaskContext";

const AddTask: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const { addTask }: any = useContext(TaskContext);

  const submitTask = () => {
    const task: TaskInterface = {
      taskID: Math.floor(Math.random() * 1234567),
      taskName,
      taskIsCompleted: false,
    };
    addTask(task);
    setTaskName("");
  };

  return (
    <>
      <div className="row AddTaskContainer">
        <div className="s12 col">
          <div className="input-field col s8">
            <input id="taskName" type="text" className="validate" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
            <label htmlFor="taskName">Task Name</label>
          </div>
          <div className="input-field col s4">
            <a className="waves-effect waves-light btn" onClick={() => submitTask()}>
              Add
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
