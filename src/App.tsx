import React from "react";
import Navbar from "./components/layout/Navbar";
import MainProvider from "./context/MainProvider";

const App: React.FC = () => {
  return (
    <>
      <MainProvider>
        <Navbar />
      </MainProvider>
    </>
  );
};

export default App;
