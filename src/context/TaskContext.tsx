import React, { createContext, useState } from "react";

export const TaskContext = createContext({});

const TaskContextProvider = (props: any) => {
  const [tasks, setTasks] = useState([]);

  return <TaskContext.Provider value={{ tasks, setTasks }}>{props.children}</TaskContext.Provider>;
};

export default TaskContextProvider;
