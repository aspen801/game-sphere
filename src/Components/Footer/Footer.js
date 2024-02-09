import React from 'react'
import "./Footer.scss"
import giveSvg from '../../layouts/SvgFunction'
export const Footer = () => {
  return (
    <div className='footer'>
        <img/>
        <img/>
        <div className='footer_container'>
            <div>
                {giveSvg("logoSvg")}
                <p>Підпишись та першим дізнавайся акції та новини!</p>
                <div className='footer_input'>
                        <input type='text' placeholder='Електронна пошта'/>
                        <button>Підписатись</button>
                </div>
            </div>
            <div>
                <p>Категорії</p>
                <ul>
                    <li>ПK та комплектуючі</li>
                    <li>Консолі та аксесуари</li>
                    <li>Ноутбуки</li>
                    <li>Переферія</li>
                    <li>Аксесуари</li>
                    <li style={{color: "#F79009"}   }>Акції</li>
                </ul>
            </div>
            <div>
                <p>Покупцеві</p>
                <ul>
                    <li>Про нас</li>
                    <li>FAQ та допомога</li>
                    <li>Гарантійне обслуговування </li>
                    <li>Доставка та оплата</li>
                    <li>Обмін та повернення</li>
                    <li>Політика конфіденційності</li>
                </ul>
            </div>
            <div>
                <p>Контакти</p>
                <ul>
                    <li>0 800 25 00 32</li>
                    <li>М.Київ вул. Сагайдачного, 17А</li>
                    <li>Пн-Нд: 09:00-21:30</li>
                    <li>
                        {giveSvg("viber")}
                        {giveSvg("telegram")}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
