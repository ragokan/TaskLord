import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskItem: React.FC<any> = ({ task }: any) => {
  const { changeTask, deleteTask }: any = useContext(TaskContext);
  return (
    <>
      <li className="collection-item">
        <a href="#!" className={`tealLink ${task.taskIsCompleted && "completed"}`} onClick={() => changeTask(task.taskID)}>
          {task.taskName}
        </a>
        <a href="#!" className="secondary-content" onClick={() => deleteTask(task.taskID)}>
          <i className="material-icons">close</i>
        </a>
      </li>
    </>
  );
};

export default TaskItem;
