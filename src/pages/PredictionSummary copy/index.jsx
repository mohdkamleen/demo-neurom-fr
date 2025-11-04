import React from "react";
import { Line } from "@ant-design/plots";
import "./index.css";

const data = [
  { time: "13:00", glucose: 126 },
  { time: "13:15", glucose: 134 },
  { time: "13:30", glucose: 141 },
  { time: "13:45", glucose: 145 },
  { time: "14:00", glucose: 152 },
  { time: "14:15", glucose: 159 },
  { time: "14:30", glucose: 165 },
  { time: "14:45", glucose: 168 },
];

const chartConfig = {
  data,
  xField: "time",
  yField: "glucose",
  smooth: true,
  height: 200,
  lineStyle: { stroke: "#4f46e5", lineWidth: 3 },
  point: { size: 4, shape: "circle", style: { fill: "#4f46e5" } },
  tooltip: { showMarkers: true },
  xAxis: { label: { autoHide: true, autoRotate: false } },
  yAxis: { title: { text: "Glucose (mg/dL)" }, min: 120, max: 200 },
};

const PredictionSummary = () => {
  return (
    <div className="summary-container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <span className="back-arrow">←</span>
          <h3>Prediction Summary</h3>
        </div>
        <span className="share-icon">⤴</span>
      </div>

      {/* Range */}
      <div className="range-section">
        <p className="range-subtitle">Likely range</p>
        <h1 className="range-value">168–190 mg/dL</h1>
        <p className="range-status">Higher Range</p>
      </div>

      {/* Model accuracy */}
      <div className="accuracy-section">
        <div>
          <p className="accuracy-title">Model accuracy:</p>
          <p className="accuracy-note">Improves with more recent logs</p>
        </div>
        <div className="accuracy-circle">
          <span>88%</span>
        </div>
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
              <th>Predicted glucose (mg/dL)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.time}</td>
                <td>{d.glucose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Buttons */}
      <div className="footer-buttons">
        <button className="btn-outline">Add To Report</button>
        <button className="btn-primary">Done</button>
      </div>
    </div>
  );
};

export default PredictionSummary;
