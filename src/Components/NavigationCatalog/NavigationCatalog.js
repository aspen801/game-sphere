import React from "react";
import "./NavigationCatalog.scss";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../resources/svg/arrow.svg";
import { NavLink } from "react-router-dom";
import { actions as secondAction } from "../../Features/slices/SecondNavigationId.slice";

export const NavigationCatalog = () => {
  const navCatalog = useSelector((state) => state.NavigationIdSlice);
  const SecondNav = useSelector((state) => state.SecondNavigation);
  const stat = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(stat)
  return (
    <div className="nav_catalog">
      <div className="nav_catalog_container">
        <p className="links_active">
          <NavLink className="links_active" to="/">
            Головна
          </NavLink>
        </p>
        <img src={arrow} alt="arrow" />
        <p className={SecondNav !== "" ? "links_active" : "links"}>
          <NavLink
            className={SecondNav !== "" ? "links_active" : "links"}
            to={SecondNav !== "" ? ".." : ""}
            relative="path"
            onClick={() => dispatch(secondAction.setSecondNavItem(""))}
          >
            {navCatalog}
          </NavLink>
        </p>
        {SecondNav !== "" ? (
          <>
            <img src={arrow} alt="arrow" />
            <p className="links">{SecondNav}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};
