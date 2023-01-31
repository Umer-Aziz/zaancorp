import React,{ useState } from 'react'
import style from "@/styles/workflow/topbar.module.css"
import Workflowcard from './Workflowcard';
const Topbar = () => {

        const [isActive, setIsActive] = useState(false);
        const [isFilter, setIsFilter] = useState(false);
        const [isProjectAll, setIsProjectAll] = useState(false);
        const [isTagsAll, setIsTagsAll] = useState(false);
        const [isAssignedAll, setIsAssignedAll] = useState(false);
        const [isView, setIsView] = useState(false);
        const [isDelete, setIsDelete] = useState(false);
        const [isPinned, setIsPinned] = useState(false);
        const [isArchive, setIsArchive] = useState(false);
        const [isSnooze,setIsSnooze] = useState(false);
        const [isSaveAsOpen,setIsSaveAsOpen] = useState(false);
        const [isSaveDropDown,setIsSaveDropDown] = useState(false);
        const [selected, setSelected] = useState("");
        
        const options = ["Order","Created date","Due Date","Sitting count","Move count"];

        
          // dummy data for filter by Project
          const colors = ["pinkDot","yellowDot","BgPurple","BgPurpleDarkLight","BgPurpleLight","lightOrange","yellowDot","BgPurple"];
          const values = ["ContractRm","AgentBook","W4RTeam","LeadBank","Asteler.io","TimeTravel","AgentBook","W4RTeam"];
        
          // dummy data for filter by views
          const colorsViews = ["BgPurple","pinkDot","BgLightBlue","yellowDot","BgLightBlue",];
          const valuesView = ["My first filter","Available for me","Current Tasks","Top Project","Favorites"]

          // dummy data for filter by tags 
          const tagValue =["api.contactrm.com","api.contactrm","Restrictive APIs","api.agentbook.com","api.leadbank.com","api.w4rteam"]
          const tagColors=["BgYellowLight","BgPinkLight","BgGreenLight","BgGrayDark","BgPinkLight","BgGreenLight"];

          //dummy data for Filter by assigned To
          const names = ["Savannah Nguyen","Wade Warren","Wade Warren","Jane Cooper","Jack Sparrow","John Charles","James Bond","Savannah Nguyen","Mathew Wade","Michel Jeans"]
          const AssignToImages= ["user4","user7","user7","user6","user2","user3","user1","user6","user4","user2"]

          const PinnedData = [1,2,3,4,5,6,7,8];
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
                        <img className={style.Icon} src="/images/workflow-active.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/workflow.png" alt="icon" /> */}
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/design.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/design-active.png" alt="icon" /> */}
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/code.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/code-active.png" alt="icon" /> */}
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/announcement.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/announcement-active.png" alt="icon" /> */}
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
                <li className={style.FilterViewWrapper}>

               {!isPinned && <div onClick={e =>{setIsPinned(true)}} className={style.rightIconWrapper}>
                    <img src="/icons/pinned.svg" alt="pinned icon" />
                </div>}

               {isPinned && <div>
                <img width={36} height={36} className={style.pinnedActiveIcon} src="/images/pinned-active.png" alt="pinned icon" />
                </div>}

                    {/* pinned popup card  */}
                   { isPinned && <div className={style.PinnedCardContainer}>
                         <div className={style.PinnedCardHead}>
                            <div className={style.PinnedHeadLeft}>
                                 <img src="/icons/pinned.svg" alt="pinned icon" />
                                <span>Pinned Card</span>
                            </div>
                            <img onClick={e =>{setIsPinned(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="close icon" />
                         </div>
                         <div className={style.PinnedSearchBar}>
                             <img className={style.SearchIcon} src="/icons/search.svg" alt="search"/>
                             <input className={style.SearchInput} type="text" placeholder='Search'  />
                         </div>
                         <div className={style.PinnedCardContent}>
                          
                        {
                            PinnedData.map && PinnedData.map((data,index)=>{
                                return(
                                <Workflowcard key={index} dotColor="pinkDot" cardLabel="ContactRm" cardTitle="Design a website" 
                                cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                                MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                                userProfilePic="user2.png" cardLineBlock={true}/>
                                )
                            })
                        }
                
                         </div>
                    </div>}
                </li>
                <li className={style.FilterViewWrapper}>
                 <div onClick={e =>{setIsArchive(true)}} className={style.rightIconWrapper}>
                    <img src="/icons/double-file.svg" alt="file icon" />
                  </div>

                  { isArchive && <div className={style.archiveCardContainer}>
                  <div className={style.PinnedCardHead}>
                            <div className={style.PinnedHeadLeft}>
                                 <div className={style.archiveBtnWrapper}>
                                  <button onClick={e => {setIsSnooze(false)}} className={`${style.archiveCardBtn} ${style.archiveBtn} ${!isSnooze && "activeArchive" }`}>
                                 {!isSnooze ? <img width={16} height={16} src="/images/archive-active.png" alt="icon"/>:
                                  <img width={16} height={16} style={{opacity:0.6}} src="/images/archive.png" alt="icon" />}
                                    <span>Archive</span>
                                  </button>
                                  <button onClick={e => {setIsSnooze(true)}} className={`${style.archiveCardBtn} ${style.snoozeBtn}  ${isSnooze && "activeArchive" }`}>
                                  { isSnooze ? <img width={16} height={16} src="/images/snooze-active.png" alt="icon" />:
                                  <img width={16} height={16} src="/icons/snooze.svg" alt="icon" />}
                                    <span>Snooze</span>
                                  </button>
                                 </div>
                            </div>
                            <img onClick={e =>{setIsArchive(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="close icon" />
                         </div>

                         <div className={style.PinnedSearchBar}>
                             <img className={style.SearchIcon} src="/icons/search.svg" alt="search"/>
                             <input className={style.SearchInput} type="text" placeholder='Search'  />
                         </div>

                         { !isSnooze ? <div className={style.PinnedCardContent}>
                          {
                              PinnedData.map && PinnedData.map((index)=>{
                                  return(
                                  <div className={style.archiveCardWrapper}>
                                  <Workflowcard key={index} dotColor="pinkDot" cardLabel="ContactRm" cardTitle="Design a website" 
                                  cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                                  MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                                  userProfilePic="user2.png" cardLineBlock={true}/>
                                  <div className={style.cardStatus}>
                                  <img width={16} height={16} src="/images/user2.png" alt="user icon" />
                                  <span className={style.cardStatusText}>Archived in <strong className={style.statusLabel}>Completed</strong> 3 days ago</span>
                                  </div>
                                  </div>
                                  )
                              })
                          }
                  
                           </div>:
                            <div className={style.PinnedCardContent}>
                          {
                              PinnedData.map && PinnedData.map((index)=>{
                                  return(
                                  <div className={style.archiveCardWrapper}>
                                  <Workflowcard key={index} dotColor="pinkDot" cardLabel="ContactRm" cardTitle="Design a website" 
                                  cardTagTitle1="api.contactrm.com" cardTagTitle2="api.contactrm" IconMessage="message" IconChecklist2="checklist2" IconLink="link" 
                                  MessageCounter="12" ChecklistCounter="8/9" LinkCounter="2" CreatedTime="Created 3 days ago" 
                                  userProfilePic="user2.png" cardLineBlock={true}/>
                                  <div className={style.cardStatus}>
                                  <img width={16} height={16} src="/images/user2.png" alt="user icon" />
                                  <span className={style.cardStatusText}>Snoozed until <strong className={style.statusLabel}>Oct 24 at 10:00 PM</strong></span>
                                  </div>
                                  </div>
                                  )
                              })
                          }
                  
                           </div>}
                  </div>}

                </li>
                <li className={style.FilterViewWrapper}>
                <div className={style.rightIconWrapper} onClick={e => {setIsView(true)}}>
                    <img src="/icons/save.svg" alt="save icon" />
                    <span className={style.ItemText}>Views</span>
                </div>
                    {/* // list Action menu  */}
                { isView && <div className={style.listActionMenu}>
                <div className={style.listHead}>
                    <div className={style.viewLabelHead}>
                    <img width={18} height={18} src="/icons/save.svg" alt="save icon" />
                        <p>Views</p>
                    </div>
                    <img onClick={e => {setIsView(false)}} className={style.closeIcon} src="/icons/close-gray.svg"
                     alt="close icon" />
                </div>
                <div>
                    <ul className={style.listActionWrapper}>
                    {
                        valuesView.map && valuesView.map((option , index)=>{
                            const color = colorsViews[index]
                            return(
                                <li onClick={e => {setSelected(option) , setIsActive(false)}} key={index} 
                                className={`${style.listActionItem} ${selected == option && style.listItemActive }`}>
                               <div className={style.listActionLabel}>
                               <div className={`${style.FilterProjectDot} ${color}`}></div>
                                <span>{option}</span>
                               </div>
                                <img onClick={e => {setIsDelete(true), setIsView(false)}} className={`${option != "Current Tasks" && "hidden"} ${style.DeleteIcon}`} 
                                src='/images/delete.png'  alt='icon'/>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>}

            {/* Delete Cards  */}
            { isDelete && <div className={style.DeleteCard}>
            <div className={style.deleteCardContainer}>
                <div className={style.deletecardHead}>
                <span>Delete</span>
                    <img onClick={e => {setIsDelete(false)}} className={style.closeIcon} width={20} height={20} src="/icons/close-gray.svg" alt="icon" />
                </div>
                <div className={style.deleteCardContent}>
                    <p>Are you sure you want to delete this Filter?</p>
                </div>
                <div className={style.deleteCardBtns}>
                    <button className={`${style.formDeleteBtn} ${style.clearBtn}`}>Clear</button>
                    <button className={`${style.formDeleteBtn} ${style.DeleteBtn}`}>Delete</button>
                    <button></button>
                </div>
            </div>
            <div className={style.deleteCardWrapper}></div>
            </div>}

                </li>
                <li className={style.rightIconWrapper} onClick={e => {setIsFilter(true)}}>
                    <img src="/icons/filter.svg" alt="filter icon" />
                    <span className={style.ItemText}>Filter</span>
                </li>
                <li className={style.rightIconWrapper} onClick={e => {setIsActive(true)}}>
                    <img src="/icons/sort-by.svg" alt="sort-by icon" />
                    <span className={style.ItemText}>Sort By</span>
                </li>
            </ul>
          </div>

          {/* Sort by dropdown  */}
          {isActive && <div className={style.sortbyDropdown}>
            <div className={style.sortbyHead}>
                <div className={style.sortbyLeft}>
                    <img className={style.sortHeadIcon} src="/icons/sort-by.svg" alt="icon" />
                    <span className={style.sortbyTitle}>Sort By</span>
                </div>
                <div onClick={e => {setIsActive(false)}}>
                    <img className={style.sortHeadIconClose} src="/icons/close-gray.svg" alt="close icon" />
                </div>
            </div>
            <div className={style.sortbyContent}>
                <ul className={style.sortbyList}>
                {options.map && options.map((option , index)=>{
                    return(
                    <li key={index} className={`${style.sortbyItem} ${selected == option && style.sortbyActive }`} onClick={(e) => { setSelected(option) , setIsActive(false)}}>{option}</li>
                    )
                })}
                    
                </ul>
            </div>
          </div>}

          {/* filters dropdown  */}
          { isFilter && <div className={style.filterCardMenu}>
                 <form>
                   
                   <div className={style.filterHead}>
                        <div className={style.filterLabelContainer}>
                        <img width={20} height={20} src="/icons/filter.svg" alt="filter icon" />
                          <p>Filters</p>
                        </div>
                        <img width={20} height={20} onClick={e =>{setIsFilter(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="close icon" />
                    </div>

                    <div className={style.filterByContent}>

                    {/* filter by project */}
                      <div className={style.filterByProject}>
                       <h6 className={style.FilterLabel}>Project</h6>
                       <ul className={style.filterProjectBox}>
                       <li className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <p>No Project Assigned</p>
                            </div>
                        </li>
                        { isProjectAll ? <ul className={style.filterProjectBox}>
                        {values.map && values.map(( value, index )=>{
                          const color = colors[index]
                          return(
                            <li key={index} className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <div className={`${style.FilterProjectDot} ${color}`}></div>
                            <p>{value}</p>
                            </div>
                          </li>
                          )
                        })}
                        </ul>:
                        <ul className={style.filterProjectBox}>
                        {values.map && values.slice(0,4).map(( value, index )=>{
                          const color = colors[index]
                          return(
                            <li key={index} className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <div className={`${style.FilterProjectDot} ${color}`}></div>
                            <p>{value}</p>
                            </div>
                          </li>
                          )
                        })}
                        </ul>
                        }
                        <li>
                        <span onClick={e => {setIsProjectAll(!isProjectAll)}} className={style.showAllButton}>
                        {isProjectAll ? "Show less..." : "Show all..."}</span>
                        </li>
                        </ul>
                      </div>

                      {/* filter by Tags  */}
                      <div className={style.filterByProject}>
                      <h6 className={style.FilterLabel}>Tags</h6>
                      <ul className={style.filterProjectBox}> 
                      <li className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <p>No Tags Added</p>
                            </div>
                        </li>

                      { isTagsAll ? <ul className={style.filterProjectBox}>
                        {tagValue.map && tagValue.map(( value, index )=>{
                          const color = tagColors[index]
                          return(
                            <li key={index} className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" />
                            <p className={`${style.filterTagsLabel} ${color}`}>{value}</p>
                          </li>
                          )
                        })}
                        </ul>:
                        <ul className={style.filterProjectBox}>
                        {tagValue.map && tagValue.slice(0,4).map(( value, index )=>{
                          const color = tagColors[index]
                          return(
                            <li key={index} className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" />
                            <p className={`${style.filterTagsLabel} ${color}`}>{value}</p>
                          </li>
                          )
                        })}
                        </ul>
                        }

                        <li>
                        <span onClick={e => {setIsTagsAll(!isTagsAll)}} className={style.showAllButton}>
                        {isTagsAll ? "Show less..." : "Show all..."}</span>
                        </li>

                      </ul>
                      </div>

                      {/* filter by Card */}
                      <div className={style.filterByProject}>
                       <h6 className={style.FilterLabel}>Card</h6>
                       <div>
                       <ul className={style.filterProjectBox}>
                            <li className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <p className={style.FilterLabelWrapper}>Cards I created</p>
                          </li>
                            <li className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <p className={style.FilterLabelWrapper}>Cards I assigned to me</p>
                          </li>
                            <li className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <p className={style.FilterLabelWrapper}>All cards</p>
                          </li>
                        </ul>   
                        </div>
                      </div>

                    {/* filter by Assign to */}
                    <div className={style.filterByProject}>
                       <h6 className={style.FilterLabel}>Assigned To</h6>
                       <ul className={style.filterProjectBox}>
                       
                       <li  className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <p>Nobody Assigned</p>
                            </div>
                        </li>
                       
                        { isAssignedAll ? <ul className={style.filterProjectBox}>
                        {names.map && names.map(( name, index )=>{
                          const img = AssignToImages[index]
                          return(
                            <li key={index} className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <img className={`${style.filterAssignProfile}`} src={`/images/${img}.png`}  alt="profile pic"/>
                            <p>{name}</p>
                            </div>
                          </li>
                          )
                        })}
                        </ul>:
                        <ul className={style.filterProjectBox}>
                        {names.map && names.slice(0,6).map(( name, index )=>{
                          const img = AssignToImages[index]
                          return(
                            <li key={index} className={style.filterProjectItem}>
                            <input className={style.filterCardCheckbox} type="checkbox" name="" />
                            <div className={style.FilterLabelWrapper}>
                            <img className={`${style.filterAssignProfile}`} src={`/images/${img}.png`}  alt="profile pic"/>
                            <p>{name}</p>
                            </div>
                          </li>
                          )
                        })}
                        </ul>
                        }
                        <li>
                        <span onClick={e => {setIsAssignedAll(!isAssignedAll)}} className={style.showAllButton}>
                        {isAssignedAll ? "Show less..." : "Show all..."}</span>
                        </li>

                        </ul>
                      </div>

                    </div>
                     
                     <div className={style.FilterByButtons}>
                     <div onClick={e => {setIsSaveAsOpen(true),setIsFilter(false)}} className={`${style.formSubmitBtn} ${style.formPurpleBtn}`}>Save as View</div>
                     <div className={style.filterByBtnRight}>
                      <button className={style.formSubmitBtn}>Clear</button>
                      <button className={`${style.formSubmitBtn} ${style.FormBlueBtn}`}>Apply</button>
                      </div>
                     </div>
                 </form>
               </div> }
          
          {/* save as view */}
          {isSaveAsOpen && <div className={`${style.saveAsViewCard} ${isSaveDropDown && "saveAsViewCardOpen"}`}>
              <div className={style.saveAsCardContainer}>
                <div className={style.saveAsHead}>
                  <div className={style.saveAsLeft}>
                    <img width={20} height={20} src="/icons/save.svg" alt="save" />
                    <span>Saved as View</span>
                  </div>
                  <img onClick={e => {setIsSaveAsOpen(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="icon" />
              </div>
              <div className={style.saveAsContent}>
                <div className={style.viewNameHead}>
                  <label className={style.ViewLabel} htmlFor="viewName">View Name</label>
                  <div className={style.viewInputHead}>
                    <input className={style.viewInput} type="text" placeholder='Enter Name'/>
                    <label htmlFor='viewColor' className={style.viewColorHead}>
                      <input className={style.ViewColor} type="color" id='viewColor'/>
                      <img width={20} height={20} className={style.chevronHover} src="/icons/chevron.svg" alt="icon" />
                    </label>
                  </div>
                </div>
                <div className={style.viewNameHead}>
                  <label className={style.ViewLabel} htmlFor="viewName">Share with others</label>
                  <div className={style.viewInputHead}>
                    <input className={style.viewInput} type="text" placeholder='Enter or select name'/>
                      {!isSaveDropDown ? <img onClick={e =>{setIsSaveDropDown(true)}} className={style.SelectChevron} width={22} height={22} src="/icons/chevron.svg" alt="icon" />
                      :<img onClick={e =>{setIsSaveDropDown(false)}} className={style.SelectChevron} width={22} height={22} src="/icons/chevron-active.svg" alt="icon" />
                      }
                  </div>
                    {/* // user profile dropdown */}
               { isSaveDropDown && <ul className={style.SaveProfileContainer}>
                {
                  names && names.map && names.map(( name,index )=>{
                    const img = AssignToImages[index]
                    return(
                      <li key={index} className={style.SaveProfileDropdown}>
                      <input width={16} height={16} className={style.filterCardCheckbox} type="checkbox" />
                      <div className={style.SavePicWrapper}>
                        <img width={24} height={24} src={`/images/${img}.png`} alt="icon" />
                        <span>{name}</span>
                    </div>
                  </li>
                    )
                  })
                }
                </ul>}
                </div>
                
              </div>
              <div className={style.SaveBtnWrapper}>
                  <button className={style.formSaveBtn}>Save</button>
                </div>
              </div>
              <div className={style.deleteCardWrapper}></div>
          </div>}

        </div>
    </section>
   </>

  )
}

export default Topbar