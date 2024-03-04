import React from "react";
import "./CatalogMain.scss";
import CatalogGrid from "../../Components/CatalogGrid/CatalogGrid";
import CatalogSubcategoryMenu from "../CatalogSubcategoryMenu/CatalogSubcategoryMenu";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import Sorts from "../../Components/Sorts/Sorts";
import CatalogPagination from "../../Components/CatalogPagination/CatalogPagination";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import { useParams } from "react-router-dom";

const CatalogMain = ({ modalInfo }) => {
  const { category, subcategory } = useParams();
  // Check if we are on subcategory level
  const atSubcategoryLevel = subcategory !== undefined;

  return (
    <div className="catalog-main">
      {!atSubcategoryLevel ? (
        <CatalogSubcategoryMenu modalInfo={modalInfo} />
      ) : (
        <CatalogFilter modalInfo={modalInfo} />
      )}
      <div className="catalog-main__column">
        <Sorts />
        <FilterMobile />
        <CatalogGrid />
        <CatalogPagination />
      </div>
    </div>
  );
};

export default CatalogMain;
