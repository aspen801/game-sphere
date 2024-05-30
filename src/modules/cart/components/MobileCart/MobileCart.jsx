import React from "react";

import MobileCartItem from "../MobileCartItem/MobileCartItem";
import "./MobileCart.scss";

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
