import React from "react";

const TaskItem: React.FC<any> = ({ task }: any) => {
  return (
    <>
      <a href="#!" className={`collection-item ${task.taskIsCompleted && "completed"}`}>
        {task.taskName}
      </a>
    </>
  );
};

export default TaskItem;
