import React from 'react'
import "./Card.scss"
import laptop from "../../resources/png/laptop.png"
import shoppingCartDesktop from "../../resources/svg/shoppingCart.svg"
import shoppingCartMobile from "../../resources/svg/shoppingCartMobile.svg"
import { CustomRatingIcon } from '../../layouts/RatedFunction';
import heart from "../../resources/svg/heartCard.svg"
import heartMobile from "../../resources/svg/heartCardMobile.svg"
import balance from "../../resources/svg/balanceCard.svg"
import balanceMobile from "../../resources/svg/balanceCardMobile.svg"

const Card = () => {
  return (
    <div className='сard'>
        <img src={window.innerWidth <= 400 ? heartMobile : heart } alt='heart' className='card_likes'/>  
        <img src={window.innerWidth <= 400 ? balanceMobile : balance } alt='balance' className='card_balance'/>  
        <img src={laptop} alt='laptop' className='main_img'/>
        <p className='code_text'>Код: 1447</p>
        <p className='main_text'>Ноутбук ASUS 16" ROG STRIX G16 G614JV-AS73</p>
        {/* <div className='rating'>
            {CustomRatingIcon()}
            <p>5 відгуків</p>
        </div> */}
        <div className='description'>
            <p><d>Об’єм ОЗП:</d> 16 Гб</p>
            <p><d>Тип накопикувача:</d> SSD</p>
            <p><d>Об’єм SSD диска:</d> 512 Гб</p>
            <p><d>Відеокарта:</d> GeForce RTX4060</p>
        </div>
        <div className='buy'>
            <div>
            <div className='discount'>
                    <p><strike>69 999 ₴</strike></p>
                    <p >-8000 ₴</p>
                </div>
                <p className='price'>61 999 ₴</p>
            </div>
            <a href='#' className='sell_btn'><img src={window.innerWidth <= 400 ? shoppingCartMobile : shoppingCartDesktop } alt='shoppingCart'/></a>
        </div>
    </div>
  )
}

export default Card
