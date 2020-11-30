import React, { createContext, useState } from "react";
import { addTaskFunction } from "./functions/TaskFunctions";
import TaskInterface from "./interfaces/TaskInterface";

export const TaskContext = createContext({});

const TaskContextProvider = (props: any) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask: TaskInterface) => addTaskFunction(setTasks, newTask);

  return <TaskContext.Provider value={{ tasks, addTask }}>{props.children}</TaskContext.Provider>;
};

export default TaskContextProvider;
