import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./FilterSubCategory.scss"
import { NavLink } from 'react-router-dom';
import { actions as secondAction } from '../../Features/slices/SecondNavigationId.slice'



export const FilterSubCategory = ({modalInfo}) => {
    const index = useSelector((state) => state.SetIndexNavItem);
    const dispatch = useDispatch()
    const {firstList,secondList, id} = modalInfo[index]
  return (
    <div className='catalog-page__filters'>
        <ul className='catalog-page__filters__list'>
            {firstList.map(item => <li className='catalog-page__filters__list__item'>
                <NavLink 
                className='catalog-page__filters__list__item__link' 
                onClick={(e) => dispatch(secondAction.setSecondNavItem(e.target.innerText))}
                to={`/catalog/${id}/${item}`}>
                    {item}
                </NavLink>
            </li>)}
            {secondList.map(item => <li className='catalog-page__filters__list__item'>
                <NavLink 
                className='catalog-page__filters__list__item__link' 
                onClick={(e) => dispatch(secondAction.setSecondNavItem(e.target.innerText))}
                to={`/catalog/${id}/${item}`}>
                    {item}
                </NavLink>
            </li>)}
        </ul>
    </div>
  )
}
