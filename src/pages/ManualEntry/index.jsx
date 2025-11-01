import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ArrowLeftOutlined, CheckCircleFilled, CheckCircleOutlined, EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { FaAngleLeft, FaAngleRight, FaCalendar, FaChevronRight, FaKeyboard, FaPlus, FaQrcode, FaQuestionCircle, FaRegBookmark, FaRegQuestionCircle, FaSave, FaUpload } from "react-icons/fa";
import { message, Select } from "antd";
import { MdOutlineCalendarMonth } from "react-icons/md";
import dayjs from "dayjs";

export default function ManualEntry() {
  const navigate = useNavigate();
  const [date, setdate] = useState(dayjs().format("DD MMM YYYY"))

  //We'll estimate a likely post-meal glucose range More logged meals → better confidence
  return (
    <div className="top-header-screen">
      <div className="top-bar">
        <div>
          <span onClick={_ => navigate(-1)} className="back-arrow"><ArrowLeftOutlined /></span>
          <h2>Add Food details</h2>
        </div>
      </div>


      <div className="manual-entry-body">
        <div className="add-food-details-date-section">

          <FaAngleLeft
            style={{ cursor: "pointer", padding: "5px", fontSize: "30px" }}
            onClick={() => {
              setdate(dayjs(date).add(-1, "day").format("DD MMM YYYY"));
              message.info('Moved to previous day');
            }}
          />


          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <MdOutlineCalendarMonth />
            <font size={3}>
              {dayjs().format("DD MMM YYYY") === date && "Today, "}
              {date}
            </font>
          </div>

          <FaAngleRight
            style={{ cursor: "pointer", padding: "5px", fontSize: "30px" }}
            onClick={() => {
              setdate(dayjs(date).add(1, "day").format("DD MMM YYYY"));
              message.success('Moved to next day');
            }}
          />

        </div>

        <form className="form-section">

          <label htmlFor="userId">
            Time<span className="required">*</span>
          </label>
          <input
            type="time"
            placeholder="ex: 12:30"
            required
          />

          <label htmlFor="userId">
            CGM (mg/dl)<span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="ex: 180"
            required
          />

          <label htmlFor="userId">
            Food Name <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="ex: Oats"
            required
          />

          <label htmlFor="userId">
            Food Type <span className="required">*</span>
          </label>
          <Select className="select" value={"Breakfast"}>
            <Select.Option value="Breakfast"></Select.Option>
            <Select.Option value="Lunch"></Select.Option>
            <Select.Option value="Dinner"></Select.Option>
          </Select>


          <label htmlFor="userId">
            Serving Size <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="ex: 100"
            required
          />

          <label htmlFor="userId">
            Number of Servings <span className="required">*</span>
          </label>
          <div className="number-servings-btn-group">
            <input style={{padding:"0 25px ",fontSize:"30px"}} type="button" value={"-"} />
            <input
            style={{textAlign:"center",width:"150px"}}
              type="text" 
              value={1}
              required
            />
            <input style={{padding:"0 25px ",fontSize:"30px"}} type="button" value={"+"} /> 
          </div>


          <button type="submit" className="add-another-food-btn">
            <FaPlus style={{ fontSize: "18px" }} />  Add another food
          </button>

          <button type="submit" className="save-date-btn">
            <FaRegBookmark style={{ fontSize: "18px" }} />  Save Data
          </button>
        </form>
      </div>

    </div>
  );
}
