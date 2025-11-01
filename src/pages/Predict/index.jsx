import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ArrowLeftOutlined, CheckCircleFilled, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import FooterMenu from "../Components/FooterMenu";
import { FaAngleRight, FaChevronRight, FaKeyboard, FaQrcode, FaQuestionCircle, FaRegQuestionCircle, FaUpload } from "react-icons/fa";
import { message } from "antd";

export default function Predict() {
  const navigate = useNavigate();

  //We'll estimate a likely post-meal glucose range More logged meals → better confidence
  return (
    <div className="top-header-screen">
      <div className="top-bar">
        <div>
          <span onClick={_ => navigate(-1)} className="back-arrow"><ArrowLeftOutlined /></span>
          <h2>Add Food Data</h2>
        </div>
        <div>
          <FaRegQuestionCircle style={{ fontSize: "20px",marginBottom:"10px" }} />
        </div>
      </div>

      <div className="predict-body">
        <p className="we-ll-text">We'll estimate a likely post-meal glucose range More logged meals → better confidence</p>

        <div className="single-btn" onClick={_ => navigate("/manualentry")}>
          <FaKeyboard style={{background:"#0082be2c",width:"40px",height:"40px",padding:"10px",color:"#0082BE",borderRadius:"7px"}} />
        <div>
          <h4>Manual Entry</h4>
          <p>Type meal. portion, confirm macros</p>
          </div> 
          <FaChevronRight style={{fontSize:"18px",color:"#4F46E5"}} />
        </div>

        <div className="single-btn"onClick={_ => message.error("/fileupload")}>
          <FaQrcode style={{background:"#10b9812e",width:"40px",height:"40px",padding:"10px",color:"#10B981",borderRadius:"7px"}} />
        <div>
          <h4>Scan QR/Barcode</h4>
          <p>Scan label or barcode to auto fill</p>
          </div> 
          <FaChevronRight style={{fontSize:"18px",color:"#4F46E5"}} />
        </div>

        <div className="single-btn" onClick={_ => navigate("/fileupload")}>
          <FaUpload style={{background:"#F59E0B2e",width:"40px",height:"40px",padding:"10px",color:"#F59E0B",borderRadius:"7px"}} />
        <div>
          <h4>File Upload</h4>
          <p>Upload Excel/CSV/PDF, confirm rows</p>
          </div> 
          <FaChevronRight style={{fontSize:"18px",color:"#4F46E5"}} />
        </div>
 
      </div>


      <FooterMenu />
    </div>
  );
}
