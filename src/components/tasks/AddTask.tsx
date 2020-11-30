import React, { useContext, useState } from "react";
import TaskInterface from "../../context/interfaces/TaskInterface";
import { TaskContext } from "../../context/TaskContext";

const AddTask: React.FC = () => {
  const [task, setTask] = useState<TaskInterface>({
    taskName: "",
    taskIsCompleted: false,
  });
  const { addTask }: any = useContext(TaskContext);

  const submitTask = () => {
    addTask(task);
    setTask({ taskIsCompleted: false, taskName: "" });
  };

  return (
    <>
      <div className="row AddTaskContainer">
        <div className="col s12">
          <div className="input-field col s8">
            <input
              id="taskName"
              type="text"
              className="validate"
              value={task.taskName}
              onChange={(e) => setTask({ taskName: e.target.value, taskIsCompleted: false })}
              required
            />
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
