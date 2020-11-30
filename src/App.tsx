import React from "react";
import Navbar from "./components/layout/Navbar";
import AddTask from "./components/tasks/AddTask";
import TaskList from "./components/tasks/TaskList";
import MainProvider from "./context/MainProvider";
import "./MainStyles.css";

const App: React.FC = () => {
  return (
    <>
      <MainProvider>
        <Navbar />
        <div className="MainTaskContainer">
          <AddTask />
          <TaskList />
        </div>
      </MainProvider>
    </>
  );
};

export default App;
