import React from "react";

import searchInputSvg from "@resources/svg/Search.svg";
import { useGetAllCategoriesQuery } from "@services/categories.api";
import { useLocation } from "react-router-dom";

import DropDown from "./DropDownMenu/DropDownComponent";
import "./NavigationMenu.scss";
import NavigationSkeleton from "./NavigationSkeleton/NavigationSkeleton";

const NavigationMenu = () => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

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
        {!isLoading && !isError && data?.data.length > 0 ? (
          <ul className="navigation-menu__item">
            {data?.data.map((item, i) => (
              <DropDown key={i} info={item} index={i} />
            ))}
          </ul>
        ) : (
          <NavigationSkeleton />
        )}

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
