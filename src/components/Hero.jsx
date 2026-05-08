import React, { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';

const Hero = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleHireMe = () => {
    const section = document.getElementById('contact');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300">

        {/* PROGRAMMING BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="code-bg text-green-500 dark:text-green-400 text-sm opacity-10 dark:opacity-20"></div>
        </div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

        {/* CONTENT */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">

          {/* TEXT */}
          <div
            className={`md:w-1/2 transition-all duration-1000 ${
              loaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                Manzi Kelly
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Frontend Developer
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              I create modern, animated and responsive web applications
              that deliver real user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleHireMe}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1"
              >
                Hire Me
              </button>

              <button
                onClick={() => setShowProjects(true)}
                className="border border-indigo-500 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                View Work
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className={`md:w-1/2 flex justify-center mt-12 md:mt-0 transition-all duration-1000 delay-200 ${
              loaded
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
          >
            <div className="relative group">

              {/* ROTATING RING */}
              <div className="absolute inset-0 rounded-full border-4 border-indigo-500 animate-spin-slow opacity-30"></div>

              {/* IMAGE */}
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl animate-float relative bg-white dark:bg-[#0f172a]">

                <img
                  src="manz.png"
                  alt="Manzi Kelly"
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%]">
                  <div className="bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg flex items-center space-x-2 border border-white/20">

                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      👨‍💻
                    </span>

                    <input
                      type="text"
                      value="Frontend Developer"
                      readOnly
                      className="bg-transparent text-gray-800 dark:text-white text-sm font-medium outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">

          <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            Scroll
          </span>

          <div className="w-5 h-9 border border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {showProjects && (
        <ProjectModal onClose={() => setShowProjects(false)} />
      )}
    </>
  );
};

export default Hero;