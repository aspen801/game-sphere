import React, { useState } from 'react'
import "./FooterBuyer.scss"
import dropArrowFooter from "../../../resources/svg/dropArrowFooter.svg"
const FooterBuyer = () => {
    const [openBuyer, setOpenBuyer] = useState(false)
  return (
    <div className='footer_buyer'>
        <div className='footer_buyer_text' onClick={() => setOpenBuyer(!openBuyer)}>
            <p>Покупцеві</p>
            <img src={dropArrowFooter} alt='dropArrowFooter'/>
        </div>
        <ul className={openBuyer ? "footer_buyer_list active" : 'footer_buyer_list'}>
            <li>Про нас</li>
            <li>FAQ та допомога</li>
            <li>Гарантійне обслуговування </li>
            <li>Доставка та оплата</li>
            <li>Обмін та повернення</li>
            <li>Політика конфіденційності</li>
        </ul>
        <div className='footer_line'>
        </div>
    </div>
  ) 
}

export default FooterBuyer;
