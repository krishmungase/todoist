import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeMitra from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=" fixed top-3 left-[90px] w-[78%] sm:left-[100px] z-50 md:left-[120px] lg:left-[300px] md:w-[78%] rounded-mdshadow-md">
      <div className='container mx-auto px-8'>
        <div className="flex flex-wrap justify-between items-center py-4 px-4 lg:px-4">
          <div className="flex items-center space-x-3">
            <img
              src={CodeMitra}
              alt="CodeMitra Logo"
              className="h-8 md:h-8"
            />
            <h1 className="hidden md:block text-xl md:text-2xl font-semibold tracking-wide">
              CodeMitra
            </h1>
          </div>
          <nav className="hidden lg:flex items-center">
            <ul className="flex gap-x-6 text-richrich-400-25">
              <li>
                <Link to="/" className={`${window.location.pathname === "/" ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`${window.location.pathname === "/about" ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`${window.location.pathname === "/contact" ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/learn" className={`${window.location.pathname.includes("/learn") ? "text-rich-900 font-normal" : "text-rich-400"} hover:text-rich-900 transition`}>
                  Learn
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:hidden flex items-center">
            <button onClick={handleMenuToggle} className="text-rich-900 focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {isMenuOpen && (
              <ul className="absolute right-8 top-20 mt-2 w-48 bg-rich-100 rounded-md shadow-lg py-2">
                <li>
                  <Link to="/" className={`${window.location.pathname === "/" ? "text-rich-900" : "text-rich-400"} block px-4 py-2 hover:text-rich-900`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`${window.location.pathname === "/about" ? "text-rich-900" : "text-rich-400"} block px-4 py-2 hover:text-rich-900`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`${window.location.pathname === "/contact" ? "text-rich-900" : "text-rich-400"} block px-4 py-2 hover:text-rich-900`}>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/profile" className={`${window.location.pathname.includes("/dashboard") ? "text-rich-900" : "text-rich-400"} block px-4 py-2 hover:text-rich-900`}>
                    Learn
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
