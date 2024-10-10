import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log from "./Log";
import "./css/estilos.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
