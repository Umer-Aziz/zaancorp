import React,{ useState , useEffect } from 'react'
import style from "@/styles/sidebar.module.css"
import Link from 'next/link'
const Sidebar = () => {
    const [ closeSidebar , setcloseSidebar] = useState(false);
    
    const SidebarResponsive = ()=>{
        if(closeSidebar == false ) {
            setcloseSidebar(true);
        }
        else{
            setcloseSidebar(false)
        }
    }

    useEffect(() => {
      let width = window.innerWidth ;
      width >= 1440  ? setcloseSidebar(false) : setcloseSidebar(true);
    }, [])
    
    
    
  return (
    <>
    <div className={`${ closeSidebar ? style.CloseSidebarContainer : style.sidebarContainer  }`}>
        <aside>
            <div className={style.logoContainer}>
                <div className={`${style.logoDiv} ${closeSidebar ? "hidden" : "flex"}`}>
                <div className={style.logoCircle}></div>
                <span className={style.logoName}>Zaan Corp</span>
                 <img src="/icons/chevron.svg" alt="chevron-icon" />
                </div>
                <button onClick={SidebarResponsive} className={`${style.sidebarCloseBtn} ${closeSidebar ? "block" : "hidden"}`}>
                    <img src="/icons/hamburger.svg" alt="menu-icon" />
                </button>
               <button onClick={SidebarResponsive} className={`${style.sidebarCloseBtn} ${closeSidebar ? "hidden" : "block"}`}>
               <img src="/icons/double-arrow.svg" alt="double-arrow" />
               </button>
            </div>
            <div className={style.menuContainer}>
                <ul>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/dashboard.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Dashboard</span>
                    </Link>
                    <Link href={"/"} className={`${`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`} ${style.CloseSidebarIcon} ${closeSidebar ? style.sidebarIcon : style.activeItem}`}>
                        <img src="/icons/workflow.svg" alt="icon"/>
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Workflow</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/calendar.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Calender</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/socialmedia.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>SocialRM</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/metrics.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Metrics</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/leads.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Leads</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/userstar.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Users</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/notifications.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Notifications</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/documents.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Documents</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/segments.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Segments</span>
                    </Link>
                </ul>
            </div>
            <div className={style.companyItem}>
                    <Link href={"/"} className={`${style.listItem} ${closeSidebar ? style.sidebarIcon : ""}`}>
                        <img src="/icons/filecheck.svg" alt="icon" />
                        <span className={`${style.itemText} ${closeSidebar ? "hidden" : "block"}`}>Company</span>
                    </Link>
                </div>
        </aside>
    </div>
    </>
  )
}

export default Sidebar