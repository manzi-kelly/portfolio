import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  /* GLOBAL THEME */

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  /* APPLY THEME TO WHOLE PROJECT */

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (darkMode) {
      root.classList.add("dark");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* NAVIGATION */

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/#about" },
    { id: "services", label: "Services", path: "/#services" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "testimonials", label: "Testimonials", path: "/#testimonials" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/projects")
      return location.pathname === "/projects";

    return location.hash === path.replace("/", "");
  };

  const handleNavClick = (e, path) => {
    setMenuOpen(false);

    if (path === "/" || path === "/projects") return;

    if (path.includes("#") && location.pathname === "/") {
      e.preventDefault();

      const sectionId = path.split("#")[1];

      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-[#050816]/70 backdrop-blur-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[84px] flex items-center justify-between">
          
          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-sm">
                  MK
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white transition duration-300">
                Manzi Kelly
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                Frontend Developer
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-2 bg-gray-100/70 dark:bg-white/5 backdrop-blur-xl px-3 py-2 rounded-full border border-gray-200 dark:border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) =>
                  handleNavClick(e, item.path)
                }
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">
            
            {/* PREMIUM THEME TOGGLE */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-[74px] h-[40px] rounded-full transition-all duration-500 flex items-center px-1 overflow-hidden ${
                darkMode
                  ? "bg-indigo-600 shadow-lg shadow-indigo-500/30"
                  : "bg-gray-200"
              }`}
            >
              {/* BACKGROUND GLOW */}

              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  darkMode
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 opacity-100"
                    : "bg-white opacity-0"
                }`}
              ></div>

              {/* TOGGLE BALL */}

              <div
                className={`relative z-10 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-500 ${
                  darkMode
                    ? "translate-x-[34px]"
                    : "translate-x-0"
                }`}
              >
                {darkMode ? (
                  <FiMoon className="text-indigo-600 text-[15px]" />
                ) : (
                  <FiSun className="text-yellow-500 text-[15px]" />
                )}
              </div>
            </button>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-11 h-11 rounded-2xl bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white transition-all duration-300"
            >
              {menuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible bg-black/50 backdrop-blur-sm"
            : "opacity-0 invisible"
        }`}
      >
        {/* SIDEBAR */}

        <div
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white dark:bg-[#081120] border-l border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-500 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="p-8 h-full flex flex-col">
            
            {/* TOP */}

            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Navigation
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Explore portfolio
                </p>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-white"
              >
                <FiX />
              </button>
            </div>

            {/* NAV LINKS */}

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={(e) =>
                    handleNavClick(e, item.path)
                  }
                  className={`px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* FOOTER */}

            <div className="mt-auto pt-10">
              <div className="p-5 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Switch between dark and light mode for
                  the entire portfolio experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;