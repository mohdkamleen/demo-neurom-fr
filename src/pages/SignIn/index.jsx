import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";  
import { ArrowLeftOutlined, CheckCircleFilled, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export default function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length >= 8 && /[^A-Za-z0-9]/.test(password)) {
      navigate("/home");
    } else {
      alert("Password must have 8+ chars and 1 special character.");
    }
  };

  return (
    <div className="signin-screen">
      <div className="top-bar">
        <span onClick={_ => navigate(-1)} className="back-arrow"><ArrowLeftOutlined /></span>
        <h2>Sign In</h2>
      </div>

      <form className="signin-form" onSubmit={handleSubmit}>
        <label htmlFor="userId">
          User ID<span className="required">*</span>
        </label>
        <input
          id="userId"
          type="text"
          placeholder="ex: Abc@NeuroM"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        /> 

        <label htmlFor="password">
          Password<span className="required">*</span>
        </label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a new Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide" : "Show"}
          >
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </span>
        </div>

        <p className="hint">
        <span><CheckCircleFilled style={{color:"#c4c4c4",fontSize:"15px"}} /> &nbsp; Must be at least 8 characters & one special <br/> &ensp;&ensp;&ensp; character </span> 
        <span><CheckCircleFilled style={{color:"#4F46E5",fontSize:"15px"}} /> &nbsp; Remember my password for easy future<br /> &ensp;&ensp;&ensp; logins.</span>
        </p>
 
      </form>

      <footer className="signin-footer">
        <button type="submit" className="finish-btn">
          Finish Sign In
        </button> <br/>
        By continuing you are accepting our{" "} <br/>
        <a href="#">Terms & Conditions</a> and{" "}
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
