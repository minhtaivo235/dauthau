import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import "./table.scss";
import TableData from "./tableData";

const TableTop = () => {
  return (
    <div className="table-top">
      <div className="table-top_result">101 Kết quả</div>
      <div className="table-top_paging">
        <Pagination>
          <Pagination.Prev disabled />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>

          <Pagination.Next />
        </Pagination>
        <div className="table-top_paging-page">
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="8">
              8
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">10</Dropdown.Item>
              <Dropdown.Item href="#/action-2">20</Dropdown.Item>
              <Dropdown.Item href="#/action-3">50</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span>Kết quả</span>
        </div>
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
