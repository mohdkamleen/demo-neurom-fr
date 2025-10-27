
import React, { use } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { BlockOutlined, HddOutlined, InfoCircleFilled, PlusOutlined } from "@ant-design/icons";
import { FaBrain, FaIcons, FaLock } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import Header from "../Components/Header";
import FooterMenu from "../Components/FooterMenu";
import { IoMdLock } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="home-phone-screen">
      <Header />
      <div className="content">
        <TbDatabaseSearch style={{ color: "#4F46E5", fontSize: "50px" }} />
        <h2 style={{ margin: "15px 0" }}>No Readings</h2>
        <h5 style={{ fontWeight: "400", fontSize: "17px", lineHeight: "25px", }}> Log Food Data to see status <br /> and time‑in‑range here</h5>
        <button className="add-food-data-btn" onClick={_ => message.info("comming soon")}><PlusOutlined /> &nbsp; Add Food Data</button>
        <button className="pridict-blood-sugar-btn" onClick={_ => message.info("comming soon")}><FaBrain style={{ fontSize: "17px" }} /> &nbsp; Predict Blood Sugar </button>
      </div>
      <FooterMenu />
      <h4 style={{ margin: "20px" }}>Your Insights</h4>
      <div class="content2">
        <div class="overlay">
          <IoMdLock size={"38px"} />
          Unlock  by adding data
        </div>
        <div className="box1">
          <span>Model Accuracy <InfoCircleFilled style={{ color: "#4F46E5", fontSize: "12px" }} /> </span>
          <div>
            <h2>-%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
