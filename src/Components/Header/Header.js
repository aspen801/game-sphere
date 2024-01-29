import React from 'react'
import "./Header.scss"
import logo from "../../resources/png/Logo.png"
import LogoMobile from "../../resources/png/LogoMobile.png"
import {Container, Row, Col} from 'react-bootstrap'
import searchInputSvg from "../../resources/svg/Search.svg"
import arrow from "../../resources/svg/arrow.svg"
import arrowDropLng from "../../resources/svg/arrow-drop-lng.svg"
import profile from "../../resources/svg/Profile.svg"
import heart from "../../resources/svg/heart-line.svg"
import balance from "../../resources/svg/sharp-balance.svg"
import shoppingCart from "../../resources/svg/shopping-cart-line.svg"
import menu from "../../resources/svg/menu.svg"
import phone from "../../resources/svg/phone.svg"

const Header = () => {
  return (
    <div id='header'>
        <div className='container'>
          <div className='nav'>
            <img src={menu} alt='menu' className='menu'/>
            <a href='#'><img src={logo} className='logo' alt='logo'/></a>
            <a href='#'><img src={logo} className='logo-mobile' alt='logo'/></a>
          </div>
          <div className='searchPanel'>
            <input type='text' placeholder='Шукати' className='input'/>
            <img src={searchInputSvg} alt='search' className='searchButton'/>
          </div>
          <div className='contact'>
            <div>
              <div className='numberPanel'>
                <p className='number'>0 800 25 00 32</p>
                <img src={arrow} className='arrow' alt='arrow'/>
              </div>
              <p>Пн-Нд: 09:00-21:30</p>
            </div>
          </div>
          <div className='catalog'>
           
              <div className='language'>
                <p className='languageText'>Укр</p>
                <img className='languageArrow' src={arrowDropLng} alt='arrow'/>
              </div>
              <img src={profile} className='profile' alt='profile'/>
              <img src={phone} className='phone' alt='phone'/>
              <div className='likes'>
                <img src={heart} alt='heart'/> 
                <p>11</p> 
              </div>
              <img src={balance} className='balance' alt='balance'/>
              <img src={shoppingCart} alt='shoppingcart' className='shoppingCart'/>
          </div>
        </div>
    </div>
  )
}

export default Header
