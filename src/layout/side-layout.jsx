import React, { useState } from 'react';
import DesktopDashboardSidebar from '../common/desktop-view';
// import MobilDashboardSidebar from './mobile-dashboard'

const DashboardSidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className={`w-[100px] ${openSideBar ? "lg:w-[350px]" : "lg:w-[100px]"} p-3`}>
      <div className="bg-rich-500 h-[calc(100vh_-28px)] rounded-lg py-8 w-full">
        {/* <MobilDashboardSidebar /> */}
        <DesktopDashboardSidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>
    </div>
  );
}

export default DashboardSidebar;
