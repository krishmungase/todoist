// import { Button } from "./components/ui/button"

import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar"
import HomePage from "./pages/home-page"
import DashboardLayout from "./layout/dashboard-layout"

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-x-0 top-0 -z-10 m-auto size-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      </div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App