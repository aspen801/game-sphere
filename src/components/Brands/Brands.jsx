import React from "react";

import acerLogo from "../../resources/svg/acerLogo.svg";
import asusLogo from "../../resources/svg/asusLogo.svg";
import corsairLogo from "../../resources/svg/corsairLogo.svg";
import lenovoLogo from "../../resources/svg/lenovoLogo.svg";
import samsungLogo from "../../resources/svg/samsungLogo.svg";
import sonyLogo from "../../resources/svg/sonyLogo.svg";
import "./Brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands_container">
        <p>Популярні бренди</p>
        <ul>
          <li>
            <img src={asusLogo} alt="LogoBrands" />
          </li>
          <li>
            <img src={sonyLogo} alt="LogoBrands" />
          </li>
          <li>
            <img src={lenovoLogo} alt="LogoBrands" />
          </li>
          <li>
            <img src={acerLogo} alt="LogoBrands" />
          </li>
          <li>
            <img src={samsungLogo} alt="LogoBrands" />
          </li>
          <li>
            <img src={corsairLogo} alt="LogoBrands" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brands;
