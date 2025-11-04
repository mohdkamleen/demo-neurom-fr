import { ArrowLeftOutlined, ArrowRightOutlined, HomeFilled, HomeOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge, DatePicker } from 'antd'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaFileExcel, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegChartBar, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setModalType } from '../../../redux/fileSlice'
import dayjs from 'dayjs'

const BottomModalPredictBloodSugar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fileInfo } = useSelector((state) => state.file);

    return (
        <div className="upload-file-modal-box">
            <div className="modal-content">
                <div className="modal-header">
                    <div style={{ display: "flex", gap: "19px", cursor: "pointer" }}>
                        <span onClick={_ => dispatch(setModalType("SelectFile"))} className="back-arrow"><ArrowLeftOutlined /></span>
                        <h3>Predict Blood Sugar</h3>
                    </div>
                </div>
                <p style={{ color: "#333", fontSize: "15px", margin: "20px 0", fontWeight: "600" }}> Select Range</p>

                <div className="predict-blood-sugar">

                    <div className="input-date-container">
                        <div>
                            <p style={{ color: "#333", fontSize: "13px", margin: "10px 0", fontWeight: "600" }}>Start Date</p>
                            <DatePicker
                                defaultValue={
                                    fileInfo?.json?.length
                                        ? dayjs(fileInfo.json[fileInfo.json.length - 1]?.Date, "DD/MM/YYYY")
                                        : null
                                }
                                format="DD/MM/YYYY"
                            />
                        </div>

                        <ArrowRightOutlined style={{ marginBottom: "-30px" }} />

                        <div>
                            <p style={{ color: "#333", fontSize: "13px", margin: "10px 0", fontWeight: "600" }}>End Date</p>
                            <DatePicker
                                defaultValue={
                                    fileInfo?.json?.length
                                        ? dayjs(fileInfo.json[0]?.Date, "DD/MM/YYYY")
                                        : null
                                }
                                format="DD/MM/YYYY"
                            />
                        </div>
                    </div>



                    <button className='run-prediction-btn' onClick={_ => navigate("/predictionsummary")} >
                        Run Prediction
                    </button>

                </div>
            </div>
        </div>

    )
}

export default BottomModalPredictBloodSugar