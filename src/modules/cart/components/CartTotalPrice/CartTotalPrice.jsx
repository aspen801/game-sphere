import React from "react";

import ButtonPurple from "@common/Button/ButtonPurple";
import pencil from "@resources/svg/pencil.svg";

import "./CartTotalPrice.scss";

const CartTotalPrice = () => {
  return (
    <div className="cart-total-price">
      <div className="cart-total-price__info">
        <div className="cart-total-price__title">
          <p>Ваше замовлення</p>
          <img src={pencil} alt="pencil" />
        </div>
        <ul className="cart-total-price__about-price">
          <li>
            <p>2 товара на суму</p>
            <p>263 359 ₴</p>
          </li>
          <li>
            <p>Знижка</p>
            <p>23 359 ₴</p>
          </li>
          <li>
            <p>Доставка</p>
            <p>За тарифами перевізника</p>
          </li>
        </ul>
        <p className="cart-total-price__promo-text">У мене є промокод</p>
      </div>
      <div className="cart-total-price__content-buy">
        <ul className="cart-total-price__about-price">
          <li>
            <p>Сума до оплати</p>
            <p>239 599 ₴</p>
          </li>
        </ul>
        <ButtonPurple title={"Оформити замовлення"} width={356} padding={16} />
      </div>
    </div>
  );
};

export default CartTotalPrice;
