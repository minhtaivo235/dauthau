import React from "react";
import History from "../components/history/history";
import InformationDetail from "../components/informationDetail/informationDetail";
import Layout from "../components/layout";
import NotifyInvite from "../components/notifyInvite/notifyInvite";
import Search from "../components/search/search";

const NopHoSo = () => {
  return (
    <Layout>
      <h2 className="heading">Thông tin mời thầu </h2>
      <div className="wrap-content">
        <div className="full-content background-white border-radius">
          <InformationDetail />
          <NotifyInvite />
        </div>

        <History />
      </div>
    </Layout>
  );
};

export default NopHoSo;
