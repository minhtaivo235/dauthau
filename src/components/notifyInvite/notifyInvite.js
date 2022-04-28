import React from "react";
import BlockInfo from "../blockInfo/blockInfo";
import BlockInput from "../blockInput/blockInput";
import BlockLabel from "../blockLabel/blockLabel";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import "./notifyInvite.scss";

const ThongTinMoiThau = () => {
  return (
    <div className="notify-invite_content">
      <BlockInfo label="Thông tin mời thầu">
        <div className="flex-start gap-100 mb-2">
          <BlockLabel
            label={"Thời gian phát hành HSMT"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
            icon={2}
          />
          <BlockLabel
            label={"Thời gian bắt đầu nộp hồ sơ"}
            content={"Hiển thị theo thông tin HSMT"}
            isRequire={true}
            width={"25%"}
            icon={2}
          />
          <BlockLabel
            label={"Thời điểm đóng thầu"}
            content={"Hiển thị theo thông tin HSMT"}
            isRequire={true}
            width={"25%"}
            icon={2}
          />
        </div>
        <div className="flex-start gap-100">
          <BlockLabel
            label={"Thời điểm mở thầu"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
            icon={2}
          />
          <BlockLabel
            label={"Thời điểm bắt đầu chấm thầu"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
            icon={2}
          />
          <BlockLabel
            label={"Thời điểm bắt đầu chấm thầu"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
            icon={2}
          />
        </div>
      </BlockInfo>
    </div>
  );
};

const ĐiaiemPhatHanh = () => {
  return (
    <div className="notify-invite_content">
      <BlockInfo label="Địa điểm phát hành HSMT">
        <div className="flex-start gap-100 mb-2">
          <BlockLabel
            label={"Tên"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
          <BlockLabel
            label={"Địa chỉ"}
            content={"Hiển thị theo thông tin HSMT"}
            isRequire={true}
            width={"60%"}
          />
        </div>
        <div className="flex-start gap-100">
          <BlockLabel
            label={"Điện thoại"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
          <BlockLabel
            label={"Fax"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
          <BlockLabel
            label={"Mã số thuế"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
        </div>
      </BlockInfo>
    </div>
  );
};

const BenMoiThau = () => {
  return (
    <div className="notify-invite_content">
      <BlockInfo label="Bên mời thầu">
        <div className="flex-start gap-100 mb-2">
          <BlockLabel
            label={"Tên"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
          <BlockLabel
            label={"Địa chỉ"}
            content={"Hiển thị theo thông tin HSMT"}
            isRequire={true}
            width={"60%"}
          />
        </div>
        <div className="flex-start gap-100">
          <BlockLabel
            label={"Điện thoại"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
          <BlockLabel
            label={"Fax"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
          <BlockLabel
            label={"Mã số thuế"}
            content={"Hiển thị theo thông tin HSMT"}
            width={"25%"}
            isRequire={true}
          />
        </div>
      </BlockInfo>
    </div>
  );
};

const NotifyInviteContent = () => {
  return (
    <>
      <BenMoiThau />
      <ĐiaiemPhatHanh />
      <ThongTinMoiThau />
    </>
  );
};

const NotifyInvite = () => {
  return (
    <div className="notify-invite background-white pb-2 border-radius mb-2">
      <div className="notify-invite_label">
        <LabelDropdown content={"Thông báo mời thầu"} />
      </div>
      <BreakLine />
      <NotifyInviteContent />
    </div>
  );
};

export default NotifyInvite;
