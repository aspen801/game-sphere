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
            <li className="nav_item" onClick={() => setOpen(!open)}>
                <a href='#' style={index === 5 ? {color: "#F79009"} : null}>{catalog}</a>
            </li>
        </div>
            <div>
                <div className={open ? "catalog_pc active": "catalog_pc"}>
                    <div className='container_modal' ref={menuRef}>
                        <div className="modal_list">
                            <ul style={(firstList.length) ? {display: "block"} : {display: "none"}}>
                                {
                                    firstList.map(item => <li>{item}</li> )
                                }
                            </ul>
                            <ul className='second_list'>
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
                <div className={open ? "background_click active" : "background_click"} onClick={() => {setOpen(false)}}>
                </div>
            </div>
        </>
    )
}