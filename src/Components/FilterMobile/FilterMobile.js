import React from "react";
import filterIcon from "../../resources/svg/filter-icon.svg";
import SortIcon from "../../resources/svg/sort-icon.svg";
import "./FilterMobile.scss";
import ActiveFilters from "../ActiveFilters/Components/ActiveFilters/ActiveFilters";
const FilterMobile = ({ activeFilter, setActiveFilter }) => {
  return (
    <>
      <div className="filter-mobile">
        <button className="filter-mobile__button-filter">
          <img src={filterIcon} alt="filterIcon" />
          Фільтри
        </button>
        <button className="filter-mobile__button-sort">
          <img src={SortIcon} alt="sortIcon" />
          Сортування
        </button>
      </div>
      <div className="filter-mobile__active-filters">
        <ActiveFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </>
  );
};

export default FilterMobile;
