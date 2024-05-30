import React from "react";

import useSvg from "@utils/giveSvg";

import FooterBuyer from "../FooterBuyer/FooterBuyer";
import FooterCategories from "../FooterCategories/FooterCategories";
import FooterContacts from "../FooterContacts/FooterContacts";
import FooterSubmit from "../FooterSubmit/FooterSubmit";
import "./FooterDesktop.scss";

const FooterDesktop = ({ modalInfo }) => {
  return (
    <>
      <div className="footer_container">
        <div>
          {useSvg("logoSvg")}
          <FooterSubmit />
        </div>
        <div>
          <FooterCategories modalInfo={modalInfo} />
        </div>
        <div>
          <FooterBuyer modalInfo={modalInfo} />
        </div>
        <div>
          <FooterContacts />
        </div>
      </div>
    </>
  );
};

export default FooterDesktop;
