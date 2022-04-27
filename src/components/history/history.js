import React from "react";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import "./history.scss";

const History = () => {
  return (
    <div className="history border-radius">
      <div className="history_label">
        <LabelDropdown content={"Lịch sử"} />
      </div>
      <BreakLine />
      <div className="history_content">
        <div className="history_content-item">
          <div className="history_left">
            <div className="history_left-icon"></div>
            <div className="history_left_content">
              <div className="history_left_content-title">Gửi hồ sơ</div>
              <div className="history_left_content-sub">FPT</div>
            </div>
          </div>
          <div className="history_timer">2 giờ trước</div>
        </div>
        <div className="history_content-item">
          <div className="history_left">
            <div className="history_left-icon"></div>
            <div className="history_left_content">
              <div className="history_left_content-title">Gửi hồ sơ</div>
              <div className="history_left_content-sub">FPT</div>
            </div>
          </div>
          <div className="history_timer">2 giờ trước</div>
        </div>
      </div>
    </div>
  );
};

export default History;
