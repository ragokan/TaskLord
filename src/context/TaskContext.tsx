import React, { createContext, useEffect, useState } from "react";
import { addTaskFunction, changeTaskCompletedFunction, deleteTaskFunction } from "./functions/TaskFunctions";
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

  useEffect(() => {
    const newTasks = localStorage.getItem("alltasks");
    newTasks && setTasks(JSON.parse(newTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("alltasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: TaskInterface) => addTaskFunction(setTasks, newTask);
  const changeTask = (taskID: number) => changeTaskCompletedFunction(tasks, setTasks, taskID);
  const deleteTask = (taskID: number) => deleteTaskFunction(setTasks, taskID);

  return <TaskContext.Provider value={{ tasks, addTask, changeTask, deleteTask }}>{props.children}</TaskContext.Provider>;
};

export default TaskContextProvider;
