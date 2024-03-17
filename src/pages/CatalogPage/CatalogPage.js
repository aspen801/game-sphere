import React, { useEffect } from "react";
import "./CatalogPage.scss";
import NavigationCatalog from "../../Components/NavigationCatalog/NavigationCatalog";
import CatalogMain from "../../Components/CatalogMain/CatalogMain";

import { useSelector } from "react-redux";

const CatalogPage = ({ modalInfo }) => {
  const NavItemText = useSelector((state) => state.NavigationIdSlice);
  // Условный фетч категорий происходит здесь
  useEffect(() => {
    fetch("https://game-store-stage.onrender.com/api/api-categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div className="catalog-page">
      <div className="catalog-page__content">
        <NavigationCatalog />
        <p className="catalog-page__title-text">{NavItemText}</p>
        <CatalogMain modalInfo={modalInfo} />
      </div>
    </div>
  );
};

export default CatalogPage;
