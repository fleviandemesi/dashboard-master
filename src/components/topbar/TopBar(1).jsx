import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import { IoApps } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./topbar.css"
import CheckSession from '../../helpers/CheckSession';

const TopBar = () => {
  const {username,admin_id,access_token} = CheckSession()

  
  return (
    <nav className='topbar'>
        {/* left side  */}

        <div className="topbar-admin">
            Admin Portal
        </div>
        {/* right hand side  */}
        <div className="topbar-content">
            <div className="topbar-date">
            <AiFillCalendar />
        <span>User : { username }</span>
            </div>
            
            <div className="topbar-icon">
        <IoApps />

        <span>/</span>
        <FaBell />
        <div className="topbar-image">
        <CgProfile />

        </div>
        </div>
        </div>
        
     
    </nav>
  )
}

export default TopBar
