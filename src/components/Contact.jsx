import React, { useState } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";

import {
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiX,
  SiWhatsapp,
} from "react-icons/si";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [emailFormData, setEmailFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // EMAILJS CONFIG
  const EMAILJS_CONFIG = {
    serviceId: "service_spgggys",
    templateId: "template_bxkzpjl",
    publicKey: "4DSArzguZAGR7SHOG",
  };

  // HANDLE INPUT
  const handleEmailChange = (e) => {
    const { name, value } = e.target;

    setEmailFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  // VALIDATE EMAIL
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // SUBMIT
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    if (
      !emailFormData.name ||
      !emailFormData.email ||
      !emailFormData.message
    ) {
      setError("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(emailFormData.email)) {
      setError("Please enter a valid email.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: emailFormData.name,
          from_email: emailFormData.email,
          message: emailFormData.message,
          to_email: "manzikelly07@gmail.com",
        },
        EMAILJS_CONFIG.publicKey
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);

        setEmailFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 4000);
    } catch (err) {
      console.log(err);

      setError("Failed to send message.");
      setIsSubmitting(false);
    }
  };

  // CONTACT ITEMS
  const contactCards = [
    {
      title: "Email",
      value: "manzikelly07@gmail.com",
      icon: <FaEnvelope />,
      action: () =>
        window.open("mailto:manzikelly07@gmail.com"),
    },

    {
      title: "WhatsApp",
      value: "+250 780 285 096",
      icon: <SiWhatsapp />,
      action: () =>
        window.open("https://wa.me/250780285096", "_blank"),
    },

    {
      title: "Location",
      value: "Kigali, Rwanda",
      icon: <FaMapMarkerAlt />,
    },
  ];

  // SOCIALS
  const socialLinks = [
    {
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/manzi-kelly-22b31a304/",
    },

    {
      icon: <SiGithub />,
      link: "https://github.com/manzi-kelly",
    },

    {
      icon: <SiInstagram />,
      link: "https://www.instagram.com/manzi_._kelly/",
    },

    {
      icon: <SiX />,
      link: "https://x.com/manzikelly7",
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 bg-white dark:bg-[#050816] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* TOP */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>

            <span className="uppercase tracking-[3px] text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Contact
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Let’s Build
            <span className="block text-indigo-600 dark:text-indigo-400">
              Something Great
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mt-7">
            Have a project idea or business opportunity?
            Let’s create modern and premium digital experiences together.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-7">
            {/* CONTACT ITEMS */}
            {contactCards.map((item, index) => (
              <div
                key={index}
                onClick={item.action}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl p-8 hover:border-indigo-500/40 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition duration-500">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* SOCIALS */}
            <div className="rounded-[30px] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Follow Me
              </h3>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 flex items-center justify-center text-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden rounded-[34px] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 lg:p-10 backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                Send Message
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
                I usually reply within a few hours.
              </p>

              <form
                onSubmit={handleEmailSubmit}
                className="space-y-6"
              >
                {/* NAME */}
                <div>
                  <label className="block mb-3 font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>

                  <div className="relative">
                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      value={emailFormData.name}
                      onChange={handleEmailChange}
                      placeholder="Your full name"
                      className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-indigo-600 transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-3 font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>

                  <div className="relative">
                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={emailFormData.email}
                      onChange={handleEmailChange}
                      placeholder="example@gmail.com"
                      className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-indigo-600 transition-all"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block mb-3 font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={emailFormData.message}
                    onChange={handleEmailChange}
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0B1120] text-gray-900 dark:text-white placeholder:text-gray-400 outline-none resize-none focus:border-indigo-600 transition-all"
                  ></textarea>
                </div>

                {/* ERROR */}
                {error && (
                  <div className="flex items-center gap-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 px-5 py-4 rounded-2xl">
                    <FaExclamationTriangle />
                    {error}
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* FOOTER */}
              <div className="flex items-center gap-3 mt-8 text-sm text-gray-500 dark:text-gray-400">
                <FaClock className="text-indigo-600 dark:text-indigo-400" />

                Available for freelance & collaborations
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-5">
          <div className="w-full max-w-md rounded-[34px] bg-white dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 p-10 text-center shadow-2xl">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center mx-auto mb-7">
              <FaCheckCircle className="text-5xl text-green-500" />
            </div>

            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Message Sent
            </h3>

            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Thank you for contacting me.
              I’ll reply as soon as possible.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;