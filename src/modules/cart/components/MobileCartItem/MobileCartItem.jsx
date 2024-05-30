import React from "react";

import Counter from "@common/Counter/Counter";
import laptop from "@resources/png/CartImage.png";
import Trash from "@resources/svg/Trash.svg";

import "./MobileCartItem.scss";

const MobileCartItem = () => {
  return (
    <div className="mobile-cart-item">
      <div className="mobile-cart-item__img">
        <img src={laptop} alt="laptop" />
        <div className="mobile-cart-item__container">
          <div className="mobile-cart-item__title">
            <div>
              <p>
                Ноутбук ASUS 16" ROG STRIX G16 G614JV-AS73/Intel
                I7-13650HX/16Gb/512SSD/GF 4060-8/W11H/Grey (G614JV-AS73)
              </p>
              <p>Код: 1443</p>
            </div>
            <img src={Trash} alt="Trash" />
          </div>
          <div className="mobile-cart-item__price">
            <Counter />
            <div>
              <div className="mobile-cart-item__discount">
                <p>
                  <strike>69 999 ₴</strike>
                </p>
                <p>-8000 ₴</p>
              </div>
              <p className="mobile-cart-item__text">61 999 ₴</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCartItem;
