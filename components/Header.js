import React from 'react'
import style from "@/styles/header.module.css";
const Header = () => {
  return (
    <>
        <header className={style.headerContainer}>
            <div className={style.headerWrapper}>
 
                {/* user Notifcations divider */}
                 <div className={style.headerDiv}>
                <div className={style.userNotifcations}>
                    <ul className={style.userContainer}>
                        <li className={style.userList}>
                            <img className={style.userPic} src="/images/user1.png" alt="user image" />
                            <div className={`${style.notificationCounter} alert-yellow`}>
                                <span>15</span>
                            </div>
                            <div className={style.userDivider}></div>
                        </li>
                        <li className={style.userList}>
                            <img className={style.userPic} src="/images/user1.png" alt="user image" />
                            <div className={`${style.notificationCounter} alert-purple`}>
                                <span>11</span>
                            </div>
                        </li>  
                    </ul>
                    <div className={style.dropDownIcon}>
                        <img src="/icons/chevron.svg" alt="icon" />
                    </div>
                </div>
 
                   {/* Icons Divider  */}
                   <div className={style.IconGroup}>
                   <div className={style.IconWrapper}>
                    <img src="/icons/suggestions.svg" alt="icon" />
                    </div>
                   <div className={`${style.IconWrapper} ${style.plusBgColor}`}>
                    <img src="/icons/plus.svg" alt="icon" />
                    </div>
                   </div>

                   {/* search bar  */}
                   <div className={style.searchBar}>
                    <img src="/icons/search.svg" alt="search icon" />
                    <input className={style.searchInput} type="text" placeholder='Search' />
                   </div>
                 </div>
                   {/* Icon Divider  */}
                   <div className={style.IconGroup}>
                   <div className={style.IconWrapper}>
                    <img src="/icons/annoucement.svg" alt="icon" />
                    </div>
                   <div className={style.IconWrapper}>
                    <img src="/icons/calendar.svg" alt="icon" />
                    </div>
                   <div className={`${style.IconWrapper}`}>
                    <img src="/icons/chat-with-alert.svg" alt="icon" />
                    </div>
                    <div>
                    <img className={style.userProfilePic} src="/images/user2.png" alt="icon" />
                    </div>
                   </div>
                   
            </div>
        </header>
    </>
  )
}

export default Header