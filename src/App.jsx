import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 

function App() {
  return (
    <div className="app" style={{display:"grid",placeItems:"center"}}>   
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div> 
  );
}

export default App;
