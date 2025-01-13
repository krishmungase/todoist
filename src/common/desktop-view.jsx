import React, { useState } from 'react'
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import SideBarLinks from '../config/side-bar-links';
import { NavLink } from 'react-router-dom';

const DesktopDashboardSidebar = ({ openSideBar, setOpenSideBar }) => {

  return (
    <div>
      <div className='px-4'>
        <TbLayoutSidebarLeftCollapseFilled onClick={() => setOpenSideBar(!openSideBar)} className='text-rich-900 cursor-pointer size-8' />
      </div>
      {
        openSideBar ?
          (
            <div className="hidden lg:block">
              <div className="px-4 w-full h-[calc(100vh_-140px)] mt-8 flex justify-between flex-col">
                <div className="flex space-y-1 items-center flex-col justify-center">
                  {
                    SideBarLinks.map((link) => (
                      <NavLink
                        key={link.id}
                        // to={link.path}
                        className={`${location.pathname === link.path ? "bg-rich-700" : ""} flex items-center px-4 py-3 hover:bg-rich-400 hover:text-white transition-all rounded-[13px] w-full`}
                      >
                        <link.icon className="size-6 text-rich-900" />
                        <span className="pl-4 text-lg text-rich-900 font-light tracking-wider">
                          {link.title}
                        </span>
                      </NavLink>
                    ))
                  }
                </div>
              </div>
            </div>
          )
          :
          (
            <div className="">
              <div className="flex items-center h-[calc(100vh_-140px)] justify-between flex-col mt-8 space-y-6">
                <div className="flex items-center flex-col justify-center space-y-4">
                  {
                    SideBarLinks.map((link) => (
                      <NavLink
                        key={link.id}
                        className={`${location.pathname === link.path ? "bg-rich-700" : ""} flex items-center px-4 py-3 hover:bg-rich-400 hover:text-white transition-all rounded-[13px] w-full`}
                      >
                        <link.icon className="size-6 text-richblack-200" />
                      </NavLink>
                    ))
                  }
                </div>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default DesktopDashboardSidebar