import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./PartOfTeam.css";
import { toast } from "react-toastify";

export default function PartOfTeam() {
  const location = useLocation();
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get team data from location state
    if (location.state?.teamData) {
      setTeamData(location.state.teamData);
    } else {
      // If no team data provided, redirect to no-team
      toast.warning("Please log in first");
      navigate("/login");
    }
  }, [location, navigate]);

  const handleGoToDashboard = () => {
    setLoading(true);
    navigate("/dashboard");
  };

  const handleLeaveTeam = () => {
    // TODO: Add functionality to leave team
    toast.info("Leave team functionality coming soon");
  };

  const containerAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  if (!teamData) {
    return (
      <div className="part-of-team-wrapper">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading your team information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="part-of-team-wrapper">
      <motion.div
        className="part-of-team-container"
        variants={containerAnimation}
        initial="hidden"
        animate="show"
      >
        {/* Hero Section */}
        <motion.div className="pot-hero" variants={itemAnimation}>
          <div className="pot-hero-overlay"></div>
          <motion.div className="pot-hero-content" variants={itemAnimation}>
            <div className="pot-icon">🏆</div>
            <h1>Welcome to Your Team!</h1>
            <p>You're now a proud member of the team</p>
          </motion.div>
        </motion.div>

        {/* Team Card */}
        <motion.div className="pot-card" variants={itemAnimation}>
          <div className="pot-card-header">
            <div className="pot-team-avatar">
              {teamData.teamName?.charAt(0).toUpperCase() || "T"}
            </div>
            <div className="pot-team-info">
              <h2>{teamData.teamName || "Your Team"}</h2>
              <p className="pot-team-id">Team ID: {teamData.teamId}</p>
              {teamData.createdAt && (
                <p className="pot-team-date">
                  Joined {new Date(teamData.createdAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          <div className="pot-team-status">
            <div className="status-badge">
              <div className="status-dot"></div>
              <span>Active Member</span>
            </div>
          </div>

          {/* Stats */}
          <div className="pot-stats">
            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <p className="stat-label">Team Members</p>
                <p className="stat-value">View & Manage</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="stat-icon">📅</div>
              <div className="stat-content">
                <p className="stat-label">Upcoming Matches</p>
                <p className="stat-value">Schedule</p>
              </div>
            </motion.div>

            <motion.div
              className="stat-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="stat-icon">💬</div>
              <div className="stat-content">
                <p className="stat-label">Team Chat</p>
                <p className="stat-value">Communicate</p>
              </div>
            </motion.div>
          </div>

          {/* Actions */}
          <div className="pot-actions">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoToDashboard}
              className="pot-btn pot-btn-primary"
              disabled={loading}
            >
              {loading ? "Loading..." : "Go to Dashboard"}
              <span className="btn-arrow">→</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLeaveTeam}
              className="pot-btn pot-btn-secondary"
            >
              Leave Team
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="pot-quick-links" variants={itemAnimation}>
          <h3>Quick Navigation</h3>
          <div className="pot-links-grid">
            <motion.div
              whileHover={{ x: 4 }}
              className="pot-link-item"
              onClick={() => navigate("/dashboard/profile")}
            >
              <span className="link-icon">👤</span>
              <span className="link-text">Profile</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              className="pot-link-item"
              onClick={() => navigate("/dashboard/teams")}
            >
              <span className="link-icon">⚙️</span>
              <span className="link-text">Team Settings</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              className="pot-link-item"
              onClick={() => navigate("/dashboard/matches")}
            >
              <span className="link-icon">⚽</span>
              <span className="link-text">Matches</span>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              className="pot-link-item"
              onClick={() => navigate("/dashboard/chat")}
            >
              <span className="link-icon">💬</span>
              <span className="link-text">Chat</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
