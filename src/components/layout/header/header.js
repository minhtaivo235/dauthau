import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.71 13.71L14.88 12.88C14.3172 12.3179 14.0007 11.5554 14 10.76V8C14 6.70178 13.5789 5.43858 12.8 4.4L11.9 3.2C11.3334 2.44458 10.4443 2 9.5 2H9V0.5C9 0.223858 8.77614 0 8.5 0H7.5C7.22386 0 7 0.223858 7 0.5V2H6.5C5.55573 2 4.66656 2.44458 4.1 3.2L3.2 4.4C2.42107 5.43858 2 6.70178 2 8V10.76C1.9993 11.5554 1.68277 12.3179 1.12 12.88L0.29 13.71C0.105256 13.8963 0.00110462 14.1477 0 14.41V15C0 15.5523 0.447715 16 1 16H15C15.5523 16 16 15.5523 16 15V14.41C15.9989 14.1477 15.8947 13.8963 15.71 13.71ZM12 14H4V8C4 7.13452 4.28071 6.29238 4.8 5.6L5.7 4.4C5.88885 4.14819 6.18524 4 6.5 4H9.5C9.81476 4 10.1111 4.14819 10.3 4.4L11.2 5.6C11.7193 6.29238 12 7.13452 12 8V14ZM8 20C9.10457 20 10 19.1046 10 18H6C6 19.1046 6.89543 20 8 20Z"
          fill="#4F4F4F"
        />
      </svg>
      <div className="user">
        <img src={"images/user.png"} className="user_img"></img>
        <div className="user_info">
          <div className="user_info-name">Vu Tuan</div>
          <div className="user_info-role">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
