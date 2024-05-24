import Actions from "../../components/Actions/Actions";
import Advantages from "../../components/Advantages/Advantages";
import Brands from "../../components/Brands/Brands";
import Intro from "../../components/Intro/Intro";
import PopUp from "../../components/PopUp/PopUp";
import SlideNewProducts from "../../components/SlideNewProducts/SlideNewProducts";
import SlideTopSell from "../../components/SlideTopSell/SlideTopSell";
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
