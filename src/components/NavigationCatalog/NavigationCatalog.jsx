import React from "react";
import "./NavigationCatalog.scss";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../resources/svg/arrow.svg";
import { NavLink } from "react-router-dom";
import { actions as secondAction } from "../../store/slices/secondNavigationId.slice";

const NavigationCatalog = () => {
  const SecondNavItem = useSelector((state) => state.secondNavigation);
  const NavigationIdSlice = useSelector((state) => state.navigationIdSlice);
  const dispatch = useDispatch();

  return (
    <div className="nav_catalog">
      <div className="nav_catalog_container">
        <p className="links_active">
          <NavLink className="links_active" to="/">
            Головна
          </NavLink>
        </p>
        <img src={arrow} alt="arrow" />
        <p className={SecondNavItem !== "" ? "links_active" : "links"}>
          <NavLink
            className={SecondNavItem !== "" ? "links_active" : "links"}
            to={SecondNavItem !== "" ? ".." : ""}
            relative="path"
            onClick={() => dispatch(secondAction.setSecondNavItem(""))}
          >
            {NavigationIdSlice}
          </NavLink>
        </p>
        {SecondNavItem !== "" ? (
          <>
            <img src={arrow} alt="arrow" />
            <p className="links">{SecondNavItem}</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationCatalog;
