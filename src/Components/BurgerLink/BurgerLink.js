import React from 'react'
import "./BurgerLink.scss"
export const BurgerLink = ({setOpenBurgerLink,openBurgerLink,informationBurgerLink}) => {
  return (
    <div className='burgerlink act' style={openBurgerLink ? {display: "block"} : {display: "none"}}>
        <div className='burger_link_head'>
            <img src={informationBurgerLink.ArrowRight} alt='arrow' onClick={() => setOpenBurgerLink(false)} />
            <p>{informationBurgerLink.catalog}</p>
        </div>
        <div className='line_link line'></div>
        <ul className='burger_link_list'>
            {informationBurgerLink.firstList.map(item => <li>{item}</li>)}
            {informationBurgerLink.secondList.map(item => <li>{item}</li>)}
        </ul>
    </div>
  )
}
