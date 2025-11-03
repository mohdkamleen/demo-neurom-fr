import { ArrowLeftOutlined, HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaFileExcel, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegChartBar, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'

const BottomModalUploadFile = ({ modal }) => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className="upload-file-modal-box">
            <div className="modal-content">
                <div className="modal-header">
                    <div style={{ display: "flex", gap: "19px",cursor:"pointer" }}>
                        <span  onClick={_ => modal("SelectFile")} className="back-arrow"><ArrowLeftOutlined /></span>
                        <h3>Upload File</h3>
                    </div> 
                </div>
                <p style={{ color: "gray" }}> &ensp;&ensp;&ensp;&ensp; We'll upload and parse meals next.</p>

                <div className="upload-options">

                    <div className='upload-file-data-container' >
                        <div style={{ display: "flex", gap:"15px" }}>
                            <FaFileExcel style={{ background: "#10b9812e", width: "32px", padding: "7px", height: "32px", color: "#10B981", borderRadius: "5px" }} />
                            <h4>meal_data_jan_2024.xlsx</h4>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Type:</span>
                            <span>Excel Spreadsheet</span>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Size:</span>
                            <span>2.4 MB</span>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}

export default BottomModalUploadFile