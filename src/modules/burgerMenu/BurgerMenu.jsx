import React, { useState } from "react";

import Profile from "@resources/svg/Profile.svg";
import Balance from "@resources/svg/balance.svg";
import { useGetAllCategoriesQuery } from "@services/categories.api";
import useSvg from "@utils/giveSvg";

import "./BurgerMenu.scss";
import BurgerCatalogItem from "./components";

const BurgerMenu = ({ setOpenBurger }) => {
  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  const [open, setOpen] = useState(false);
  const [activeLng, setActiveLng] = useState("Укр");
  const [passiveLng, setPassiveLng] = useState("Eng");
  return (
    <div className="burger">
      <div className="burger_container">
        <div className="burger_language" onClick={() => setOpen(!open)}>
          <div style={{ display: "flex", alignItems: "end" }}>
            <p>{activeLng}</p>
            {useSvg("arrowDropLng")}
          </div>
          <p
            style={open ? { display: "block" } : { display: "none" }}
            onClick={() => {
              setActiveLng(passiveLng);
              setPassiveLng(activeLng);
            }}
          >
            {passiveLng}
          </p>
        </div>
        <ul>
          <li className="burger_item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Profile}
                style={{ marginRight: "16px" }}
                alt="Profile"
              />
              Профіль користувача
            </div>
          </li>
          <li className="burger_item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Balance}
                style={{ marginRight: "16px" }}
                alt="Balance"
              />
              Порівняння
            </div>
          </li>
          {data?.data.map((item, i) => (
            <BurgerCatalogItem
              setOpenBurger={setOpenBurger}
              item={item}
              index={i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
