import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

const SIDEBAR_ITEMS = [
  { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { path: "/teams", label: "Teams", icon: <FaUsers /> },
  { path: "/matches", label: "Matches", icon: <FaCalendarAlt /> },
  { path: "/performance", label: "Performance", icon: <FaChartLine /> },
  { path: "/settings", label: "Settings", icon: <FaCog /> },
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