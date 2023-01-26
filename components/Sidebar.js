import React from 'react'
import style from "@/styles/sidebar.module.css"
import Link from 'next/link'
const Sidebar = () => {
  return (
    <>
    <div className={style.sidebarContainer}>
        <aside>
            <div className={style.logoContainer}>
                <div className={style.logoDiv}>
                <div className={style.logoCircle}></div>
                <span className={style.logoName}>Zaan Corp</span>
                 <img src="/icons/chevron.svg" alt="chevron-icon" />
                </div>
                <img src="/icons/double-arrow.svg" alt="double-arrow" />
            </div>
            <div className={style.menuContainer}>
                <ul>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/dashboard.svg" alt="icon" />
                        <span className={style.itemText}>Dashboard</span>
                    </Link>
                    <Link href={"/"} className={`${style.listItem} ${style.activeItem}`}>
                        <img src="/icons/workflow.svg" alt="icon" />
                        <span className={style.itemText}>Workflow</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/calendar.svg" alt="icon" />
                        <span className={style.itemText}>Calender</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/socialmedia.svg" alt="icon" />
                        <span className={style.itemText}>SocialRM</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/metrics.svg" alt="icon" />
                        <span className={style.itemText}>Metrics</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/leads.svg" alt="icon" />
                        <span className={style.itemText}>Leads</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/userstar.svg" alt="icon" />
                        <span className={style.itemText}>Users</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/notifications.svg" alt="icon" />
                        <span className={style.itemText}>Notifications</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/documents.svg" alt="icon" />
                        <span className={style.itemText}>Documents</span>
                    </Link>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/segments.svg" alt="icon" />
                        <span className={style.itemText}>Segments</span>
                    </Link>
                </ul>
            </div>
            <div className={style.companyItem}>
                    <Link href={"/"} className={style.listItem}>
                        <img src="/icons/filecheck.svg" alt="icon" />
                        <span className={style.itemText}>Company</span>
                    </Link>
                </div>
        </aside>
    </div>
    </>
  )
}

export default Sidebar