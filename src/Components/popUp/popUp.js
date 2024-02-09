import React, { useEffect, useRef, useState } from 'react'
import "./popUp.scss"
import CloseButton from "../../resources/svg/closeButton.svg"
import sotsRight from "../../resources/png/sotsPopUpRight.png"
import sotsLeft from "../../resources/png/sotsPopUpLeft.png"
import { useClickOutside } from '../../hooks/useClickOutSide'
export const PopUp = () => {

    // useEffect(() => {
    //     const popUpTimer = setTimeout(() => setOpen(true),15000)
    //     return () => clearTimeout(popUpTimer)
    // },[])
    const [open,setOpen] = useState(false)
    const popUpRef = useRef()
    useClickOutside(popUpRef, () => {
        setOpen(false);
    })
    open ?  document.body.classList.add("active") : document.body.classList.remove("active")
  return (
    <div className='popUp_position'>
        <div className={open ? "background_popUp active" : "background_popUp"}></div>
        <div className={open ? "popUp active" : "popUp"} ref={popUpRef}>
            <img src={sotsLeft} alt='sots' className='sots_popUp_left'/>
            <img src={sotsRight} alt='sots' className='sots_popUp_right'/>
            <img src={CloseButton} alt='close' className='popUp_closebtn' onClick={() => setOpen(false)}/>
            <div className='popUp_content'>
                <div className='popUp_container'>
                    <p>10% знижки на перше замовлення</p>
                    <p>Також ви  будете першими дізнаватись про наші новинки та ексклюзивні пропозиції</p>
                    <form action=''>
                    <div className='popUp_input'>
                        <input type='text' placeholder='Електронна пошта'/>
                        <button>Підписатись</button>
                    </div>
                    <div className='popUp_checkbox'>
                        <input type='checkbox'></input>
                        <p>Я ознайомлений(а) з умовами політики кофеденційності</p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
