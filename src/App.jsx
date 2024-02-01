import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#303030" }}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
