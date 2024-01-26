import React from 'react'
import "./Header.scss"
import logo from "../../resources/png/Logo.png"
import {Container, Row, Col} from 'react-bootstrap'
import searchInputSvg from "../../resources/svg/Search.svg"
import arrow from "../../resources/svg/arrow.svg"
import arrowDropLng from "../../resources/svg/arrow-drop-lng.svg"
import heart from "../../resources/svg/heart-line.svg"
import balance from "../../resources/svg/sharp-balance.svg"
import shoppingCart from "../../resources/svg/shopping-cart-line.svg"

const Header = () => {
  return (
    <div className='header'>
        <Container fluid="xl">
            <Row>
                <Col sm={2} className='logo'>
                  <a href='#'>
                      <img src={logo} alt="logo"/>
                  </a>
                </Col>
                <Col sm={5} className='align'>
                  <div className='inputBox'>
                    <input type='text' className='Input' placeholder='Шукати'/>
                    <img src={searchInputSvg} alt="inputSvg"/>
                  </div>
                </Col>
                <Col sm={3} className='align'>
                    <div className='tel'>
                        0 800 25 00 32
                        <img className='arrow' src={arrow} alt='arrow'/>
                      <div className='data'>
                        Пн-Нд: 09:00-21:30
                      </div>
                    </div>
                </Col>
                <Col sm={2} className='align'>
                  <div className='widgets'>
                    <div>
                      Укр
                      <img src={arrowDropLng} alt='arrow'/>
                    </div>
                    <div className='like'>
                      <img src={heart} alt="likeImg"/>
                      <p className='likeText'>7</p>
                    </div>
                    <img src={balance} alt="balance"/>
                    <img src={shoppingCart} alt="shoppingCart"/>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header
