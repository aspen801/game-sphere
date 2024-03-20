import React, { useState } from "react";
import "./CatalogMain.scss";
import CatalogGrid from "../../components/CatalogGrid/CatalogGrid";
import CatalogSubcategoryMenu from "../CatalogSubcategoryMenu/CatalogSubcategoryMenu";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import Sorts from "../../components/Sorts/Sorts";
import CatalogPagination from "../../components/CatalogPagination/CatalogPagination";
import MobileFilter from "../MobileFilter/MobileFilter";
import { useParams } from "react-router-dom";

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
