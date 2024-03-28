import { useState } from "react";
import "./CatalogFilter.scss";
import Slider from "react-slider";
import CatalogFilterDropdown from "./CatalogFilterDropdown/CatalogFilterDropdown";
import ActiveFilters from "../ActiveFilters/components/ActiveFilters/ActiveFilters";

const MIN = 10000;
const MAX = 100000;

const CatalogFilter = ({ isMobile, activeFilter, setActiveFilter }) => {
  const [values, setValues] = useState([MIN, MAX]);

  const handleMinChange = (event) => {
    const newMin = Number(event.target.value);
    setValues([newMin, values[1]]);
  };

  const handleMaxChange = (event) => {
    const newMax = Number(event.target.value);
    setValues([values[0], newMax]);
  };

  return (
    <div className={`catalog-filter ${isMobile ? "visible" : ""}`}>
      <div className="catalog-filter__price-range">
        <ActiveFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <p className>Ціна</p>
        <div className="catalog-filter__price-range-input-container">
          <div className="catalog-filter__price-range-input">
            <p>Від</p>
            <input
              type="text"
              name="input"
              value={values[0]}
              onChange={handleMinChange}
            />
          </div>
          <div className="catalog-filter__price-range-input">
            <p>До</p>
            <input
              type="text"
              name="input"
              value={values[1]}
              onChange={handleMaxChange}
            />
          </div>
        </div>
        <div className="catalog-filter__price-range-slider-container">
          <Slider
            className="catalog-filter__price-range-slider"
            thumbClassName="catalog-filter__slider-thumb"
            onChange={setValues}
            value={values}
            min={MIN}
            max={MAX}
            pearling
            minDistance={5000}
          />
        </div>
      </div>
      <div className="catalog-filter__dropdowns">
        <CatalogFilterDropdown
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </div>
  );
};

export default CatalogFilter;
