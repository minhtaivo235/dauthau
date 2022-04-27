import React from "react";
import "./labelDropdown.scss";

const LabelDropdown = ({ content }) => {
  return (
    <div className="label-dropdown">
      <span className="label-dropdown_content">{content}</span>
      <i className="fa-solid fa-caret-down"></i>
    </div>
  );
};

export default LabelDropdown;
