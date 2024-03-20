import Advantages from "../../components/Advantages/Advantages";
import Intro from "../../components/Intro/Intro";
import SlideTopSell from "../../components/SlideTopSell/SlideTopSell";
import "./MainPage.scss";
import PopUp from "../../components/PopUp/PopUp";
import Actions from "../../components/Actions/Actions";
import Brands from "../../components/Brands/Brands";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Intro />
      <SlideTopSell title={"Топ продажів"} />
      <Advantages />
      <Actions />
      <PopUp />
      <SlideTopSell title={"Новинки"} />
      <Brands />
    </div>
  );
};

export default MainPage;
