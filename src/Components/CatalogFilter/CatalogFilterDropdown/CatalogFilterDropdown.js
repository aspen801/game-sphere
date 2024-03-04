import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CatalogFilterDropdown.scss";
import { ReactComponent as PaginationArrow } from "../../../resources/svg/paginationArrow.svg";

const CatalogFilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="catalog-filter-dropdown">
      <div className="catalog-filter-dropdown__label" onClick={toggleDropdown}>
        <p>Торгова марка</p>
        <PaginationArrow
          className={`catalog-filter-dropdown__arrow ${isOpen ? "active" : ""}`}
        />
      </div>
      {isOpen && (
        <motion.div
          className="catalog-filter__dropdown-items"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="catalog-filter__dropdown-item">
            <input type="checkbox" />
            <p>Qbox</p>
          </div>
          <div className="catalog-filter__dropdown-item">
            <input type="checkbox" />
            <p>Impression</p>
          </div>
          <div className="catalog-filter__dropdown-item">
            <input type="checkbox" />
            <p>HP</p>
          </div>
          <div className="catalog-filter__dropdown-item">
            <input type="checkbox" />
            <p>2E</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CatalogFilterDropdown;
