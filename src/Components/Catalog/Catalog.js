import React from 'react'
import "./Catalog.scss"
import searchInputSvg from "../../resources/svg/Search.svg"
import { DropDown } from '../DropDownMenu/DropDownComponent'

const Catalog = ({modalInfo}) => {
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