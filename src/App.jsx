// import { Button } from "./components/ui/button"

import { Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar"
import HomePage from "./pages/home-page"

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App