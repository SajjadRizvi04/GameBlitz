import React from "react";
import { motion } from "framer-motion";

function Profile() {
  const team = {
    name: "Warriors",
    uid: "TEAM-92831",
    gamesPlayed: 20,
    wins: 14,
    members: [
      { name: "Pritam", role: "Captain" },
      { name: "Rahul", role: "Striker" },
      { name: "Aman", role: "Defender" },
      { name: "Karan", role: "Goalkeeper" },
      { name: "Rohit", role: "Midfielder" },
      { name: "Arjun", role: "Defender" },
      { name: "Vikram", role: "Winger" },
      { name: "Sahil", role: "Striker" },
      { name: "Deepak", role: "Midfielder" },
      { name: "Manish", role: "Defender" },
      { name: "Ajay", role: "Support" },
    ],
  };

  const winRate = ((team.wins / team.gamesPlayed) * 100).toFixed(1);

  return (//bg-[var(--bg-dark)] text-[var(--text-white)]
    <div className="h-[calc(100vh-80px)]   flex-1 flex justify-center items-center p-6 ">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[var(--bg-dark)] w-full h-120 max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-6"
      >
        {/* Team Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-wide text-light">
            {team.name} <span className="text-[var(--orange)]"></span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">UID: {team.uid}</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Games", value: team.gamesPlayed },
            { label: "Wins", value: team.wins },
            { label: "Win Rate", value: `${winRate}%` },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--bg-dark)] border border-gray-700 p-4 rounded-xl text-center shadow-lg"
            >
              <h2 className="text-sm text-gray-400">{stat.label}</h2>
              <p className="text-2xl font-bold mt-1 text-[var(--orange)]">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Members Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Team Members</h2>

          <div className="max-h-[200px] overflow-y-auto no-scrollbar space-y-3">
            {team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex w-200 items-center text-[var(--text-white)] justify-between bg-[var(--bg-dark)] border border-gray-700 p-4 rounded-lg shadow"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--orange)] flex items-center justify-center font-bold">
                    {member.name[0]}
                  </div>
                  <span>{member.name}</span>
                </div>

                {/* Role */}
                <span className="text-[var(--orange)] text-sm font-medium">
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Profile;
