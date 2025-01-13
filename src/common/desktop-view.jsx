import React, { useState } from 'react'
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";

const DesktopDashboardSidebar = ({ openSideBar, setOpenSideBar }) => {

  return (
    <div>
      <div className='px-4'>
        <TbLayoutSidebarLeftCollapseFilled onClick={() => setOpenSideBar(!openSideBar)} className='text-rich-900 cursor-pointer size-8' />
      </div>
      {
        openSideBar ?
          <h1>Hello</h1>
          :

          (
            <h1>Hi</h1>
          )
      }
    </div>
  )
}

export default DesktopDashboardSidebar