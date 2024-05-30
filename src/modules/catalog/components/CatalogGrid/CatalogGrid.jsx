import React from "react";

import Card from "@common/Card/Card";

import SpecialOfferBanner from "../SpecialOfferBanner/SpecialOfferBanner";
import "./CatalogGrid.scss";

const CatalogGrid = () => {
  return (
    <div className="catalog-grid">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <SpecialOfferBanner />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CatalogGrid;
