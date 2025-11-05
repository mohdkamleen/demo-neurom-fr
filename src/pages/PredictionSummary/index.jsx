import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { IoShareSocialOutline } from "react-icons/io5";
import { Line } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";

export default function PredictionSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fileInfo, result } = useSelector((state) => state.file);

  // ✅ Redirect if result is invalid
  useEffect(() => {
    if (!result || result?.status !== "success") {
      navigate("/fileupload", { replace: true });
    }
  }, [result, navigate]);

  // ✅ Default empty array if result.table is missing
  const data = result?.table || [];

  const chartConfig = {
    data,
    xField: "Time",
    yField: "Predicted",
    smooth: true,
    autoFit: true,
    height: 300,
    lineStyle: { stroke: "#4f46e5", lineWidth: 3 },
    point: { size: 4, shape: "circle", style: { fill: "#4f46e5" } },
    tooltip: { showMarkers: true },
    xAxis: {
      title: { text: "Time" },
      label: {
        style: { fontSize: 12, fill: "#555" },
      },
    },
    yAxis: {
      title: { text: "Glucose (mg/dL)" },
      min: 120,
      max: 200,
    },
  };

  return (
    <div className="top-header-screen">
      <div className="top-bar">
        <div>
          <span onClick={() => navigate(-1)} className="back-arrow">
            <ArrowLeftOutlined />
          </span>
          <h2>Prediction Summary</h2>
        </div>
        <div>
          <IoShareSocialOutline
            style={{ fontSize: "25px", marginBottom: "10px" }}
          />
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5>Model accuracy</h5>
            <font size="4" style={{ color: "#4F46E5", fontWeight: "600" }}>
              {result?.metrics?.Accuracy || "N/A"}
            </font>
          </div>
          <b>Improves with more recent logs</b>
        </div>

        {/* ✅ Render chart only if data exists */}
        {data.length > 0 ? (
          <div className="chart-section">
            <h4>Predicted glucose trend</h4>
            <Line {...chartConfig} />
          </div>
        ) : (
          <p style={{ color: "#999", textAlign: "center", marginTop: 20 }}>
            No chart data available
          </p>
        )}

        {/* ✅ Render table only if data exists */}
        {data.length > 0 && (
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
                    <td>{d.Time}</td>
                    <td>{d.Predicted}</td>
                    <td>{d.Actual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <footer className="prediction-summary-footer">
          <button className="trans">Add To Report</button>
          <button>Done</button>
        </footer>
      </div>
      <br />
    </div>
  );
}
