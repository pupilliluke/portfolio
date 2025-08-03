import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollProgress from "../Components/ScrollProgress";

const MainLayout = ({ children }) => (
  <div className="relative min-h-screen bg-slate-900 text-white">
    <ScrollProgress />
    <Navbar />
    <main className="relative">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
