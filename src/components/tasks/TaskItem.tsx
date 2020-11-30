import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskItem: React.FC<any> = ({ task }: any) => {
  const { changeTask }: any = useContext(TaskContext);
  return (
    <>
      <a href="#!" className={`collection-item ${task.taskIsCompleted && "completed"}`} onClick={() => changeTask(task.taskID)}>
        {task.taskName}
      </a>
    </>
  );
};

export default TaskItem;
