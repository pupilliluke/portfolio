import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollProgress from "../Components/ScrollProgress";
import AuroraBackground from "../Components/ui/aurora-background";

const MainLayout = ({ children }) => (
  <div className="relative min-h-screen bg-slate-900 text-white">
    {/* Global aurora background — subtly beautiful, behind every page */}
    <AuroraBackground
      className="fixed inset-0 h-screen pointer-events-none"
      speed={0.8}
      blur={100}
    />

    <div className="relative z-10">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default MainLayout;
