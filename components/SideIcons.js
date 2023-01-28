import React from 'react'
import style from "@/styles/SideIcons.module.css"
import Link from 'next/link'
const SideIcons = () => {
  return (
    <>
        <div className={style.SideIconsContainer}>
        <Link href={"/"}>
            <img className={style.SideIcon} src="/images/checklist.png" alt="icon" />
        </Link>
        <Link href={"/"}>
            <img className={style.SideIcon} src="/images/menubar.png" alt="icon" />
        </Link>
        </div>
    </>
  )
}

export default SideIcons