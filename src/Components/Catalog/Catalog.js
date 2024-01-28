import React from 'react'
import "./Catalog.scss"
import searchInputSvg from "../../resources/svg/Search.svg"
const Catalog = () => {
  const catalog = ["ПК та комплектуючі","Консолі та аксесуари","Ноутбуки","Переферія","Аксесуари","Акції","Покупцеві"]
  return (
    <div id="catalog">
        <div className='containerNav'>
            <ul className='Navigation'>
                <li className='navItem'><a href='#'>ПК та комплектуючі</a></li>
                <li className='navItem'><a href='#'>Консолі та аксесуари</a></li>
                <li className='navItem'><a href='#'>Ноутбуки</a></li>
                <li className='navItem'><a href='#'>Переферія</a></li>
                <li className='navItem'><a href='#'>Аксесуари</a></li>
                <li className='navItem'><a href='#' style={{color: "#6941C6"}}>Акції</a></li>
                <li className='navItem'><a href='#'>Покупцеві</a></li>
            </ul>
            <div className='searchPanelNav'>
                <input type='text' placeholder='Шукати' className='inputNav'/>
                <img src={searchInputSvg} alt='search' className='searchButtonNav'/>
          </div>
        </div>
    </div>
  )
}
export default Catalog