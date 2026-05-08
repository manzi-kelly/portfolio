// pages/ProjectsPage.js

import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

const ProjectsPage = () => {
  const liveProjects = [
    {
      id: 1,
      year: "2026",
      title: "WareNova",
      category: "Business Platform",
      link: "https://warenova.netlify.app/",
      preview: "https://warenova.netlify.app/",
    },

    {
      id: 2,
      year: "2025",
      title: "World Visitors Safari",
      category: "Travel Platform",
      link: "https://worldvisiterssafari.netlify.app/",
      preview: "https://worldvisiterssafari.netlify.app/",
    },

    {
      id: 3,
      year: "2025",
      title: "Autiva Tech",
      category: "Software Company",
      link: "https://autivatech.vercel.app/",
      preview: "https://autivatech.vercel.app/",
    },
  ];

  const upcomingProjects = [
    {
      id: 4,
      title: "Vuduka",
      icon: <FaRocket />,
      description:
        "Smart transportation platform reducing travel costs with intelligent mobility solutions.",
    },

    {
      id: 5,
      title: "Syntra AI",
      icon: <FaBrain />,
      description:
        "AI assistant helping Kinyarwanda speakers interact naturally with AI systems.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#050816] pt-24 pb-24 overflow-hidden transition-colors duration-300">
      {/* HERO */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 mb-10"
        >
          ← Back Home
        </Link>

        <div className="max-w-4xl">
          <span className="uppercase tracking-[4px] text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            Portfolio
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mt-6 leading-[1.05]">
            Premium Digital
            <span className="block text-indigo-600 dark:text-indigo-400">
              Experiences
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg mt-8 leading-relaxed max-w-2xl">
            Explore modern websites, scalable systems, and intelligent digital
            products crafted with premium interfaces and smooth user
            experiences.
          </p>
        </div>
      </div>

      {/* LIVE PROJECTS */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Live Projects
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Real-world platforms currently online
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              Live Preview
            </span>
          </div>
        </div>

        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {liveProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item group"
            >
              {/* PREVIEW */}

              <div className="relative h-[250px] overflow-hidden rounded-[30px] bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
                {/* LOADER */}

                <div className="preview-loader absolute inset-0 z-20 bg-white dark:bg-[#0B1120]">
                  <div className="shimmer absolute inset-0"></div>
                </div>

                {/* WEBSITE */}

                <iframe
                  src={project.preview}
                  title={project.title}
                  loading="eager"
                  className="website-frame"
                ></iframe>
              </div>

              {/* CONTENT */}

              <div className="pt-5 px-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>

                    <span>{project.year}</span>
                  </div>

                  <div className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-[28px] font-bold text-slate-900 dark:text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  {project.category}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* UPCOMING */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 mt-28">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Coming Soon
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Intelligent systems currently in development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-900 to-slate-800 dark:from-[#111827] dark:to-[#050816] p-[1px]"
            >
              <div className="h-full rounded-[30px] bg-slate-900 dark:bg-[#0B1120] p-8">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl mb-6 border border-indigo-500/10">
                  {project.icon}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <span className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-300 text-sm font-semibold border border-yellow-500/20">
                    Coming Soon
                  </span>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 mt-32">
        <div className="relative overflow-hidden rounded-[40px] bg-indigo-600 px-8 py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700"></div>

          <div className="relative z-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Let’s Build Something Amazing
            </h2>

            <p className="text-indigo-100 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Modern websites, intelligent systems, and premium digital
              experiences crafted for performance and scalability.
            </p>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-semibold hover:scale-105 transition-all duration-300"
            >
              Start a Project

              <FaExternalLinkAlt className="text-sm" />
            </Link>
          </div>
        </div>
      </div>

      {/* STYLES */}

      <style>
        {`
          .project-item {
            animation: fadeUp 0.8s ease forwards;
          }

          .website-frame {
            width: 128%;
            height: 1200px;
            border: 0;
            transform: scale(0.78) translateY(0px);
            transform-origin: top left;
            pointer-events: none;
            transition: transform 0.5s ease;
          }

          /* AUTO SCROLL ONLY ON HOVER */

          .project-item:hover .website-frame {
            animation: hoverScroll 8s ease-in-out infinite alternate;
          }

          /* SHIMMER */

          .shimmer {
            background: linear-gradient(
              90deg,
              transparent,
              rgba(99,102,241,0.12),
              transparent
            );

            animation: shimmer 1.6s infinite;
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }

            100% {
              transform: translateX(100%);
            }
          }

          /* HIDE LOADER */

          .preview-loader {
            animation: hideLoader 1s ease forwards;
          }

          @keyframes hideLoader {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              visibility: hidden;
            }
          }

          /* HOVER SCROLL */

          @keyframes hoverScroll {
            0% {
              transform: scale(0.78) translateY(0px);
            }

            100% {
              transform: scale(0.78) translateY(-540px);
            }
          }

          /* ENTRY */

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsPage;