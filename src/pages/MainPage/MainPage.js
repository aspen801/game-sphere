import Advantages from "../../Components/Advantages/Advantages.js";
import Intro from "../../Components/Intro/Intro.js";
import SlideTopSell from "../../Components/SlideTopSell/SlideTopSell.js";
import "./MainPage.scss";
import PopUp from "../../Components/popUp/popUp.js";
import Actions from "../../Components/Actions/Actions.js";
import Brands from "../../Components/Brands/Brands.js";


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
