import React from "react";

import Slider from "@common/Slider/Slider";
import { useGetNewProductsQuery } from "@services/products.api";

import "./SlideNewProducts.scss";

const SlideNewProducts = () => {
  const { data } = useGetNewProductsQuery();
  return <Slider title={"Новинки"} data={data} />;
};

export default SlideNewProducts;
