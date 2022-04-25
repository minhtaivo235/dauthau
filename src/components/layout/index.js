import React from "react";
import Header from "./header/header";
import Navbar from "./navbar/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
