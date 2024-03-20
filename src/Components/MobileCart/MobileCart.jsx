import React from "react";
import "./MobileCart.scss";
import MobileCartItem from "../MobileCartItem/MobileCartItem";
const MobileCart = () => {
  return (
    <div className="mobile-cart">
      <div className="mobile-cart__title">
        <p>Ваше замовлення</p>
        <p>Очистити кошик</p>
      </div>
      <MobileCartItem />
      <MobileCartItem />
    </div>
  );
};

export default MobileCart;
