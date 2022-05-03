import React from "react";
import Modal from "../modal/modal";
import { v4 as uuidv4 } from "uuid";
import TableData from "../table/tableData";
import { rowTitle, datasColumn } from "./quoteDetailFakeData";
import "./quoteDetail.scss";

const Total = () => {
  return (
    <>
      <div className="total mt-2 mb-3">
        <div className="total_row">
          <div className="label">Thành tiền:</div>
          <div className="price">1,000,000,000,000 VNĐ</div>
        </div>
        <div className="total_row mt-2">
          <div className="label">Thuế:</div>
          <div className="price">1,000,000,000 VNĐ</div>
        </div>
        <div className="total_row mt-2">
          <div className="label">Chi phí vận chuyển</div>
          <input
            type="text"
            className="price"
            placeholder="Nhập chi phí vận chuyển VNĐ"
          ></input>
        </div>
        <div className="total_row mt-2 result">
          <div className="label">Tổng tiền:</div>
          <div className="price">1,000,000,000,000 VNĐ</div>
        </div>
      </div>
      <div className="total-group-btn mb-2">
        <button className="btn-large btn-large-primary">Xác nhận</button>
        <button className="btn-large btn-large-danger">Đóng</button>
      </div>
    </>
  );
};

const QuoteDetail = () => {
  return (
    <Modal>
      <h3 className="quote-detail-label">Chi tiết báo giá</h3>
      <TableData rowTitle={rowTitle}>
        {datasColumn.map((item) => {
          return (
            <tr key={uuidv4()}>
              <td className="sanpham">
                <div className="sanpham_label">{item.sanPham.label}</div>
                <div className="sanpham_id">{item.sanPham.id}</div>
                <div className="sanpham_description">
                  {item.sanPham.description}
                </div>
              </td>
              <td className="soluong">
                <div className="soluong_total border-bottom">
                  {item.soLuong.total}
                </div>
                <div className="soluong_unit border-bottom mt-2">
                  {item.soLuong.unit}
                </div>
                <div className="soluong_result text-bold mt-2">
                  {item.soLuong.total + " " + item.soLuong.unit}
                </div>
              </td>
              <td className="dongia">
                <div className="dongia_total border-bottom">
                  {item.donGia.total}
                </div>
                <div className="dongia_unit mt-2">
                  <button className="select border-bottom">
                    <span>{item.donGia.unit[1]}</span>
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                  <span className="full-content border-bottom">
                    {item.donGia.total}
                  </span>
                </div>
                <div className="dongia_result mt-2">
                  {item.donGia.total + " " + item.donGia.unit[1]}
                </div>
              </td>
              <td className="thanhtien">
                <div className="thanhtien_unit text-bold">
                  {item.thanhTien.usd.label} <span>USD</span>
                </div>
                <div className="thanhtien_result mt-2 text-bold">
                  {item.thanhTien.vnd.label} <span>VND</span>
                </div>
              </td>
              <td className="thue">
                <div className="thue_unit">
                  <button className="select border-bottom full-content">
                    <span>{item.thue[0].label}</span>
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                </div>
                <div className="thue_result mt-2">{item.thue[0].value}</div>
              </td>
              <td className="tongtien">
                <div className="tongtien_unit text-bold">
                  {item.tongTien.usd.label} <span>USD</span>
                </div>
                <div className="tongtien_result mt-2 text-bold">
                  {item.thanhTien.vnd.label} <span>VND</span>
                </div>
              </td>
            </tr>
          );
        })}
      </TableData>
      <Total />
    </Modal>
  );
};

export default QuoteDetail;
