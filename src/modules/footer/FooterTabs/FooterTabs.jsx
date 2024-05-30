import React from "react";

import Logo from "@resources/svg/Logo.svg";

import FooterBuyer from "../FooterBuyer/FooterBuyer";
import FooterCategories from "../FooterCategories/FooterCategories";
import FooterContacts from "../FooterContacts/FooterContacts";
import FooterSubmit from "../FooterSubmit/FooterSubmit";
import "./FooterTabs.scss";

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
