import React from "react";

import Slider from "@common/Slider/Slider";
import { useGetTopSellProductsQuery } from "@services/products.api";

import "./SlideTopSell.scss";

const SlideTopSell = () => {
  const { data } = useGetTopSellProductsQuery();
  return <Slider title={"Топ продажів"} data={data} />;
};

export default SlideTopSell;
