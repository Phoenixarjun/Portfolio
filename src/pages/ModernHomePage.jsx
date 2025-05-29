import { useState } from "react";
import Navbar from "../components/General/Navbar";
import SkillSection from "../layouts/ModernHomePage/SkillSection";
import EAndESection from "../layouts/ModernHomePage/EAndESection"; 
import MyServiceSection from "../layouts/ModernHomePage/MyServiceSection";

const ModernHomePage = ({ toggleOpen, handleToggle }) => {
  return (
    <div className="min-h-screen">
      <Navbar isToggle={true} toggleOpen={toggleOpen} handleToggle={handleToggle} />
      
        {/* Regular vertical scroll section */}
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] relative z-20 bg-white text-black">
    <h1 className="text-4xl font-bold mb-4">Welcome to the Modern Home Page</h1>
    <p className="text-lg text-gray-700">This is a simple modern home page layout.</p>
  </div>

{toggleOpen &&  <MyServiceSection />}

  <EAndESection />
      <SkillSection />
    </div>
  );
};

export default ModernHomePage;