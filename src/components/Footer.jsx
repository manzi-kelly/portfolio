// components/Footer.js

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/manzi-kelly",
    },

    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/manzi-kelly-22b31a304/",
    },

    {
      icon: <FaInstagram />,
      url: "https://instagram.com/manzi_._kelly/",
    },

    {
      icon: <FaXTwitter />,
      url: "https://x.com/manzikelly7",
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-[#050816] border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* TOP */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* BRAND */}

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-500 flex items-center justify-center shadow-xl shadow-indigo-500/20">
                <span className="text-white text-2xl font-bold">
                  MK
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Manzi Kelly
                </h2>

                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Frontend Developer
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md text-lg">
              Building modern, scalable and premium digital
              experiences with clean UI/UX and high-performance
              technologies.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <div className="inline-flex items-center gap-2 mb-7">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                Navigation
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-4 h-[2px] bg-indigo-600 transition-all duration-300"></span>

                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* SOCIAL */}

          <div className="lg:text-right">
            <div className="inline-flex items-center gap-2 mb-7 lg:justify-end">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                Connect
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
              Let’s create something powerful and beautiful together.
            </p>

            {/* SOCIALS */}

            <div className="flex lg:justify-end gap-4 mb-10">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* BACK TO TOP */}

            <button
              onClick={scrollTop}
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span className="font-medium">
                Back to Top
              </span>

              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>

        {/* BOTTOM */}

        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Autiva Tech. All rights reserved.
          </p>

          <p className="text-gray-400 dark:text-gray-500 text-sm mt-3">
            Designed & Developed by
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold ml-1">
              Autiva Tech
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;