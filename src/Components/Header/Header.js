import React, { useState } from 'react'
import "./Header.scss"
import giveSvg from '../../layouts/SvgFunction'


const Header = () => {
  const [openLng, setOpenLng] = useState(false)
  const [activeLng,setActiveLng] = useState("Укр")
  const [passiveLng,setPassiveLng] = useState("Eng")
  return (
    <div id='header'>
        <div className='container'>
          <div className='nav'>
          {giveSvg("menu")}
            <a href='#'>{giveSvg("logoSvg")}</a>
            <a href='#'>{giveSvg("LogoMobileSvg")}</a>
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
              <div className='language' onClick={() => setOpenLng(!openLng)}>
                <p className='languageText' >{activeLng}</p>
                <p onClick={() =>{
                  setPassiveLng(activeLng)
                  setActiveLng(passiveLng)
                }} className={openLng ? "languageSwitch active" : "languageSwitch"}>{passiveLng}</p>
                {openLng ? giveSvg("arrowUpLng") : giveSvg("arrowDropLng")}
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
