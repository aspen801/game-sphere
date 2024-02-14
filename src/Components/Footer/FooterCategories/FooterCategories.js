import React, { useState } from 'react'
import "./FooterCategories.scss"
import dropArrowFooter from "../../../resources/svg/dropArrowFooter.svg"
export const FooterCategories = () => {
    const [openCategories, setCategories] = useState(false)
  return (
    <div>
        <div className='footer_categories_text' onClick={() => setCategories(!openCategories)}>
            <p>Категорії</p>
            <img src={dropArrowFooter} alt='dropArrowFooter'/>
        </div>
        <ul className={openCategories ? "footer_categories_list active" : 'footer_categories_list'}>
            <li>ПK та комплектуючі</li>
            <li>Консолі та аксесуари</li>
            <li>Ноутбуки</li>
            <li>Переферія</li>
            <li>Аксесуари</li>
            <li>Акції</li>
        </ul>
        <div className='footer_line'>
        </div>
    </div>
  )
}
