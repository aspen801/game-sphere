import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../../Features/slices/NavigationId.slice'


const BurgerCatalog = ({item, setOpenBurger, index, ArrowRight,setOpenBurgerLink,setInformationBurgerLink}) => {
  const {catalog,firstList,secondList,id} = item
  const dispatch = useDispatch()

  return (
    <li onClick={() => {
      if(index === 5) {
        setOpenBurger(false)
      } else {
        setOpenBurgerLink(true)
      setInformationBurgerLink({ArrowRight,catalog,firstList,secondList,id})
      }
      }} className='burger_item active' style={index === 5 ? {color: "#F79009"} : null}>
            <div style={{display: "flex", alignItems: "center"}} onClick={(e) => dispatch(actions.setNavItem(e.target.innerText))}>
                <img src={item.tabsImg} className='burger_icon' alt='Profile'/>{item.catalog}
            </div>
        <img src={ArrowRight} alt='Arrow'/>
    </li>
  )
}

export default BurgerCatalog;