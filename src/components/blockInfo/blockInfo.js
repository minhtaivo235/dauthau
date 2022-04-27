import React from "react";
import "./blockInfo.scss";

const BlockInfo = ({ label, children }) => {
  return (
    <div className="block-info">
      <div className="block-info_label">{label}</div>
      <div className="block-info_content">{children}</div>
    </div>
  );
};

export default BlockInfo;
