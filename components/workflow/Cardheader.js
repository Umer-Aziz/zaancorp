import React from 'react'
import style from "@/styles/workflow/cardheader.module.css"
const Cardheader = ({title , counter }) => {
  return (
    <>
        <div className={style.cardContainer}>
            <div className={style.cardWrapper}>
            <h5 className={style.cardTitle}>{title}</h5>
            <span className={style.cardCounter}>({counter})</span>
            <div className={style.cardIcons}>
            <img className={style.Icon} src="/icons/filter-gray.svg" alt="filter" />
            <img className={style.Icon} src="/icons/sortby-gray.svg" alt="sort by icon" />
            </div>
            </div>
            <img className={style.Icon} src="/icons/menu-dot.svg" alt="menu dot icon" />
        </div>
    </>
  )
}

export default Cardheader