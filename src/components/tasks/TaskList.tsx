import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks }: any = useContext(TaskContext);
  return (
    <>
      <div className="collection TaskListContainer">
        {tasks.map((task: { taskID: number }) => (
          <TaskItem key={task.taskID} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
