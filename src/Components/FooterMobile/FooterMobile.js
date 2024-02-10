import React from 'react'
import "./FooterMobile.scss"
import { FooterSubmit } from '../FooterSubmit/FooterSubmit'
import { FooterCategories } from '../FooterCategories/FooterCategories'
import { FooterBuyer } from '../FooterBuyer/FooterBuyer'
import { FooterContacts } from '../FooterContacts/FooterContacts'
import Logo from '../../resources/svg/Logo.svg'
export const FooterMobile = () => { 
  return (
    <>
        <div className='footer_container_mobile'>
            <div className='footer_submit'>
                <img src={Logo} alt='logo' className='footer_logo'/>
                <FooterSubmit/>
            </div>
            <div className='footer_info'>
                <FooterContacts/>
                <div className='footer_menu'>
                    <FooterBuyer/>
                    <FooterCategories/>
                </div>
            </div>
        </div>
    </>
  )
}
