import React from 'react'
import SideBarLinks from '../config/side-bar-links'
import { NavLink } from 'react-router-dom'

const MobilDashboardSidebar = () => {
  return (
    <div>
      <div className="lg:hidden">
        <div className="flex items-center h-[calc(100vh_-140px)] justify-between flex-col mt-8 space-y-6">
          <div className="flex items-center flex-col justify-center space-y-4">
            {
              SideBarLinks.map((link) => (
                <NavLink
                  key={link.id}
                  className={`${location.pathname === link.path ? "bg-rich-700" : ""} flex items-center px-4 py-3 hover:bg-rich-400 hover:text-white transition-all rounded-[13px] w-full`}
                >
                  <link.icon className="size-6 text-rich-900" />
                </NavLink>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default MobilDashboardSidebar