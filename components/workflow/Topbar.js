import React,{ useState } from 'react'
import style from "@/styles/topbar.module.css"
const Topbar = () => {

        const [isActive, setIsActive] = useState(false);
        const [isFilter, setIsFilter] = useState(false);
        const [isProjectAll, setIsProjectAll] = useState(false);
        const [isTagsAll, setIsTagsAll] = useState(false);
        const [isAssignedAll, setIsAssignedAll] = useState(false);
        const [selected, setSelected] = useState("");
        
        const options = ["Order","Created date","Due Date","Sitting count","Move count"];

        
          // dummy data for filter by Project
          const colors = ["pinkDot","yellowDot","BgPurple","BgPurpleDarkLight","BgPurpleLight","lightOrange","yellowDot","BgPurple"];
          const values = ["ContractRm","AgentBook","W4RTeam","LeadBank","Asteler.io","TimeTravel","AgentBook","W4RTeam"];

          // dummy data for filter by tags 
          const tagValue =["api.contactrm.com","api.contactrm","Restrictive APIs","api.agentbook.com","api.leadbank.com","api.w4rteam"]
          const tagColors=["BgYellowLight","BgPinkLight","BgGreenLight","BgGrayDark","BgPinkLight","BgGreenLight"];

          //dummy data for Filter by assigned To
          const names = ["Savannah Nguyen","Wade Warren","Wade Warren","Jane Cooper","Jack Sparrow","John Charles","James Bond","Savannah Nguyen","Mathew Wade","Michel Jeans"]
          const AssignToImages= ["user4","user7","user7","user6","user2","user3","user1","user6","user4","user2"]


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
                     <button className={`${style.formSubmitBtn} ${style.formPurpleBtn}`}>Save as View</button>
                     <div className={style.filterByBtnRight}>
                      <button className={style.formSubmitBtn}>Clear</button>
                      <button className={`${style.formSubmitBtn} ${style.FormBlueBtn}`}>Apply</button>
                      </div>
                     </div>
                 </form>
               </div> }

        </div>
    </section>
   </>

  )
}

export default Topbar