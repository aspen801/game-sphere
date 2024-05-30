import React from "react";

import ButtonPurple from "@common/Button/ButtonPurple";

import "./CartTotalPriceMobile.scss";

const CartTotalPriceMobile = ({ onClose }) => {
  return (
    <div className="cart-total-price-mobile">
      <div className="cart-total-price-mobile__price">
        <p>Всього (2 од):</p>
        <p>239 599 ₴</p>
      </div>
      <ButtonPurple title={"Оформити замовлення"} width={660} padding={16} />
      <p onClick={onClose} className="cart-total-price-mobile__continue-buy">
        Продовжити покупки
      </p>
    </div>
  );
};

export default CartTotalPriceMobile;
