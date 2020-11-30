import React, { createContext, useState } from "react";
import { addTaskFunction, changeTaskCompletedFunction } from "./functions/TaskFunctions";
import TaskInterface from "./interfaces/TaskInterface";

export const TaskContext = createContext({});

const TaskContextProvider = (props: any) => {
  const [tasks, setTasks] = useState<[TaskInterface]>([
    {
      taskName: "First Task - Click to Complete",
      taskID: 1,
      taskIsCompleted: false,
    },
  ]);

  const addTask = (newTask: TaskInterface) => addTaskFunction(setTasks, newTask);
  const changeTask = (taskID: number) => changeTaskCompletedFunction(tasks, setTasks, taskID);

  return <TaskContext.Provider value={{ tasks, addTask, changeTask }}>{props.children}</TaskContext.Provider>;
};

export default TaskContextProvider;
