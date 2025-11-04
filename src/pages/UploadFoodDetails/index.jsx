import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ArrowLeftOutlined, CheckCircleFilled, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import BottomModalSaveData from "../Components/BottomModalSaveData";
import { FaAngleRight, FaChevronRight, FaDownload, FaKeyboard, FaQrcode, FaQuestionCircle, FaRegQuestionCircle, FaUpload } from "react-icons/fa";
import BottomModalSelectFile from "../Components/BottomModalSelectFile";
import { CiCircleAlert, CiCircleQuestion } from "react-icons/ci";
import { IoAlertCircleOutline } from "react-icons/io5";
import BottomModalUploadFile from "../Components/BottomModalUploadFile"; 
import BottomModalUploading from "../Components/BottomModalUploading";
import { useDispatch, useSelector } from "react-redux";
import { setModalType } from "../../redux/fileSlice";

export default function FileUpload() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch()
  const { modalType } = useSelector((state) => state.file);

  //We'll estimate a likely post-meal glucose range More logged meals → better confidence
  return (
    <div className="top-header-screen">
      <div className="top-bar">
        <div>
          <span onClick={_ => navigate(-1)} className="back-arrow"><ArrowLeftOutlined /></span>
          <h2>Upload Food details</h2>
        </div>
        <div>
          <FaRegQuestionCircle style={{ fontSize: "20px", marginBottom: "10px" }} />
        </div>
      </div>

      <div className="upload-food-body">
        <p className="we-ll-text">We'll parse your meals, you'll confirm rows, then we'll estimate your glucose range.</p>
        <div className="content-data-section">
          <div style={{ display: "flex", alignItems: "center", gap: "5px", margin: "7px 0" }}>
            <CiCircleQuestion style={{ color: "#4F46E5", fontSize: "20px", marginBottom: "7px" }} /> <h4>Sample data</h4>
          </div>
          <div className="table-details-formate">
            <div>
              <span>Date</span>
              <span>&ensp;&ensp;Time</span>
              <span>Food</span>
              <span>Portion_g</span>
            </div>
            <div>
              <span>2025-10-12</span>
              <span>&ensp;&ensp;13:00</span>
              <span>Checken sandwich</span>
              <span>180</span>
            </div>
            <div>
              <span>2025-10-12</span>
              <span>&ensp;&ensp;19:30</span>
              <span>Grilled salmon</span>
              <span>150</span>
            </div>
            <div>
              <span>2025-10-13</span>
              <span>&ensp;&ensp;08:00</span>
              <span>Oatmeal</span>
              <span>120</span>
            </div>
          </div>

          <div style={{ marginTop: "30px", fontSize: "14px", color: "#4F46E5", fontWeight: "600", display: "flex", alignItems: "center", gap: "10px" }}>
            <FaDownload style={{ marginBottom: "15px" }} />
            <p>Download sample template (.xlsx)</p>
          </div>

          <div style={{ marginTop: "10px", fontSize: "14px", color: "#4F46E5", fontWeight: "600", display: "flex", alignItems: "center", gap: "10px" }}>
            <IoAlertCircleOutline style={{ marginBottom: "15px", fontSize: "17px" }} />
            <p>See formatting rules</p>
          </div>


          <footer className="file-upload-footer">
            <button className="upload-btn" onClick={_ => dispatch(setModalType(("SelectFile")))}>
              <FaUpload style={{ margin: "2px 7px 0 0" }} /> <span>Upload File</span>
            </button>
            <br />
            <div style={{ fontSize: "13px", lineHeight: "20px", letterSpacing: ".5px" }}>Supported formats: .xlsx, .csv, .pdf <br /> Max file size 10MB</div>
          </footer>

        </div>
      </div>
      {/* <BottomModalSaveData /> */}
      {modalType === "SelectFile" && <BottomModalSelectFile  /> }
      {modalType === "UploadFile" && <BottomModalUploadFile  /> }
      {modalType === "Uploading" && <BottomModalUploading  /> } 

    </div>
  );
}
