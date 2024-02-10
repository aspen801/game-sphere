import React from 'react'
import giveSvg from '../../layouts/SvgFunction'
import "./FooterDesktop.scss"
import { FooterSubmit } from '../FooterSubmit/FooterSubmit'
import { FooterCategories } from '../FooterCategories/FooterCategories'
import { FooterBuyer } from '../FooterBuyer/FooterBuyer'
import { FooterContacts } from '../FooterContacts/FooterContacts'
export const FooterDesktop = () => {
  return (
    <>
        <div className='footer_container'>
            <div>
                {giveSvg("logoSvg")}
                <FooterSubmit/>
            </div>
            <div>
                <FooterCategories/>
            </div>
            <div>
                <FooterBuyer/>
            </div>
            <div>
                <FooterContacts/>
            </div>
        </div>
    </>
  )
}
