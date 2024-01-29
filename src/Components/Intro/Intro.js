import React from 'react'
import "./Intro.scss"
import sotsLeft from "../../resources/png/SotsLeft.png"
import sotsRight from "../../resources/png/SotsRight.png"
import sotsTablet from "../../resources/png/SotsTablet.png"
import sotsPhone from "../../resources/png/SotsPhone.png"
import sotMouse from '../../resources/png/SotMouse.png'
import SotHeadphones from '../../resources/png/SotHeadphones.png'
import SotDisplay from '../../resources/png/SotDisplay.png'
import SotKeyBoard from '../../resources/png/SotKeyBoard.png'
import SotArmchair from '../../resources/png/SotArmchair.png'
import SotLaptop from '../../resources/png/SotLaptop.png'
const Intro = () => {
  return (
    <div id='intro'>
        <img src={sotsLeft} className='sotsLeft' alt='sotsLeft'/>
        <img src={sotsRight} className='sotsRight' alt='sotsRight'/>
        <img src={sotsTablet} className='sotsTablet' alt='sotsTablet'/>
        <img src={sotsPhone} className='sotsPhone' alt='sotsPhone'/>
        <img src={sotMouse} className='sotMouse' alt='sotMouse'/>
        <img src={SotHeadphones} className='SotHeadphones' alt='SotHeadphones'/>
        <img src={SotDisplay} className='SotDisplay' alt='SotDisplay'/>
        <img src={SotKeyBoard} className='SotKeyBoard' alt='SotKeyBoard'/>
        <img src={SotArmchair} className='SotArmchair' alt='SotArmchair'/>
        <img src={SotLaptop} className='SotLaptop' alt='SotLaptop'/>
        <div className='containerIntro'>
        <h1>Новий рік</h1>
        <h2>Нові перемоги</h2>
        <p>Зустрічайте Новий рік з ексклюзивними цінами на комп’ютери та ноутбуки Premier, а також безкоштовне дворічне оновлення компонентів</p>
        <a href='#'>Перейти до каталогу</a>
        </div>
    </div>
  )
}

export default Intro
