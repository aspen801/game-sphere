import React from "react";

// import { ReactComponent as PaginationArrow } from "@resources/svg/paginationArrow.svg";
import paginationArrow from "@resources/svg/paginationArrow.svg";

import "./CatalogPagination.scss";

const CatalogPagination = () => {
  return (
    <div className="catalog-pagination">
      <button className="catalog-pagination__show-more">
        <p>Показати ще 12 товарів</p>
        <div className="catalog-pagination__arrows-container">
          {/* <PaginationArrow className="catalog-pagination__show-more-arrow" />
          <PaginationArrow className="catalog-pagination__show-more-arrow additional-arrow " />
          <PaginationArrow className="catalog-pagination__show-more-arrow additional-arrow" /> */}
        </div>
      </button>
      <div className="catalog-pagination__buttons">
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
    </div>
  );
};

export default CatalogPagination;
