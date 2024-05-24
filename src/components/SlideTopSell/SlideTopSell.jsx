import React from "react";

import { useGetTopSellProductsQuery } from "../../services/products.api";
import Slider from "../Slider/Slider";
import "./SlideTopSell.scss";

const SlideTopSell = () => {
  const { data } = useGetTopSellProductsQuery();
  return <Slider title={"Топ продажів"} data={data} />;
};

export default SlideTopSell;
