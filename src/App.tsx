import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Auth, Home, NotFound, Weather } from "./pages";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
