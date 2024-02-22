import React from "react";
import "./CatalogPagination.scss";
import paginationArrow from "../../resources/svg/paginationArrow.svg";

const CatalogPagination = () => {
  return (
    <div className="catalog-pagination">
      <button className="catalog-pagination__arrow left">
        <img src={paginationArrow} />
      </button>

      <button className="catalog-pagination__button active">
        <p>1</p>
      </button>

      <button className="catalog-pagination__button ">
        <p>2</p>
      </button>

      <button className="catalog-pagination__button ">
        <p>3</p>
      </button>

      <button className="catalog-pagination__button">
        <p>4</p>
      </button>

      <button className="catalog-pagination__button ">
        <p>...</p>
      </button>

      <button className="catalog-pagination__button ">
        <p>7</p>
      </button>

      <button className="catalog-pagination__arrow right">
        <img src={paginationArrow} />
      </button>
    </div>
  );
};

export default CatalogPagination;
