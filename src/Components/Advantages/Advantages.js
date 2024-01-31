import React from 'react'
import "./Advantages.scss"
import guarantee from "../../resources/svg/guarantee.svg"
import delivery from "../../resources/svg/delivery.svg"
import discountAdv from "../../resources/svg/discountAdv.svg"
import support from "../../resources/svg/support.svg"
export const Advantages = () => {
  return (
    <div className='advantages'>
        <div className='advantagesContainer'>
            <div className='guarantee'>
                <img src={guarantee} alt='guarantee'/>
                <p>Гарантія 3 <br/> роки</p>
            </div>
            <div className='delivery'>
                <img src={delivery} alt='delivery'/>
                <p>Безкоштовна <br/> доставка</p>
            </div>
            <div className='discountAdv'>
                <img src={discountAdv} alt='discountAdv'/>
                <p>Знижки та<br/>переваги</p>
            </div>
            <div className='support'>
                <img src={support} alt='support'/>
                <p>Сервісна<br/>підтримка</p>
            </div>
        </div>
    </div>
  )
}
