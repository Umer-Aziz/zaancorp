import React from 'react'
import style from "@/styles/workflow/workflowcard.module.css"
const Workflowcard = () => {
  return (
    <>
            <div className={style.cardWrapper}>
               {/* card Inner head */}
                <div className={style.cardInnerHeadWrapper}>
                <div className={style.cardInnerHead}>
                    <div className={style.cardDot}></div>
                    <span className={style.cardLabel}>ContactRm</span>
                </div>
                <div>
                    <img className={style.cardHeadIcon} src="/icons/filecheck.svg" alt="file icon" />
                </div>
                </div>
                {/* card body  */}
                <div style={style.cardBodyWrapper}>
                    <p className={style.cardTitle}>Design a website</p>
                    <div className={style.cardTagsWrapper}>
                        <span className={`${style.cardTagTitle} ${style.cardBgYellow}`}>api.contactrm.com</span>
                        <span className={`${style.cardTagTitle} ${style.cardBgPink}`}>api.contactrm</span>
                    </div>

                    {/* card Icons  */}
                    <div>
                    <ul className={style.cardIconsWrapper}>
                    <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src="/icons/description.svg" alt="icon" />
                    </li>
                    <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src="/icons/message.svg" alt="icon" />
                        <span className={style.IconCounterText}>12</span>
                    </li>    
                    <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src="/icons/checklist2.svg" alt="icon" />
                        <span className={style.IconCounterText}>8/9</span>
                    </li>
                    <li className={style.cardIconItem}>
                        <img className={style.cardIcon} src="/icons/link.svg" alt="icon" />
                        <span className={style.IconCounterText}>2</span>
                    </li>
                    </ul>
                    </div>

                    {/* card bottom */}
                    <div className={style.BottomWrapper}>
                    <div className={style.textWrapper}>
                        <p className={style.bottomText}>Created 3 days ago</p>
                    </div>
                        <img className={style.bottomIcon} src="/images/user2.png" alt="user pic" />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Workflowcard