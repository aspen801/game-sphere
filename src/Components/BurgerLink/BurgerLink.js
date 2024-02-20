import React from 'react'
import "./BurgerLink.scss"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as secondAction } from '../../Features/slices/SecondNavigationId.slice'



export const BurgerLink = ({setOpenBurger, setOpenBurgerLink,openBurgerLink,informationBurgerLink}) => {
  const dispatch = useDispatch()
  function setTargetUrl(e) {
    dispatch(secondAction.setSecondNavItem(e.target.innerText))
    setOpenBurgerLink(false)  
    setOpenBurger(false)
  }
  return (
    <div className='burgerlink act' style={openBurgerLink ? {display: "block"} : {display: "none"}}>
        <div className='burger_link_head'>
            <img src={informationBurgerLink.ArrowRight} alt='arrow' onClick={() => setOpenBurgerLink(false)} />
            <p>{informationBurgerLink.catalog}</p>
        </div>
        <div className='line_link line'></div>
        <ul className='burger_link_list'>
            {informationBurgerLink.firstList.map(item => <li><NavLink className="burger_link" onClick={(e) => setTargetUrl(e)} to={`/catalog/${informationBurgerLink.id}/${item}`}>{item}</NavLink></li>)}
            {informationBurgerLink.secondList.map(item => <li><NavLink className="burger_link" onClick={(e) => setTargetUrl(e)} to={`/catalog/${informationBurgerLink.id}/${item}`}>{item}</NavLink></li>)}
        </ul>
    </div>
  )
}
