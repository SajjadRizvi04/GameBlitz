import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialNotifications = [
  {
    id: 1,
    type: "challenge",
    from: "Dragons FC",
    message: "challenged you for a match",
    time: "2 min ago",
    icon: "⚔️",
  },
  {
    id: 2,
    type: "join",
    from: "Ravi",
    message: "requested to join your team",
    time: "10 min ago",
    icon: "👥",
  },
  {
    id: 3,
    type: "challenge",
    from: "Thunder XI",
    message: "challenged you for a match",
    time: "1 hr ago",
    icon: "⚔️",
  },
  {
    id: 4,
    type: "join",
    from: "Arjun",
    message: "requested to join your team",
    time: "3 hr ago",
    icon: "👥",
  },
];

const typeConfig = {
  challenge: {
    accent: "text-orange-400",
    badge: "bg-orange-400/10 border-orange-400/25 text-orange-400",
    label: "Match Challenge",
    dot: "bg-orange-400",
  },
  join: {
    accent: "text-blue-400",
    badge: "bg-blue-400/10 border-blue-400/25 text-blue-400",
    label: "Join Request",
    dot: "bg-blue-400",
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 240, damping: 22 } },
  exit: { opacity: 0, x: 60, scale: 0.95, transition: { duration: 0.22 } },
};

export default function Notification() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const dismiss = (id) => setNotifications((prev) => prev.filter((n) => n.id !== id));
  const accept = (id) => dismiss(id);
  const reject = (id) => dismiss(id);
  const clearAll = () => setNotifications([]);

  return (//bg-gray-900 text-white
    <div className="flex flex-col h-[calc(100vh-70px)] w-full ">

      {/* Header */}
      <div className="px-4 sm:px-6 md:px-10 pt-5 pb-4 border-b border-gray-700/60 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-base leading-tight">
            Notifications <span className="text-orange-400">⚡</span>
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">
            {notifications.length > 0
              ? `${notifications.length} pending action${notifications.length > 1 ? "s" : ""}`
              : "All caught up"}
          </p>
        </div>
        {notifications.length > 0 && (
          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={clearAll}
            className="text-xs text-gray-400 hover:text-red-400 transition-colors duration-150 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-red-400/40"
          >
            Clear all
          </motion.button>
        )}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-4">
        <AnimatePresence mode="popLayout">
          {notifications.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-3"
            >
              {notifications.map((n) => {
                const cfg = typeConfig[n.type];
                return (
                  <motion.div
                    key={n.id}
                    variants={cardAnim}
                    exit={cardAnim.exit}
                    layout
                    className="   rounded-2xl p-4"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Icon circle */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${cfg.badge} border`}>
                          {n.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm `}>{n.from}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border`}>
                              {cfg.label}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 mt-0.5">{n.message}</p>
                        </div>
                      </div>
                      {/* Time + dismiss */}
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="text-[10px] text-gray-500">{n.time}</span>
                        <button
                          onClick={() => dismiss(n.id)}
                          className="text-gray-600 hover:text-gray-300 transition-colors text-lg leading-none"
                        >
                          ×
                        </button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 justify-end border-t border-gray-700/60 pt-3">
                      <motion.button
                        whileTap={{ scale: 0.93 }}
                        onClick={() => reject(n.id)}
                        className="px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors"
                      >
                        Decline
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.93 }}
                        onClick={() => accept(n.id)}
                        className="px-4 py-1.5 rounded-lg text-sm font-medium bg-orange-400 text-white hover:bg-orange-500 transition-colors"
                      >
                        Accept
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-3 text-center py-20"
            >
              <span className="text-4xl">🎉</span>
              <p className="font-semibold text-gray-300">You're all caught up!</p>
              <p className="text-sm text-gray-500">No pending notifications</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}