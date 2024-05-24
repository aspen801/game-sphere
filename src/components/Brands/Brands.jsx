import React from "react";

import acerLogo from "../../resources/svg/acerLogo.svg";
import asusLogo from "../../resources/svg/asusLogo.svg";
import corsairLogo from "../../resources/svg/corsairLogo.svg";
import lenovoLogo from "../../resources/svg/lenovoLogo.svg";
import samsungLogo from "../../resources/svg/samsungLogo.svg";
import sonyLogo from "../../resources/svg/sonyLogo.svg";
import { useGetPartnersQuery } from "../../services/homePage.api";
import transformGoogleLink from "../../utils/transformGoogleLink";
import "./Brands.scss";

const Brands = () => {
  const { data } = useGetPartnersQuery();

  return (
    <div className="brands">
      <div className="brands_container">
        <p>Популярні бренди</p>
        {data ? (
          <ul>
            {data?.data.map((item) => (
              <li>
                <img src={transformGoogleLink(item.images)} alt="LogoBrands" />
              </li>
            ))}
          </ul>
        ) : (
          <div>Placeholder</div>
        )}
      </div>
    </div>
  );
};

export default Brands;
