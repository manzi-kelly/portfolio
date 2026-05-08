import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";

// KEEP ONLY ONE SERVICES COMPONENT
import ServicesGrid from "../components/ServicesGrid";

import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import ChatWidget from "../components/ChatWidget";
import ChatBox from "../components/ChatBox";

const HomePage = () => {
  return (
    <main className="bg-white dark:bg-[#050816] transition-all duration-300">
      <ChatWidget />
      <ChatBox />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <ServicesGrid />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* CONTACT SECTION */}
      <Contact />

    </main>
  );
};

export default HomePage;