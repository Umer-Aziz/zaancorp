import React from 'react'
import style from "@/styles/workflow/workflowcard.module.css"
const Workflowcard = ({ dotColor , cardLabel , cardHeadIcon , cardTitle , cardTagTitle1 , cardTagTitle2 ,
     IconMessage , IconChecklist2 , IconLink , MessageCounter , ChecklistCounter , LinkCounter , CreatedTime , userProfilePic }) => {
  return (
    <>
            <div className={style.cardWrapper}>
               {/* card Inner head */}
                <div className={style.cardInnerHeadWrapper}>
                <div className={style.cardInnerHead}>
                    <div className={`${style.cardDot} ${dotColor}`}></div>
                    <span className={style.cardLabel}>{cardLabel}</span>
                </div>
                <div>
                    <img className={style.cardHeadIcon} src={`/icons/${cardHeadIcon}.svg`} alt="icon" />
                </div>
                </div>
                {/* card body  */}
                <div style={style.cardBodyWrapper}>
                    <p className={style.cardTitle}>{cardTitle}</p>
                    <div className={style.cardTagsWrapper}>
                        <span className={`${style.cardTagTitle} ${style.cardBgYellow}`}>{cardTagTitle1}</span>
                        <span className={`${style.cardTagTitle} ${style.cardBgPink}`}>{cardTagTitle2}</span>
                    </div>

                    {/* card Icons  */}
                    <div>
                    <ul className={style.cardIconsWrapper}>
                    <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src="/icons/description.svg" alt="icon" />
                    </li>

                    { IconMessage != undefined && <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src={`/icons/${IconMessage}.svg`} alt="icon" />
                        <span className={style.IconCounterText}>{MessageCounter}</span>
                    </li> } 

                    { IconChecklist2 != undefined && <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src={`/icons/${IconChecklist2}.svg`} alt="icon" />
                        <span className={style.IconCounterText}>{ChecklistCounter}</span>
                    </li>}

                   
                    { IconLink != undefined && <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src={`/icons/${IconLink}.svg`} alt="icon" />
                        <span className={style.IconCounterText}>{LinkCounter}</span>
                    </li>}

                    </ul>
                    </div>

                    {/* card bottom */}
                    <div className={style.BottomWrapper}>
                    <div className={style.textWrapper}>
                        <p className={style.bottomText}>{CreatedTime}</p>
                    </div>
                        <img className={style.bottomIcon} src={`/images/${userProfilePic}`} alt="user pic" />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Workflowcard