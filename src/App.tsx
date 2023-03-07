import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar, ProtectedRoute } from "./components";
import { Auth, Home, Weather } from "./pages";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/weather"
          element={
            <ProtectedRoute>
              <Weather />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
