import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks }: any = useContext(TaskContext);

  const allTasks = () => (
    <div className="collection TaskListContainer">
      {tasks.map((task: { taskID: number }) => (
        <TaskItem key={task.taskID} task={task} />
      ))}
    </div>
  );

  return <>{tasks.length > 0 ? allTasks() : <h5>There are no task yet, please add one.</h5>}</>;
};

export default TaskList;
