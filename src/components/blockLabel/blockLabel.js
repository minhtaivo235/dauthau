import React from "react";
import BreakLine from "../breakLine/breakLine";
import "./blockLabel.scss";

const BlockLabel = ({ label, content, width = "100%", icon = null }) => {
  return (
    <div style={{ width }} className="block-label">
      <div className="block-label_label">{label}</div>
      <div className="block-label_content">
        <span className="block-label_content-text">{content}</span>
        {/* {icon && <i class={icon}></i>} */}
        {icon && (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.79048 0.25H13.9581C14.7981 0.25 15.479 0.921573 15.479 1.75V10.75C15.479 11.5784 14.7981 12.25 13.9581 12.25H10.0873C9.88776 12.2508 9.69658 12.3289 9.55493 12.4675L8.42183 13.585C8.31497 13.6905 8.16999 13.7499 8.01877 13.75H7.72979C7.57858 13.7499 7.4336 13.6905 7.32674 13.585L6.19363 12.4675C6.05199 12.3289 5.8608 12.2508 5.6613 12.25H1.79048C0.950484 12.25 0.269531 11.5784 0.269531 10.75V1.75C0.269531 0.921573 0.950484 0.25 1.79048 0.25ZM10.0873 10.75H13.9581V1.75H1.79048V10.75H5.6613C6.26617 10.7505 6.84607 10.9879 7.27351 11.41L7.87428 12.0025L8.47506 11.41C8.9025 10.9879 9.4824 10.7505 10.0873 10.75ZM3.69167 8.5H9.015C9.22499 8.5 9.39523 8.33211 9.39523 8.125V7.375C9.39523 7.16789 9.22499 7 9.015 7H3.69167C3.48167 7 3.31143 7.16789 3.31143 7.375V8.125C3.31143 8.33211 3.48167 8.5 3.69167 8.5ZM12.0569 5.5H3.69167C3.48167 5.5 3.31143 5.33211 3.31143 5.125V4.375C3.31143 4.16789 3.48167 4 3.69167 4H12.0569C12.2669 4 12.4371 4.16789 12.4371 4.375V5.125C12.4371 5.33211 12.2669 5.5 12.0569 5.5Z"
              fill="#35455C"
            />
          </svg>
        )}
      </div>
      <BreakLine />
    </div>
  );
};

export default BlockLabel;
