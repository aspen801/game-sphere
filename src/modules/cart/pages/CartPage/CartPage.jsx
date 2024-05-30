import React from "react";

import CartPageItem from "@modules/cart/components/CartPageItem/CartPageItem";
import CartTotalPrice from "@modules/cart/components/CartTotalPrice/CartTotalPrice";
import Advantages from "@modules/home/components/Advantages/Advantages";
import arrow from "@resources/svg/arrow.svg";
import { NavLink } from "react-router-dom";

import "./CartPage.scss";

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <div className="nav_catalog_container">
          <p className="links_active">
            <NavLink className="links_active" to="/">
              Головна
            </NavLink>
          </p>
          <img src={arrow} alt="arrow" />
          <p className="links">
            <NavLink className="links" relative="path">
              Кошик
            </NavLink>
          </p>
        </div>
        <p className="cart-page__main-text">Кошик</p>
        <div className="cart-page__content">
          <div className="cart-page__window">
            <div className="cart-page__info-text">
              <p>Продукт</p>
              <p>Кількість</p>
              <p>Сума</p>
            </div>
            <div className="cart-page__list">
              <CartPageItem />
              <CartPageItem />
              <CartPageItem />
            </div>
          </div>
          <CartTotalPrice />
        </div>
      </div>
      <Advantages />
    </div>
  );
};

export default CartPage;
