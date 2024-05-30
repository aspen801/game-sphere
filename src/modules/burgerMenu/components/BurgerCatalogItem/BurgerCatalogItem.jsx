import React, { useState } from "react";

import ArrowRight from "@resources/svg/arrowRightBurger.svg";
import { actions } from "@store/slices/navigationId.slice";
import transformGoogleLink from "@utils/transformGoogleLink";
import { useDispatch } from "react-redux";

import BurgerSubcategoryItem from "../BurgerSubcategoryItem/BurgerSubcategoryItem";
import "./BurgerCatalogItem.scss";

const BurgerCatalog = ({ item, setOpenBurger, index }) => {
  const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(false);
  const dispatch = useDispatch();

  if (item.slug === "akciji-i-propoziciji") {
    return (
      <li className="burger_item active">
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={(e) => dispatch(actions.setNavItem(e.target.innerText))}
        >
          <img
            src={transformGoogleLink(item.icon)}
            className="burger_icon"
            alt="Profile"
          />
          {item.name}
        </div>
        <img src={ArrowRight} alt="Arrow" />
      </li>
    );
  }

  return (
    <>
      <BurgerSubcategoryItem
        setOpenBurger={setOpenBurger}
        isSubcategoryOpen={isSubcategoryOpen}
        setIsSubcategoryOpen={setIsSubcategoryOpen}
        item={item}
      />

      <li
        onClick={() => {
          setIsSubcategoryOpen(true);
        }}
        className="burger_item"
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={(e) => dispatch(actions.setNavItem(e.target.innerText))}
        >
          <img
            src={transformGoogleLink(item.icon)}
            className="burger_icon"
            alt="Profile"
          />
          {item.name}
        </div>
        <img src={ArrowRight} alt="Arrow" />
      </li>
    </>
  );
};

export default BurgerCatalog;
