import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import * as XLSX from "xlsx";
import { setFileInfo, setModalType } from "../../../redux/fileSlice";
import "./index.css";
import axios from "axios";

const BottomModalUploading = () => {
  const dispatch = useDispatch();
  const { fileInfo } = useSelector((state) => state.file); // file from redux

  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Preparing upload...");
  const [details, setDetails] = useState({
    columns: 0,
    sheetName: "",
  });

  useEffect(() => {
    if (fileInfo?.file) {
      simulateUpload(fileInfo.file);
    }
  }, [fileInfo]);

  const simulateUpload = (file) => {
    let uploaded = 0;
    const total = file.size;
    const interval = setInterval(() => {
      uploaded += total / 20; // simulate progress in 20 steps
      const percent = Math.min((uploaded / total) * 100, 100);
      setProgress(percent.toFixed(0));
      if (percent >= 100) {
        clearInterval(interval);
        extractExcel(file);
      }
    }, 200);
  };

  const extractExcel = (file) => {
    setStatusText("Scanning headers...");
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      const jsonObj = XLSX.utils.sheet_to_json(sheet, { defval: "" });
      
      dispatch(setFileInfo({ ...fileInfo, json: jsonObj }));

      const headerRow = json[0];
      setDetails({
        columns: headerRow.length,
        sheetName: sheetName,
      });

      setTimeout(() => {
        setStatusText("Header row detected");
      }, 500);
    };
    reader.readAsArrayBuffer(file); 
    dispatch(setModalType("SaveData"))
  };
  return (
    <div className="upload-file-modal-box">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Uploading</h3>
        </div>

        <div className="upload-options">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2>{progress}%</h2>
            <span>
              {((progress / 100) * fileInfo?.size.split(" ")[0]).toFixed(1)} {fileInfo?.size.split(" ")[1]} / {fileInfo?.size}
            </span>
          </div>

          <div className="progress-bar-container">
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "#2563EB",
                borderRadius: "20px",
                transition: "width 0.3s ease",
              }}
            ></div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {statusText != "Header row detected" && <LoadingOutlined style={{ color: "#2563EB", fontSize: "18px" }} />}
            <b>{statusText}</b>
          </div>

          {details.sheetName && (
            <p style={{ fontSize: "14px", marginTop: "15px", color: "gray" }}>
              Header row detected · {details.columns} columns · Sheet: {details.sheetName}
            </p>
          )}

          <button className="cancel-btn" onClick={() => dispatch(setModalType("SelectFile"))}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomModalUploading;
