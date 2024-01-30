import React from 'react'
import "./Catalog.scss"
import searchInputSvg from "../../resources/svg/Search.svg"
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './index.slice'
import { DropDownComponent } from './DropDownComponent'
const Catalog = () => {
  const dispatch = useDispatch()
  const catalog = ["ПК та комплектуючі","Консолі та аксесуари","Ноутбуки","Переферія","Аксесуари","Акції","Покупцеві"]
  return (
    <nav id="catalog">
        <div className='containerNav'>
            <ul className='Navigation'>
            {catalog.map((item,i) => {
              return i === 5 ? <li 
                onClick={() => dispatch(actions.setIndex(i))} 
                className="navItem"><a 
                href='#' 
                style={{color: "#F79009"}}
              >{item}</a>
              </li> : <li 
                onClick={() => dispatch(actions.setIndex(i))} 
                className="navItem">
                <a href='#'>{item}</a>
              </li>
            })}
            </ul>
            <div>
              <DropDownComponent/>
            </div>
            <div className='searchPanelNav'>
                <input type='text' placeholder='Шукати' className='inputNav'/>
                <img src={searchInputSvg} alt='search' className='searchButtonNav'/>
            </div>
        </div>
    </nav>
  )
}
export default Catalog