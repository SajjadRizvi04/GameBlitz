import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialMessages = [
  { id: 1, name: "Pritam", text: "Welcome to the team chat! 🏆", time: "10:00 AM", self: false },
  { id: 2, name: "Rahul", text: "Let's go Warriors! Ready for Friday's match 💪", time: "10:02 AM", self: false },
  { id: 3, name: "You", text: "Can't wait! What time is warm-up?", time: "10:04 AM", self: true },
  { id: 4, name: "Pritam", text: "4:30 PM sharp. Don't be late 😤", time: "10:05 AM", self: false },
];

const avatarColors = [
  "bg-orange-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-emerald-500",
  "bg-pink-500",
  "bg-yellow-500",
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + hash * 31;
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "You",
        text: input.trim(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        self: true,
      },
    ]);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full bg-gray-900 text-white">

      {/* Header */}
      <div className="px-4 sm:px-6 md:px-10 pt-5 pb-4 border-b border-gray-700/60 flex items-center gap-3">
        <div className="flex -space-x-2">
          {["P", "R", "A"].map((l, i) => (
            <div
              key={i}
              className={`w-7 h-7 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-bold ${avatarColors[i]}`}
            >
              {l}
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-bold text-base leading-tight">
            Team Chat <span className="text-orange-400">⚡</span>
          </h1>
          <p className="text-xs text-gray-400">Warriors FC • 11 members</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-10 py-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg) =>
            msg.self ? (
              /* Self message — right aligned */
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex justify-end items-end gap-2"
              >
                <div className="max-w-[75%] sm:max-w-[60%] md:max-w-[50%]">
                  <div className="bg-orange-400 text-white px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed shadow-md shadow-orange-900/20">
                    {msg.text}
                  </div>
                  <p className="text-[10px] text-gray-500 text-right mt-1 pr-1">{msg.time}</p>
                </div>
              </motion.div>
            ) : (
              /* Other message — left aligned */
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="flex items-end gap-2"
              >
                <div
                  className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white ${getAvatarColor(msg.name)}`}
                >
                  {getInitials(msg.name)}
                </div>
                <div className="max-w-[75%] sm:max-w-[60%] md:max-w-[50%]">
                  <div className="bg-gray-800 border border-gray-700 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm leading-relaxed">
                    {msg.text}
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1 ml-1">{msg.time}</p>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="px-4 sm:px-6 md:px-10 pb-5 pt-3 border-t border-gray-700/60">
        <div className="flex gap-2 items-center bg-gray-800 border border-gray-700 rounded-2xl px-4 py-2 focus-within:border-orange-400/50 transition-colors duration-200">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500 py-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-8 h-8 flex items-center justify-center bg-orange-400 rounded-xl disabled:opacity-30 transition-opacity flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth={2.5}>
              <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>

    </div>
  );
}