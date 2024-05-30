import React, { useRef, useState } from "react";

import useClickOutside from "@hooks/useClickOutSide";
import arrowCatalog from "@resources/svg/arrowCatalog.svg";
import { actions } from "@store/slices/navigationId.slice";
import { actions as secondAction } from "@store/slices/secondNavigationId.slice";
import { actions as SetIndexAction } from "@store/slices/setIndexNavItem.slice";
import transformGoogleLink from "@utils/transformGoogleLink";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import "./DropDownComponent.scss";

const DropDown = ({ info, index }) => {
  const { id, name, slug, status, subcategories, image } = info;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const menuRef = useRef();

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  if (slug === "akciji-i-propoziciji") {
    return (
      <div>
        <li className="dropdown-component__button special">
          <a>{name}</a>
        </li>
      </div>
    );
  }

  if (slug === "pokupcevi") {
    return (
      <>
        <div>
          <li
            className="dropdown-component__button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <a
              onClick={(e) => {
                dispatch(SetIndexAction.SetIndexNavItem(index));
                dispatch(actions.setNavItem(e.target.innerText));
              }}
            >
              {name}
            </a>
          </li>
        </div>

        <div className={`dropdown-component ${isOpen && "active"}`}>
          <div className="dropdown-component__modal" ref={menuRef}>
            <div className="dropdown-component__modal-list">
              <ul className="dropdown-component__modal-list-items">
                {subcategories.map((item, index) => {
                  return (
                    <li onClick={() => setIsOpen(false)}>
                      <NavLink
                        className="dropdown-component__modal-list-item"
                        onClick={(e) => {
                          dispatch(
                            secondAction.setSecondNavItem(e.target.innerText),
                          );
                        }}
                        to={`/${slug}/#${item.slug}`}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`background_click ${isOpen && "active"}`}
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>
      </>
    );
  }

  return (
    <>
      <div>
        <li
          className="dropdown-component__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <a
            onClick={(e) => {
              dispatch(SetIndexAction.SetIndexNavItem(index));
              dispatch(actions.setNavItem(e.target.innerText));
            }}
          >
            {name}
          </a>
        </li>
      </div>

      <div className={`dropdown-component ${isOpen && "active"}`}>
        <div className="dropdown-component__modal" ref={menuRef}>
          <div className="dropdown-component__modal-list">
            <ul className="dropdown-component__modal-list-items">
              {subcategories.map((item, index) => {
                if (subcategories.length - 1 === index)
                  return (
                    <li key={id}>
                      <NavLink
                        className="dropdown-component__modal-list-item last"
                        onClick={() => {
                          setIsOpen(false);
                          dispatch(secondAction.setSecondNavItem(""));
                        }}
                        to={`/catalog/${slug}`}
                      >
                        {info.name}
                      </NavLink>
                      <img src={arrowCatalog} alt="arrowCatalog" />
                    </li>
                  );
                return (
                  <li onClick={() => setIsOpen(false)}>
                    <NavLink
                      className="dropdown-component__modal-list-item"
                      onClick={(e) => {
                        dispatch(
                          secondAction.setSecondNavItem(e.target.innerText),
                        );
                      }}
                      to={`/catalog/${slug}/${item.slug}`}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <img src={transformGoogleLink(image)} alt="" />
        </div>
      </div>
      <div
        className={`background_click ${isOpen && "active"}`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </>
  );
};

export default DropDown;
