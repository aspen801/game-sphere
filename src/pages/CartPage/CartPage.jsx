import React from "react";
import "./CartPage.scss";
import NavigationCatalog from "../../components/NavigationCatalog/NavigationCatalog";
import Advantages from "../../components/Advantages/Advantages";
import CartPageItem from "../../components/CartPageItem/CartPageItem";
import arrow from "../../resources/svg/arrow.svg";
import { NavLink } from "react-router-dom";
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
      </div>
      <Advantages />
    </div>
  );
};

export default CartPage;
