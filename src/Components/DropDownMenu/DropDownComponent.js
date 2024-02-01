import React, { useState, useRef } from 'react'
import "./DropDownComponent.scss"
import { useClickOutside } from '../../hooks/useClickOutSide'



export const DropDown = ({info, index}) => {
    const [open, setOpen] = useState(false)
    const {firstList, secondList, catalog,img, arrowCatalog} = info
    const menuRef = useRef()
    useClickOutside(menuRef, () => {
        setOpen(false);
    })
    open ?  document.body.classList.add("active") : document.body.classList.remove("active")
 
    return(
        <>
        <div>
            <li className="navItem" onClick={() => setOpen(!open)}>
                <a href='#' style={index === 5 ? {color: "#F79009"} : null}>{catalog}</a>
            </li>
        </div>
            <div>
                <div className={open ? "catalogPc active": "catalogPc"}>
                    <div className='containerModal' ref={menuRef}>
                        <div className="modalList">
                            <ul style={(firstList.length) ? {display: "block"} : {display: "none"}}>
                                {
                                    firstList.map(item => <li>{item}</li> )
                                }
                            </ul>
                            <ul className='secondList'>
                                {    
                                    info.secondList.map((item,index) => {
                                    if (secondList.length - 1 === index)  return <li>{item}<img src={arrowCatalog} alt='arrowCatalog' /></li>
                                    return <li>{item}</li> 
                                })}
                            </ul>
                        </div>
                        <img src={img} alt=''/>
                    </div>
                </div>
                <div className={open ? "backgroundClick active" : "backgroundClick"} onClick={() => {setOpen(false)}}>
                </div>
            </div>
        </>
    )
}