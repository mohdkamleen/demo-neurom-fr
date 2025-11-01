import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ArrowLeftOutlined, CheckCircleFilled, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { message } from "antd";

export default function SignIn() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  
  const [strongPassword, setStrongPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const navigate = useNavigate();

  const handlePassword = e =>{
    e.preventDefault()
    var val = e.target.value
    setPassword(val) 
    if(/^(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?`~]).{8,}$/.test(password)) {
        setStrongPassword(true)
    } else {
      setStrongPassword(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!userId) {
      alert("Please enter User ID");
      return;
    }
    if (!password) {
      alert("Please enter Password");
      return;
    }
     if(!/^(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>/?`~]).{8,}$/.test(password)) {
      alert("Password not strong!")
      return
     }

    if (userId === "admin_test" && password === "@demo81788") {
      navigate("/home", { replace: true });
    } else {
      alert("Invalid User ID or Password");
    }
  };

  return (
    <div className="top-header-screen">
      <div className="top-bar">
        <div>
        <span onClick={_ => navigate(-1)} className="back-arrow"><ArrowLeftOutlined /></span>
        <h2>Sign In</h2>
        </div>
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
            onChange={handlePassword}
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
          <span><CheckCircleFilled style={strongPassword ? { color: "#4F46E5", fontSize: "15px" } : { color: "#c4c4c4", fontSize: "15px" }} /> &nbsp; Must be at least 8 characters & one special <br /> &ensp;&ensp;&ensp; character </span>
          <span style={{cursor:"pointer"}} onClick={_ => setRememberPassword(!rememberPassword)}><CheckCircleFilled style={rememberPassword ? { color: "#4F46E5", fontSize: "15px" } : { color: "#c4c4c4", fontSize: "15px" }} /> &nbsp; Remember my password for easy future<br /> &ensp;&ensp;&ensp; logins.</span>
        </p>

      </form>

      <footer className="signin-footer">
        <button onClick={handleSubmit} className="finish-btn">
          Finish Sign In
        </button> <br />
        By continuing you are accepting our{" "} <br />
        <a href="#">Terms & Conditions</a> and{" "}
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}
