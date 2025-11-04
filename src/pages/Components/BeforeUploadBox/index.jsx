import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./index.css";

const BeforeUploadBox = ({onClose}) => {
  return (
    <div className="before-upload-box-container" onClick={onClose}>
    <div className="before-upload-box">
      <div className="upload-header">
        <InfoCircleOutlined className="info-icon" />
        <span className="upload-title">Before you upload</span>
      </div>

      <ul className="upload-guidelines">
        <li>Supported formats: <b>.xlsx</b>, <b>.csv</b>, <b>.pdf</b></li>
        <li>Put headers in the first row (no merged cells)</li>
        <li>One row per food item; use 24-hour time</li>
        <li>Use grams for macros; mg/dL for glucose</li>
        <li>Keep decimals with a dot (e.g., 12.5)</li>
      </ul>
    </div>
    </div>
  );
};

export default BeforeUploadBox;
