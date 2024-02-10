import React from 'react'
import "./FooterMobile.scss"

import Logo from '../../../resources/svg/Logo.svg'
import { FooterSubmit } from '../FooterSubmit/FooterSubmit'
import { FooterContacts } from '../FooterContacts/FooterContacts'
import { FooterBuyer } from '../FooterBuyer/FooterBuyer'
import { FooterCategories } from '../FooterCategories/FooterCategories'
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
