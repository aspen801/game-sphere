import React from 'react'
import "./Card.scss"
import laptop from "../../resources/png/laptop.png"
import shoppingCart from "../../resources/svg/shoppingCart.svg"
import { CustomRatingIcon } from '../RatedFunction';
const Card = () => {
  return (
    <div className='сard'>    
        <img src={laptop} alt='laptop' className='mainImg'/>
        <p className='codeText'>Код: 1447</p>
        <p className='mainText'>Ноутбук ASUS 16" ROG STRIX G16 G614JV-AS73/Intel I7-13650HX/16Gb/512SSD/GF 406</p>
        <div className='rating'>
            {CustomRatingIcon()}
            <p>5 відгуків</p>
        </div>
        <div className='description'>
            <p>Об’єм ОЗП: 16 Гб</p>
            <p>Тип накопикувача: SSD</p>
            <p>Об’єм SSD диска: 512 Гб</p>
            <p>Відеокарта: GeForce RTX4060</p>
        </div>
        <div className='discount'>
            <p><strike>69 999 ₴</strike></p>
            <p>-8000 ₴</p>
        </div>
        <div className='buy'>
            <p className='price'>61 999 ₴</p>
            <a href='#' className='sellBtn'><img src={shoppingCart} alt='shoppingCart'/></a>
        </div>
    </div>
  )
}

export default Card
