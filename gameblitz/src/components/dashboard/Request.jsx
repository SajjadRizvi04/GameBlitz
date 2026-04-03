import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teams = [
  {
    id: 1,
    name: "Westside Warriors",
    sport: "football",
    city: "Mumbai",
    rank: 1,
    wins: 14,
    losses: 2,
    members: 11,
    status: "online",
    image: "🦁",
  },
  {
    id: 2,
    name: "City Strikers",
    sport: "football",
    city: "Delhi",
    rank: 2,
    wins: 12,
    losses: 4,
    members: 11,
    status: "online",
    image: "⚡",
  },
  {
    id: 3,
    name: "Riverside Rebels",
    sport: "football",
    city: "Kolkata",
    rank: 3,
    wins: 9,
    losses: 7,
    members: 11,
    status: "online",
    image: "🐯",
  },
  {
    id: 4,
    name: "Phoenix Rising",
    sport: "football",
    city: "Bangalore",
    rank: 4,
    wins: 8,
    losses: 6,
    members: 11,
    status: "idle",
    image: "🔥",
  },
  {
    id: 5,
    name: "Apex Legends",
    sport: "football",
    city: "Chennai",
    rank: 5,
    wins: 7,
    losses: 5,
    members: 11,
    status: "online",
    image: "👑",
  },
  {
    id: 6,
    name: "Dragon Squad",
    sport: "football",
    city: "Hyderabad",
    rank: 6,
    wins: 6,
    losses: 8,
    members: 11,
    status: "offline",
    image: "🐉",
  },
];

const myTeam = {
  name: "Game Blitz FC",
  city: "Ludhiana",
  rank: 3,
  wins: 11,
  losses: 5,
  members: 11,
  image: "⚽",
};

const statusMap = {
  online: { color: "#10B981", label: "Active", badge: "✓" },
  idle: { color: "#F59E0B", label: "Away", badge: "⊘" },
  offline: { color: "#9CA3AF", label: "Offline", badge: "✕" },
};

const matchTypes = [
  { id: "friendly", label: "Friendly", icon: "🤝" },
  { id: "ranked", label: "Ranked", icon: "🏆" },
  { id: "cup", label: "Cup Match", icon: "🏅" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, delay, ease: "easeOut" },
});

function RequestTeamCard({ team, onChallenge, challenged, requested }) {
  const [hov, setHov] = useState(false);
  const winRate = Math.round((team.wins / (team.wins + team.losses)) * 100);

  return (
    <motion.div
      layout
      {...fadeUp(team.id * 0.08)}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
        hov ? "shadow-2xl border-[var(--orange)]" : "shadow-md border-[var(--border-light)]"
      } bg-[var(--card-bg)] border-2`}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)]" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center text-3xl transition-all duration-300 ${
                hov ? "border-[var(--orange)]" : "border-[var(--border-light)]"
              } border-2 bg-[var(--bg-light)]`}
            >
              {team.image}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-[var(--text-dark)] mb-1">
                {team.name}
              </h3>
              <p className="text-xs text-[var(--text-gray)]">📍 {team.city}</p>
            </div>
          </div>
          <div className="text-right text-sm font-bold text-[var(--orange)]">
            #{team.rank}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[var(--bg-light)] rounded-lg p-3 text-center border border-[var(--border-light)]">
            <div className="text-sm font-bold text-green-600">{team.wins}</div>
            <div className="text-xs text-[var(--text-gray)]">Wins</div>
          </div>
          <div className="bg-[var(--bg-light)] rounded-lg p-3 text-center border border-[var(--border-light)]">
            <div className="text-sm font-bold text-red-600">{team.losses}</div>
            <div className="text-xs text-[var(--text-gray)]">Losses</div>
          </div>
          <div className="bg-[var(--bg-light)] rounded-lg p-3 text-center border border-[var(--border-light)]">
            <div className="text-sm font-bold text-[var(--orange)]">{winRate}%</div>
            <div className="text-xs text-[var(--text-gray)]">Rate</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="h-2 bg-[var(--bg-light)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${winRate}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] rounded-full"
            />
          </div>
        </div>

        {/* Status & Members */}
        <div className="flex items-center justify-between mb-5 text-xs">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: statusMap[team.status].color }}
            />
            <span className="text-[var(--text-gray)]">
              {statusMap[team.status].label}
            </span>
          </div>
          <span className="text-[var(--text-gray)]">👥 {team.members} Players</span>
        </div>

        {/* Action buttons */}
        {challenged ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full py-3 bg-orange-50 border-2 border-[var(--orange)] rounded-lg text-center text-sm font-semibold text-[var(--orange)]"
          >
            ⏳ Challenge Sent
          </motion.div>
        ) : requested ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full py-3 bg-green-50 border-2 border-green-600 rounded-lg text-center text-sm font-semibold text-green-600"
          >
            ✓ Request Sent
          </motion.div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onChallenge(team)}
            className="w-full py-3 bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] text-white font-bold rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
          >
            ⚡ Challenge Team
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

function ChallengeModal({ team, onClose, onSend }) {
  const [matchType, setMatchType] = useState("friendly");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    onSend(team, matchType);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[var(--card-bg)] rounded-2xl p-8 w-full max-w-md shadow-2xl border-2 border-[var(--border-light)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--orange)] to-[var(--orange-light)] flex items-center justify-center text-2xl">
              {team.image}
            </div>
            <div>
              <h2 className="text-base font-bold text-[var(--text-dark)]">
                Challenge
              </h2>
              <p className="text-xs text-[var(--text-gray)]">{team.name}</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-[var(--text-gray)] hover:text-[var(--text-dark)] text-2xl transition-colors"
          >
            ✕
          </motion.button>
        </div>

        {/* Match type selector */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-[var(--text-gray)] mb-3 block uppercase tracking-wide">
            Select Match Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {matchTypes.map((type) => (
              <motion.button
                key={type.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMatchType(type.id)}
                className={`p-4 rounded-lg font-semibold text-xs transition-all duration-300 flex flex-col items-center gap-1.5 ${
                  matchType === type.id
                    ? "bg-orange-50 border-2 border-[var(--orange)] text-[var(--orange)]"
                    : "bg-[var(--bg-light)] border-2 border-[var(--border-light)] text-[var(--text-dark)] hover:border-[var(--border-light)]"
                }`}
              >
                <span className="text-base">{type.icon}</span>
                {type.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Team info */}
        <div className="bg-[var(--bg-light)] border border-[var(--border-light)] rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[var(--text-gray)] mb-1">Rank</p>
              <p className="text-lg font-bold text-[var(--orange)]">#{team.rank}</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-gray)] mb-1">Record</p>
              <p className="text-sm font-bold">
                <span className="text-green-600">{team.wins}W</span>
                <span className="text-[var(--text-gray)]"> / </span>
                <span className="text-red-600">{team.losses}L</span>
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="flex-1 py-3 bg-[var(--bg-light)] hover:bg-gray-100 text-[var(--text-dark)] font-semibold rounded-lg transition-colors border border-[var(--border-light)]"
          >
            Cancel
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={send}
            disabled={loading}
            className={`flex-1 py-3 font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
              loading
                ? "bg-gray-400 text-white cursor-wait"
                : "bg-gradient-to-r from-[var(--orange)] to-[var(--orange-light)] text-white hover:shadow-lg"
            }`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>⚡ Send Challenge</>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Toast({ message, type, onClose }) {
  useState(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  });

  const typeStyles = {
    success: "bg-green-600 border-green-700",
    error: "bg-red-600 border-red-700",
    info: "bg-[var(--orange)] border-[var(--orange-light)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -5, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -5, scale: 0.9 }}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg font-semibold text-white shadow-lg border-2 z-50 ${
        typeStyles[type] || typeStyles.info
      }`}
    >
      {message}
    </motion.div>
  );
}

export default function TeamRequests() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [challenged, setChallenged] = useState(new Set());
  const [requested, setRequested] = useState(new Set());
  const [toast, setToast] = useState(null);

  const handleChallenge = (team) => {
    setSelectedTeam(team);
  };

  const handleSendChallenge = (team, type) => {
    setChallenged((p) => new Set([...p, team.id]));
    setSelectedTeam(null);
    setToast({
      message: `Challenge sent to ${team.name}! ⚡`,
      type: "success",
    });
  };

  return (
    <div className="h-[calc(100vh-80px)] flex-1 bg-[var(--bg-dark)] p-8 overflow-y-auto no-scrollbar">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div {...slideIn(0)} className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Football Challenges ⚽
          </h1>
          <p className="text-base text-white/60">
            Challenge football teams and dominate the pitch
          </p>
        </motion.div>

        {/* My Team Card */}
        <motion.div
          {...slideIn(0.1)}
          className="mb-10 bg-gradient-to-r from-[var(--blue-light)] to-[var(--bg-dark)] border-2 border-[var(--orange)] rounded-2xl p-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[var(--orange)] to-[var(--orange-light)] flex items-center justify-center text-3xl border-2 border-white">
                {myTeam.image}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {myTeam.name}
                </h2>
                <p className="text-sm text-white/80">
                  📍 {myTeam.city} • Rank #{myTeam.rank}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-white/70 mb-2">Current Record</div>
              <p className="text-2xl font-bold text-white">
                <span className="text-green-400">{myTeam.wins}W</span>
                <span className="text-white/40"> - </span>
                <span className="text-red-400">{myTeam.losses}L</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Teams Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        >
          <AnimatePresence>
            {teams.map((team) => (
              <RequestTeamCard
                key={team.id}
                team={team}
                onChallenge={handleChallenge}
                challenged={challenged.has(team.id)}
                requested={requested.has(team.id)}
                className="bg-amber-600"
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Challenge Modal */}
      <AnimatePresence>
        {selectedTeam && (
          <ChallengeModal
            team={selectedTeam}
            onClose={() => setSelectedTeam(null)}
            onSend={handleSendChallenge}
          />
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}