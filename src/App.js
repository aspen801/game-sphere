import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import navigationPc from "./resources/png/NavigationPC.png";
import navigationConsole from "./resources/png/NavigationConsole.png";
import navigationLaptop from "./resources/png/NavigationLaptop.png";
import navigationHeadPhone from "./resources/png/NavigationHeadPhone.png";
import navigationGadgets from "./resources/png/NavigationGadgets.png";
import arrowCatalog from "./resources/svg/arrowCatalog.svg";
import desktop from "./resources/svg/desktopBurger.svg";
import gamepad from "./resources/svg/gamepadBurger.svg";
import laptop from "./resources/svg/laptopBurger.svg";
import mouse from "./resources/svg/mouseBurger.svg";
import disk from "./resources/svg/diskBurger.svg";
import promotion from "./resources/svg/promotionBurger.svg";
import sellers from "./resources/svg/sellersBurger.svg";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import CartPage from "./pages/CartPage/CartPage";
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
      "SSD накопичувачі",
      "Жорсткі диски",
      "Блоки живлення",
      "Вентилятори",
      "Корпуси плати",
      "Всі ПК та комплектуючі",
    ],

    img: navigationPc,
    tabsImg: desktop,
    arrowCatalog,
    catalog: "ПК та комплектуючі",
    id: "computers",
  },
  {
    firstList: [
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
    id: "consoles",
  },
  {
    firstList: [
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
    id: "laptop",
  },
  {
    firstList: [
      "Веб-камери",
      "Мишки",
      "Клавіатури",
      "Гарнітури та аудіо",
      "Комплекти",
      "Геймпади, джойстики та керма",
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
    id: "periphery",
  },
  {
    firstList: [
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
    id: "accessories",
  },
  {
    firstList: [
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
    firstList: [],
    secondList: [],
    tabsImg: promotion,
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
    tabsImg: sellers,
    arrowCatalog,
    catalog: "Покупцеві",
  },
];
const App = () => {
  console.log(useLocation());
  fetch("https://game-store-dev.onrender.com/api/api-categories")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  return (
    <>
      <Header modalInfo={modalInfo} />
      <NavigationMenu modalInfo={modalInfo} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" />
        <Route path="/catalog" element={<MainPage />} />
        <Route
          path="/catalog/:category"
          element={<CatalogPage modalInfo={modalInfo} />}
        />
        <Route
          path="/catalog/:category/:subcategory"
          element={<CatalogPage modalInfo={modalInfo} />}
        />
        <Route path="/shop" />
        <Route path="/user-agreement" />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" />
        <Route path="*" />
      </Routes>
      <Footer modalInfo={modalInfo} />
    </>
  );
};

export default App;
