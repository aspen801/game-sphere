import React from 'react'
import "./Catalog.scss"
import searchInputSvg from "../../resources/svg/Search.svg"
import { DropDown } from '../DropDownMenu/DropDownComponent'

const Catalog = ({modalInfo}) => {
  return (
    <nav id="catalog">
        <div className='container_nav'>
            <ul className='navigation'>
            {modalInfo.map((item, i) => <DropDown key={i} info={item} index={i}/>)}
            </ul>
            <div className='search_panel_nav'>
                <input type='text' placeholder='Шукати' className='input_nav'/>
                <img src={searchInputSvg} alt='search' className='search_button_nav'/>
            </div>
        </div>
    </nav>
  )
}
export default Catalog