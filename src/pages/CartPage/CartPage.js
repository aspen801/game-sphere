import React from "react";
import "./CartPage.scss";
import { useLocation } from "react-router-dom";
import NavigationCatalog from "../../Components/NavigationCatalog/NavigationCatalog";
import Advantages from "../../Components/Advantages/Advantages";
import CartPageItem from "../../Components/CartPageItem/CartPageItem";
const CartPage = () => {
  console.log(useLocation());
  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <NavigationCatalog />
        <p className="cart-page__main-text">Кошик</p>
        <div className="cart-page__window">
          <div className="cart-page__info-text">
            <p>Продукт</p>
            <p>Кількість</p>
            <p>Сума</p>
          </div>
          <div className="cart-page__list">
            <CartPageItem />
          </div>
        </div>
      </div>
      <Advantages />
    </div>
  );
};

export default CartPage;
