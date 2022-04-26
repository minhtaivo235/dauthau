import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./table.scss";

const rowTitle = [
  "Mã Đấu thầu",
  "Người phụ trách",
  "Mã HSMT",
  "Gói thầu",
  "Phương thức đấu thầu",
  "Thời gian đóng thầu",
  "",
  "",
];

const datasColumn = [
  {
    maDauThau: {
      label: "DT-001/2021",
      type: "link",
      subLabel: "Mã đấu thầu",
    },
    nguoiPhuTrach: {
      label: "Nguyễn Diệu Linh",
      type: "text",
      subLabel: "linhnd@fpt.com.vn",
    },
    maHSMT: {
      label: "HSMT_001/2022",
      type: "link",
      subLabel: "Mã HSMT",
    },
    goiThau: {
      label: "Gói thầu mua sắm",
      type: "text",
      subLabel: "Tên gói thầu",
    },
    phuongThucDauThau: {
      label: "Đấu thầu 1 GĐ",
      type: "text",
      subLabel: "Phương thức đấu thầu",
    },
    phuongThucDongThau: {
      label: "15/12/2022",
      type: "text",
      subLabel: "Phương thức đóng thầu",
    },
    trangThai: {
      label: "Nộp hồ sơ",
      type: "status",
      subLabel: "inprogess",
    },
    hanhDong: {
      label: "icon",
      type: "icon",
      subLabel: "",
    },
  },
  {
    maDauThau: {
      label: "DT-001/2021",
      type: "link",
      subLabel: "Mã đấu thầu",
    },
    nguoiPhuTrach: {
      label: "Nguyễn Diệu Linh",
      type: "text",
      subLabel: "linhnd@fpt.com.vn",
    },
    maHSMT: {
      label: "HSMT_001/2022",
      type: "link",
      subLabel: "Mã HSMT",
    },
    goiThau: {
      label: "Gói thầu mua sắm",
      type: "text",
      subLabel: "Tên gói thầu",
    },
    phuongThucDauThau: {
      label: "Đấu thầu 1 GĐ",
      type: "text",
      subLabel: "Phương thức đấu thầu",
    },
    phuongThucDongThau: {
      label: "15/12/2022",
      type: "text",
      subLabel: "Phương thức đóng thầu",
    },
    trangThai: {
      label: "Đóng thầu",
      type: "status",
      subLabel: "close",
    },
    hanhDong: {
      label: "icon",
      type: "icon",
      subLabel: "",
    },
  },
  {
    maDauThau: {
      label: "DT-001/2021",
      type: "link",
      subLabel: "Mã đấu thầu",
    },
    nguoiPhuTrach: {
      label: "Nguyễn Diệu Linh",
      type: "text",
      subLabel: "linhnd@fpt.com.vn",
    },
    maHSMT: {
      label: "HSMT_001/2022",
      type: "link",
      subLabel: "Mã HSMT",
    },
    goiThau: {
      label: "Gói thầu mua sắm",
      type: "text",
      subLabel: "Tên gói thầu",
    },
    phuongThucDauThau: {
      label: "Đấu thầu 1 GĐ",
      type: "text",
      subLabel: "Phương thức đấu thầu",
    },
    phuongThucDongThau: {
      label: "15/12/2022",
      type: "text",
      subLabel: "Phương thức đóng thầu",
    },
    trangThai: {
      label: "Mở thầu",
      type: "status",
      subLabel: "open",
    },
    hanhDong: {
      label: "icon",
      type: "icon",
      subLabel: "",
    },
  },
  {
    maDauThau: {
      label: "DT-001/2021",
      type: "link",
      subLabel: "Mã đấu thầu",
    },
    nguoiPhuTrach: {
      label: "Nguyễn Diệu Linh",
      type: "text",
      subLabel: "linhnd@fpt.com.vn",
    },
    maHSMT: {
      label: "HSMT_001/2022",
      type: "link",
      subLabel: "Mã HSMT",
    },
    goiThau: {
      label: "Gói thầu mua sắm",
      type: "text",
      subLabel: "Tên gói thầu",
    },
    phuongThucDauThau: {
      label: "Đấu thầu 1 GĐ",
      type: "text",
      subLabel: "Phương thức đấu thầu",
    },
    phuongThucDongThau: {
      label: "15/12/2022",
      type: "text",
      subLabel: "Phương thức đóng thầu",
    },
    trangThai: {
      label: "Hoàn thành",
      type: "status",
      subLabel: "success",
    },
    hanhDong: {
      label: "icon",
      type: "icon",
      subLabel: "",
    },
  },
];

const switchType = (type, status = null) => {
  if (type === "link") return "label-link";
  if (type === "text") return "label-text";
  if (type === "icon") return "label-icon";
  if (type === "status") {
    if (status === "inprogess") return "label-status label-status-inprogess";
    if (status === "open") return "label-status label-status-open";
    if (status === "success") return "label-status label-status-success";
    if (status === "close") return "label-status label-status-close";
  }
  return "";
};

const TableData = () => {
  return (
    <table className="table">
      <thead>
        <tr key={uuidv4()}>
          {rowTitle.map((item) => (
            <th key={uuidv4()}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datasColumn.map((item) => {
          return (
            <tr key={uuidv4()}>
              {Object.entries(item).map(([key, val]) => {
                return (
                  <td key={uuidv4()}>
                    <div className={switchType(val.type, val.subLabel)}>
                      {val.label === "icon" ? (
                        <svg
                          width="16"
                          height="4"
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0ZM10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4C9.10457 4 10 3.10457 10 2ZM14 0C15.1046 0 16 0.89543 16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2C12 0.89543 12.8954 0 14 0Z"
                            fill="black"
                          />
                        </svg>
                      ) : (
                        val.label
                      )}
                    </div>
                    {val.subLabel && val.type !== "status" ? (
                      <div className="label-sub-text">{val.subLabel}</div>
                    ) : (
                      ""
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
