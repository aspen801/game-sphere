import React from "react";

import ButtonPurple from "@/components/ui/Button/ButtonPurple";

import HeroBackground from "../../resources/png/HeroBackground.png";
import givePng from "../../utils/pngFunction";
import "./Intro.scss";

const Intro = () => {
  const images = [
    "SotsRight",
    "SotsTablet",
    "SotsPhone",
    "SotMouse",
    "SotHeadphones",
    "SotDisplay",
    "SotKeyBoard",
    "SotArmchair",
    "SotLaptop",
  ];
  return (
    <div className="hero">
      <img className="hero__background" src={HeroBackground} />
      {images.map((item) => givePng(item))}
      <div className="hero__container">
        <div className="hero__content">
          <h1>Новий рік</h1>
          <h2>Нові перемоги</h2>
          <p>
            Зустрічайте Новий рік з ексклюзивними цінами на комп’ютери та
            ноутбуки Premier, а також безкоштовне дворічне оновлення компонентів
          </p>
          <a className="hero__button">Перейти у каталог</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
