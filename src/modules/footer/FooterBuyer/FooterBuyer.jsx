import React, { useState } from "react";

import dropArrowFooter from "@resources/svg/dropArrowFooter.svg";

import "./FooterBuyer.scss";

const FooterBuyer = ({ modalInfo }) => {
  const [openBuyer, setOpenBuyer] = useState(false);
  return (
    <div className="footer_buyer">
      <div
        className="footer_buyer_text"
        onClick={() => setOpenBuyer(!openBuyer)}
      >
        <p>Покупцеві</p>
        <img src={dropArrowFooter} alt="dropArrowFooter" />
      </div>
      <ul
        className={openBuyer ? "footer_buyer_list active" : "footer_buyer_list"}
      >
        {modalInfo[modalInfo.length - 1].firstList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className="footer_line"></div>
    </div>
  );
};

export default FooterBuyer;
