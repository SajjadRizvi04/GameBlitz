import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OrangeButton from "./Orangebutton";
import NormalButton from "./NormalButton";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block transition-all duration-200 hover:scale-105 ${
      isActive ? "text-[var(--orange)] font-semibold scale-105" : ""
    }`;

  return (
 
    <nav className="bg-[var(--bg-dark)] text-[var(--text-white)] px-6 ">
      
      {/* Top Bar */}
      <div className=" h-20 flex items-center  justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          GAME<span className="text-[var(--orange)]">BLITZ</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>

          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <NormalButton text="Login" />
          <OrangeButton text="Sign Up" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[var(--bg-dark)] p-4 rounded-lg">
          <NavLink to="/" className={linkStyle} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkStyle} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/features" className={linkStyle} onClick={() => setOpen(false)}>Features</NavLink>
          <NavLink to="/contact" className={linkStyle} onClick={() => setOpen(false)}>Contact</NavLink>

          <div className="flex flex-col gap-2 mt-2">
            <NormalButton text="Login" />
            <OrangeButton text="Sign Up" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;