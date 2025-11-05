import { ArrowLeftOutlined, ArrowRightOutlined, HomeFilled, HomeOutlined, LoadingOutlined, SaveFilled, SaveOutlined, UserOutlined, UserSwitchOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons'
import { Badge, DatePicker, Spin } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { IoMdSettings } from 'react-icons/io'
import { FaBrain, FaChevronRight, FaCloud, FaFileExcel, FaHome, FaInfoCircle, FaMobile, FaPhone, FaQrcode, FaRegChartBar, FaUpload } from 'react-icons/fa'
import { TiHome } from 'react-icons/ti'
import { MdAddCircle } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setModalType, setResult } from '../../../redux/fileSlice'
import dayjs from 'dayjs' 
import axios from '../../../axios/index'

const BottomModalPredictBloodSugar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fileInfo } = useSelector((state) => state.file);
    const [loading, setLoading] = useState(false)

    const handlePredictionSummary = async () => {
  try {
    setLoading(true);

    if (!fileInfo?.formData) {
      console.error("❌ No file selected for prediction");
      alert("Please upload a CSV file before predicting.");
      setLoading(false);
      return;
    }

    const res = await axios.post(
      "/predict",
      fileInfo.formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000, // ⏱ prevent infinite wait
      }
    );

    if (res.data?.status === "success") {
      console.log("✅ Prediction result:", res.data);
      dispatch(setResult(res.data)); // Save result in Redux
      navigate("/predictionsummary");
    } else {
      console.error("⚠️ Unexpected API res:", res.data);
      alert("Something went wrong with prediction. Please try again.");
    }

  } catch (error) {
    console.error("❌ Error while calling /predict API:", error);

    if (error.res) {
      // Server responded with a status code outside 2xx
      alert(`Server Error: ${error.res.data?.message || "Unknown error"}`);
    } else if (error.request) {
      // No res received
      alert("Network Error: Unable to reach server. Please check your connection.");
    } else {
      // Any other kind of error
      alert(`Unexpected Error: ${error.message}`);
    }

  } finally {
    setLoading(false);
  }
};


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
                                disabled
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
                                disabled
                                defaultValue={
                                    fileInfo?.json?.length
                                        ? dayjs(fileInfo.json[0]?.Date, "DD/MM/YYYY")
                                        : null
                                }
                                format="DD/MM/YYYY"
                            />
                        </div>
                    </div> 

                    <button className='run-prediction-btn' onClick={handlePredictionSummary} >
                        Run Prediction {loading && <LoadingOutlined style={{marginLeft:"10px"}} />}
                    </button>

                </div>
            </div>
        </div>

    )
}

export default BottomModalPredictBloodSugar