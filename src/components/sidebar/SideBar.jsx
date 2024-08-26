import React from 'react'
import { GiConverseShoe } from "react-icons/gi";
import { Outlet, Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LiaUserNurseSolid } from "react-icons/lia";
import { GiRunningShoe } from "react-icons/gi";
import ReactLogout from '../../helpers/Logout';
import { FcCamcorderPro } from "react-icons/fc";
import { LiaShoePrintsSolid } from "react-icons/lia";

import "./sidebar.css"
import CheckSession from '../../helpers/CheckSession';

const SideBar = () => {
  const {username,admin_id,access_token} = CheckSession()

  const {logout} = ReactLogout()
  return <section className='sidebar'>
    {/* links */}
    <div className="sidebar-top">
     <div className="sidebar-brand">
     <GiConverseShoe />

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
            <Link to="/categories"><TbCategoryPlus /> Categories</Link>
          </li>
          <li>
            <Link to="/order"><FcCamcorderPro /> Orders</Link>
          </li>
          <li>
            <Link to="/shoes"><GiRunningShoe /> Shoe</Link>
          </li>
          
          <li>
            <Link to="/category"><LiaShoePrintsSolid /> Add Category</Link>
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
