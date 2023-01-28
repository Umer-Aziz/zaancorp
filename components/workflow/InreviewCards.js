import React from 'react'
import Workflowcard from './Workflowcard'

const InreviewCards = () => {
  return (
    <>
        {/* cards 1 */}
        <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardTitle="Design a website" cardTagTitle1="api.contractrm.com"
            cardTagTitle2="api.contractrm" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/> 
            
        {/* cards 2 */}
        <Workflowcard dotColor="pinkDot" cardLabel="ContractRm" cardTitle="Design a website" cardTagTitle1="api.contractrm.com"
            cardTagTitle2="api.contractrm" cardHeadIcon="userlead" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/> 
        
        {/* cards 3 */}
        <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardTitle="Design a website" cardTagTitle1="api.contractrm.com"
            cardTagTitle2="api.contractrm" cardHeadIcon="userstar" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/> 
           
        {/* cards 4 */}
        <Workflowcard dotColor="pinkDot" cardLabel="ContractRm" cardTitle="Design a website" cardTagTitle1="api.contractrm.com"
            cardTagTitle2="api.contractrm" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/> 
        
        {/* cards 5 */}
        <Workflowcard dotColor="yellowDot" cardLabel="AgentBook" cardTitle="Design a website" cardTagTitle1="api.contractrm.com"
            cardTagTitle2="api.contractrm" cardHeadIcon="filecheck" CreatedTime="Created 3 days ago" userProfilePic="user2.png"/> 
           
    </>
  )
}

export default InreviewCards