import React from "react";

import "./FooterDesktop.scss";
import FooterSubmit from "../FooterSubmit/FooterSubmit";
import FooterCategories from "../FooterCategories/FooterCategories";
import FooterBuyer from "../FooterBuyer/FooterBuyer";
import FooterContacts from "../FooterContacts/FooterContacts";
import giveSvg from "../../../utils/svgFunction";

const FooterDesktop = ({ modalInfo }) => {
  return (
    <>
      <div className="footer_container">
        <div>
          {giveSvg("logoSvg")}
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
