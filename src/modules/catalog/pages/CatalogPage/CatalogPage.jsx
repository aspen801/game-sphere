import React, { useEffect } from "react";

import CatalogMain from "@modules/catalog/components/CatalogMain/CatalogMain";
import NavigationCatalog from "@modules/common/Breadcrumbs/NavigationCatalog";
import { useSelector } from "react-redux";

import "./CatalogPage.scss";

const CatalogPage = ({ modalInfo }) => {
  const NavItemText = useSelector((state) => state.navigationIdSlice);
  // Условный фетч категорий происходит здесь
  useEffect(() => {
    fetch("https://game-store-stage.onrender.com/api/api-categories")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
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
