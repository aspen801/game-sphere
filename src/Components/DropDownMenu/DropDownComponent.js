import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./DropDownComponent.scss"
import { actions } from '../Catalog/index.slice'
import navigationPc from "../../resources/png/NavigationPC.png"
import navigationConsole from "../../resources/png/NavigationConsole.png"
import navigationLaptop from "../../resources/png/NavigationLaptop.png"
import navigationHeadPhone from "../../resources/png/NavigationHeadPhone.png"
import navigationGadgets from "../../resources/png/NavigationGadgets.png"
import arrowCatalog from "../../resources/svg/arrowCatalog.svg"
const DropDown = ({info}) => {
    const dispatch = useDispatch()
    return(
        <div>
            <div className={info.styles}>
                <div className='containerModal'>
                    <div className="modalList">
                        <ul style={(info.firstList.length) ? {display: "block"} : {display: "none"}}>
                            {
                                info.firstList.map(item => <li>{item}</li> )
                            }
                        </ul>
                        <ul className='secondList'>
                            {    
                                info.secondList.map((item,index) => {
                                if (info.secondList.length - 1 === index)  return <li>{item}<img src={arrowCatalog} alt='arrowCatalog' /></li>
                                return <li>{item}</li> 
                            })}
                        </ul>
                    </div>
                    <img src={info.img} alt=''/>
                </div>
            </div>
            <div className='backgroundClick' onClick={(e) => {
                dispatch(actions.closeMenu(7))
                document.body.classList.remove('active');
            }}>
            </div>
        </div>
    )
}
export const DropDownComponent = () => {
    const modalInfo = {
        firstModal: {
            firstList: ["Готові рішення","Процесори","Монітори","Кулери","Материнські плати","Відеокарти","Оперативна пам’ять"],
            secondList: ["SSD накопичувачі","Жорсткі диски","Блоки живлення","Вентилятори","Корпуси плати","Всі ПК та комплектуючи"],
            img: navigationPc,
            arrowCatalog,
            styles: "catalogPc"
        },
        secondModal: {
            firstList: [],
            secondList: ["Ігрові консолі","Аксесуари для консолей","Ігрові маніпулятори","Аксесуари для приставок","Ігри","Зберігання та носії для ігор","Всі консолі та аксесуари"],
            img: navigationConsole,
            arrowCatalog,
            styles: "catalogPc"
        },
        threeModal: {
            firstList: [],
            secondList: ["Ноутбуки","Аксесуари для ноутбука","Комплектуючи","USB-хаби та картріди","Зовнішні SSD","Всі ноутбуки та комплектуючі"],
            img: navigationLaptop,
            arrowCatalog,
            styles: "catalogPc"
        },
        fourModal: {
            firstList: ["Веб-камери","Мишки","Клавіатури","Гарнітури та аудіо","Комплекти","Геймпади, джойстики та керма"],
            secondList: ["Килимки для мишок","Аксесуари для клавіатури","Окуляри та шоломи VR","Стрімерське обладнання","Столи та стільці","Вся переферія"],
            img: navigationHeadPhone,
            arrowCatalog,
            styles: "catalogPc"
        },
        fiveModal: {
            firstList: [],
            secondList: ["Аксесуари для робочого місця","Накопичувачі пам’яті","Кабелі та переходники","Зарядні пристрої","Джерела живлення","Зовнішні та внутрішні кишені", "Брендові товари", "Всі аксесуари"],
            img: navigationGadgets,
            arrowCatalog,
            styles: "catalogPc"
        },
        sixModal: {
            firstList: [],
            secondList: ["Ноутбуки","Аксесуари для ноутбука","Комплектуючи","USB-хаби та картріди","Зовнішні SSD","Всі ноутбуки та комплектуючі"],
            img: navigationLaptop,
            arrowCatalog,
            styles: "catalogPc"
        },
        sevenModal: {
            firstList: ["Про нас","FAQ та допомога","Гарантійне обслуговування","Доставка і оплата","Обмін та повернення","Політика конфеденційності"],
            secondList: [],
            arrowCatalog,
            styles: "catalogPc"
        },
}
    const index = useSelector(state => state.index)
    return (
            <div>
                {index === 0 ? <DropDown styles={true} info={modalInfo.firstModal}/> : null}
                {index === 1 ? <DropDown styles={true} info={modalInfo.secondModal}/> : null }
                {index === 2 ? <DropDown styles={true} info={modalInfo.threeModal}/> : null}
                {index === 3 ? <DropDown styles={true} info={modalInfo.fourModal}/> : null}
                {index === 4 ? <DropDown styles={true} info={modalInfo.fiveModal}/> : null}
                {index === 5 ? <DropDown styles={true} info={modalInfo.sixModal}/> : null}
                {index === 6 ? <DropDown styles={true} info={modalInfo.sevenModal}/> : null}
                {index === 7 ? null : null} {/* Для закриття меню */}
            </div>
    )
}
