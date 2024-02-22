import React, { useState } from 'react'
import "./Sorts.scss"
export const Sorts = () => {
    const [activePopular, setActivePopular] = useState(true)
    const [activeExpensive, setActiveExpensive] = useState(false)
    const [activeCheap, setActiveCheap] = useState(false)
  return (
    <div className='sorts__content'>
        <p>Сортування</p>
        <p onClick={() => {
            setActivePopular(true)
            setActiveExpensive(false)
            setActiveCheap(false)
        }} className={activePopular ? "active" : ""}>популярні</p>
        <p onClick={() => {
            setActivePopular(false)
            setActiveExpensive(true)
            setActiveCheap(false)
        }} className={activeExpensive ? "active" : ""}>від дорогих до дешевих</p>
        <p onClick={() => {
            setActivePopular(false)
            setActiveExpensive(false)
            setActiveCheap(true)
        }} className={activeCheap ? "active" : ""}>від дешевих до дорогих</p>
    </div>
  )
}
