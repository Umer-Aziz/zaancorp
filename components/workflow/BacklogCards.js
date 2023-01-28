import React from 'react'
import Workflowcard from './Workflowcard'

const BacklogCards = () => {
  return (
    <>
                {/* add class name of colors in dotColor & image name in Icon.. / images
                      all Icons must be in svg format  */}

                {/* CARD 1 */}
                <Workflowcard dotColor="pinkDot" cardLabel="ContactRm" cardHeadIcon="userstar" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm"  CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>

                 {/* CARD 2  */}
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconChecklist2="checklist2" ChecklistCounter="8/9"
                    CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>
    </>
  )
}

export default BacklogCards