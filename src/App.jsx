// import { Button } from "./components/ui/button"

import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar"
import HomePage from "./pages/home-page"
import DashboardLayout from "./layout/dashboard-layout"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import LearnPage from "./pages/learn"

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/learn" element={<LearnPage />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App