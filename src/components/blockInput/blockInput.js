import React from "react";
import BreakLine from "../breakLine/breakLine";
import "./blockInput.scss";

const BlockInput = ({
  label,
  content,
  width = "100%",
  icon = null,
  isRequire = false,
}) => {
  return (
    <div style={{ width }} className="block-input">
      <div className="block-input_label">
        {label}
        {isRequire && <span className="block-input_label-require">*</span>}
      </div>
      <div className="block-input_content">
        <input
          type="text"
          placeholder={content}
          className="block-input_content-input"
        ></input>
        {/* {icon && <i class={icon}></i>} */}
        {icon && (
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 2.78523H16C17.1046 2.78523 18 3.63828 18 4.69057V17.0753C18 18.1276 17.1046 18.9807 16 18.9807H2C0.89543 18.9807 0 18.1276 0 17.0753V4.69057C0 3.63828 0.89543 2.78523 2 2.78523H3V1.35622C3 1.09315 3.22386 0.879883 3.5 0.879883H4.5C4.77614 0.879883 5 1.09315 5 1.35622V2.78523H13V1.35622C13 1.09315 13.2239 0.879883 13.5 0.879883H14.5C14.7761 0.879883 15 1.09315 15 1.35622V2.78523ZM2 17.0753H16V6.59592H2V17.0753ZM4.5 14.2173H9.5C9.77614 14.2173 10 14.004 10 13.741V12.7883C10 12.5252 9.77614 12.3119 9.5 12.3119H4.5C4.22386 12.3119 4 12.5252 4 12.7883V13.741C4 14.004 4.22386 14.2173 4.5 14.2173ZM13.5 10.4066H4.5C4.22386 10.4066 4 10.1933 4 9.93027V8.9776C4 8.71452 4.22386 8.50126 4.5 8.50126H13.5C13.7761 8.50126 14 8.71452 14 8.9776V9.93027C14 10.1933 13.7761 10.4066 13.5 10.4066Z"
              fill="#333333"
            />
          </svg>
        )}
      </div>
      <BreakLine />
    </div>
  );
};

export default BlockInput;
