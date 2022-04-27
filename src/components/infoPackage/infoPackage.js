import React from "react";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import TableData from "../table/tableData";
import { datasColumn, rowTitle } from "./fakeData";

const InfoPackage = () => {
  return (
    <div className="notify-invite background-white pb-2 border-radius">
      <div className="notify-invite_label">
        <LabelDropdown content={"Thông tin gói thầu"} />
      </div>
      <BreakLine />
      <TableData rowTitle={rowTitle} datasColumn={datasColumn} />
    </div>
  );
};

export default InfoPackage;
