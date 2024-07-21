import React from 'react'
import Logo from "../img/Logo.png"
function Navbar() {
  return (
    <div className='bg-blue-500'>
        <div className="navbar div-1 px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-blue-500 ">
        <li><a> Vakansiyalar</a></li>
        <li><a>Kandidatlar</a></li>
        <li><a> Kompaniyalar</a></li>
        <li><a> Xizmatlar</a></li>
        <li><a> Ta’lim</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={Logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white font-medium	text-lg">
    <li><a> Vakansiyalar</a></li>
        <li><a>Kandidatlar</a></li>
        <li><a> Kompaniyalar</a></li>
        <li><a> Xizmatlar</a></li>
        <li><a> Ta’lim</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-6">
  <select className="select select-ghost bg-transparent  max-w-xs text-white font-medium	text-lg">
  {/* <option disabled selected className=''></option> */}
  <option>O'zb</option>
  <option>En</option>
  <option>Rss</option>
</select>
    <button className=" bg-white w-28 h-11 rounded-lg font-medium text-base text-blue-500">Boshlash</button>
  </div>
</div>
    </div>
  )
}

export default Navbar