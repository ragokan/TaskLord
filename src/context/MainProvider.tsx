import React from "react";
import TaskContextProvider from "./TaskContext";

const MainProvider: React.FC = (props: any) => {
  return (
    <>
      <TaskContextProvider>{props.children}</TaskContextProvider>
    </>
  );
};

export default MainProvider;
