import React from "react";
import "./FooterMobile.scss";
import Logo from "../../../resources/svg/Logo.svg";
import FooterSubmit from "../FooterSubmit/FooterSubmit";
import FooterContacts from "../FooterContacts/FooterContacts";
import FooterBuyer from "../FooterBuyer/FooterBuyer";
import FooterCategories from "../FooterCategories/FooterCategories";
const FooterMobile = ({ modalInfo }) => {
  return (
    <>
      <div className="footer_container_mobile">
        <div className="footer_submit">
          <img src={Logo} alt="logo" className="footer_logo_mobile" />
          {/* <FooterSubmit/> */}
        </div>
        <div className="footer_menu_mobile">
          <FooterCategories modalInfo={modalInfo} />
          <FooterBuyer modalInfo={modalInfo} />
        </div>
        <div className="footer_contacts_mobile">
          <FooterContacts />
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
