import React from "react";
import "./CatalogPage.scss";
import { NavigationCatalog } from "../../Components/NavigationCatalog/NavigationCatalog";
import CatalogGrid from "../../Components/CatalogGrid/CatalogGrid";
const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <div className="catalog-content">
        <NavigationCatalog />
        <div className="catalog-grid-section">
          <CatalogGrid />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
