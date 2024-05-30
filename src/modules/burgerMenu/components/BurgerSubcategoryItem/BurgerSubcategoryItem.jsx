import React from "react";

import AppDrawer from "@common/AppDrawer/AppDrawer";
import BurgerLogoTab from "@resources/svg/Logo.svg";
import ArrowRight from "@resources/svg/arrowRightBurger.svg";
import { actions } from "@store/slices/secondNavigationId.slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./BurgerSubcategoryItem.scss";

const BurgerSubcategoryItem = ({
  setOpenBurger,
  isSubcategoryOpen,
  setIsSubcategoryOpen,
  item,
}) => {
  const dispatch = useDispatch();

  return (
    <AppDrawer
      titleContent={<img src={BurgerLogoTab} alt="Burger_logo" />}
      isOpen={isSubcategoryOpen}
      onClose={() => {
        setOpenBurger(false);
        setIsSubcategoryOpen(false);
      }}
    >
      <div className="burger_subcat_item">
        <div
          className="burger_subcat_item__text heading"
          onClick={() => {
            setIsSubcategoryOpen(false);
          }}
        >
          <img
            className="burger_subcat_item__text heading_arrow"
            src={ArrowRight}
            alt=""
          />
          <span>{item.name}</span>
        </div>

        {item.subcategories.map((subcategory) => {
          if (item.slug === "pokupcevi") {
            return (
              <Link
                onClick={(e) => {
                  setOpenBurger(false);
                  setIsSubcategoryOpen(false);
                  dispatch(actions.setSecondNavItem(subcategory.name));
                }}
                to={`/${item.slug}#${subcategory.slug}`}
              >
                <p className="burger_subcat_item__text">{subcategory.name}</p>
              </Link>
            );
          }
          return (
            <Link
              onClick={(e) => {
                setOpenBurger(false);
                setIsSubcategoryOpen(false);
                dispatch(actions.setSecondNavItem(subcategory.name));
              }}
              to={`catalog/${item.slug}/${subcategory.slug}`}
            >
              <p className="burger_subcat_item__text">{subcategory.name}</p>
            </Link>
          );
        })}
      </div>
    </AppDrawer>
  );
};

export default BurgerSubcategoryItem;
