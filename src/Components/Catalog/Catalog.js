import React from 'react'
import "./Catalog.scss"
import searchInputSvg from "../../resources/svg/Search.svg"
const Catalog = () => {
  const catalog = ["ПК та комплектуючі","Консолі та аксесуари","Ноутбуки","Переферія","Аксесуари","Акції","Покупцеві"]
  return (
    <nav id="catalog">
        <div className='containerNav'>
            <ul className='Navigation'>
            {catalog.map((item,i) => {
              return i === 6 ? <li className='navItem'><a href='#' style={{color: "#6941C6"}}>{item}</a></li> : <li className='navItem'><a href='#'>{item}</a></li>
            })}
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