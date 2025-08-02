import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = ({ children }) => (
  <div className="bg-[#0f172a] text-white bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
