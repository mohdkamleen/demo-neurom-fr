import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home"; 
import Predict from "./pages/Predict";
import 'antd/dist/reset.css'; // For AntD v5+
import ManualEntry from "./pages/ManualEntry";
import FileUpload from "./pages/UploadFoodDetails";
import PredictionSummary from "./pages/PredictionSummary";


function App() {
  var user = localStorage.getItem("user")
  return (
    <div className="app" style={{display:"grid",placeItems:"center"}}>   
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={user === "admin_test" ? <Navigate to="/home" /> : <SignIn />} />
          <Route path="/home" element={user === "admin_test" ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/manualentry" element={<ManualEntry />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/predictionsummary" element={<PredictionSummary />} />
        </Routes>
      </div> 
  );
}

export default App;
