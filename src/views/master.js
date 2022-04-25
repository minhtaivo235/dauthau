import React from "react";
import Layout from "../components/layout";
import Search from "../components/search/search";
import BlockTable from "../components/table/table";

const Master = () => {
  return (
    <Layout>
      <h2 className="heading">Thông báo mời thầu </h2>
      <Search />
      <BlockTable />
    </Layout>
  );
};

export default Master;
