import React from 'react'
import Cardheader from './Cardheader'
import style from "@/styles/workflow-content.module.css"
import BacklogCards from './BacklogCards'
import Todocards from './Todocards'
import InprocessCards from './InprocessCards'
import InreviewCards from './InreviewCards'
import CompletedCards from './CompletedCards'
const MainContent = () => {
  return (
    <>
    <section className={style.mainContentContainer}>
        <div className={style.Cardheader}>


        {/* BACKLOG CARDS CONTAINER  */}
            <div className={style.cardWrapper}>
                <Cardheader title="Backlog" counter="2"/>
                <div className={style.Workflowcard}>
                    <BacklogCards/>
                </div>
            </div>

            {/* TODO CARDS  CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="To Do" counter="5"/>
                <div className={style.Workflowcard}>
                <Todocards/>
         </div>
            </div>

            {/* IN PROCESS CARDS CONTAINER */}
            <div className={style.cardWrapper}>

                <Cardheader title="In Process" counter="35"/>
                <div className={style.Workflowcard}>
                  <InprocessCards/>
                </div>

                
            </div>

            {/* IN REVIEW CARDS CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="In Review" counter="5"/>
                <div className={style.Workflowcard}>
                <InreviewCards/>
                </div>
            </div>

           {/* COMPLETED CARDS CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="Completed" counter="1"/>
                <div className={style.Workflowcard}>
                    <CompletedCards/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MainContent