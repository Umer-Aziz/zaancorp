import React from 'react'
import SideIcons from './SideIcons'
import MainContent from './workflow/MainContent'
import Topbar from './workflow/Topbar'

const Workflow = () => {
  return (
    <>
        <Topbar/>
        <MainContent/>
        <SideIcons/>
    </>
  )
}

export default Workflow