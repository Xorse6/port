import React, { useState } from "react";
import logo from "../assets/blk-logo.png";
import crossIcon from "../assets/cross_icon.png";
import menuIcon from "../assets/menu_icon.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Hamburger state
  const [visible, setVisible] = useState(false);

  return (
    <div className="sticky top-0 right-0 z-30 bg-white flex items-center py-5 justify-between w-full font-medium">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Logo"
        className="w-14 h-auto cursor-pointer"
      />

      {/* Large Screen Navbar */}
      <ul className="hidden lg:flex gap-7 text-lg text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            HOME
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {/* <NavLink to="/about" className="flex flex-col gap-1 items-center">
          <p className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            ABOUT ME
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> */}
        <NavLink to="/skills" className="flex flex-col gap-1 items-center">
          <p className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            SKILLS
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/projects" className="flex flex-col gap-1 items-center">
          <p className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            PROJECTS
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {/* <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
            CONTACT
          </p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> */}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <img
          onClick={() => setVisible(true)}
          src={menuIcon}
          alt="Menu"
          className="w-8 cursor-pointer"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-20 bg-white transition-all duration-300 ease-in-out ${
          visible ? "w-full h-full" : "w-0 h-0"
        } overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
          <img
            src={crossIcon}
            alt="Close"
            className="w-8 cursor-pointer"
            onClick={() => setVisible(false)}
          />
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-center gap-6 mt-6 text-lg text-gray-700 font-medium">
          <NavLink onClick={() => setVisible(false)} to="/">
            <p className="px-4 py-2 rounded text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
              HOME
            </p>
          </NavLink>
          {/* <NavLink onClick={() => setVisible(false)} to="/about">
            <p className="px-4 py-2 rounded text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
              ABOUT
            </p>
          </NavLink> */}
          <NavLink onClick={() => setVisible(false)} to="/skills">
            <p className="px-4 py-2 rounded text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
              SKILLS
            </p>
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to="/projects">
            <p className="px-4 py-2 rounded text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
              PROJECTS
            </p>
          </NavLink>
          {/* <NavLink onClick={() => setVisible(false)} to="/contact">
            <p className="px-4 py-2 rounded text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
              CONTACT
            </p>
          </NavLink> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

