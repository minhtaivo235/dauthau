import React from "react";
import EvaluationCriteria from "../components/evaluationCriteria/evaluationCriteria";
import History from "../components/history/history";
import InfoPackage from "../components/infoPackage/infoPackage";
import InformationDetail from "../components/informationDetail/informationDetail";
import Layout from "../components/layout";
import NotifyInvite from "../components/notifyInvite/notifyInvite";

const NopHoSo = () => {
  return (
    <Layout>
      <h2 className="heading">Thông tin mời thầu </h2>
      <div className="wrap-content">
        <div className="full-content ">
          <InformationDetail />
          <NotifyInvite />
          <InfoPackage />
          <EvaluationCriteria />
        </div>
        <div className="right-side">
          <History />
        </div>
      </div>
    </Layout>
  );
};

export default NopHoSo;
