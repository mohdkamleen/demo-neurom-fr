
import React, { use } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { ArrowRightOutlined, BlockOutlined, HddOutlined, InfoCircleFilled, PlusOutlined } from "@ant-design/icons";
import { FaBrain, FaIcons, FaLock } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import Header from "../Components/Header";
import FooterMenu from "../Components/FooterMenu";
import { IoMdLock } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { Arrowright } from "antd-icons";

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

      <h4 style={{ margin: "30px 0 20px 20px" }}>Your Insights</h4>
      <div class="content2">
        <div class="overlay">
          <IoMdLock size={"38px"} />
          Unlock  by adding data
        </div>

        <div className="top-container">
          <div className="box1">
            <div>
              <small>Model Accuracy</small>
              <InfoCircleFilled style={{ color: "#4F46E5", fontSize: "12px" }} />
            </div>
            <br />
            <div>
              <h2><font color="#365B01">-%</font></h2>
              <p className="improving">Improving</p>
            </div>
          </div>

          <div className="box2">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <small>30-Dat Avg</small>
              <InfoCircleFilled style={{ color: "#A3A3A3", fontSize: "12px" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "15px" }}>
              <font color="#A74F02" size="6"> --- </font>
              <span>mg/dL</span>
            </div>
            <small>Estimate only</small>
          </div>

        </div>

        <div className="bottom-container">
          <div>
            <h4>Top Impact Foods (7d) </h4> &nbsp;
          </div>
          <div>
            <p>Granola bar</p>
            <button>Why?</button>
          </div>
          <div>
            <p>Granola bar</p>
            <button>Why?</button>
          </div>
          <div>
            <p>Granola bar</p>
            <button>Why?</button>
          </div>
          <div>
            <h4> View full report <ArrowRightOutlined style={{ fontSize: "15px" }} /></h4> &nbsp;
          </div>
        </div>
      </div>
      <br />      <br />      <br />      <br /> <br />  


 
      <FooterMenu  /> 

    </div>

  );
}
