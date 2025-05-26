import { useState } from "react";
import Navbar from "../components/General/Navbar";

const ModernHomePage = ({ toggleOpen, handleToggle }) => {
  return (
    <div className="min-h-screen">
      <Navbar isToggle={true} toggleOpen={toggleOpen} handleToggle={handleToggle} />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Modern Home Page</h1>
        <p className="text-lg text-gray-700">This is a simple modern home page layout.</p>
      </div>
    </div>
  );
};

export default ModernHomePage;