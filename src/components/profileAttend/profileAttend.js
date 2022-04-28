import React from "react";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import TableData from "../table/tableData";
import { datasColumn, rowTitle } from "./fakeData";

const ProfileAttend = () => {
  return (
    <div className="evaluation-criteria background-white mb-2 pb-2 border-radius">
      <div className="ml-3">
        <LabelDropdown content={"Hồ sơ dự thầu"} />
      </div>
      <BreakLine />
      <TableData rowTitle={rowTitle} datasColumn={datasColumn} />
    </div>
  );
};

export default ProfileAttend;
