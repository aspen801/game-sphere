import React, { useState } from "react";
import filterIcon from "../../resources/svg/filter-icon.svg";
import SortIcon from "../../resources/svg/sort-icon.svg";
import "./MobileFilter.scss";
import ActiveFilters from "../ActiveFilters/components/ActiveFilters/ActiveFilters";
import Sorts from "../../components/Sorts/Sorts";
import AppDrawer from "../ui/AppDrawer/AppDrawer";
import CatalogFilter from "../CatalogFilter/CatalogFilter";

const FilterButton = ({ modalInfo, activeFilter, setActiveFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortsOpen, setIsSortsOpen] = useState(false);

  return (
    <>
      <div className="mobile-filter">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="mobile-filter__button-filter"
        >
          <img src={filterIcon} alt="filterIcon" />
          Фільтри
        </button>
        <button
          onClick={() => setIsSortsOpen(true)}
          className="mobile-filter__button-sort"
        >
          <img src={SortIcon} alt="sortIcon" />
          Сортування
        </button>
      </div>
      <div className="mobile-filter__active-filters">
        <ActiveFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <AppDrawer
        titleContent={<p>Фільтр</p>}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        anchor={"left"}
      >
        <CatalogFilter
          isMobile={isFilterOpen}
          modalInfo={modalInfo}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </AppDrawer>
      <AppDrawer
        titleContent={<p>Впорядкування</p>}
        isOpen={isSortsOpen}
        onClose={() => setIsSortsOpen(false)}
        anchor={"bottom"}
        renderLine={false}
      >
        <Sorts isMobile={isSortsOpen} />
      </AppDrawer>
    </>
  );
};

export default FilterButton;
