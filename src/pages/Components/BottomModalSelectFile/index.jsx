import { HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegChartBar, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'

const BottomModalSelectFile = ({onClose}) => {
    const location = useLocation()

    return (
        <div class="file-upload-modal-box">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Select File</h3>
                    <button class="close-btn" onClick={onClose}>&times;</button>
                </div>
                <p style={{color:"gray"}}>Choose an Excel/CSV/PDF to start.</p>

                <div class="upload-options">

                    <div className="single-btn" >
                        <FaMobile style={{ background: "#4F46E52e", width: "40px", height: "40px", padding: "10px", color: "#4F46E5", borderRadius: "7px" }} />
                        <div>
                            <h4>Choose from device</h4>
                            <p>Browse files on this device</p>
                        </div>
                        <FaChevronRight style={{ fontSize: "15px", color: "#4F46E5" }} />
                    </div>

                    <div className="single-btn" >
                        <FaCloud style={{ background: "#10b9812e", width: "40px", height: "40px", padding: "10px", color: "#10B981", borderRadius: "7px" }} />
                        <div>
                            <h4>Browse cloud</h4>
                            <p>Drive, iCloud, OneDrive</p>
                        </div>
                        <FaChevronRight style={{ fontSize: "15px", color: "#4F46E5" }} />
                    </div>

                    <div class="option">
                        <FaInfoCircle style={{fontSize:"35px",paddingRight:"10px"}} />
                        Formats: .xlsx, .csv, .pdf . Max 20 MB . One file at a time
                    </div>

                </div>
            </div>
        </div>

    )
}

export default BottomModalSelectFile