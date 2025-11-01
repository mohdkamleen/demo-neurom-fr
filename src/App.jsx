import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 
import Predict from "./pages/Predict";
import 'antd/dist/reset.css'; // For AntD v5+
import ManualEntry from "./pages/ManualEntry";


function App() {
  return (
    <div className="app" style={{display:"grid",placeItems:"center"}}>   
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/manualentry" element={<ManualEntry />} />
        </Routes>
      </div> 
  );
}

export default App;
