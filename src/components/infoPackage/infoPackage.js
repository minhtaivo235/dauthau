import React from "react";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import TableData from "../table/tableData";
import { datasColumn, rowTitle } from "./fakeData";
import "./infoPackage.scss";

const BtnAttach = () => {
  return (
    <div className="btn-attach">
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.97821 14.1798C6.20594 15.9438 3.33953 15.9438 1.56726 14.1798C-0.189087 12.4229 -0.189087 9.5767 1.56726 7.81979L7.94067 1.48979C9.27243 0.169418 11.4209 0.169418 12.7526 1.48979C13.3908 2.11964 13.75 2.97856 13.75 3.87479C13.75 4.77102 13.3908 5.62994 12.7526 6.25979L6.90471 12.0648C6.48156 12.4931 5.90432 12.7341 5.30198 12.7341C4.69963 12.7341 4.1224 12.4931 3.69924 12.0648C3.2752 11.6426 3.03685 11.0691 3.03685 10.471C3.03685 9.87295 3.2752 9.29947 3.69924 8.87729L7.40768 5.20229C7.47816 5.1313 7.57409 5.09137 7.67418 5.09137C7.77426 5.09137 7.8702 5.1313 7.94067 5.20229L8.34605 5.59979C8.41711 5.67021 8.45708 5.76605 8.45708 5.86604C8.45708 5.96603 8.41711 6.06188 8.34605 6.13229L4.63761 9.80729C4.32389 10.1836 4.34986 10.7369 4.69743 11.0822C5.045 11.4275 5.59901 11.4503 5.97385 11.1348L11.8218 5.33729C12.211 4.95146 12.4299 4.42634 12.4299 3.87854C12.4299 3.33075 12.211 2.80563 11.8218 2.41979C11.0078 1.61129 9.69304 1.61129 8.87904 2.41979L2.49062 8.74979C1.24987 9.99369 1.24987 12.0059 2.49062 13.2498C3.75182 14.4857 5.77113 14.4857 7.03233 13.2498L11.2738 9.04229C11.4232 8.89354 11.6649 8.89354 11.8143 9.04229L12.2121 9.43979C12.2847 9.50784 12.3259 9.60285 12.3259 9.70229C12.3259 9.80173 12.2847 9.89674 12.2121 9.96479L7.97821 14.1798Z"
          fill="#3F8CFF"
        />
      </svg>
      <span>Đính kèm</span>
    </div>
  );
};

const InfoPackage = () => {
  return (
    <div className="notify-invite background-white pb-2 mb-2 border-radius">
      <div className="notify-invite_label">
        <LabelDropdown content={"Thông tin gói thầu"} />
      </div>
      <BreakLine />
      <TableData rowTitle={rowTitle} datasColumn={datasColumn} />
      <BtnAttach />
    </div>
  );
};

export default InfoPackage;
