import React from "react";
import BlockInput from "../blockInput/blockInput";
import BlockLabel from "../blockLabel/blockLabel";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import "./notifyInvite.scss";

const BenMoiThau = () => {
  return (
    <div className="notify-invite_content">
      <div className="d-flex" style={{ maxWidth: "680px" }}>
        <BlockInput
          label={"Mã đấu thầu"}
          content={"ĐT_001/2022"}
          width={"50%"}
        />
        <BlockInput label={"Mã HSMT"} content={"HSMT_001/2022"} width={"50%"} />
      </div>
      <div className="d-flex" style={{ maxWidth: "720px" }}>
        <BlockInput
          label={"Tên gói thầu"}
          content={"Gói thầu mua sắm laptop"}
          icon={true}
          isRequire={true}
        />
      </div>
    </div>
  );
};

const NotifyInvite = () => {
  return (
    <div className="notify-invite">
      <div className="notify-invite_label">
        <LabelDropdown content={"Thông báo mời thầu"} />
      </div>
      <BreakLine />
      <BenMoiThau />
    </div>
  );
};

export default NotifyInvite;
