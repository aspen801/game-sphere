import React from 'react'
import "./NavigationCatalog.scss"
import { useDispatch, useSelector } from 'react-redux'
import arrow from "../../resources/svg/arrow.svg"
import { NavLink } from 'react-router-dom'
import { actions as secondAction } from '../../Features/slices/SecondNavigationId.slice'
export const NavigationCatalog = () => {
    const navCatalog = useSelector(state => state.NavigationIdSlice)
    const SecondNav = useSelector(state => state.SecondNavigation)
    const dispatch = useDispatch()
  return (
    <div className='nav_catalog'>
        <div className='nav_catalog_container'>
            <p><NavLink className="links" to="/">Головна</NavLink></p>
            <img src={arrow} alt='arrow'/>
            <p><NavLink className="links" to=".." relative='path' onClick={() => dispatch(secondAction.setSecondNavItem(""))}>{navCatalog}</NavLink></p>
            {SecondNav !== "" ? <><img src={arrow} alt='arrow'/><p>{SecondNav}</p></> : null}
        </div>
    </div>
  )
}
