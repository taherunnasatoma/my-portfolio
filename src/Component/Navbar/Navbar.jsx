import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const links = (
    <>
      <li><a href="#banner" className="text-blue-600 text-xl hover:underline font-bold">Home</a></li>
      <li><a href="#about" className="text-blue-600 text-xl hover:underline font-bold">About</a></li>
      <li><a href="#skills" className="text-blue-600 text-xl hover:underline font-bold">Skills</a></li>
      <li><a href="#education" className="text-blue-600 text-xl hover:underline font-bold">Education</a></li>
      <li><a href="#projects" className="text-blue-600 text-xl hover:underline font-bold">Projects</a></li>
      <li><a href="#contact" className="text-blue-600 text-xl hover:underline font-bold">Contact</a></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-8xl mx-auto px-4 lg:px-8 sticky top-0 z-50">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={logo} alt="Logo" className="w-28 h-auto" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-[#0f62fe] text-white">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
