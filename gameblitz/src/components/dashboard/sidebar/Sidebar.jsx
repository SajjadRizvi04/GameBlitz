import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

const SIDEBAR_ITEMS = [
  { path: "profile", label: "Profile", icon: <FaTachometerAlt /> },
  { path: "teams", label: "Teams", icon: <FaUsers /> },
  { path: "matches", label: "Matches", icon: <FaCalendarAlt /> },
  { path: "chat", label: "Chat", icon: <IoChatbubbleEllipsesOutline />},
  { path: "notification", label: "Notification", icon: <IoMdNotificationsOutline /> },
];

export default function DashboardSidebar() {
  return (
    <aside className="sidebar">

      <nav className="sidebar__menu">
        {SIDEBAR_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar__item ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}