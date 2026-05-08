// components/ProjectModal.js

import React from "react";

const ProjectModal = ({ projects = [], onClose, onProjectClick }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 transition-all duration-300"
    >
      {/* MODAL */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B1120] shadow-2xl transition-all duration-500">

        {/* HEADER */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-xl">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Projects
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Explore live platforms and upcoming ideas
            </p>
          </div>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-2xl bg-gray-100 dark:bg-white/10 hover:bg-red-500 hover:text-white text-gray-700 dark:text-white flex items-center justify-center transition-all duration-300"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="overflow-y-auto p-6 lg:p-8">

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 gap-7">

            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onProjectClick(project)}
                className={`group rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                  project.status === "coming-soon"
                    ? "border-yellow-400/30 bg-yellow-50 dark:bg-yellow-500/5"
                    : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
                }`}
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90"></div>

                  {/* STATUS */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${
                        project.status === "live"
                          ? "bg-green-500/20 text-green-200 border-green-400/20"
                          : "bg-yellow-500/20 text-yellow-100 border-yellow-300/20"
                      }`}
                    >
                      {project.status === "live"
                        ? "LIVE PROJECT"
                        : "COMING SOON"}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.title}
                    </h3>

                    <p className="text-gray-200 text-sm">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-6">

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="flex items-center justify-between">

                    <button
                      className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
                        project.status === "live"
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105"
                          : "bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {project.status === "live"
                        ? "Visit Project →"
                        : "Launching Soon"}
                    </button>

                    {project.status === "coming-soon" && (
                      <span className="text-sm text-yellow-600 dark:text-yellow-300">
                        🚀 Stay tuned
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER CTA */}
          <div className="mt-10 rounded-3xl border border-indigo-200 dark:border-indigo-500/20 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 p-8">

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Need a Custom Website?
                </h4>

                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                  I design and develop premium modern websites,
                  business platforms, dashboards, and responsive
                  web applications with high performance UI/UX.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://github.com/manzi-kelly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-all duration-300"
                >
                  View GitHub
                </a>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-white/10 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;