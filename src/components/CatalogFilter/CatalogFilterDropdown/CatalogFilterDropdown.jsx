import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CatalogFilterDropdown.scss";
// import { ReactComponent as PaginationArrow } from "../../../resources/svg/paginationArrow.svg";
import CatalogFilterDropdownItem from "./CatalogFilterDropdownItem/CatalogFilterDropdownItem";
const CatalogFilterDropdown = ({ activeFilter, setActiveFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const changeFilter = (currId) => {
    const copy = [...activeFilter];
    const current = copy.find((fl) => fl.id === currId);
    current.isActive = !current.isActive;
    setActiveFilter(copy);
  };
  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="catalog-filter-dropdown">
      <div className="catalog-filter-dropdown__label" onClick={toggleDropdown}>
        <p>Торгова марка</p>
        {/* <PaginationArrow
          className={`catalog-filter-dropdown__arrow ${isOpen ? "active" : ""}`}
        /> */}
      </div>
      {isOpen && (
        <motion.div
          className="catalog-filter__dropdown-items"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          {activeFilter.map((item) => (
            <CatalogFilterDropdownItem
              title={item.title}
              active={item.isActive}
              changeFilter={changeFilter}
              id={item.id}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CatalogFilterDropdown;
