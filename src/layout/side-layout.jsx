import React, { useState } from 'react';
import DesktopDashboardSidebar from '../common/desktop-view';
import MobilDashboardSidebar from '../common/mobile-view';
import { motion } from 'framer-motion';

const DashboardSidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <motion.div
      className={`p-3`}
      initial={{ width: '100px' }}
      animate={{ width: openSideBar ? '350px' : '100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-rich-500 h-[calc(100vh_-28px)] rounded-lg py-8 w-full">
        <MobilDashboardSidebar />
        <DesktopDashboardSidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>
    </motion.div>
  );
}

export default DashboardSidebar;
