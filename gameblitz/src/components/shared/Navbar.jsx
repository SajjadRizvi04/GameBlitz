import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import OrangeButton from "./Orangebutton";
import NormalButton from "./NormalButton";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `transition-all duration-200 hover:scale-105 ${
      isActive ? "text-[var(--orange)] font-semibold scale-105" : ""
    }`;

  return (
    <nav className="bg-[var(--bg-dark)] text-[var(--text-white)] px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Left - Logo */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">
            GAME<span className="text-[var(--orange)]">BLITZ</span>
          </h1>
        </div>

        {/* Center - Nav Links */}
        <div className="flex-1 flex justify-center gap-8">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/features" className={linkStyle}>Features</NavLink>
          <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        </div>

        {/* Right - Buttons */}
        <div className="flex-1 flex justify-end gap-3">
          <NormalButton text={"Login"}/>
          <OrangeButton text={"Sign Up"}/>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;