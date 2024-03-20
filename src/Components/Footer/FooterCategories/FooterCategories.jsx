import React, { useState } from "react";
import "./FooterCategories.scss";
import dropArrowFooter from "../../../resources/svg/dropArrowFooter.svg";
import { NavLink } from "react-router-dom";
import { actions } from "../../../store/slices/navigationId.slice";
import transliterateToURL from "../../../utils/transliteToUrl";
import { actions as SetIndexAction } from "../../../store/slices/setIndexNavItem.slice";
import { actions as secondAction } from "../../../store/slices/secondNavigationId.slice";
import { useDispatch } from "react-redux";
const FooterCategories = ({ modalInfo }) => {
  const [openCategories, setCategories] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="footer_categories_text"
        onClick={() => setCategories(!openCategories)}
      >
        <p>Категорії</p>
        <img src={dropArrowFooter} alt="dropArrowFooter" />
      </div>
      <ul
        className={
          openCategories
            ? "footer_categories_list active"
            : "footer_categories_list"
        }
      >
        {modalInfo.map((item, index) =>
          index === modalInfo.length - 1 ? null : (
            <NavLink
              to={`/catalog/${transliterateToURL(item.catalog)}`}
              onClick={(e) => {
                dispatch(actions.setNavItem(e.target.innerText));
                dispatch(SetIndexAction.SetIndexNavItem(index));
                dispatch(secondAction.setSecondNavItem(""));
              }}
              className="footer__links"
            >
              <li>{item.catalog}</li>
            </NavLink>
          )
        )}
      </ul>
      <div className="footer_line"></div>
    </div>
  );
};

export default FooterCategories;
