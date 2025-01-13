// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import CodeMitra from "../assets/LogoCodeMitra.png"

const Navbar = () => {
  return (
    <div className='bg-rich-100 rounded-md container mx-auto px-8'>
      <div className="flex flex-wrap justify-center items-center py-4 px-4 lg:px-0">
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-x-6 text-richrich-400-25">
            <li>
              <Link to="/" className={`${location.pathname === "/" ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${location.pathname === "/about" ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${location.pathname === "/contact" ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className={`${location.pathname.includes("/dashboard") ? "text-rich-900" : "text-rich-400"} hover:text-rich-900 transition`}>
                Learn
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar