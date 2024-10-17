import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-gray-300 backdrop-blur-3xl h-[5vh]">
  <div className="container-fluid flex justify-between w-screen h-full items-center">
    <a className="navbar-brand mx-10 text-white">View Verdict</a>
    <div className="w-1/3 relative flex justify-end flex-row items-center">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-5 z-10 text-white" />
      
      <input
        className="rounded-3xl absolute w-full form-control bg-gray-300 backdrop-blur-3xl border-white border-2 placeholder:text-white outline-none px-5 text-white"
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={{ WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none' }}
      />
    </div>
    <div className="flex space-x-4 mx-10">
      <div className="text-white">Signin</div>
      <div style={{ backgroundColor: '#573BC7' }} className="rounded-full w-8 h-8 hover:cursor-pointer">
        <FontAwesomeIcon icon={faBars} className="p-2 text-white items-center" />
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;