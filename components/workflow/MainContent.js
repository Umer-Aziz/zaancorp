import React from 'react'
import Cardheader from './Cardheader'
import style from "@/styles/workflow-content.module.css"
const MainContent = () => {
  return (
    <>
    <section className={style.mainContentContainer}>
        <div className={style.Cardheader}>
            <div className={style.cardWrapper}>
                <Cardheader title="Backlog" counter="2"/>
            </div>
            <div className={style.cardWrapper}>
                <Cardheader title="To Do" counter="5"/>
            </div>
            <div className={style.cardWrapper}>
                <Cardheader title="In Process" counter="35"/>
            </div>
            <div className={style.cardWrapper}>
                <Cardheader title="In Review" counter="5"/>
            </div>
            <div className={style.cardWrapper}>
                <Cardheader title="Completed" counter="1"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default MainContent