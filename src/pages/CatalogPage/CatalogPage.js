import React from "react";
import "./CatalogPage.scss";
import { NavigationCatalog } from "../../Components/NavigationCatalog/NavigationCatalog";
import CatalogGrid from "../../Components/CatalogGrid/CatalogGrid";
import { useSelector } from "react-redux";
import { FilterSubCategory } from "../../Components/FilterSubCategory/FilterSubCategory";
import { Sorts } from "../../Components/Sorts/Sorts";
import CatalogPagination from "../../Components/CatalogPagination/CatalogPagination";

const CatalogPage = ({ modalInfo }) => {
  const navCatalog = useSelector((state) => state.NavigationIdSlice);
  return (
    <div className="catalog-page">
      <div className="catalog-page__content">
        <NavigationCatalog />
        <p className="catalog-page__title-text">{navCatalog}</p>
        <div className="catalog-page__grid-section">
          <FilterSubCategory modalInfo={modalInfo} />
          <div className="catalog-page__catalog-column">
            <Sorts />
            <CatalogGrid />
            <CatalogPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
