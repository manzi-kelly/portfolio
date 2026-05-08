// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import ServicesGrid from "./components/ServicesGrid";

// LAYOUT COMPONENT
const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* PROJECTS PAGE */}
        <Route
          path="/projects"
          element={
            <Layout>
              <div className="space-y-24">
                <ProjectsPage />
              </div>
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;