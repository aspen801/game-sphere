import React from "react";
import "./Footer.scss";
import FooterDesktop from "./FooterDesktop/FooterDesktop";
import FooterTabs from "./FooterTabs/FooterTabs";
import FooterMobile from "./FooterMobile/FooterMobile";
import footerSotsRight from "../../resources/svg/footerSotsRight.svg";
import footerSotsLeft from "../../resources/svg/footerSotsLeft.svg";
const Footer = ({ modalInfo }) => {
  return (
    <div className="footer">
      <img src={footerSotsRight} alt="sots" className="footer_sots_right" />
      <img src={footerSotsLeft} alt="sots" className="footer_sots_left" />
      <div className="footer_desktop">
        <FooterDesktop modalInfo={modalInfo} />
      </div>
      <div className="footer_tabs">
        <FooterTabs modalInfo={modalInfo} />
      </div>
      <div className="footer_mobile">
        <FooterMobile modalInfo={modalInfo} />
      </div>
    </div>
  );
};

export default Footer;
