import React from "react";
import { Card, Table, Button, Typography, Row, Col, Space, Progress } from "antd";
import { ArrowLeftOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/plots";

const { Title, Text } = Typography;

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

// Chart config (Ant Design Plot)
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

const columns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    align: "center",
  },
  {
    title: "Predicted glucose (mg/dL)",
    dataIndex: "glucose",
    key: "glucose",
    align: "center",
  },
];

const PredictionSummary = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff5f7",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Header */}
      <Row
        align="middle"
        justify="space-between"
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #f0f0f0",
          backgroundColor: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Space>
          <ArrowLeftOutlined style={{ fontSize: 18, cursor: "pointer" }} />
          <Title level={5} style={{ margin: 0 }}>
            Prediction Summary
          </Title>
        </Space>
        <ShareAltOutlined style={{ fontSize: 18, cursor: "pointer" }} />
      </Row>

      {/* Range */}
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <Text type="secondary" style={{ fontSize: 13 }}>
          Likely range
        </Text>
        <Title level={2} style={{ color: "#e85d75", margin: "4px 0" }}>
          168–190 mg/dL
        </Title>
        <Text strong style={{ color: "#f97316" }}>
          Higher Range
        </Text>
      </div>

      {/* Model Accuracy */}
      <Row justify="space-between" align="middle" style={{ padding: "16px 24px" }}>
        <div>
          <Text strong>Model accuracy:</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 12 }}>
            Improves with more recent logs
          </Text>
        </div>
        <Progress
          type="circle"
          percent={88}
          size={60}
          strokeColor="#4f46e5"
          format={(p) => `${p}%`}
        />
      </Row>

      {/* Chart */}
      <Card
        title={<Text strong>Predicted glucose trend</Text>}
        bordered={false}
        style={{ margin: "0 16px", borderRadius: 12, boxShadow: "0 2px 8px #f0f0f0" }}
      >
        <Line {...chartConfig} />
      </Card>

      {/* Table */}
      <Card
        style={{
          margin: "16px",
          borderRadius: 12,
          boxShadow: "0 2px 8px #f0f0f0",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          rowKey="time"
          size="small"
          bordered={false}
        />
      </Card>

      {/* Footer Buttons */}
      <Row justify="space-between" style={{ padding: 16, backgroundColor: "#fff" }}>
        <Button type="default" style={{ borderColor: "#4f46e5", color: "#4f46e5", flex: 1, marginRight: 8 }}>
          Add To Report
        </Button>
        <Button type="primary" style={{ backgroundColor: "#4f46e5", borderColor: "#4f46e5", flex: 1 }}>
          Done
        </Button>
      </Row>
    </div>
  );
};

export default PredictionSummary;
