import React from "react";

import Carousel, { consts } from "@itseasy21/react-elastic-carousel";

import arrowleft from "../../resources/svg/ArrowLeft.svg";
import arrowright from "../../resources/svg/ArrowRight.svg";
import Card from "../Card/Card";
import "./SlideTopSell.scss";

const SlideTopSell = ({ title }) => {
  const breakPoints = [
    { width: 200, itemsToShow: 1, pagination: true },
    { width: 210, itemsToShow: 2, pagination: true },
    { width: 510, itemsToShow: 3, pagination: true },
    { width: 1220, itemsToShow: 4 },
  ];
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img src={arrowleft} alt="arrowLeft" />
      ) : (
        <img src={arrowright} alt="arrowRight" />
      );
    return (
      <div className="slide_buttons" onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    );
  };

  return (
    <div id="slide_topSell">
      <div className="container_slide">
        <p className="sell_text">{title}</p>
        <Carousel
          itemPadding={[0, 8]}
          itemsToShow={4}
          breakPoints={breakPoints}
          renderArrow={myArrow}
          pagination={false}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </div>
  );
};

export default SlideTopSell;
