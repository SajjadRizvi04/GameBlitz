import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const upcomingMatches = [
  {
    team1: "Warriors",
    team2: "Titans",
    time: "5:00 PM",
    date: "5 Apr 2026",
    venue: "City Stadium",
  },
  {
    team1: "Warriors",
    team2: "Rangers",
    time: "7:30 PM",
    date: "8 Apr 2026",
    venue: "National Ground",
  },
];

const previousMatches = [
  {
    team1: "Warriors",
    team2: "Strikers",
    score: "2 - 1",
    result: "W",
    venue: "City Stadium",
  },
  {
    team1: "Warriors",
    team2: "Eagles",
    score: "1 - 1",
    result: "D",
    venue: "Arena Park",
  },
];

const resultConfig = {
  W: {
    label: "WIN",
    classes: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    score: "text-emerald-400",
  },
  D: {
    label: "DRAW",
    classes: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
    score: "text-yellow-400",
  },
  L: {
    label: "LOSS",
    classes: "text-red-400 bg-red-500/10 border-red-500/30",
    score: "text-red-400",
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
};

export default function MatchesSection() {
  const [tab, setTab] = useState("upcoming");

  return (
    <div className="w-full flex justify-center bg-[var(--bg-dark)]">
      <div className=" bg-gray-900 text-white p-6 flex justify-center backdrop-blur-md rounded-2xl">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-6"
          >
            <h1 className="text-2xl font-bold tracking-tight">
              Matches <span className="text-orange-400">⚡</span>
            </h1>
            <p className="text-gray-400 text-sm mt-0.5">
              Warriors FC • Schedule & Results
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex gap-1 mb-5 bg-gray-800 border border-gray-700 rounded-xl p-1 w-fit">
            {[
              { key: "upcoming", label: "⏳ Upcoming" },
              { key: "previous", label: "📋 Results" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="relative px-5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150"
              >
                {tab === key && (
                  <motion.span
                    layoutId="match-tab"
                    className="absolute inset-0 bg-orange-400 rounded-lg"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span
                  className={`relative z-10 ${tab === key ? "text-white" : "text-gray-400"}`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            {tab === "upcoming" ? (
              <motion.div
                key="upcoming"
                variants={stagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                className="space-y-3"
              >
                {upcomingMatches.map((match, i) => (
                  <motion.div
                    key={i}
                    variants={cardAnim}
                    whileHover={{ scale: 1.015 }}
                    className="bg-gray-800 border border-gray-700 rounded-2xl p-4"
                  >
                    {/* VS Row */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="font-bold text-base flex-1 text-right">
                        {match.team1}
                      </span>
                      <span className="text-orange-400 font-black text-sm px-3 py-1 bg-orange-400/10 border border-orange-400/20 rounded-lg">
                        VS
                      </span>
                      <span className="font-bold text-base flex-1">
                        {match.team2}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-2 mt-1">
                      <span>📅 {match.date}</span>
                      <span>🕐 {match.time}</span>
                      <span>📍 {match.venue}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="previous"
                variants={stagger}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                className="space-y-3"
              >
                {previousMatches.map((match, i) => {
                  const cfg = resultConfig[match.result] || resultConfig.D;
                  return (
                    <motion.div
                      key={i}
                      variants={cardAnim}
                      whileHover={{ scale: 1.015 }}
                      className="bg-gray-800 border border-gray-700 rounded-2xl p-4"
                    >
                      {/* VS Row */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-bold text-base flex-1 text-right">
                          {match.team1}
                        </span>
                        <span
                          className={`font-black text-sm px-3 py-1 rounded-lg border ${cfg.classes}`}
                        >
                          {match.score}
                        </span>
                        <span className="font-bold text-base flex-1">
                          {match.team2}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-700 pt-2">
                        <span>📍 {match.venue}</span>
                        <span className={`font-semibold text-xs ${cfg.score}`}>
                          {cfg.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
