import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0B1C36] text-white">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold">
            GAME <span className="text-orange-500">BLITZ</span>
          </h2>

          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            A platform to connect local players, join teams, and compete in nearby leagues.
            Find matches near you and grow your game.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="list-none space-y-2 text-gray-300 text-sm">
            <li><NavLink className="hover:text-orange-500" to='/home'>Home</NavLink></li>
            <li><NavLink className="hover:text-orange-500" to='/about'>About</NavLink></li>
            <li><NavLink className="hover:text-orange-500" to='/contact'>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <p className="text-gray-300 text-sm mb-4">
            Stay connected with us for updates, leagues, and upcoming matches.
          </p>

          <div className="flex gap-4">

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaFacebook size="30" className="cursor-pointer" />
            </motion.div>

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <AiFillTwitterCircle size="30" className="cursor-pointer" />
            </motion.div>

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <RiInstagramFill size="30" className="cursor-pointer" />
            </motion.div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Game Blitz. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;