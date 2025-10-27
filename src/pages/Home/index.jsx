
import React, { use } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { HddOutlined, PlusOutlined } from "@ant-design/icons";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="phone-screen">

      <div className="content">
        <HddOutlined style={{ color: "#4F46E5", fontSize: "35px", margin: "15px 0" }} />
        <h2 style={{ margin: "15px 0" }}>No Readings</h2>
        <h5 style={{ fontWeight: "400", fontSize: "15px", lineHeight: "25px" }}> Log Food Data to see status and time‑in‑range here</h5>
        <button className="add-food-data-btn" onClick={_ => message.info("comming soon")}><PlusOutlined /> &nbsp; Add Food Data</button>
        {/* <button className="pridict-blood-sugar-btn" onClick={_ => message.info("comming soon")}><PlusOutlined /> &nbsp; Add Food Data</button> */}
      </div>
    </div>
  );
}
