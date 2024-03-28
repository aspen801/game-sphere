import React from "react";
import "./CatalogGrid.scss";
import Card from "../Card/Card";
import SpecialOfferBanner from "../SpecialOfferBanner/SpecialOfferBanner";

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
