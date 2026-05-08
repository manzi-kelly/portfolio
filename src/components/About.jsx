import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleStartProject = () => {
    setShowModal(true);

    setTimeout(() => {
      window.open('https://github.com/manzi-kelly', '_blank');
    }, 1500);
  };

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#020617] text-gray-800 dark:text-white relative transition-colors duration-300"
    >

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-2xl text-center transition-colors duration-300">

            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Opening GitHub...
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              Let’s collaborate 🚀
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            I build clean, modern and user-friendly web experiences.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <div>

            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
              Frontend Developer & UI/UX Designer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I specialize in creating responsive and high-performance web
              applications using modern technologies like React and JavaScript.
              My goal is to build interfaces that are simple, fast, and
              enjoyable to use.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I focus on clean code and thoughtful design. Currently, I’m also
              learning backend development to become a full-stack developer.
            </p>

            <button
              onClick={handleStartProject}
              className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline transition"
            >
              <FaGithub className="mr-2" />

              Collaborate With Me
            </button>
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-10">

            {/* SKILLS */}
            <div>

              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Skills
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind",
                  "HTML",
                  "CSS",
                  "TypeScript",
                  "PHP",
                  "koltin",
                  "Next.js",
                  "MongoDB",
                  "MYSQL",
                  "PostgresSQL",
                  "Python",
                  "Express.js",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm px-4 py-2 border border-gray-300 dark:border-white/10 rounded-full bg-white dark:bg-[#0f172a] text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* FOCUS */}
            <div>

              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Focus
              </h4>

              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Frontend Development</li>
                <li>• UI/UX Design</li>
                <li>• Responsive Design</li>
                <li>• Web Performance</li>
              </ul>
            </div>

            {/* CERTIFICATION */}
            <div>

              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Certification
              </h4>

              <button
                onClick={() =>
                  window.open(
                    'https://www.freecodecamp.org/certification/manzikelly/responsive-web-design'
                  )
                }
                className="flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition"
              >
                Responsive Web Design - freeCodeCamp

                <FaExternalLinkAlt className="ml-2 text-sm" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;