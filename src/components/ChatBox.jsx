import React, { useState } from "react";
import {
  FaComments,
  FaPaperPlane,
  FaTimes,
} from "react-icons/fa";

const ChatBox = () => {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Ask me anything about Kelly and his portfolio.",
    },
  ]);

  /* AI REPLY FUNCTION */

  const generateReply = (message) => {
    const text = message.toLowerCase().trim();

    /* GREETINGS */

    if (
      text.includes("hi") ||
      text.includes("hello") ||
      text.includes("hey")
    ) {
      return `
Hello 👋

Welcome to Kelly Portfolio AI Assistant.

You can ask me about:
• Projects
• Skills
• Services
• Experience
• Contact Information

How can I help you today? 🚀
      `;
    }

    /* ABOUT */

    if (
      text.includes("about") ||
      text.includes("who are you")
    ) {
      return `
Manzi Kelly is a frontend developer and UI/UX designer.

He builds modern responsive websites using:
• React
• Tailwind CSS
• JavaScript

He also develops AI systems and mobile apps.
      `;
    }

    /* SKILLS */

    if (
      text.includes("skills") ||
      text.includes("tech") ||
      text.includes("technology")
    ) {
      return `
Kelly's Skills 🚀

• React
• JavaScript
• Tailwind CSS
• Next.js
• MongoDB
• Express.js
• Python
• PHP
• MySQL
      `;
    }

    /* PROJECTS */

    if (
      text.includes("project") ||
      text.includes("work")
    ) {
      return `
Featured Projects 🚀

• WareNova
Warehouse management platform.

• World Visitors Safari
Tourism and safari booking website.

• Autiva Tech
Modern software company website.
      `;
    }

    /* SERVICES */

    if (
      text.includes("service") ||
      text.includes("what do you do")
    ) {
      return `
Services Kelly Provides 🚀

• Frontend Development
• UI/UX Design
• Responsive Websites
• AI Solutions
• Mobile App Development
      `;
    }

    /* CONTACT */

    if (
      text.includes("contact") ||
      text.includes("github") ||
      text.includes("email")
    ) {
      return `
Contact Information 📩

GitHub:
https://github.com/manzi-kelly

Email:
manzikelly@example.com
      `;
    }

    /* EXPERIENCE */

    if (
      text.includes("experience") ||
      text.includes("frontend")
    ) {
      return `
Kelly has experience building clean, modern and responsive web applications with React and modern frontend technologies.
      `;
    }

    /* DEFAULT */

    return `
Sorry 😅

Please ask me only about:
• Portfolio
• Projects
• Skills
• Services
• Experience
• Contact Information
      `;
  };

  /* SEND MESSAGE */

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const userText = message;

    setMessage("");

    setLoading(true);

    setTimeout(() => {
      const reply = generateReply(userText);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);

      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* FLOAT BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-indigo-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {open ? (
          <FaTimes size={22} />
        ) : (
          <FaComments size={24} />
        )}
      </button>

      {/* CHAT BOX */}

      {open && (
        <div className="fixed bottom-28 right-6 w-[360px] h-[520px] bg-[#0B1120] border border-white/10 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col">

          {/* HEADER */}

          <div className="bg-indigo-600 px-6 py-4">
            <h2 className="text-white font-bold text-lg">
              Kelly AI Assistant
            </h2>

            <p className="text-indigo-100 text-sm">
              Ask about portfolio, skills & projects
            </p>
          </div>

          {/* MESSAGES */}

          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.sender === "user"
                    ? "ml-auto bg-indigo-600 text-white"
                    : "bg-white/10 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-white/10 text-gray-300 px-4 py-3 rounded-2xl text-sm w-fit">
                Typing...
              </div>
            )}

          </div>

          {/* INPUT */}

          <div className="p-4 border-t border-white/10 flex items-center gap-3">

            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 outline-none"
            />

            <button
              onClick={sendMessage}
              className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
            >
              <FaPaperPlane />
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;