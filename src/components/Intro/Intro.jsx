import React from "react";

import ButtonPurple from "@/components/ui/Button/ButtonPurple";

import HeroBackground from "../../resources/png/HeroBackground.png";
import { useGetHeroQuery } from "../../services/homePage.api";
import givePng from "../../utils/pngFunction";
import transformGoogleLink from "../../utils/transformGoogleLink";
import "./Intro.scss";
import IntroSkeleton from "./IntroSkeleton/IntroSkeleton";

const Intro = () => {
  const { data, isLoading, isError } = useGetHeroQuery();

  const heroImages = ["SotsRight", "SotsTablet", "SotsPhone"];
  return (
    <div className="hero">
      <img className="hero__background" src={HeroBackground} />
      {heroImages.map((item) => givePng(item))}
      {data && (
        <>
          {data.images.map((item, index) => {
            return (
              <img src={transformGoogleLink(item)} className={`sot-${index}`} />
            );
          })}
        </>
      )}
      <div className="hero__container">
        <div className="hero__content">
          {data && !isLoading && !isError ? (
            <>
              <h1>{data.title}</h1>
              <h2>{data.subtitle}</h2>
              <p>{data.description}</p>
              <a className="hero__button">Перейти у каталог</a>
            </>
          ) : (
            <IntroSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
