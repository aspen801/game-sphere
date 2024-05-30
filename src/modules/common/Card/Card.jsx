import React from "react";

import laptop from "@resources/png/laptop.png";
import balance from "@resources/svg/balanceCard.svg";
import balanceMobile from "@resources/svg/balanceCardMobile.svg";
import heart from "@resources/svg/heartCard.svg";
import heartMobile from "@resources/svg/heartCardMobile.svg";
import shoppingCartDesktop from "@resources/svg/shoppingCart.svg";
import shoppingCartMobile from "@resources/svg/shoppingCartMobile.svg";

import "./Card.scss";

const Card = ({ data }) => {
  return (
    <div className="сard">
      <img
        src={window.innerWidth <= 450 ? heartMobile : heart}
        alt="heart"
        className="card_likes"
      />
      <img
        src={window.innerWidth <= 450 ? balanceMobile : balance}
        alt="balance"
        className="card_balance"
      />

      <div className="card-info-container">
        <div className="card__image-container">
          <img
            src={data?.thumbnail || laptop}
            alt="product"
            className="main_img"
          />
        </div>

        <p className="code_text">
          <span>{`Код: ${data?.additional_code || "1234567"}`}</span>
        </p>
        <p className="main_text">{data?.title || "Default title"}</p>
        <div className="description">
          {data?.characteristics.slice(0, 4).map((item) => (
            <p>
              <span className="card_description_text special">{item.name}</span>
              {": "}
              {item.value}
            </p>
          ))}
        </div>
        <div className="buy">
          <div>
            <div className="discount">
              <p>
                <strike>69 999 ₴</strike>
              </p>
              <p>-8000 ₴</p>
            </div>
            <p className="price">61 999 ₴</p>
          </div>
          <a href="#" className="sell_btn">
            <img
              src={
                window.innerWidth <= 400
                  ? shoppingCartMobile
                  : shoppingCartDesktop
              }
              alt="shoppingCart"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
