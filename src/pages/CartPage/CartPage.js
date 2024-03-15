import React from "react";
import "./CartPage.scss";
import { useLocation } from "react-router-dom";
const CartPage = () => {
  console.log(useLocation());
  return <div className="cart-page">CartPage</div>;
};

export default CartPage;
