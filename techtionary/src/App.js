import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = ()  =>{
  return (
    <div className="App">
      hola
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<index />} />
          </Routes>
        </BrowserRouter>
    </div>

  );
};

export default App;
