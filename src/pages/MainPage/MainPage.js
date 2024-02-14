import { Advantages } from "../../Components/Advantages/Advantages.js";
import Catalog from "../../Components/Catalog/Catalog.js";
import Header from "../../Components/Header/Header.js";
import Intro from "../../Components/Intro/Intro.js";
import SlideTopSell from "../../Components/SlideTopSell/SlideTopSell.js";
import navigationPc from "../../resources/png/NavigationPC.png";
import navigationConsole from "../../resources/png/NavigationConsole.png";
import navigationLaptop from "../../resources/png/NavigationLaptop.png";
import navigationHeadPhone from "../../resources/png/NavigationHeadPhone.png";
import navigationGadgets from "../../resources/png/NavigationGadgets.png";
import arrowCatalog from "../../resources/svg/arrowCatalog.svg";
import desktop from "../../resources/svg/desktopBurger.svg";
import gamepad from "../../resources/svg/gamepadBurger.svg";
import laptop from "../../resources/svg/laptopBurger.svg";
import mouse from "../../resources/svg/mouseBurger.svg";
import disk from "../../resources/svg/diskBurger.svg";
import promotion from "../../resources/svg/promotionBurger.svg";
import sellers from "../../resources/svg/sellersBurger.svg";
import "./MainPage.scss";
import { PopUp } from "../../Components/popUp/popUp.js";
import { Actions } from "../../Components/Actions/Actions.js";
import { Brands } from "../../Components/Brands/Brands.js";
import { Footer } from "../../Components/Footer/Footer.js";
const modalInfo = [
  {
    firstList: [
      "Готові рішення",
      "Процесори",
      "Монітори",
      "Кулери",
      "Материнські плати",
      "Відеокарти",
      "Оперативна пам’ять",
    ],
    secondList: [
      "SSD накопичувачі",
      "Жорсткі диски",
      "Блоки живлення",
      "Вентилятори",
      "Корпуси плати",
      "Всі ПК та комплектуючи",
    ],
    img: navigationPc,
    tabsImg: desktop,
    arrowCatalog,
    catalog: "ПК та комплектуючі",
  },
  {
    firstList: [],
    secondList: [
      "Ігрові консолі",
      "Аксесуари для консолей",
      "Ігрові маніпулятори",
      "Аксесуари для приставок",
      "Ігри",
      "Зберігання та носії для ігор",
      "Всі консолі та аксесуари",
    ],
    img: navigationConsole,
    tabsImg: gamepad,
    arrowCatalog,
    catalog: "Консолі та аксесуари",
  },
  {
    firstList: [],
    secondList: [
      "Ноутбуки",
      "Аксесуари для ноутбука",
      "Комплектуючи",
      "USB-хаби та картріди",
      "Зовнішні SSD",
      "Всі ноутбуки та комплектуючі",
    ],
    img: navigationLaptop,
    tabsImg: laptop,
    arrowCatalog,
    catalog: "Ноутбуки",
  },
  {
    firstList: [
      "Веб-камери",
      "Мишки",
      "Клавіатури",
      "Гарнітури та аудіо",
      "Комплекти",
      "Геймпади, джойстики та керма",
    ],
    secondList: [
      "Килимки для мишок",
      "Аксесуари для клавіатури",
      "Окуляри та шоломи VR",
      "Стрімерське обладнання",
      "Столи та стільці",
      "Вся переферія",
    ],
    img: navigationHeadPhone,
    tabsImg: mouse,
    arrowCatalog,
    catalog: "Переферія",
  },
  {
    firstList: [],
    secondList: [
      "Аксесуари для робочого місця",
      "Накопичувачі пам’яті",
      "Кабелі та переходники",
      "Зарядні пристрої",
      "Джерела живлення",
      "Зовнішні та внутрішні кишені",
      "Брендові товари",
      "Всі аксесуари",
    ],
    img: navigationGadgets,
    tabsImg: disk,
    arrowCatalog,
    catalog: "Аксесуари",
  },
  {
    firstList: [],
    secondList: [
      "Ноутбуки",
      "Аксесуари для ноутбука",
      "Комплектуючи",
      "USB-хаби та картріди",
      "Зовнішні SSD",
      "Всі ноутбуки та комплектуючі",
    ],
    img: navigationLaptop,
    tabsImg: promotion,
    arrowCatalog,
    catalog: "Акції",
  },
  {
    firstList: [
      "Про нас",
      "FAQ та допомога",
      "Гарантійне обслуговування",
      "Доставка і оплата",
      "Обмін та повернення",
      "Політика конфіденційності",
    ],
    secondList: [],
    tabsImg: sellers,
    arrowCatalog,
    catalog: "Покупцеві",
  },
];
const MainPage = () => {
  return (
    <div className="MainPage">
      <Header modalInfo={modalInfo} />
      <Catalog modalInfo={modalInfo} />
      <Intro />
      <SlideTopSell title={"Топ продажів"} />
      <Advantages />
      <Actions />
      <PopUp />
      <SlideTopSell title={"Новинки"} />
      <Brands />
      <Footer />
    </div>
  );
};

export default MainPage;
