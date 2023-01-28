import React from 'react'
import Cardheader from './Cardheader'
import style from "@/styles/workflow-content.module.css"
import Workflowcard from './Workflowcard'
const MainContent = () => {
  return (
    <>
    <section className={style.mainContentContainer}>
        <div className={style.Cardheader}>
            <div className={style.cardWrapper}>
                <Cardheader title="Backlog" counter="2"/>
                <div className={style.Workflowcard}>

                {/* add class name of colors in dotColor & image name in Icon.. / images
                      all Icons must be in svg format  */}

                {/* CARD 1 */}
                <Workflowcard dotColor="pinkDot" cardLabel="ContactRm" cardHeadIcon="userstar" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm"  CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>

                 {/* CARD 2  */}
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconChecklist2="checklist2" ChecklistCounter="8/9"
                    CreatedTime="Created 3 days ago" userProfilePic="user2.png"
                />
                </div>

            </div>

            {/* TODO CARDS  CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="To Do" counter="5"/>
            </div>

            {/* IN PROCESS CARDS CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="In Process" counter="35"/>
            </div>

            {/* IN REVIEW CARDS CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="In Review" counter="5"/>
            </div>

           {/* COMPLETED CARDS CONTAINER */}
            <div className={style.cardWrapper}>
                <Cardheader title="Completed" counter="1"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default MainContent