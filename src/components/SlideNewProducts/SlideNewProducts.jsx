import React from "react";

import { useGetNewProductsQuery } from "../../services/products.api";
import Slider from "../Slider/Slider";
import "./SlideNewProducts.scss";

const SlideNewProducts = () => {
  const { data } = useGetNewProductsQuery();
  return <Slider title={"Новинки"} data={data} />;
};

export default SlideNewProducts;
