import React from "react";
import "./search.scss";

const BlockFilter = () => {
  return (
    <div className="block-filter">
      <div className="block-filter_list">
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
        <div className="block-filter_item">
          <label>Mã đấu thầu</label>
          <input type="text" placeholder="Nhập mã đấu thầu"></input>
        </div>
      </div>
    </div>
  );
};

const BtnFilter = () => {
  return (
    <div className="btn-filter">
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 12H6C6.27614 12 6.5 12.2239 6.5 12.5V13.5C6.5 13.7761 6.27614 14 6 14H1C0.723858 14 0.5 13.7761 0.5 13.5V12.5C0.5 12.2239 0.723858 12 1 12H2.5V0.5C2.5 0.223858 2.72386 0 3 0H4C4.27614 0 4.5 0.223858 4.5 0.5V12ZM9 18C8.72386 18 8.5 17.7761 8.5 17.5V6H10.5V17.5C10.5 17.7761 10.2761 18 10 18H9ZM4.5 16H2.5V17.5C2.5 17.7761 2.72386 18 3 18H4C4.27614 18 4.5 17.7761 4.5 17.5V16ZM14.5 17.5C14.5 17.7761 14.7239 18 15 18H16C16.2761 18 16.5 17.7761 16.5 17.5V12H14.5V17.5ZM12.5 2.5C12.5 2.22386 12.2761 2 12 2H10.5V0.5C10.5 0.223858 10.2761 0 10 0H9C8.72386 0 8.5 0.223858 8.5 0.5V2H7C6.72386 2 6.5 2.22386 6.5 2.5V3.5C6.5 3.77614 6.72386 4 7 4H12C12.2761 4 12.5 3.77614 12.5 3.5V2.5ZM16.5 8H18C18.2761 8 18.5 8.22386 18.5 8.5V9.5C18.5 9.77614 18.2761 10 18 10H13C12.7239 10 12.5 9.77614 12.5 9.5V8.5C12.5 8.22386 12.7239 8 13 8H14.5V0.5C14.5 0.223858 14.7239 0 15 0H16C16.2761 0 16.5 0.223858 16.5 0.5V8Z"
          fill="#3F8CFF"
        />
      </svg>
      <span>Bộ lọc</span>
    </div>
  );
};

const InputSearch = () => {
  return (
    <div className="input-search">
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.875 12.4554L17.875 16.4602C18.0536 16.6589 18.0448 16.9631 17.855 17.1511L17.155 17.8519C17.0611 17.9467 16.9333 18 16.8 18C16.6667 18 16.5389 17.9467 16.445 17.8519L12.445 13.8471C12.3344 13.7362 12.234 13.6156 12.145 13.4867L11.395 12.4855C10.1541 13.4776 8.61304 14.0178 7.025 14.0173C3.75261 14.0287 0.909021 11.7686 0.177728 8.5751C-0.553566 5.38161 1.0226 2.10699 3.9731 0.689914C6.92359 -0.727158 10.461 0.0915127 12.491 2.66125C14.521 5.23099 14.5019 8.86596 12.445 11.4142L13.445 12.105C13.6012 12.2051 13.7454 12.3226 13.875 12.4554ZM2.025 7.00887C2.025 9.77362 4.26357 12.0149 7.025 12.0149C8.35108 12.0149 9.62285 11.4875 10.5605 10.5487C11.4982 9.60985 12.025 8.33655 12.025 7.00887C12.025 4.24411 9.78642 2.00284 7.025 2.00284C4.26357 2.00284 2.025 4.24411 2.025 7.00887Z"
          fill="#3F8CFF"
        />
      </svg>

      <input
        type="text"
        className="input-search__text"
        placeholder="Nhập nội dung tìm kiếm..."
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <InputSearch />
      <BtnFilter />
      <BlockFilter />
    </div>
  );
};

export default Search;
