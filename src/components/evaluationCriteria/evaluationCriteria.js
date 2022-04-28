import React from "react";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import TableData from "../table/tableData";
import "./evaluationCriteria.scss";
import {
  rowTitleExp,
  datasColumnExp,
  datasColumnTech,
  rowTitleTech,
} from "./fakeData";

const BlockContent = ({ title, rowTitle, datasColumn }) => {
  return (
    <div className="evaluation-criteria_content">
      <div className="evaluation-criteria_content-title">{title}</div>
      <TableData rowTitle={rowTitle} datasColumn={datasColumn} />
    </div>
  );
};

const EvaluationCriteria = () => {
  return (
    <div className="evaluation-criteria background-white mb-2 pb-2 border-radius">
      <div className="ml-3">
        <LabelDropdown content={"Tiêu chí đánh giá"} />
      </div>
      <BreakLine />
      <BlockContent
        title={"Tiêu chí năng lực kinh nghiệm - Đạt"}
        rowTitle={rowTitleExp}
        datasColumn={datasColumnExp}
      />
      <BlockContent
        title={"Tiêu chí năng lực kỹ thuật (Biện pháp thi công)"}
        rowTitle={rowTitleTech}
        datasColumn={datasColumnTech}
      />
      <BlockContent
        title={"Tiêu chí năng lực tài chính"}
        rowTitle={rowTitleTech}
        datasColumn={datasColumnTech}
      />
    </div>
  );
};

export default EvaluationCriteria;
