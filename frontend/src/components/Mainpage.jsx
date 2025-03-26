import React from "react";
import "./Mainpage.scss";
import gureum from "../assets/gureum2.jpg";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="mainpage__header">🌤️ 구름월드에 오신 걸 환영합니다!</div>
      <div className="mainpage__content">
        <img src={gureum} alt="cute dog" className="mainpage__gif" />
        <p className="mainpage__text">오늘도 좋은 하루 되세요!</p>
      </div>
    </div>
  );
};

export default Mainpage;