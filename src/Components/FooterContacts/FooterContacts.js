import React from 'react'
import "./FooterContacts.scss"
import giveSvg from '../../layouts/SvgFunction'
export const FooterContacts = () => {
  return (
    <div className='footer_contacts'>
        <p className='footer_contacts_text'>Контакти</p>
        <ul className='footer_contacts_list'>
            <li>0 800 25 00 32</li>
            <li>М.Київ вул. Сагайдачного, 17А</li>
            <li>Пн-Нд: 09:00-21:30</li>
            <li>
                {giveSvg("viber")}
                {giveSvg("telegram")}
            </li>
        </ul>
    </div>
  )
}
