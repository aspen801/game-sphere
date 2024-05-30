import React from "react";

import delivery from "@resources/svg/delivery.svg";
import deliveryMobile from "@resources/svg/deliveryMobile.svg";
import discountAdv from "@resources/svg/discountAdv.svg";
import discountAdvMobile from "@resources/svg/discountAdvMobile.svg";
import guarantee from "@resources/svg/guarantee.svg";
import guaranteeMobile from "@resources/svg/guaranteeMobile.svg";
import support from "@resources/svg/support.svg";
import supportMobile from "@resources/svg/supportMobile.svg";

import "./Advantages.scss";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="advantages_container">
        <div className="guarantee">
          <img
            src={window.innerWidth <= 400 ? guaranteeMobile : guarantee}
            alt="guarantee"
          />
          <p>
            Гарантія 3 <br /> роки
          </p>
        </div>
        <div className="delivery">
          <img
            src={window.innerWidth <= 400 ? deliveryMobile : delivery}
            alt="delivery"
          />
          <p>
            Безкоштовна <br /> доставка
          </p>
        </div>
        <div className="discount_adv">
          <img
            src={window.innerWidth <= 400 ? discountAdvMobile : discountAdv}
            alt="discountAdv"
          />
          <p>
            Знижки та
            <br />
            переваги
          </p>
        </div>
        <div className="support">
          <img
            src={window.innerWidth <= 400 ? supportMobile : support}
            alt="support"
          />
          <p>
            Сервісна
            <br />
            підтримка
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
