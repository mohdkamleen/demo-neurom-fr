import { ArrowLeftOutlined, HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaFileExcel, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegBookmark, FaRegChartBar, FaRegTrashAlt, FaTrashRestore, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setModalType } from '../../../redux/fileSlice'
import { LuFileX2 } from 'react-icons/lu'

const BottomModalSaveData = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fileInfo } = useSelector((state) => state.file);
    console.log(fileInfo);

    return (
        <div className="save-data-modal-box">
            <div className="modal-content">
                <div className="modal-header">
                    <div style={{ display: "flex", gap: "15px", cursor: "pointer" }}>
                        <span onClick={_ => dispatch(setModalType("UploadFile"))} className="back-arrow"><ArrowLeftOutlined /></span>
                        <h3>Save data </h3>
                    </div>
                </div>

                <div className="upload-options">

                    <div className='save-data-data-container' >
                        <div style={{ display: "flex", gap: "10px" }}>
                            <FaFileExcel style={{ background: "#10b9812e", width: "32px", padding: "7px", height: "32px", color: "#10B981", borderRadius: "5px" }} />
                            <div>
                                <h4>{fileInfo?.name}</h4>
                                <p style={{ fontSize: "12px", fontWeight: "700", marginTop: "10px" }}>{fileInfo?.json?.length} Meal data</p>
                                <p>{fileInfo?.size}</p>
                            </div>
                            <FaRegTrashAlt  onClick={_ => dispatch(setModalType("SelectFile"))} style={{ marginLeft: "auto", color: "red", cursor: "pointer" }} />
                        </div>

                        <div onClick={_ => dispatch(setModalType("SelectFile"))}  style={{ marginLeft: "40px", display: "flex", gap: "10px", color: "#2A6BF8", fontWeight: "600", cursor: "pointer" }}>
                            <LuFileX2 />
                            <span>Replace File</span>
                        </div>


                    </div> 

                    <button className='save-predict-btn' onClick={_ => dispatch(setModalType("PredictBloodSugar"))} >
                        <FaBrain style={{ fontSize: "16px",marginBottom:"-3px" }} /> &nbsp; Save &amp; Predict Sugar
                    </button>

                    <button className='only-save-data-btn' >
                        <FaRegBookmark style={{ fontSize: "16px",marginBottom:"-3px" }} /> &nbsp; Only Save Data
                    </button>

                </div>
            </div>
        </div>

    )
}

export default BottomModalSaveData