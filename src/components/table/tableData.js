import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./table.scss";

const switchType = (type, status = null) => {
  if (type === "withImage") return "label-with-image";
  if (type === "link") return "label-link";
  if (type === "text") return "label-text";
  if (type === "icon") return "label-icon";
  if (type === "checkbox") {
    if (status) return "label-checkbox active";
    return "label-checkbox";
  }

  if (type === "status") {
    if (status === "inprogess") return "label-status label-status-inprogess";
    if (status === "open") return "label-status label-status-open";
    if (status === "success") return "label-status label-status-success";
    if (status === "close") return "label-status label-status-close";
  }
  return "label-default";
};

const TableData = ({ rowTitle, datasColumn, children }) => {
  return (
    <table className="table">
      <thead>
        <tr key={uuidv4()}>
          {rowTitle.map((item) => (
            <th key={uuidv4()}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default TableData;
