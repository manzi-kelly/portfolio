// components/ChatWidget.jsx

import React, { useState, useRef, useEffect } from "react";
import {
  FaComments,
  FaPaperPlane,
  FaTimes,
  FaRobot,
  FaUser,
  FaCircle,
} from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hello! Welcome to Kelly Portfolio. Ask me about projects, skills, services, React, UI/UX or AI solutions.",
      time: "Now",
    },
  ]);

  /* AUTO SCROLL */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  /* BOT RESPONSES */

  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    /* GREETINGS */

    if (
      msg.includes("hi") ||
      msg.includes("hello") ||
      msg.includes("hey")
    ) {
      return "👋 Hello there! What would you like to know about Kelly? You can ask about projects, frontend development, React, UI/UX or AI systems.";
    }

    /* ABOUT */

    if (
      msg.includes("who are you") ||
      msg.includes("about")
    ) {
      return "I’m Kelly AI Assistant 🤖. I help visitors learn more about Manzi Kelly, his portfolio, projects, skills and services.";
    }

    /* SKILLS */

    if (
      msg.includes("skill") ||
      msg.includes("technology") ||
      msg.includes("stack")
    ) {
      return "🚀 Kelly works with React, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Python and modern UI/UX technologies.";
    }

    /* PROJECTS */

    if (
      msg.includes("project") ||
      msg.includes("work") ||
      msg.includes("portfolio")
    ) {
      return "📂 Kelly has worked on projects like WareNova, World Visitors Safari and Autiva Tech — focused on premium UI, performance and scalability.";
    }

    /* SERVICES */

    if (
      msg.includes("service") ||
      msg.includes("hire") ||
      msg.includes("job")
    ) {
      return "💼 Kelly provides frontend development, UI/UX design, responsive websites, AI integrations and full modern web experiences.";
    }

    /* CONTACT */

    if (
      msg.includes("contact") ||
      msg.includes("email") ||
      msg.includes("reach")
    ) {
      return "📩 You can contact Kelly through the portfolio contact section or GitHub profile for collaborations and projects.";
    }

    /* AI */

    if (
      msg.includes("ai") ||
      msg.includes("machine learning") ||
      msg.includes("assistant")
    ) {
      return "🤖 Kelly is also building AI-powered systems and smart assistants with modern technologies.";
    }

    /* DEFAULT */

    return "⚡ Please ask me about Kelly's portfolio, projects, React development, UI/UX, AI systems or services.";
  };

  /* SEND MESSAGE */

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
      time: "Now",
    };

    setMessages((prev) => [...prev, userMessage]);

    const userText = message;

    setMessage("");

    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotReply(userText),
        time: "Now",
      };

      setMessages((prev) => [...prev, botMessage]);

      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* FLOAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_10px_40px_rgba(99,102,241,0.45)] flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {open ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaComments className="text-2xl" />
        )}

        {/* PING */}

        {!open && (
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>

            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-white"></span>
          </span>
        )}
      </button>

      {/* CHAT BOX */}

      <div
        className={`fixed bottom-28 right-6 z-[999] w-[380px] max-w-[94vw] h-[650px] rounded-[32px] overflow-hidden transition-all duration-500 shadow-[0_20px_80px_rgba(0,0,0,0.45)] border border-white/10 ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95 pointer-events-none"
        }`}
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[#020617] backdrop-blur-2xl"></div>

        {/* HEADER */}

        <div className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              {/* AVATAR */}

              <div className="relative">

                <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-xl">
                  <FaRobot className="text-2xl text-white" />
                </div>

                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white"></div>

              </div>

              {/* INFO */}

              <div>
                <h3 className="text-white font-bold text-xl">
                  Kelly AI
                </h3>

                <div className="flex items-center gap-2 mt-1">
                  <FaCircle className="text-[10px] text-green-400" />

                  <p className="text-indigo-100 text-sm">
                    Online now
                  </p>
                </div>
              </div>
            </div>

            {/* CLOSE */}

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* BODY */}

        <div className="relative z-10 h-[470px] overflow-y-auto px-5 py-6 space-y-5 bg-[#020617]">

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-3 ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {/* BOT AVATAR */}

              {msg.sender === "bot" && (
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaRobot className="text-white text-sm" />
                </div>
              )}

              {/* MESSAGE */}

              <div
                className={`max-w-[78%] rounded-[24px] px-5 py-4 text-sm leading-relaxed shadow-lg ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-md"
                    : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-md backdrop-blur-xl"
                }`}
              >
                <p>{msg.text}</p>

                <span
                  className={`block text-[11px] mt-2 ${
                    msg.sender === "user"
                      ? "text-indigo-100"
                      : "text-gray-500"
                  }`}
                >
                  {msg.time}
                </span>
              </div>

              {/* USER AVATAR */}

              {msg.sender === "user" && (
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <FaUser className="text-gray-300 text-sm" />
                </div>
              )}
            </div>
          ))}

          {/* TYPING */}

          {typing && (
            <div className="flex items-end gap-3">

              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <FaRobot className="text-white text-sm" />
              </div>

              <div className="bg-white/5 border border-white/10 px-5 py-4 rounded-[24px] rounded-bl-md flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"></span>

                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]"></span>

                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.4s]"></span>

              </div>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div>

        {/* INPUT */}

        <div className="relative z-10 p-5 border-t border-white/10 bg-[#020617] backdrop-blur-xl">

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-indigo-500 transition-all duration-300">

            <input
              type="text"
              placeholder="Ask about projects, React, AI..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
            />

            <button
              onClick={handleSend}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaPaperPlane />
            </button>
          </div>

          {/* QUICK TEXT */}

          <div className="flex flex-wrap gap-2 mt-4">

            {[
              "Projects",
              "Skills",
              "Services",
              "React",
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setMessage(item)}
                className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-indigo-500 hover:text-white transition-all duration-300"
              >
                {item}
              </button>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;