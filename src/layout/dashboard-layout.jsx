import { Outlet } from "react-router-dom"
import DashboardSidebar from "./side-layout"


const DashboardLayout = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <DashboardSidebar />
      <div className="h-[calc(100vh_-80px)] w-full p-5 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout