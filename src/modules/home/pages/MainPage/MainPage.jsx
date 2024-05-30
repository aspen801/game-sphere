import Actions from "@modules/home/components/Actions/Actions";
import Advantages from "@modules/home/components/Advantages/Advantages";
import Brands from "@modules/home/components/Brands/Brands";
import Intro from "@modules/home/components/Intro/Intro";
import PopUp from "@modules/home/components/PopUp/PopUp";
import SlideNewProducts from "@modules/home/components/SlideNewProducts/SlideNewProducts";
import SlideTopSell from "@modules/home/components/SlideTopSell/SlideTopSell";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Intro />
      <SlideTopSell />
      <Advantages />
      <Actions />
      <PopUp />
      <SlideNewProducts />
      <Brands />
    </div>
  );
};

export default MainPage;
