import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AdminPanel.css';
import { Bell, Mail, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const AdminPanel = () => {
  // Mock data
  const [stats] = useState({
    notificationCount: 5,
    pendingInvites: 3,
    acceptedRequests: 8,
    upcomingFixtures: 4
  });

  const [invites] = useState([
    {
      id: 1,
      from: 'Phoenix Warriors',
      type: 'Team Invite',
      date: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      from: 'Thunder Squad',
      type: 'Match Invite',
      date: '5 hours ago',
      status: 'pending'
    },
    {
      id: 3,
      from: 'Elite Legends',
      type: 'Tournament Invite',
      date: '1 day ago',
      status: 'pending'
    }
  ]);

  const [acceptedRequests] = useState([
    {
      id: 1,
      team: 'Apex Predators',
      action: 'Team Request Accepted',
      date: '3 days ago'
    },
    {
      id: 2,
      team: 'Victory Kings',
      action: 'Match Confirmation',
      date: '5 days ago'
    },
    {
      id: 3,
      team: 'Champion Force',
      action: 'Tournament Registered',
      date: '1 week ago'
    }
  ]);

  const [upcomingFixtures] = useState([
    {
      id: 1,
      opponent: 'Phoenix Warriors',
      date: 'Apr 10, 2026',
      time: '18:00',
      status: 'scheduled',
      type: 'Friendly'
    },
    {
      id: 2,
      opponent: 'Thunder Squad',
      date: 'Apr 12, 2026',
      time: '19:30',
      status: 'scheduled',
      type: 'League'
    },
    {
      id: 3,
      opponent: 'Elite Legends',
      date: 'Apr 15, 2026',
      time: '17:00',
      status: 'scheduled',
      type: 'Cup'
    },
    {
      id: 4,
      opponent: 'Apex Predators',
      date: 'Apr 18, 2026',
      time: '20:00',
      status: 'scheduled',
      type: 'Championship'
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const handleAcceptInvite = (id) => {
    console.log('Invite accepted:', id);
  };

  const handleRejectInvite = (id) => {
    console.log('Invite rejected:', id);
  };

  return (
    <motion.div
      className="admin-panel-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="admin-header" variants={itemVariants}>
        {/* <h1>Admin Dashboard</h1> */}
        {/* <p>Manage your team, invites, and upcoming matches</p> */}
      </motion.div>

      {/* Stats Cards */}
      <motion.div className="stats-grid" variants={itemVariants}>
        <motion.div 
          className="stat-card notification-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="stat-icon notification-icon">
            <Bell size={28} />
          </div>
          <div className="stat-content">
            <h3>Notifications</h3>
            <p className="stat-number">{stats.notificationCount}</p>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card invite-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="stat-icon invite-icon">
            <Mail size={28} />
          </div>
          <div className="stat-content">
            <h3>Pending Invites</h3>
            <p className="stat-number">{stats.pendingInvites}</p>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card accepted-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="stat-icon accepted-icon">
            <CheckCircle size={28} />
          </div>
          <div className="stat-content">
            <h3>Accepted Requests</h3>
            <p className="stat-number">{stats.acceptedRequests}</p>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card fixture-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="stat-icon fixture-icon">
            <Calendar size={28} />
          </div>
          <div className="stat-content">
            <h3>Upcoming Fixtures</h3>
            <p className="stat-number">{stats.upcomingFixtures}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Grid */}
      <motion.div className="content-grid" variants={itemVariants}>
        {/* Pending Invites Section */}
        <motion.div className="section invites-section" variants={itemVariants}>
          <div className="section-header">
            <Mail size={20} />
            <h2>Pending Invites ({invites.length})</h2>
          </div>
          <div className="invites-list">
            {invites.map((invite, index) => (
              <motion.div 
                key={invite.id}
                className="invite-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: '#F9FAFB' }}
              >
                <div className="invite-details">
                  <h4>{invite.from}</h4>
                  <p className="invite-type">{invite.type}</p>
                  <span className="invite-time">{invite.date}</span>
                </div>
                <div className="invite-actions">
                  <motion.button
                    className="btn-accept"
                    onClick={() => handleAcceptInvite(invite.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Accept
                  </motion.button>
                  <motion.button
                    className="btn-reject"
                    onClick={() => handleRejectInvite(invite.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reject
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Accepted Requests Section */}
        <motion.div className="section accepted-section" variants={itemVariants}>
          <div className="section-header">
            <CheckCircle size={20} />
            <h2>Accepted Requests ({acceptedRequests.length})</h2>
          </div>
          <div className="requests-list">
            {acceptedRequests.map((request, index) => (
              <motion.div 
                key={request.id}
                className="request-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: '#F0FDF4' }}
              >
                <div className="request-icon">
                  <CheckCircle size={20} />
                </div>
                <div className="request-details">
                  <h4>{request.team}</h4>
                  <p className="request-action">{request.action}</p>
                  <span className="request-time">{request.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Fixtures Section */}
        <motion.div className="section fixtures-section full-width" variants={itemVariants}>
          <div className="section-header">
            <Calendar size={20} />
            <h2>Upcoming Fixtures ({upcomingFixtures.length})</h2>
          </div>
          <div className="fixtures-grid">
            {upcomingFixtures.map((fixture, index) => (
              <motion.div 
                key={fixture.id}
                className="fixture-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 8px 24px rgba(255, 107, 0, 0.15)'
                }}
              >
                {/* <div className="fixture-badge">{fixture.type}</div> */}
                <div className="fixture-content">
                  <h3 className="fixture-opponent">vs {fixture.opponent}</h3>
                  <div className="fixture-details">
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>{fixture.date}</span>
                    </div>
                    <div className="detail-item">
                      <AlertCircle size={16} />
                      <span>{fixture.time}</span>
                    </div>
                  </div>
                  <motion.button
                    className="btn-view-fixture"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AdminPanel;
