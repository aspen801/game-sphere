import React from 'react'

export const BurgerCatalog = ({item, index, ArrowRight,setOpenBurgerLink,setInformationBurgerLink}) => {
  const {catalog,firstList,secondList} = item
  return (
    <li onClick={() => {
      setOpenBurgerLink(true)
      setInformationBurgerLink({ArrowRight,catalog,firstList,secondList})
      }} className='burger_item active' style={index === 5 ? {color: "#F79009"} : null}>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={item.tabsImg} className='burger_icon' alt='Profile'/>{item.catalog}
            </div>
        <img src={ArrowRight} alt='Arrow'/>
    </li>
  )
}
