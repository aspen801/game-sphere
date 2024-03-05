import React from "react";

const CatalogFilterDropdownItem = ({ title, changeFilter, id, active }) => {
  return (
    <div className="catalog-filter__dropdown-item">
      <input
        type="checkbox"
        onClick={() => changeFilter(id)}
        checked={active}
      />
      <p>{title}</p>
    </div>
  );
};

export default CatalogFilterDropdownItem;
