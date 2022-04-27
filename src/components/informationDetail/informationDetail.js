import React from "react";
import BlockLabel from "../blockLabel/blockLabel";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import "./informationDetail.scss";

const InformationDetail = () => {
  return (
    <div className="information-detail">
      <div className="information-detail_label">
        <LabelDropdown content={"Thông tin chi tiết"} />
      </div>
      <BreakLine />
      <div className="information-detail_content">
        <div className="d-flex" style={{ maxWidth: "680px" }}>
          <BlockLabel
            label={"Mã đấu thầu"}
            content={"ĐT_001/2022"}
            width={"50%"}
          />
          <BlockLabel
            label={"Mã HSMT"}
            content={"HSMT_001/2022"}
            width={"50%"}
          />
        </div>
        <div className="d-flex" style={{ maxWidth: "720px" }}>
          <BlockLabel
            label={"Tên gói thầu"}
            content={"Gói thầu mua sắm laptop"}
            icon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default InformationDetail;
