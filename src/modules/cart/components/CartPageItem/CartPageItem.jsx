import React from "react";

import Counter from "@common/Counter/Counter";
import laptop from "@resources/png/CartImage.png";
import Trash from "@resources/svg/Trash.svg";

import "./CartPageItem.scss";

const CartPageItem = () => {
  return (
    <>
      <div className="cart-page__item-line"></div>
      <div className="cart-page__item">
        <div className="cart-page__item-info">
          <div className="cart-page__item-about">
            <img src={laptop} alt="laptop" />
            <div className="cart-page__item-text">
              <strong>
                Ноутбук ASUS 16" ROG STRIX G16 G614JV-AS73/Intel
                I7-13650HX/16Gb/512SSD/GF 4060-8/W11H/Grey (G614JV-AS73)
              </strong>
              <p>Код: 1443</p>
            </div>
          </div>
          <Counter />
          <div className="cart-page__item-price">
            <div className="cart-page__item-price__trash">
              <div>
                <div className="cart-page__item-price__discount">
                  <p>
                    <strike>69 999 ₴</strike>
                  </p>
                  <p>-8000 ₴</p>
                </div>
                <p className="cart-page__item-price__text">61 999 ₴</p>
              </div>
              <img src={Trash} alt="Trash" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPageItem;
