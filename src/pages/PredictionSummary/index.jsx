import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ArrowLeftOutlined, CheckCircleFilled, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import BottomModalSaveData from "../Components/BottomModalSaveData";
import { FaAngleRight, FaChevronRight, FaDownload, FaKeyboard, FaQrcode, FaQuestionCircle, FaRegQuestionCircle, FaShare, FaShareAlt, FaUpload } from "react-icons/fa";
import BottomModalSelectFile from "../Components/BottomModalSelectFile";
import { CiCircleAlert, CiCircleQuestion } from "react-icons/ci";
import { IoAlertCircleOutline, IoShareSocialOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "@ant-design/plots";
export default function PredictionSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { modalType } = useSelector((state) => state.file);
  const [beforeUploadBox, setBeforeUploadBox] = useState(false)
  const data = [
  { time: "15:08", predicted: 133.220001, actual: 129.6 },
  { time: "15:23", predicted: 128.5, actual: 127.8 },
  { time: "15:38", predicted: 123.779999, actual: 124.2 },
  { time: "15:53", predicted: 122.739998, actual: 124.2 },
  { time: "16:08", predicted: 118.839996, actual: 122.4 },
  { time: "16:23", predicted: 121.730003, actual: 115.2 },
  { time: "16:38", predicted: 121.580002, actual: 0 }, // actual missing, please confirm
  { time: "16:53", predicted: 115.5, actual: 0 },
  { time: "17:08", predicted: 113.37, actual: 0 },
  { time: "17:23", predicted: 116.05, actual: 0 },
  { time: "17:38", predicted: 112.419998, actual: 0 },
  { time: "17:53", predicted: 110.889999, actual: 0 },
  { time: "18:08", predicted: 109.919998, actual: 0 },
  { time: "18:23", predicted: 101.739998, actual: 0 },
  { time: "18:38", predicted: 101.519997, actual: 0 },
  { time: "18:53", predicted: 102.449997, actual: 0 },
];

const chartConfig = {
  data,
  xField: "time",
  yField: "predicted",
  smooth: true,
  autoFit: true,
  height: 300,
  lineStyle: { stroke: "#4f46e5", lineWidth: 3 },
  point: { size: 4, shape: "circle", style: { fill: "#4f46e5" } },
  tooltip: { showMarkers: true },
  xAxis: {
    title: { text: "Time" },
    label: {
      autoHide: false,
      autoRotate: true,
      style: { fontSize: 12, fill: "#555" },
    },
  },
  yAxis: {
    title: { text: "Glucose (mg/dL)" },
    min: 120,
    max: 200,
  },
};

  //We'll estimate a likely post-meal glucose range More logged meals → better confidence
  return (
    <div className="top-header-screen">
      <div className="top-bar">
        <div>
          <span onClick={_ => navigate(-1)} className="back-arrow"><ArrowLeftOutlined /></span>
          <h2>Prediction Summary</h2>
        </div>
        <div>
          <IoShareSocialOutline style={{ fontSize: "25px", marginBottom: "10px" }} />
        </div>
      </div>

      <div className="prediction-summary-tabs">
        <button className="active">Glucose level</button>
        <button>Affecting Factors</button>
      </div>

      <div className="prediction-summary-body">

        <div className="higher-range-div">
          <p>Likely range</p>
          <h3>88-169 mg/dL</h3>
          <span>Higher Range</span>
        </div>

        <div className="modal-accuracy-div">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h5>Model accuracy</h5>
            <font size="4" style={{ color: "#4F46E5", fontWeight: "600" }}>93.17%</font>
          </div>
          <b>Improves with more recent logs</b>
        </div>

        {/* Chart */}
        <div className="chart-section">
          <h4>Predicted glucose trend</h4>
          <Line {...chartConfig} />
        </div>

        {/* Table */}
        <div className="table-section">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Predicted_CGM <br /> (mg/dL)</th>
                <th>Actual_CGM <br /> (mg/dL)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.time}</td>
                  <td>{d.predicted}</td>
                  <td>{d.actual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="content-data-section">
          <footer className="prediction-summary-footer">
            <button className="trans">Add To Report</button>
            <button>Done</button>
          </footer>

        </div>
      </div>
      <br />
    </div>
  );
}
