import React, { useRef, useState } from "react";

import AppDrawer from "@common/AppDrawer";
import useClickOutside from "@hooks/useClickOutSide";
import BurgerLogoTab from "@resources/svg/Logo.svg";
import arrow from "@resources/svg/arrow.svg";
import useSvg from "@utils/giveSvg";
import { Link, NavLink } from "react-router-dom";

import BurgerMenu from "../burgerMenu";
import MobileCart from "../cart/components/MobileCart/MobileCart";
import "./Header.scss";
import HeaderCart from "./components/HeaderCart/HeaderCart";

const Header = ({ modalInfo }) => {
  const [openLng, setOpenLng] = useState(false);
  const [activeLng, setActiveLng] = useState("Укр");
  const [passiveLng, setPassiveLng] = useState("Eng");
  const [openBurger, setOpenBurger] = useState(false);
  const [openContactPanel, setOpenContactPanel] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [likesHeart, setLikesHeart] = useState(0); // переробити на Redux
  const [shoppingCount, setShoppingCount] = useState(0); // переробити на Redux

  const contactRef = useRef();
  useClickOutside(contactRef, () => {
    setOpenContactPanel(false);
  });
  return (
    <header id="header">
      <AppDrawer
        titleContent={<img src={BurgerLogoTab} alt="Burger_logo" />}
        isOpen={openBurger}
        onClose={() => setOpenBurger(false)}
      >
        <BurgerMenu openBurger={openBurger} setOpenBurger={setOpenBurger} />
      </AppDrawer>
      <div className="container">
        <div className="nav">
          <a onClick={() => setOpenBurger(!openBurger)}>{useSvg("menu")}</a>
          <a>
            <Link to="./">{useSvg("logoSvg")}</Link>
          </a>
          <a>
            <Link to="./">{useSvg("LogoMobileSvg")}</Link>
          </a>
        </div>
        <div className="search_panel">
          <input type="text" placeholder="Шукати" className="input" />
          {useSvg("search")}
        </div>
        <div className="contact" ref={contactRef}>
          <div className="contact_information">
            <div className="number_panel">
              <p className="number">0 800 25 00 32</p>
              <img
                src={arrow}
                className="arrow"
                alt="arrow"
                onClick={() => setOpenContactPanel(!openContactPanel)}
              />
            </div>
            <p>Пн-Нд: 09:00-21:30</p>
          </div>
          <div
            className={
              openContactPanel ? "contact_panel active" : "contact_panel"
            }
          >
            <div className="network_icon">
              {useSvg("viber")}
              {useSvg("telegram")}
            </div>
            <a href="#" className="btn_call">
              Подзвоніть мені
            </a>
          </div>
        </div>
        <div className="catalog">
          <div className="language" onClick={() => setOpenLng(!openLng)}>
            <p className="language_text">{activeLng}</p>
            <p
              onClick={() => {
                setPassiveLng(activeLng);
                setActiveLng(passiveLng);
              }}
              className={openLng ? "language_switch active" : "language_switch"}
            >
              {passiveLng}
            </p>
            {openLng ? useSvg("arrowUpLng") : useSvg("arrowDropLng")}
          </div>
          {useSvg("profile")}
          {useSvg("phone")}
          <div className="likes">
            {useSvg("heart")}
            <p
              className="likes_count"
              style={
                likesHeart >= 1 ? { display: "block" } : { display: "none" }
              }
            >
              {likesHeart}
            </p>
          </div>
          {useSvg("balance")}
          <div className="shoppingCount">
            <NavLink
              className="shoppingCount"
              to={window.innerWidth >= 768 ? "/cart" : ""}
              onClick={() => {
                window.innerWidth >= 768
                  ? setIsOpenCart(false)
                  : setIsOpenCart(true);
              }}
              state="Кошик"
            >
              {useSvg("shoppingCart")}
              <p
                className="shopping_count"
                style={
                  shoppingCount >= 1
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                {shoppingCount}
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <HeaderCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
    </header>
  );
};

export default Header;
