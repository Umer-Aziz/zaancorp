import React,{useState} from 'react'
import style from "@/styles/workflow/cardheader.module.css"
const Cardheader = ({title , counter }) => {
            
          const [isActive, setIsActive] = useState(false);
          const [selected, setSelected] = useState("");

          const options = ["Move all cards in this list","Archive all cards in this list"];

  return (
    <>
       <div className={style.cardHeaderContainer}>
        <div className={style.cardContainer}>
            <div className={style.cardWrapper}>
            <h5 className={style.cardTitle}>{title}</h5>
            <span className={style.cardCounter}>({counter})</span>
            <div className={style.cardIcons}>
            <img className={style.Icon} src="/icons/filter-gray.svg" alt="filter" />
            <img className={style.Icon} src="/icons/sortby-gray.svg" alt="sort by icon" />
            </div>
            </div>
            <img onClick={e =>{setIsActive(true)}} className={style.Icon} src="/icons/menu-dot.svg" alt="menu dot icon" />
        </div>
        {isActive && <div className={style.listActionMenu}>
        <div className={style.listHead}>
            <p>List Actions</p>
            <img onClick={e => {setIsActive(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="close icon" />
        </div>
        <div>
            <ul className={style.listActionWrapper}>
            {
                options.map && options.map((option , index)=>{
                    return(
                        <li onClick={e => {setSelected(option) , setIsActive(false)}} key={index} 
                        className={`${style.listActionItem} ${selected == option && style.listItemActive }`}>{option}</li>
                    )
                })
            }
            </ul>
        </div>
    </div>}
        </div>
    </>
  )
}

export default Cardheader