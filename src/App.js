// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
  import { Toaster } from "react-hot-toast";

// Pages
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import ProjectsPage from "./Pages/Projects/";
import ProjectDetail from "./Pages/Projects/[slug]";
import Education from "./Pages/Education";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <MainLayout>
              <ProjectDetail />
            </MainLayout>
          }
        />
        <Route
          path="/skills"
          element={
            <MainLayout>
              <Skills />
            </MainLayout>
          }
        />
        <Route
          path="/experience"
          element={
            <MainLayout>
              <Experience />
            </MainLayout>
          }
        />
      <Route
        path="/education"
        element={
          <MainLayout>
            <Education />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <ContactPage />
          </MainLayout>
        }
      />
      </Routes>
        
    </Router>
  );
}

export default App;
