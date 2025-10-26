
import React, { use } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="phone-screen"> 

      <div className="content">
        <h3 className="welcome">Welcome to</h3>

        <div className="logo">
          <img src="/logo.png" alt="App Logo" className="logo-image" />
        </div>

        <div className="banner">
          <img src="/banner.png" alt="App banner" className="logo-image" />
        </div>

        <p className="tagline">A one-stop glucose <br /> monitoring solution</p>

        <button className="sign-btn" onClick={_ => navigate("/signin")}>Sign In</button>
      </div>
    </div>
  );
}
