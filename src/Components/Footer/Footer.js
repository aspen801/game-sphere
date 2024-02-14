import React from 'react'
import "./Footer.scss"
import { FooterDesktop } from './FooterDesktop/FooterDesktop'
import { FooterTabs } from './FooterTabs/FooterTabs'
import { FooterMobile } from './FooterMobile/FooterMobile'
import footerSotsRight from "../../resources/svg/footerSotsRight.svg"
import footerSotsLeft from "../../resources/svg/footerSotsLeft.svg"
export const Footer = () => {
  return (
    <div className='footer'>
        <img src={footerSotsRight} alt='sots' className='footer_sots_right'/>
        <img src={footerSotsLeft} alt='sots' className='footer_sots_left'/>
        <div className="footer_desktop">
            <FooterDesktop />
        </div>
        <div className="footer_tabs">
            <FooterTabs/>
        </div>
        <div className="footer_mobile">
            <FooterMobile/>
        </div>
    </div>
  )
}
