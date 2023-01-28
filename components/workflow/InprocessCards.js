import React from 'react'
import Workflowcard from './Workflowcard'

const InprocessCards = () => {
  return (
    <>
         {/* CARD 1  */}
         <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>
                
                {/* CARD 2  */}
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>
                
                {/* CARD 3  */}
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>
                
                {/* CARD 4  */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>

                {/* CARD 5  */}    
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>

                {/* CARD 6  */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="filecheck" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/>

                {/* CARD 7  to toogle between block on card set cardLineBlock to true */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="userlead" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" 
                CreatedTime="Created 3 days ago" userProfilePic="user2.png" cardLineBlock={true}/>
                    
                {/* CARD 8  to toogle between block on card set cardLineBlock to true */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="userlead" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" 
                CreatedTime="Created 3 days ago" userProfilePic="user2.png" cardLineBlock={true}/>
                    
                {/* CARD 9  to toogle between block on card set cardLineBlock to true */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="userlead" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" 
                CreatedTime="Created 3 days ago" userProfilePic="user2.png" cardLineBlock={true}/>
                    
                {/* CARD 10  to toogle between block on card set cardLineBlock to true */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="userlead" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" 
                CreatedTime="Created 3 days ago" userProfilePic="user2.png" cardLineBlock={true}/>
                    
                {/* CARD 11  to toogle between block on card set cardLineBlock to true */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="userlead" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" 
                CreatedTime="Created 3 days ago" userProfilePic="user2.png" cardLineBlock={true}/>
                    
                {/* CARD 12  to toogle between block on card set cardLineBlock to true */}   
                <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardHeadIcon="userlead" cardTitle="Design a website" 
                 IconMessage="message" IconChecklist2="checklist2" IconLink="link" MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" 
                CreatedTime="Created 3 days ago" userProfilePic="user2.png" cardLineBlock={true}/>
                    
    </>
  )
}

export default InprocessCards