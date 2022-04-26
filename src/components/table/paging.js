import React from "react";

const PageShow = () => {
  return (
    <>
      <div className="dropdown">
        <button>
          <span>8</span> <i class="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <span className="label-paging">Kết quả</span>
    </>
  );
};

const Paging = () => {
  return (
    <>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">
            <i class="fa-solid fa-angle-left"></i>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link active">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">...</a>
        </li>
        <li className="page-item">
          <a className="page-link">10</a>
        </li>
        <li className="page-item">
          <a className="page-link">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </ul>
      <PageShow />
    </>
  );
};

export default Paging;
