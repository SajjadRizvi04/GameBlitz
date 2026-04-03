import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";

const SIDEBAR_ITEMS = [
  {path: "admin-panel", label: "Admin Panel", icon: <FaTachometerAlt /> },
  { path: "teams", label: "Team(s)", icon: <FaUsers /> },
  { path: "profile", label: "Profile", icon: <FaTachometerAlt /> },
  { path: "matches", label: "Matches", icon: <FaCalendarAlt /> },
  { path: "sendRequest", label: "SendRequest", icon: <IoMdNotificationsOutline /> },
  // { path: "chat", label: "Chat", icon: <IoChatbubbleEllipsesOutline />},
  // { path: "notification", label: "Notification", icon: <IoMdNotificationsOutline /> },
];

/*admin_panel will include: notification count, invites or accepted requests, upcoming fixtures, */
/*teams will have details about your team and your team members*/
/*teams will have details about your teams u manage if you manage multiple teams*/
/*matches will have details about all the matches you are part of*/
/*profile will have details about your account*/
/*notification will have details about all the notifications you have*/

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button className="sidebar__toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
        {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && <div className="sidebar__overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <nav className="sidebar__menu">
          {SIDEBAR_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? "active" : ""}`
              }
            >
              <span className="sidebar__icon">{item.icon}</span>
              <span className="sidebar__label">{item.label}</span>
            </NavLink>
          ))}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="view-site"
            title="View website"
            onClick={closeSidebar}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {<span>View Site</span>}
          </a>
        </nav>
      </aside>
    </>
  );
}