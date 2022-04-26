import React from "react";
import Paging from "./paging";
import "./table.scss";
import TableData from "./tableData";

const TableTop = () => {
  return (
    <div className="table-top">
      <div className="table-top_result">101 Kết quả</div>
      <div className="table-top_paging">
        <Paging />
      </div>
    </div>
  );
};

const BlockTable = () => {
  return (
    <div className="block-table">
      <TableTop />
      <TableData />
    </div>
  );
};

export default BlockTable;
