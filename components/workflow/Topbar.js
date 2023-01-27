import React from 'react'
import style from "@/styles/topbar.module.css"
const Topbar = () => {
  return (
   <>
    <section className={style.topbarContainer}>
        <div className={style.topbarDiv}>

          {/* left content  */}
          <div className={style.leftContent}>
            <h3 className={style.title}>Workflow</h3>
            <div className={style.leftIcons}>
                <ul className={style.IconsContainer}>
                    <li className={style.leftIconWrapper}>
                        <img src="/icons/workflow-active.svg" alt="icon" />
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img src="/icons/pencil-gray-bg.svg" alt="icon" />
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img src="/icons/code-gray-bg.svg" alt="icon" />
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img src="/icons/idea-gray-bg.svg" alt="icon" />
                    </li>
                </ul>

                {/* divider line  */}
                <div className={style.leftDivider}></div>

                <ul className={style.IconsContainer}>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user3.png" alt="user image" />
                        <div className={style.msgCounter}>2</div>
                    </li>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user4.png" alt="user image" />
                        <div className={style.msgCounter}>5</div>
                    </li>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user5.png" alt="user image" />
                        <div className={style.msgCounter}>1</div>
                    </li>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user6.png" alt="user image" />
                        <div className={style.msgCounter}>4</div>
                    </li>
                </ul>
            </div>
          </div>

          {/* right content */}
          <div>
            <ul className={style.IconsContainerRight}>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/pinned.svg" alt="pinned icon" />
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/double-file.svg" alt="file icon" />
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/save.svg" alt="save icon" />
                    <span className={style.ItemText}>Views</span>
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/filter.svg" alt="filter icon" />
                    <span className={style.ItemText}>Filter</span>
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/sort-by.svg" alt="sort-by icon" />
                    <span className={style.ItemText}>Sort By</span>
                </li>
            </ul>
          </div>
        </div>
    </section>
   </>

  )
}

export default Topbar