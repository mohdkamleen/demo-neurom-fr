import { ArrowLeftOutlined, HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaFileExcel, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegChartBar, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setModalType } from '../../../redux/fileSlice'

const BottomModalSaveData = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fileInfo } = useSelector((state) => state.file);
    console.log(fileInfo);

    return (
        <div className="upload-file-modal-box">
            <div className="modal-content">
                <div className="modal-header">
                    <div style={{ display: "flex", gap: "19px", cursor: "pointer" }}>
                        <span onClick={_ => dispatch(setModalType("SelectFile"))} className="back-arrow"><ArrowLeftOutlined /></span>
                        <h3>Upload File</h3>
                    </div>
                </div>
                <p style={{ color: "gray" }}> &ensp;&ensp;&ensp;&ensp; We'll upload and parse meals next.</p>

                <div className="upload-options">

                    <div className='upload-file-data-container' >
                        <div style={{ display: "flex", gap: "10px" }}>
                            <FaFileExcel style={{ background: "#10b9812e", width: "32px", padding: "7px", height: "32px", color: "#10B981", borderRadius: "5px" }} />
                            <h4>{fileInfo?.name}</h4>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Type:</span>
                            <span>{fileInfo?.type}</span>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Size:</span>
                            <span>{fileInfo?.size}</span>
                        </div>

                    </div>

                    <button className='start-upload-btn' onClick={_ => dispatch(setModalType("Uploading"))} >
                        <FaUpload style={{ margin: "2px 10px 0 0" }} /> Start Upload
                    </button>

                </div>
            </div>
        </div>

    )
}

export default BottomModalSaveData