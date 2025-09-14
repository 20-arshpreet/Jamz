import React from 'react'
import {MdFavorite, MdSpaceDashboard} from "react-icons/md";
import {FaGripfire, FaPlay,FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";


import './sidebar.css'
import SidebarButton from './SidebarButton'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src="https://wallpapers.com/images/hd/cool-profile-picture-7fk2du857svpto74.jpg" alt="logo" className='profile-pic' />
      <div>
        <SidebarButton title="feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="library" to="/library" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="sign out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
