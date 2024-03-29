import React from "react";

import { useGetCategories } from "@/hooks/useCategories";
import { useLocation } from "react-router-dom";

import searchInputSvg from "../../resources/svg/Search.svg";
import DropDown from "../DropDownMenu/DropDownComponent";
import "./NavigationMenu.scss";

const NavigationMenu = () => {
  const { items } = useGetCategories();

  return (
    <nav
      className="navigation-menu"
      style={
        useLocation().pathname === "/cart"
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <div className="navigation-menu__container">
        <ul className="navigation-menu__item">
          {items?.map((item, i) => (
            <DropDown key={i} info={item} index={i} />
          ))}
        </ul>
        <div className="navigation-menu__search-panel">
          <input
            type="text"
            placeholder="Шукати"
            className="navigation-menu__search-panel-input"
          />
          <img
            src={searchInputSvg}
            alt="search"
            className="navigation-menu__search-panel-button"
          />
        </div>
      </div>
    </nav>
  );
};
export default NavigationMenu;
