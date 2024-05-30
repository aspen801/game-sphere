import React from "react";

import useWindowSize from "@hooks/useWindowSize";
import BannerSotsLeft2 from "@resources/png/BannerSotsLeft2.png";
import BannerSotsLeft from "@resources/png/BannerSotsLeft.png";
import BannerSotsRight2 from "@resources/png/BannerSotsRight2.png";
import BannerSotsRight from "@resources/png/BannerSotsRight.png";
import OfBannerPC from "@resources/png/OfBannerPC.png";

import "./SpecialOfferBanner.scss";

const SpecialOfferBanner = () => {
  const windowSize = useWindowSize();

  return (
    <div className="of-banner">
      <div className="of-banner__sots left">
        <img
          src={windowSize.width > 768 ? BannerSotsLeft : BannerSotsLeft2}
        ></img>
      </div>
      <div className="of-banner__sots right">
        <img
          src={windowSize.width > 768 ? BannerSotsRight : BannerSotsRight2}
        ></img>
      </div>
      <div className="of-banner__discount-amount">до -40%</div>
      <div className="of-banner__info-container">
        <div className="of-banner__image">
          <img src={OfBannerPC}></img>
        </div>
        <div className="of-banner__text">
          <div>
            <p className="of-banner__title">Геймінг без меж</p>
            <p className="of-banner__subtitle">
              Акційні пропозиції на всю лінійку ПК ARTLINE
            </p>
          </div>
          {/* <button>Дивитись акційні пропозиції</button> */}
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
