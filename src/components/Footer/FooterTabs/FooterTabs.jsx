import React from "react";
import "./FooterTabs.scss";

import Logo from "../../../resources/svg/Logo.svg";
import FooterSubmit from "../FooterSubmit/FooterSubmit";
import FooterContacts from "../FooterContacts/FooterContacts";
import FooterBuyer from "../FooterBuyer/FooterBuyer";
import FooterCategories from "../FooterCategories/FooterCategories";
const FooterTabs = ({ modalInfo }) => {
  return (
    <>
      <div className="footer_container_tabs">
        <div className="footer_submit">
          <img src={Logo} alt="logo" className="footer_logo" />
          {/* <FooterSubmit/> */}
        </div>
        <div className="footer_info">
          <FooterContacts />
          <div className="footer_menu">
            <FooterBuyer modalInfo={modalInfo} />
            <FooterCategories modalInfo={modalInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTabs;
