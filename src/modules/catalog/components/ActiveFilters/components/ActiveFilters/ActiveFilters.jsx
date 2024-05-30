import React from "react";
import "./ActiveFilters.scss";
import ItemActiveFilters from "../ItemActiveFilters/ItemActiveFilters";
const ActiveFilters = ({ setActiveFilter, activeFilter }) => {
  const removeFilter = (index) => {
    const copy = [...activeFilter];
    const current = copy.find((item) => item.id === index);
    current.isActive = !current.isActive;
    setActiveFilter(copy);
  };
  const checkActiveFilters = () => {
    let i = 0;
    activeFilter.forEach((item) => {
      if (!item.isActive) {
        return false;
      }
      i++;
    });
    return i === 0 ? false : true;
  };
  const removeAllFilter = () => {
    const copy = [...activeFilter];
    copy.map((item) => (item.isActive = false));
    setActiveFilter(copy);
  };

  return (
    <div
      className="active-filters"
      style={
        checkActiveFilters() === false
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <ul className="active-filters__list">
        {activeFilter.map((item) =>
          item.isActive ? (
            <ItemActiveFilters removeFilter={removeFilter} item={item} />
          ) : null
        )}
      </ul>
      <button
        onClick={() => removeAllFilter()}
        className="active-filters__clear-filters"
      >
        Очистити всі фільтри
      </button>
    </div>
  );
};

export default ActiveFilters;
