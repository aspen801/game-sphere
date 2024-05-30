import React, { useState } from "react";

import { useParams } from "react-router-dom";

import CatalogFilter from "../CatalogFilter/CatalogFilter";
import CatalogGrid from "../CatalogGrid/CatalogGrid";
import CatalogPagination from "../CatalogPagination/CatalogPagination";
import CatalogSubcategoryMenu from "../CatalogSubcategoryMenu/CatalogSubcategoryMenu";
import MobileFilter from "../MobileFilter/MobileFilter";
import Sorts from "../Sorts/Sorts";
import "./CatalogMain.scss";

const CatalogMain = ({ modalInfo }) => {
  const { category, subcategory } = useParams();
  const [activeFilter, setActiveFilter] = useState([
    {
      title: "Дискретна (ігрова)",
      id: 0,
      isActive: false,
    },
    {
      title: "Готові рішення",
      id: 1,
      isActive: false,
    },
    {
      title: "ASUS",
      id: 2,
      isActive: false,
    },
    {
      title: "24 ГБ",
      id: 3,
      isActive: false,
    },
  ]);
  const atSubcategoryLevel = subcategory !== undefined;

  return (
    <div className="catalog-main">
      {!atSubcategoryLevel ? (
        <CatalogSubcategoryMenu modalInfo={modalInfo} />
      ) : (
        <CatalogFilter
          modalInfo={modalInfo}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      )}

      <div className="catalog-main__column">
        <Sorts />
        <MobileFilter
          modalInfo={modalInfo}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <CatalogGrid />
        <CatalogPagination />
      </div>
    </div>
  );
};

export default CatalogMain;
