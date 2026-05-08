import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
} from "react-icons/fa";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Laurence M.",
      role: "Doctor",
      review:
        "Exceptional frontend developer with incredible attention to detail. The final product exceeded expectations and improved our online presence significantly.",
    },
    {
      id: 2,
      name: "Vicky Mugisha",
      role: "Business Owner",
      review:
        "Professional, creative, and highly skilled. The UI/UX improvements transformed our platform into a modern experience users truly enjoy.",
    },
    {
      id: 3,
      name: "Samuel Ishimwe",
      role: "Project Manager",
      review:
        "Very reliable developer who delivers quality work on time. Communication was smooth and the design implementation was flawless.",
    },
    {
      id: 4,
      name: "Brainy Nshuti",
      role: "Entrepreneur",
      review:
        "Outstanding work ethic and modern development skills. Performance optimization alone made a huge difference for our users.",
    },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-[#050816] overflow-hidden transition-colors duration-300"
    >
      {/* HEADER */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 transition-colors duration-300">
          What Clients Say
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed transition-colors duration-300">
          Real experiences from people who trusted my work and
          collaborated with me on modern digital projects.
        </p>
      </div>

      {/* TESTIMONIAL SLIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

            {/* BIG QUOTE */}
            <FaQuoteRight className="text-[120px] text-indigo-50 dark:text-indigo-500/10 absolute -top-10 left-0 z-0 transition-colors duration-300" />

            <div className="relative z-10">
              {/* STARS */}
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400 text-lg"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-2xl leading-relaxed text-gray-800 dark:text-gray-200 font-light transition-colors duration-300">
                "{testimonials[current].review}"
              </p>

              {/* USER */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {testimonials[current].name}
                </h3>

                <p className="text-indigo-600 mt-1">
                  {testimonials[current].role}
                </p>
              </div>

              {/* CONTROLS */}
              <div className="flex items-center gap-4 mt-12">

                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-white flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition duration-300"
                >
                  <FaArrowLeft />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-white flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition duration-300"
                >
                  <FaArrowRight />
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* BACKGROUND GLOW */}
            <div className="absolute w-72 h-72 bg-indigo-100 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-40 transition-colors duration-300"></div>

            {/* PROFILE CARD */}
            <div className="relative z-10">

              <div className="w-[320px] h-[420px] rounded-[40px] bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 shadow-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">

                {/* AVATAR */}
                <div className="w-44 h-44 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">

                  <span className="text-7xl font-bold text-white">
                    {testimonials[current].name.charAt(0)}
                  </span>

                </div>

                {/* NAME */}
                <h3 className="mt-8 text-3xl font-bold text-white text-center px-6">
                  {testimonials[current].name}
                </h3>

                {/* ROLE */}
                <p className="text-indigo-100 text-lg mt-3">
                  {testimonials[current].role}
                </p>

                {/* STARS */}
                <div className="flex items-center gap-2 mt-6">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-400"
                    />
                  ))}
                </div>

              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#0B1120] dark:border dark:border-white/10 shadow-xl rounded-2xl px-6 py-4 transition-colors duration-300">
                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {testimonials[current].name}
                    </h4>

                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      Verified Client
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-10 h-3 bg-indigo-600"
                  : "w-3 h-3 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;