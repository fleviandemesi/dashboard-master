import React from 'react'
import { CiBank } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LiaUserNurseSolid } from "react-icons/lia";
import ReactLogout from '../../helpers/Logout';

import "./sidebar.css"
import CheckSession from '../../helpers/CheckSession';

const SideBar = () => {
  const {username,admin_id,access_token} = CheckSession()

  const {logout} = ReactLogout()
  return <section className='sidebar'>
    {/* links */}
    <div className="sidebar-top">
     <div className="sidebar-brand">
     <CiBank />
     <span>SNEAKERAPP</span>

     </div>
     {/* sidebar links  */}
     <div className="sidebar-links">
<ul>
<li>
            <Link to="/"><RxDashboard/> Dashboard</Link>
          </li>
          <li>
            <Link to="/profile"><CgProfile/> My Profile</Link>
          </li>
          <li>
            <Link to="/addshoe">< MdAddToPhotos/> Add Shoe</Link>
          </li>
          <li>
            <Link to="/categories"><MdOutlineLibraryAddCheck/> Categories</Link>
          </li>
          <li>
            <Link to="/order"><IoMdAddCircleOutline/> Orders</Link>
          </li>
          <li>
            <Link to="/shoes"><CiCirclePlus/> Shoe</Link>
          </li>
          <li>
            <Link to="/category"><CiCirclePlus/> Add Category</Link>
          </li>
          
</ul>

     </div>
    </div>
        {/* go pro division */}
    
      <button className="logout" onClick={logout}>
      <RiLogoutCircleLine />LogOut

      </button>
      
  </section>
    
  
}

export default SideBar
