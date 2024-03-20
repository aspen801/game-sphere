import React from "react";
import closeBtn from "../../../../resources/svg/CloseFilterBtn.svg";
const ItemActiveFilters = ({ item, removeFilter }) => {
  return (
    <div className="active-filters__list-item">
      <li>{item.title}</li>
      <img
        src={closeBtn}
        alt="closeBtn"
        onClick={() => removeFilter(item.id)}
      />
    </div>
  );
};

export default ItemActiveFilters;
