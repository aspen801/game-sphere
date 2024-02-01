import React from 'react'
import "./Catalog.scss"
import { useState } from 'react'
import searchInputSvg from "../../resources/svg/Search.svg"
import { DropDown } from '../DropDownMenu/DropDownComponent'
import navigationPc from "../../resources/png/NavigationPC.png"
import navigationConsole from "../../resources/png/NavigationConsole.png"
import navigationLaptop from "../../resources/png/NavigationLaptop.png"
import navigationHeadPhone from "../../resources/png/NavigationHeadPhone.png"
import navigationGadgets from "../../resources/png/NavigationGadgets.png"
import arrowCatalog from "../../resources/svg/arrowCatalog.svg"
const modalInfo = [
  {
      firstList: ["Готові рішення","Процесори","Монітори","Кулери","Материнські плати","Відеокарти","Оперативна пам’ять"],
      secondList: ["SSD накопичувачі","Жорсткі диски","Блоки живлення","Вентилятори","Корпуси плати","Всі ПК та комплектуючи"],
      img: navigationPc,
      arrowCatalog,
      catalog: "ПК та комплектуючі",
      styles: "catalogPc"
  },
  {
      firstList: [],
      secondList: ["Ігрові консолі","Аксесуари для консолей","Ігрові маніпулятори","Аксесуари для приставок","Ігри","Зберігання та носії для ігор","Всі консолі та аксесуари"],
      img: navigationConsole,
      arrowCatalog,
      catalog: "Консолі та аксесуари",
      styles: "catalogPc"
  },
  {
      firstList: [],
      secondList: ["Ноутбуки","Аксесуари для ноутбука","Комплектуючи","USB-хаби та картріди","Зовнішні SSD","Всі ноутбуки та комплектуючі"],
      img: navigationLaptop,
      arrowCatalog,
      catalog: "Ноутбуки",
      styles: "catalogPc"
  },
  {
      firstList: ["Веб-камери","Мишки","Клавіатури","Гарнітури та аудіо","Комплекти","Геймпади, джойстики та керма"],
      secondList: ["Килимки для мишок","Аксесуари для клавіатури","Окуляри та шоломи VR","Стрімерське обладнання","Столи та стільці","Вся переферія"],
      img: navigationHeadPhone,
      arrowCatalog,
      catalog: "Переферія",
      styles: "catalogPc"
  },
  {
      firstList: [],
      secondList: ["Аксесуари для робочого місця","Накопичувачі пам’яті","Кабелі та переходники","Зарядні пристрої","Джерела живлення","Зовнішні та внутрішні кишені", "Брендові товари", "Всі аксесуари"],
      img: navigationGadgets,
      arrowCatalog,
      catalog: "Аксесуари",
      styles: "catalogPc"
  },
  {
      firstList: [],
      secondList: ["Ноутбуки","Аксесуари для ноутбука","Комплектуючи","USB-хаби та картріди","Зовнішні SSD","Всі ноутбуки та комплектуючі"],
      img: navigationLaptop,
      arrowCatalog,
      catalog: "Акції",
      styles: "catalogPc"
  },
  {
      firstList: ["Про нас","FAQ та допомога","Гарантійне обслуговування","Доставка і оплата","Обмін та повернення","Політика конфеденційності"],
      secondList: [],
      arrowCatalog,
      catalog: "Покупцеві",
      styles: "catalogPc"
  },
]
const Catalog = () => {
  return (
    <nav id="catalog">
        <div className='containerNav'>
            <ul className='Navigation'>
            {modalInfo.map((item, i) => <DropDown key={i} info={item} index={i}/>)}
            </ul>
            <div className='searchPanelNav'>
                <input type='text' placeholder='Шукати' className='inputNav'/>
                <img src={searchInputSvg} alt='search' className='searchButtonNav'/>
            </div>
        </div>
    </nav>
  )
}
export default Catalog