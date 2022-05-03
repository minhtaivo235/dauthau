import React from "react";
import EvaluationCriteria from "../components/evaluationCriteria/evaluationCriteria";
import History from "../components/history/history";
import InfoPackage from "../components/infoPackage/infoPackage";
import InformationDetail from "../components/informationDetail/informationDetail";
import Layout from "../components/layout";
import NotifyInvite from "../components/notifyInvite/notifyInvite";
import ProfileAttend from "../components/profileAttend/profileAttend";
import QuoteDetail from "../components/quoteDetail/quoteDetail";

const FooterStepperRight = () => {
  return (
    <div className="footer-stepper_right">
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
        Gửi hồ sơ
      </button>
      <button className="btn-large">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.99984 0.666504C4.39746 0.666504 0.666504 4.39746 0.666504 8.99984C0.666504 13.6022 4.39746 17.3332 8.99984 17.3332C13.6022 17.3332 17.3332 13.6022 17.3332 8.99984C17.3332 6.7897 16.4552 4.67008 14.8924 3.10728C13.3296 1.54448 11.21 0.666504 8.99984 0.666504ZM8.99984 15.6665C5.31794 15.6665 2.33317 12.6817 2.33317 8.99984C2.33317 5.31794 5.31794 2.33317 8.99984 2.33317C12.6817 2.33317 15.6665 5.31794 15.6665 8.99984C15.6665 10.7679 14.9641 12.4636 13.7139 13.7139C12.4636 14.9641 10.7679 15.6665 8.99984 15.6665ZM11.1332 6.42484L11.5748 6.8665C11.6554 6.94211 11.7011 7.04768 11.7011 7.15817C11.7011 7.26866 11.6554 7.37423 11.5748 7.44984L10.0332 8.99984L11.5748 10.5498C11.6554 10.6254 11.7011 10.731 11.7011 10.8415C11.7011 10.952 11.6554 11.0576 11.5748 11.1332L11.1332 11.5748C11.0576 11.6554 10.952 11.7011 10.8415 11.7011C10.731 11.7011 10.6254 11.6554 10.5498 11.5748L8.99984 10.0332L7.44984 11.5748C7.37423 11.6554 7.26866 11.7011 7.15817 11.7011C7.04768 11.7011 6.94211 11.6554 6.8665 11.5748L6.42484 11.1332C6.34427 11.0576 6.29857 10.952 6.29857 10.8415C6.29857 10.731 6.34427 10.6254 6.42484 10.5498L7.9665 8.99984L6.42484 7.44984C6.34427 7.37423 6.29857 7.26866 6.29857 7.15817C6.29857 7.04768 6.34427 6.94211 6.42484 6.8665L6.8665 6.42484C6.94211 6.34427 7.04768 6.29857 7.15817 6.29857C7.26866 6.29857 7.37423 6.34427 7.44984 6.42484L8.99984 7.9665L10.5498 6.42484C10.6254 6.34427 10.731 6.29857 10.8415 6.29857C10.952 6.29857 11.0576 6.34427 11.1332 6.42484Z"
            fill="#3F8CFF"
          />
        </svg>
        Đóng
      </button>
    </div>
  );
};

const FooterStepperLeft = () => {
  return (
    <div className="footer-stepper_left">
      <ul className="footer-stepper_list">
        <li className="footer-stepper_item active">
          <div className="step">1</div>
          <div className="description">Nộp hồ sơ</div>
        </li>
        <li className="footer-stepper_item active">
          <div className="step">2</div>
          <div className="description">Đóng thầu</div>
        </li>
        <li className="footer-stepper_item">
          <div className="step">3</div>
          <div className="description">Mở thầu</div>
        </li>
        <li className="footer-stepper_item">
          <div className="step">4</div>
          <div className="description">Chấm thầu</div>
        </li>
        <li className="footer-stepper_item">
          <div className="step">5</div>
          <div className="description">Hoàn thành</div>
        </li>
        <li className="footer-stepper_item">
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 18C16.9707 18 21.0001 13.9706 21.0001 9C21.0001 4.02944 16.9707 0 12.0001 0C7.02953 0 3.0001 4.02944 3.0001 9H0.710096C0.574511 8.99803 0.444172 9.05234 0.350096 9.15L0.150096 9.35C0.0554401 9.44388 0.00219727 9.57168 0.00219727 9.705C0.00219727 9.83832 0.0554401 9.96612 0.150096 10.06L3.6801 13.6C3.87791 13.7918 4.19228 13.7918 4.3901 13.6L7.9201 10.06C8.01475 9.96612 8.068 9.83832 8.068 9.705C8.068 9.57168 8.01475 9.44388 7.9201 9.35L7.7201 9.15C7.62602 9.05234 7.49568 8.99803 7.3601 9H5.0001C5.0001 5.13401 8.1341 2 12.0001 2C15.8661 2 19.0001 5.13401 19.0001 9C19.0001 12.866 15.8661 16 12.0001 16C10.6179 16.0036 9.2663 15.5925 8.1201 14.82C7.92255 14.6876 7.65911 14.7127 7.4901 14.88L6.7701 15.61C6.66922 15.7136 6.61816 15.8559 6.6301 16C6.64286 16.148 6.71954 16.2831 6.8401 16.37C8.34893 17.4363 10.1525 18.0061 12.0001 18ZM11.1201 4.5C11.1201 4.22386 11.344 4 11.6201 4H12.3801C12.5127 4 12.6399 4.05268 12.7336 4.14645C12.8274 4.24021 12.8801 4.36739 12.8801 4.5V8.64L15.8001 11.56C15.8948 11.6539 15.948 11.7817 15.948 11.915C15.948 12.0483 15.8948 12.1761 15.8001 12.27L15.2701 12.8C15.1762 12.8947 15.0484 12.9479 14.9151 12.9479C14.7818 12.9479 14.654 12.8947 14.5601 12.8L11.2701 9.51C11.1785 9.41594 11.125 9.29122 11.1201 9.16V4.5Z"
              fill="#606060"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

const FooterStepper = () => {
  return (
    <div className="footer-stepper">
      <FooterStepperLeft />
      <FooterStepperRight />
    </div>
  );
};

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
          <ProfileAttend />
        </div>
        <div className="right-side">
          <History />
        </div>
      </div>
      {/* <QuoteDetail /> */}
      <FooterStepper />
    </Layout>
  );
};

export default NopHoSo;
