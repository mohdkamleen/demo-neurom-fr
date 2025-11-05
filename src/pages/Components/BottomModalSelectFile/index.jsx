import { HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegChartBar, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setFileInfo, setModalType } from '../../../redux/fileSlice'

const BottomModalSelectFile = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    let fileSize =
      file.size >= 1024 * 1024
        ? (file.size / (1024 * 1024)).toFixed(2) + " MB"
        : (file.size / 1024).toFixed(2) + " KB";

    const newFileInfo = {
      name: file.name,
      type: file.type,
      size: fileSize,
      file: file,
      formData
    };

    dispatch(setFileInfo(newFileInfo)); // ✅ plain object
    dispatch(setModalType("UploadFile"));
  };

  return (
    <div className="file-upload-modal-box">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Select File</h3>
          <button className="close-btn" onClick={_ => dispatch(setModalType(""))}>&times;</button>
        </div>
        <p style={{ color: "gray" }}>Choose an Excel/CSV/PDF to start.</p>

        <div className="upload-options">

          <label htmlFor='sample_excel' className="single-btn" >
            <FaMobile style={{ background: "#4F46E52e", width: "40px", height: "40px", padding: "10px", color: "#4F46E5", borderRadius: "7px" }} />
            <div>
              <h4>Choose from device</h4>
              <p>Browse files on this device</p>
            </div>
            <FaChevronRight style={{ fontSize: "15px", color: "#4F46E5" }} />
          </label>

          <input
            type="file"
            id="sample_excel"
            name="sample_excel"
            style={{ display: "none" }}
            accept=".pdf, .csv, .xlsx, application/pdf, text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleFileChange}
          />

          <div className="single-btn" >
            <FaCloud style={{ background: "#10b9812e", width: "40px", height: "40px", padding: "10px", color: "#10B981", borderRadius: "7px" }} />
            <div>
              <h4>Browse cloud</h4>
              <p>Drive, iCloud, OneDrive</p>
            </div>
            <FaChevronRight style={{ fontSize: "15px", color: "#4F46E5" }} />
          </div>


          <div className="option">
            <FaInfoCircle style={{ fontSize: "35px", paddingRight: "10px" }} />
            Formats: .xlsx, .csv, .pdf . Max 20 MB . One file at a time
          </div>

        </div>
      </div>
    </div>

  )
}

export default BottomModalSelectFile