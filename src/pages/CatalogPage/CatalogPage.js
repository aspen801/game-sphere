import React from "react";
import "./CatalogPage.scss";
import { NavigationCatalog } from "../../Components/NavigationCatalog/NavigationCatalog";
import CatalogGrid from "../../Components/CatalogGrid/CatalogGrid";
const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <div className="catalog-page__content">
        <NavigationCatalog />
        <div className="catalog-page__grid-section">
          <div className="catalog-page__filters"></div>
          <CatalogGrid />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
