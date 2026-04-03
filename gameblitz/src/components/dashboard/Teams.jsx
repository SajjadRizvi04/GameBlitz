import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrangeButton from "../shared/Orangebutton";

const roleColors = {
  Captain: "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",
  Striker: "text-orange-400 bg-orange-400/10 border-orange-400/25",
  Defender: "text-blue-400 bg-blue-400/10 border-blue-400/25",
  Goalkeeper: "text-purple-400 bg-purple-400/10 border-purple-400/25",
  Midfielder: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Winger: "text-pink-400 bg-pink-400/10 border-pink-400/25",
  Support: "text-gray-400 bg-gray-400/10 border-gray-400/25",
  Player: "text-gray-400 bg-gray-400/10 border-gray-400/25",
};

const avatarColors = [
  "bg-orange-500", "bg-blue-500", "bg-purple-500",
  "bg-emerald-500", "bg-pink-500", "bg-yellow-500",
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + hash * 31;
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardAnim = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 240, damping: 22 } },
  exit: { opacity: 0, x: 40, transition: { duration: 0.18 } },
};

const ROLES = ["Player", "Captain", "Striker", "Defender", "Midfielder", "Goalkeeper", "Winger", "Support"];

export default function Teams() {
  const [members, setMembers] = useState([
    { id: 1, name: "Pritam", role: "Captain" },
    { id: 2, name: "Rahul", role: "Striker" },
    { id: 3, name: "Aman", role: "Defender" },
    { id: 4, name: "Karan", role: "Goalkeeper" },
    { id: 5, name: "Rohit", role: "Midfielder" },
    { id: 6, name: "Arjun", role: "Defender" },
    { id: 7, name: "Vikram", role: "Winger" },
    { id: 8, name: "Sahil", role: "Striker" },
    { id: 9, name: "Deepak", role: "Midfielder" },
    { id: 10, name: "Manish", role: "Defender" },
    { id: 11, name: "Ajay", role: "Support" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("Player");

  const removeMember = (id) => setMembers((prev) => prev.filter((m) => m.id !== id));

  const addMember = () => {
    if (!search.trim()) return;
    setMembers((prev) => [...prev, { id: Date.now(), name: search.trim(), role }]);
    setSearch("");
    setRole("Player");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] bg-gray-900 text-white w-full ">{/*bg-gray-900 text-white*/}

      {/* Header */}
      <div className="px-4 sm:px-6 md:px-10 pt-5 pb-4 border-b border-gray-700/60 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-base leading-tight">
            Team Members <span className="text-orange-400">⚡</span>
          </h1>
          <p className="text-xs text-gray-400 mt-0.5">Warriors FC • {members.length} members</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowModal(true)}
          className="bg-orange-400 hover:bg-orange-500 transition-colors text-white text-sm font-semibold px-4 py-1.5 rounded-xl"
        >
          + Add Member
        </motion.button>
      </div>

      {/* Members List */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-3"
        >
          <AnimatePresence>
            {members.map((member) => {
              const roleStyle = roleColors[member.role] || roleColors.Player;
              return (
                <motion.div
                  key={member.id}
                  variants={cardAnim}
                  exit={cardAnim.exit}
                  layout
                  whileHover={{ scale: 1.012 }}
                  className="bg-gray-800 text-white border border-gray-700 rounded-2xl p-4 flex items-center gap-3"
                >
                  {/* Avatar */}
                  <div
                    className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold text-white ${getAvatarColor(member.name)}`}
                  >
                    {getInitials(member.name)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">
                      {member.name}
                      {member.role === "Captain" && " 👑"}
                    </p>
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border mt-0.5 ${roleStyle}`}>
                      {member.role}
                    </span>
                  </div>

                  {/* Remove */}
                  <OrangeButton text={'Remove'} onClick={() => removeMember(member.id)}/>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm"
            >
              <h2 className="font-bold text-base mb-1">Add New Member</h2>
              <p className="text-xs text-gray-400 mb-4">Enter a username or UID to add them to Warriors FC</p>

              {/* Name Input */}
              <input
                type="text"
                placeholder="Username or UID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addMember()}
                className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-400/50 outline-none text-sm placeholder-gray-500 transition-colors mb-3"
              />

              {/* Role Dropdown */}
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-gray-900 border border-gray-700 focus:border-orange-400/50 outline-none text-sm text-gray-300 transition-colors mb-4"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>

              {/* Actions */}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-1.5 rounded-xl text-sm bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  whileTap={{ scale: 0.93 }}
                  onClick={addMember}
                  disabled={!search.trim()}
                  className="px-4 py-1.5 rounded-xl text-sm bg-orange-400 hover:bg-orange-500 text-white font-semibold disabled:opacity-30 transition-colors"
                >
                  Add Member
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}