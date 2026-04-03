import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Teams() {
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

  // Remove member
  const removeMember = (id) => {
    setMembers(members.filter((m) => m.id !== id));
  };

  // Add dummy member (simulate search result)
  const addMember = () => {
    if (!search) return;

    const newMember = {
      id: Date.now(),
      name: search,
      role: "Player",
    };

    setMembers([...members, newMember]);
    setSearch("");
    setShowModal(false);
  };

  return (
    <div className="max-h-screen bg-[var(--bg-dark)] text-white p-6 flex-1 flex justify-center">
      <div className="w-full max-w-3xl bg-[var(--text-gray)] backdrop-blur-md border border-[var(--card-border)] rounded-2xl p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4">
          Team Members <span className="text-[var(--orange)]">⚡</span>
        </h1>

        {/* Members List */}
        <div className="max-h-[350px] overflow-y-auto no-scrollbar space-y-3 mb-4">
          <AnimatePresence>
            {members.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center bg-[var(--bg-dark)] p-3 rounded-lg border border-gray-700"
              >
                <div>
                  <p>{member.name}</p>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>

                <button
                  onClick={() => removeMember(member.id)}
                  className="text-red-400 hover:text-red-600 transition"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Add Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowModal(true)}
          className="w-64  bg-[var(--orange)] py-2 rounded-lg font-medium"
        >
          + Add Member
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-[var(--bg-dark)] p-6 rounded-xl w-80 border border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-3">Add New Member</h2>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Enter username or UID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 outline-none mb-3"
              />

              {/* Buttons */}
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 rounded-md bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={addMember}
                  className="px-3 py-1 rounded-md bg-[var(--orange)]"
                >
                  Add
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Teams;
