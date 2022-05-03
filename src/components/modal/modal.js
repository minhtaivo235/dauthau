import React from "react";
import "./modal.scss";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal_overlay"></div>
      <div className="modal_body">{children}</div>
    </div>
  );
};

export default Modal;
