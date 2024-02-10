import React, { useState, useRef } from 'react'
import  "./Header.scss"
import giveSvg from '../../layouts/SvgFunction'
import { useClickOutside } from '../../hooks/useClickOutSide'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { BurgerLink } from '../BurgerLink/BurgerLink'
import arrow from "../../resources/svg/arrow.svg"

const Header = ({modalInfo}) => {
  const [openLng, setOpenLng] = useState(false)
  const [activeLng,setActiveLng] = useState("Укр")
  const [passiveLng,setPassiveLng] = useState("Eng")
  const [openBurger, setOpenBurger] = useState(false)
  const [openBurgerLink, setOpenBurgerLink] = useState(false)
  const [openContactPanel, setOpenContactPanel] = useState(false)
  const [likes, setLikes] = useState(0) // переробити на Redux
  const [informationBurgerLink, setInformationBurgerLink] = useState(modalInfo[0])
  const burgerRef = useRef()
  const contactRef = useRef()
    useClickOutside(burgerRef, () => {
      setOpenBurger(false);
    })
    useClickOutside(contactRef, () => {
      setOpenContactPanel(false);
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
          <div className='search_panel'>
            <input type='text' placeholder='Шукати' className='input'/>
            {giveSvg("search")}
          </div>
          <div className='contact' ref={contactRef}>
            <div className='contact_information'>
              <div className='number_panel'>
                <p className='number'>0 800 25 00 32</p>
                <img src={arrow} className='arrow' alt='arrow' onClick={() => setOpenContactPanel(!openContactPanel)}/>
              </div>
              <p>Пн-Нд: 09:00-21:30</p>
            </div>
            <div className={openContactPanel ? "contact_panel active" : 'contact_panel'}>
              <div className='network_icon'>
                {giveSvg("viber")}
                {giveSvg("telegram")}
              </div>
              <a href='#' className='btn_call'>Подзвоніть мені</a>
            </div>  
          </div>
          <div className='catalog'>
              <div className='language' onClick={() => setOpenLng(!openLng)}>
                <p className='language_text' >{activeLng}</p>
                <p onClick={() =>{
                  setPassiveLng(activeLng)
                  setActiveLng(passiveLng)
                }} className={openLng ? "language_switch active" : "language_switch"}>{passiveLng}</p>
                {openLng ? giveSvg("arrowUpLng") : giveSvg("arrowDropLng")}
              </div>
                {giveSvg("profile")}
                {giveSvg("phone")}
              <div className='likes'>
                {giveSvg("heart")}
                <p className="likes_count" style={likes >= 1 ? {display: "block"} : {display: "none"}}>{likes}</p> 
              </div>
              {giveSvg("balance")}
              {giveSvg("shoppingCart")}
          </div>
        </div>
        <div ref={burgerRef} className={openBurger ? "burger_menu active" : "burger_menu"} style={openBurger ? {display: "block"} : {display: "none"}}>
           <BurgerMenu openBurgerLink={openBurgerLink} setInformationBurgerLink={setInformationBurgerLink} setOpenBurgerLink={setOpenBurgerLink} modalInfo={modalInfo} openBurger={openBurger} setOpenBurger={setOpenBurger}/>
           <BurgerLink setOpenBurgerLink={setOpenBurgerLink} openBurgerLink={openBurgerLink} informationBurgerLink={informationBurgerLink} />
        </div>
        <div className={openBurger ? "background active": "background"} onClick={() => setOpenBurgerLink(false)}>
        </div>
    </div>
  )
}

export default Header
