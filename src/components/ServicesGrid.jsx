import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaPalette,
  FaBullhorn,
  FaGlobe,
} from "react-icons/fa";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Modern, fast, and responsive websites built with the latest technologies.",
      icon: FaGlobe,
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps that deliver smooth user experience.",
      icon: FaMobileAlt,
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description:
        "Smart AI solutions to automate processes and improve efficiency.",
      icon: FaRobot,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Clean, modern, and user-friendly interface designs that users love.",
      icon: FaPalette,
    },
    {
      id: 5,
      title: "Social Media Management",
      description:
        "Grow your brand with effective social media strategies and content.",
      icon: FaBullhorn,
    },
    {
      id: 6,
      title: "Custom Software",
      description:
        "Tailored software solutions built specifically for your business needs.",
      icon: FaCode,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-[#050816] transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          What I Do
        </h2>

        <div className="w-16 h-[3px] bg-indigo-600 mx-auto my-6"></div>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors duration-300">
          I create modern digital solutions that help businesses grow,
          scale, and stand out in today’s competitive world.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="group flex flex-col items-start space-y-4"
            >
              {/* ICON */}
              <div className="text-indigo-600 text-3xl transition-transform duration-300 group-hover:scale-125">
                <Icon />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition duration-300">
                {service.title}
              </h3>

              {/* LINE */}
              <div className="w-10 h-[2px] bg-gray-300 dark:bg-gray-700 group-hover:w-16 group-hover:bg-indigo-600 transition-all duration-300"></div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm transition-colors duration-300">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;