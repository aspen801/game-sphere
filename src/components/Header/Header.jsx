import React, { useRef, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import useClickOutside from "../../hooks/useClickOutSide";
import BurgerLogoMob from "../../resources/svg/BurgerLogoMob.svg";
import BurgerLogoTab from "../../resources/svg/Logo.svg";
import arrow from "../../resources/svg/arrow.svg";
import giveSvg from "../../utils/svgFunction";
import BurgerLink from "../BurgerLink/BurgerLink";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import CartTotalPriceMobile from "../CartTotalPriceMobile/CartTotalPriceMobile";
import MobileCart from "../MobileCart/MobileCart";
import AppDrawer from "../ui/AppDrawer/AppDrawer";
import "./Header.scss";

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
          <a onClick={() => setOpenBurger(!openBurger)}>{giveSvg("menu")}</a>
          <a>
            <Link to="./">{giveSvg("logoSvg")}</Link>
          </a>
          <a>
            <Link to="./">{giveSvg("LogoMobileSvg")}</Link>
          </a>
        </div>
        <div className="search_panel">
          <input type="text" placeholder="Шукати" className="input" />
          {giveSvg("search")}
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
              {giveSvg("viber")}
              {giveSvg("telegram")}
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
            {openLng ? giveSvg("arrowUpLng") : giveSvg("arrowDropLng")}
          </div>
          {giveSvg("profile")}
          {giveSvg("phone")}
          <div className="likes">
            {giveSvg("heart")}
            <p
              className="likes_count"
              style={
                likesHeart >= 1 ? { display: "block" } : { display: "none" }
              }
            >
              {likesHeart}
            </p>
          </div>
          {giveSvg("balance")}
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
              {giveSvg("shoppingCart")}
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
      <AppDrawer
        titleContent={<p></p>}
        isOpen={isOpenCart}
        onClose={() => setIsOpenCart(false)}
        anchor={"left"}
        renderLine={false}
      >
        <MobileCart />
        <CartTotalPriceMobile onClose={() => setIsOpenCart(false)} />
      </AppDrawer>
    </header>
  );
};

export default Header;
