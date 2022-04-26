import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const NavbarTop = () => {
  return (
    <div className="navbar-left-top">
      <img src={logo} alt="logo"></img>
      <h1 className="label">ePurchase</h1>
      <span className="icon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 0H5C6.10457 0 7 0.89543 7 2V5C7 6.10457 6.10457 7 5 7H2C0.89543 7 0 6.10457 0 5V2C0 0.89543 0.89543 0 2 0ZM2 5H5V2H2V5ZM16 0H13C11.8954 0 11 0.89543 11 2V5C11 6.10457 11.8954 7 13 7H16C17.1046 7 18 6.10457 18 5V2C18 0.89543 17.1046 0 16 0ZM13 5H16V2H13V5ZM7 13C7 11.8954 6.10457 11 5 11H2C0.89543 11 0 11.8954 0 13V16C0 17.1046 0.89543 18 2 18H5C6.10457 18 7 17.1046 7 16V13ZM2 16H5V13H2V16ZM16 11H13C11.8954 11 11 11.8954 11 13V16C11 17.1046 11.8954 18 13 18H16C17.1046 18 18 17.1046 18 16V13C18 11.8954 17.1046 11 16 11ZM13 16H16V13H13V16Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  );
};

const NavbarLabel = () => {
  return (
    <div className="navbar-label">
      <div className="navbar-label_title"> Đấu thầu</div>
      <div className="navbar-label_subtitle">
        Báo giá, đề nghị và phương án mua
      </div>
    </div>
  );
};

const NavbarLink = () => {
  return (
    <ul className="navbar-link">
      <li>
        <NavLink to="dau-thau" className="navbar-link_item active">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 4.05678e-05C17.7614 4.05678e-05 20 2.23862 20 5.00004C20.0044 6.0826 19.653 7.13663 19 8.00004V14C19 15.1046 18.1046 16 17 16H2C0.89543 16 0 15.1046 0 14V3.00004C0 1.89547 0.89543 1.00004 2 1.00004H12C12.8634 0.346997 13.9174 -0.00434526 15 4.05678e-05ZM14.62 2.00004C14.3439 2.00004 14.12 2.2239 14.12 2.50004V4.12004H12.5C12.2239 4.12004 12 4.3439 12 4.62004V5.38004C12 5.65618 12.2239 5.88004 12.5 5.88004H14.12V7.50004C14.12 7.77618 14.3439 8.00004 14.62 8.00004H15.38C15.6561 8.00004 15.88 7.77618 15.88 7.50004V5.88004H17.5C17.7761 5.88004 18 5.65618 18 5.38004V4.62004C18 4.3439 17.7761 4.12004 17.5 4.12004H15.88V2.50004C15.88 2.2239 15.6561 2.00004 15.38 2.00004H14.62ZM2 3.00004H10.42C10.1421 3.63014 9.99907 4.31139 10 5.00004C10.0026 5.33574 10.0361 5.67048 10.1 6.00004H2V3.00004ZM2 9.00004V14H17V9.58004C15.3528 10.3162 13.435 10.0937 12 9.00004H2Z"
              fill="#3F8CFF"
            />
          </svg>
          <span>Đấu thầu</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="thong-tin-ca-nhan" className="navbar-link_item ">
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
              d="M15 0H1C0.447715 0 0 0.447715 0 1V17.26C0.00368349 17.5248 0.107266 17.7784 0.29 17.97L2.18 19.85C2.27028 19.9471 2.3974 20.0016 2.53 20H2.82C2.9526 20.0016 3.07972 19.9471 3.17 19.85L5 18C5.09232 17.9058 5.21812 17.8519 5.35 17.85C5.48166 17.8529 5.60707 17.9067 5.7 18L7.51 19.81C7.60028 19.9071 7.7274 19.9616 7.86 19.96H8.15C8.2826 19.9616 8.40972 19.9071 8.5 19.81L10.32 18C10.4123 17.9058 10.5381 17.8519 10.67 17.85C10.7947 17.8579 10.9121 17.9113 11 18L12.81 19.81C12.9003 19.9071 13.0274 19.9616 13.16 19.96H13.45C13.5826 19.9616 13.7097 19.9071 13.8 19.81L15.71 18C15.8947 17.8137 15.9989 17.5623 16 17.3V1C16 0.447715 15.5523 0 15 0ZM11.5 8C11.7761 8 12 7.77614 12 7.5V6.5C12 6.22386 11.7761 6 11.5 6H4.5C4.22386 6 4 6.22386 4 6.5V7.5C4 7.77614 4.22386 8 4.5 8H11.5ZM8.5 12C8.77614 12 9 11.7761 9 11.5V10.5C9 10.2239 8.77614 10 8.5 10H4.5C4.22386 10 4 10.2239 4 10.5V11.5C4 11.7761 4.22386 12 4.5 12H8.5ZM13.34 17.52L14 16.86V2H2V16.84L2.68 17.52L3.91 16.29C4.09626 16.1053 4.34766 16.0011 4.61 16H6.06C6.32234 16.0011 6.57374 16.1053 6.76 16.29L8 17.53L9.29 16.29C9.47872 16.1028 9.7342 15.9985 10 16H11.4C11.6623 16.0011 11.9137 16.1053 12.1 16.29L12.44 16.63L12.6 16.79L13.34 17.52Z"
              fill="#333333"
            />
          </svg>

          <span>Thông tin cá nhân</span>
        </NavLink>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <div className="navbar-left">
      <NavbarTop />
      <NavbarLabel />
      <NavbarLink />
    </div>
  );
};

export default Navbar;
