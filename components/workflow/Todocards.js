import React from 'react'
import Workflowcard from './Workflowcard'

const Todocards = () => {
  return (
    <>
        {/* CARD 1  */}
        <Workflowcard dotColor="BgPurple" cardLabel="DW4RTeam" cardHeadIcon="userlead" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                userProfilePic="user2.png" cardLineBlock={true}/>
                
                {/* CARD 2  */}
                <Workflowcard dotColor="BgPurpleLight" cardLabel="Asteler.io" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                userProfilePic="user2.png" cardLineBlock={true}/>

                {/* CARD 3  */}
                <Workflowcard dotColor="pinkDot" cardLabel="ContactRm" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                userProfilePic="user2.png" cardLineBlock={true}/>

                {/* CARD 4  */}
                <Workflowcard dotColor="pinkDot" cardLabel="ContactRm" cardHeadIcon="userlead" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                userProfilePic="user2.png" cardLineBlock={true}/>

                {/* CARD 5  */}
                <Workflowcard dotColor="pinkDot" cardLabel="ContactRm" cardHeadIcon="userlead" cardTitle="Design a website" 
                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                userProfilePic="user2.png" cardLineBlock={true}/>


    </>
  )
}

export default Todocards