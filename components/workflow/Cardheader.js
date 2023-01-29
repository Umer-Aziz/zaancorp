import React,{useState} from 'react'
import style from "@/styles/workflow/cardheader.module.css"
const Cardheader = ({title , counter }) => {
            
          const [isActive, setIsActive] = useState(false);
          const [isFilter, setIsFilter] = useState(false);
          const [isProjectAll, setIsProjectAll] = useState(false);
          const [isTagsAll, setIsTagsAll] = useState(false);
          const [isAssignedAll, setIsAssignedAll] = useState(false);
          const [selected, setSelected] = useState("");

          // dummy data for list actions
          const options = ["Move all cards in this list","Archive all cards in this list"];

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
       <div className={style.cardHeaderContainer}>
        <div className={style.cardContainer}>
            <div className={style.cardWrapper}>
            <h5 className={style.cardTitle}>{title}</h5>
            <span className={style.cardCounter}>({counter})</span>
            <div className={style.cardIcons}>
            <img className={style.Icon} src="/icons/filter-gray.svg" alt="filter" />
            <div style={{position:"relative"}}>
            <img onClick={e =>{setIsFilter(true)}} className={style.Icon} src="/icons/sortby-gray.svg" alt="sort by icon" />
             {/* filter by card Menu */}
             { isFilter && <div className={style.filterCardMenu}>
                 <form>
                   
                   <div className={style.filterHead}>
                        <p>Filter By</p>
                        <img onClick={e =>{setIsFilter(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="close icon" />
                    </div>

                    <div className={style.filterByContent}>

                    {/* filter by project */}
                      <div className={style.filterByProject}>
                       <h6 className={style.FilterLabel}>Project</h6>
                       <div>
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

                        <div style={{marginTop:"12px"}}>
                        <span onClick={e => {setIsProjectAll(!isProjectAll)}} className={style.showAllButton}>
                        {isProjectAll ? "Show less..." : "Show all..."}</span>
                        </div>
                        </div>
                      </div>

                      {/* filter by Tags  */}
                      <div className={style.filterByProject}>
                      <h6 className={style.FilterLabel}>Tags</h6>
                      <div>
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
                        <div style={{marginTop:"12px"}}>
                        <span onClick={e => {setIsTagsAll(!isTagsAll)}} className={style.showAllButton}>
                        {isTagsAll ? "Show less..." : "Show all..."}</span>
                        </div>
                      </div>
                      </div>

                    {/* filter by Assign to */}
                    <div className={style.filterByProject}>
                       <h6 className={style.FilterLabel}>Assigned To</h6>
                       <div>
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

                        <div style={{marginTop:"12px"}}>
                        <span onClick={e => {setIsAssignedAll(!isAssignedAll)}} className={style.showAllButton}>
                        {isAssignedAll ? "Show less..." : "Show all..."}</span>
                        </div>
                        </div>
                      </div>

                    </div>
                     
                     <div className={style.FilterByButtons}>
                      <button className={style.formSubmitBtn}>Clear</button>
                      <button className={`${style.formSubmitBtn} ${style.FormBlueBtn}`}>Apply</button>
                     </div>
                 </form>
               </div> }
            </div>
            </div>
            </div>
            <img onClick={e =>{setIsActive(true)}} className={style.Icon} src="/icons/menu-dot.svg" alt="menu dot icon" />
        </div>

        {/* // list Action menu  */}
        {isActive && <div className={style.listActionMenu}>
        <div className={style.listHead}>
            <p>List Actions</p>
            <img onClick={e => {setIsActive(false)}} className={style.closeIcon} src="/icons/close-gray.svg" alt="close icon" />
        </div>
        <div>
            <ul className={style.listActionWrapper}>
            {
                options.map && options.map((option , index)=>{
                    return(
                        <li onClick={e => {setSelected(option) , setIsActive(false)}} key={index} 
                        className={`${style.listActionItem} ${selected == option && style.listItemActive }`}>{option}</li>
                    )
                })
            }
            </ul>
        </div>
    </div>}
        </div>
    </>
  )
}

export default Cardheader