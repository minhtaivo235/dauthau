import React from "react";
import BreakLine from "../breakLine/breakLine";
import LabelDropdown from "../labelDropdown/labelDropdown";
import TableData from "../table/tableData";
import { datasColumn, rowTitle } from "./fakeData";
import "./profileAttend.scss";

const ProfileOther = () => {
  return (
    <div className="profile-other">
      <div className="profile-other_label">Hồ sơ khác</div>
      <div className="profile-other_file">
        Hồ sơ bổ sung.rar{" "}
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2854 8.7002C10.3642 8.77844 10.4086 8.88494 10.4086 8.99604C10.4086 9.10714 10.3642 9.21364 10.2854 9.29187L9.70203 9.8752C9.62379 9.95408 9.51729 9.99845 9.40619 9.99845C9.29509 9.99845 9.1886 9.95408 9.11036 9.8752L5.41036 6.1752L1.71036 9.8752C1.63212 9.95408 1.52562 9.99845 1.41453 9.99845C1.30343 9.99845 1.19693 9.95408 1.11869 9.8752L0.535359 9.29187C0.456478 9.21364 0.412109 9.10714 0.412109 8.99604C0.412109 8.88494 0.456478 8.77844 0.535359 8.7002L4.23536 5.0002L0.535359 1.3002C0.456478 1.22197 0.412109 1.11547 0.412109 1.00437C0.412109 0.89327 0.456478 0.786772 0.535359 0.708536L1.11869 0.125202C1.19693 0.0463222 1.30343 0.00195313 1.41453 0.00195313C1.52562 0.00195313 1.63212 0.0463222 1.71036 0.125202L5.41036 3.8252L9.11036 0.125202C9.1886 0.0463222 9.29509 0.00195312 9.40619 0.00195312C9.51729 0.00195312 9.62379 0.0463222 9.70203 0.125202L10.2854 0.708536C10.3642 0.786772 10.4086 0.89327 10.4086 1.00437C10.4086 1.11547 10.3642 1.22197 10.2854 1.3002L6.58536 5.0002L10.2854 8.7002Z"
            fill="#F36363"
          />
        </svg>
      </div>
      <button className="btn-large btn-large-primary">Upload file</button>
    </div>
  );
};

const BlockLabel = ({
  title,
  haveBtn = false,
  contentBtn = null,
  rowData,
  columnData,
}) => {
  return (
    <div className="profile-attend_content">
      <div className="profile-attend_content-title">
        <span>{title}</span>
        {haveBtn && (
          <button className="btn-large btn-large-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1464 0.623072L15.3627 0.839645C15.4826 0.948974 15.528 1.11802 15.4792 1.27279L10.4528 15.2251C10.3932 15.39 10.2369 15.4999 10.0617 15.5H9.92853C9.76511 15.5 9.61622 15.406 9.54572 15.2584L6.7246 9.26935L0.741162 6.44557C0.593726 6.375 0.499862 6.22598 0.499828 6.0624V5.92912C0.48509 5.74171 0.597614 5.56764 0.77445 5.5043L14.7136 0.506456C14.7604 0.497848 14.8083 0.497848 14.8551 0.506456C14.9637 0.505803 15.0682 0.547652 15.1464 0.623072ZM8.82172 9.76913L9.84531 11.9848L13.1075 2.88043L4.01167 6.14569L6.22529 7.17025C6.84122 7.48999 7.59071 7.39373 8.10604 6.92869L9.51243 5.62925C9.67317 5.47588 9.92591 5.47588 10.0866 5.62925L10.4029 5.94578C10.5561 6.10667 10.5561 6.35964 10.4029 6.52053L9.10466 7.92826C8.64446 8.42688 8.53253 9.15512 8.82172 9.76913Z"
                fill="white"
              />
            </svg>
            {contentBtn}
          </button>
        )}
      </div>
      <TableData rowTitle={rowData} datasColumn={columnData} />
    </div>
  );
};

const ProfileAttend = () => {
  return (
    <div className="profile-attend background-white mb-2 pb-2 border-radius">
      <div className="ml-3">
        <LabelDropdown content={"Hồ sơ dự thầu"} />
      </div>
      <BreakLine />
      <BlockLabel
        title={"Hồ sơ năng lực kinh nghiệm"}
        rowData={rowTitle}
        columnData={datasColumn}
      />
      <BlockLabel
        title={"Hồ sơ năng lực kỹ thuật"}
        rowData={rowTitle}
        columnData={datasColumn}
      />
      <BlockLabel
        title={"Hồ sơ năng lực tài chính"}
        rowData={rowTitle}
        columnData={datasColumn}
        haveBtn={true}
        contentBtn={"Báo giá"}
      />
      <ProfileOther />
    </div>
  );
};

export default ProfileAttend;
