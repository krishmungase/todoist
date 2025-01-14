import React, { useState } from 'react';
import DesktopDashboardSidebar from '../common/desktop-view';
import MobilDashboardSidebar from '../common/mobile-view';

const DashboardSidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div
      className={`p-3 w-[100px] transition-all duration-500 ${openSideBar ? 'lg:w-[350px]' : 'lg:w-[100px]'}`}
    >
      <div className="bg-rich-500 h-[calc(100vh_-28px)] rounded-lg py-8 w-full">
        <MobilDashboardSidebar />
        <DesktopDashboardSidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>
    </div>
  );
}

export default DashboardSidebar;
