import React from "react";
import "./Intro.scss";
import givePng from "../../utils/pngFunction";
const Intro = () => {
  const images = [
    "SotsLeft",
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
    <div id="intro">
      {images.map((item) => givePng(item))}
      <div className="container_intro">
        <h1>Новий рік</h1>
        <h2>Нові перемоги</h2>
        <p>
          Зустрічайте Новий рік з ексклюзивними цінами на комп’ютери та ноутбуки
          Premier, а також безкоштовне дворічне оновлення компонентів
        </p>
        <a href="#">Перейти до каталогу</a>
      </div>
    </div>
  );
};

export default Intro;
