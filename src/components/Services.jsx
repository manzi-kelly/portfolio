// components/Services.js

import React, { useState } from "react";
import {
  FaCheck,
  FaTimes,
  FaPaperPlane,
  FaArrowRight,
  FaArrowLeft,
  FaLaptopCode,
  FaRocket,
  FaServer,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  const [step, setStep] = useState(1);

  const [selectedPackage, setSelectedPackage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    timeline: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const packages = [
    {
      name: "Starter",
      price: "$299",
      icon: <FaLaptopCode />,
      description:
        "Perfect for startups and personal brands.",
      features: [
        "Landing Page",
        "Responsive Design",
        "Contact Form",
      ],
    },

    {
      name: "Business",
      price: "$699",
      icon: <FaRocket />,
      description:
        "Professional business websites with premium features.",
      features: [
        "Multi Pages",
        "SEO Optimization",
        "CMS Integration",
      ],
    },

    {
      name: "Enterprise",
      price: "$1299",
      icon: <FaServer />,
      description:
        "Advanced scalable web applications & dashboards.",
      features: [
        "Full Web App",
        "Dashboard",
        "Database Integration",
      ],
    },
  ];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = (pkg) => {
    setSelectedPackage(`${pkg.name} - ${pkg.price}`);

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);

    setTimeout(() => {
      setStep(1);

      setSuccess(false);
    }, 300);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_spgggys",
        "template_bxkzpjl",
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          timeline: form.timeline,
          message: `
Package: ${selectedPackage}

Phone: ${form.phone}

Timeline: ${form.timeline}

Message:
${form.message}
          `,
        },
        "4DSArzguZAGR7SHOG"
      );

      setSuccess(true);

      setLoading(false);

      setTimeout(() => {
        closeModal();

        setForm({
          name: "",
          email: "",
          phone: "",
          timeline: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      console.log(err);

      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="services"
        className="py-24 bg-white dark:bg-[#050816] transition-all duration-500"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* HEADER */}

          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>

              <span className="text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide uppercase">
                Services
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Work With Me
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Modern websites, scalable applications and premium
              UI/UX experiences crafted for startups, businesses,
              and enterprises.
            </p>
          </div>

          {/* PACKAGES */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {packages.map((pkg, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden"
              >
                {/* GLOW */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>

                {/* ICON */}

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-all duration-500">
                  {pkg.icon}
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>

                  <p className="text-indigo-600 dark:text-indigo-400 text-3xl font-bold mb-4">
                    {pkg.price}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* FEATURES */}

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center">
                          <FaCheck className="text-green-600 text-xs" />
                        </div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={() => openModal(pkg)}
                    className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    Get Started

                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">

          <div className="w-full max-w-3xl rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B1120] shadow-2xl">

            {/* TOP */}

            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 dark:border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedPackage}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Complete the form to start your project
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-11 h-11 rounded-2xl bg-gray-100 dark:bg-white/10 hover:bg-red-500 hover:text-white text-gray-700 dark:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTimes />
              </button>
            </div>

            {/* SUCCESS */}

            {success ? (
              <div className="p-16 text-center">
                <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center mx-auto mb-8">
                  <FaCheck className="text-4xl text-green-600" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Message Sent Successfully
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I’ll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={sendEmail}>

                {/* STEP INDICATOR */}

                <div className="flex items-center justify-center gap-4 py-6">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 1
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    1
                  </div>

                  <div className="w-20 h-1 rounded-full bg-gray-200 dark:bg-white/10">
                    <div
                      className={`h-full bg-indigo-600 rounded-full transition-all duration-500 ${
                        step === 2 ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= 2
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    2
                  </div>
                </div>

                {/* STEP 1 */}

                {step === 1 && (
                  <div className="p-8 space-y-6">

                    <div className="relative">
                      <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="relative">
                      <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="relative">
                      <FaPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white outline-none focus:border-indigo-600"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 2 */}

                {step === 2 && (
                  <div className="p-8 space-y-6">

                    <div className="relative">
                      <FaClock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

                      <input
                        type="text"
                        name="timeline"
                        placeholder="Project Timeline"
                        onChange={handleChange}
                        className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white outline-none focus:border-indigo-600"
                      />
                    </div>

                    <textarea
                      name="message"
                      required
                      placeholder="Describe your project..."
                      onChange={handleChange}
                      rows="6"
                      className="w-full p-5 rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white outline-none resize-none focus:border-indigo-600"
                    ></textarea>
                  </div>
                )}

                {/* ACTIONS */}

                <div className="flex items-center justify-between gap-4 px-8 py-6 border-t border-gray-200 dark:border-white/10">

                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                    >
                      <FaArrowLeft />

                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 flex items-center gap-3"
                    >
                      Next

                      <FaArrowRight />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`px-8 py-3 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center gap-3 ${
                        loading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {loading ? "Sending..." : "Send Project"}

                      <FaPaperPlane />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;