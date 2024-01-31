import React from 'react'
import "./Header.scss"
import giveSvg from '../../layouts/SvgFunction'
import { useDispatch } from 'react-redux'
import { actions } from '../Catalog/index.slice'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <div id='header'>
        <div className='container'>
          <div className='nav'>
          {giveSvg("menu")}
            <a href='#' onClick={() => {
                dispatch(actions.closeMenu(7))
                document.body.classList.remove('active');
            }}>{giveSvg("logoSvg")}</a>
            <a href='#' onClick={() => {
                dispatch(actions.closeMenu(7))
                document.body.classList.remove('active');
            }}>{giveSvg("LogoMobileSvg")}</a>
          </div>
          <div className='searchPanel'>
            <input type='text' placeholder='Шукати' className='input'/>
            {giveSvg("search")}
          </div>
          <div className='contact'>
            <div>
              <div className='numberPanel'>
                <p className='number'>0 800 25 00 32</p>
                {giveSvg("arrow")}
              </div>
              <p>Пн-Нд: 09:00-21:30</p>
            </div>
          </div>
          <div className='catalog'>
           
              <div className='language'>
                <p className='languageText'>Укр</p>
                {giveSvg("arrowDropLng")}
              </div>
                {giveSvg("profile")}
                {giveSvg("phone")}
              <div className='likes'>
                {giveSvg("heart")}
                <p>11</p> 
              </div>
              {giveSvg("balance")}
              {giveSvg("shoppingCart")}
          </div>
        </div>
    </div>
  )
}

export default Header
