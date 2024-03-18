import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CatalogSubcategoryMenu.scss";
import { NavLink } from "react-router-dom";
import { actions as secondAction } from "../../Features/slices/SecondNavigationId.slice";
import transliterateToURL from "../../layouts/TransliteToUrl";

const CatalogSubcategoryMenu = ({ modalInfo }) => {
  const index = localStorage.getItem("NavItem");
  const dispatch = useDispatch();
  const { firstList, id } = modalInfo[index];

  return (
    <div className="catalog-subcategory-menu">
      <ul className="catalog-subcategory-menu__list">
        {firstList.map((item, index) => {
          if (firstList.length - 1 === index) {
            return null;
          }

          return (
            <li className="catalog-subcategory-menu__item">
              <NavLink
                className="catalog-subcategory-menu__item-link"
                onClick={(e) =>
                  dispatch(secondAction.setSecondNavItem(e.target.innerText))
                }
                to={`/catalog/${id}/${transliterateToURL(item)}`}
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatalogSubcategoryMenu;
