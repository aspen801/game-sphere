import React, { useState, useRef } from 'react'
import  "./Header.scss"
import giveSvg from '../../layouts/SvgFunction'
import { useClickOutside } from '../../hooks/useClickOutSide'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'


const Header = ({modalInfo}) => {
  const [openLng, setOpenLng] = useState(false)
  const [activeLng,setActiveLng] = useState("Укр")
  const [passiveLng,setPassiveLng] = useState("Eng")
  const [openBurger, setOpenBurger] = useState(false)
  const burgerRef = useRef()
    useClickOutside(burgerRef, () => {
      setOpenBurger(false);
    })
    openBurger ? document.body.classList.add("active") : document.body.classList.remove("active")
  return (
    <div id='header'>
        <div className='container'>
          <div className='nav'>
            <a href='#' onClick={() => setOpenBurger(!openBurger)}>{giveSvg("menu")}</a>
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
        <div ref={burgerRef} className={openBurger ? "burgerMenu active" : "burgerMenu"}>
           <BurgerMenu modalInfo={modalInfo} openBurger={openBurger} setOpenBurger={setOpenBurger}/>
        </div>
        <div className={openBurger ? "backGround active": "backGround"}>
        </div>
    </div>
  )
}

export default Header
