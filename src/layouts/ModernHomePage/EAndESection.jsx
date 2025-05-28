// src/layouts/ModernHomePage/EAndESection.jsx
import React, { useRef, useEffect } from "react";

const layoutRight = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
}) => {
  return (
    <div className="grid grid-cols-[3fr_2fr] grid-rows-2 min-h-[100vh] bg-black text-white p-20">
      <div className="relative row-start-1 col-start-1 flex items-end justify-center">
        <img src={img} alt={cardTitle} className="w-full" />
        <div className="absolute top-20 -right-28 -rotate-90">
          <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
            <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="row-start-2 col-start-2 flex items-start p-5">
        <div>
          <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
          <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
          <p className="text-base text-white/80">{cardDetailedText}</p>
        </div>
      </div>
      <div className="row-start-1 col-start-2 flex flex-col items-end justify-start gap-2 -translate-x-48 translate-y-10">
        <h1 className="text-4xl font-bold">{number}</h1>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

const layoutLeft = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
}) => {
  return (
    <div className="grid grid-cols-[2fr_3fr] grid-rows-2 min-h-[100vh] bg-black text-white p-20">
      <div className="row-start-1 col-start-1 flex flex-col items-start justify-start gap-2 translate-x-48 translate-y-10">
        <h1 className="text-4xl font-bold">{number}</h1>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="relative row-start-1 col-start-2 flex items-end justify-center">
        <img src={img} alt={cardTitle} className="w-full" />
        <div className="absolute top-20 -left-28 rotate-90">
          <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
            <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="row-start-2 col-start-1 flex items-start p-5">
        <div>
          <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
          <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
          <p className="text-base text-white/80">{cardDetailedText}</p>
        </div>
      </div>
    </div>
  );
};

const layoutTop = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
}) => {
  return (
    <div className="grid grid-cols-[3fr_2fr] grid-rows-2 min-h-[100vh] bg-black text-white p-20">
      <div className="row-start-1 col-start-1 flex flex-col items-center justify-center gap-2 translate-x-48 translate-y-10">
        <h1 className="text-4xl font-bold">{number}</h1>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
      <div className="relative row-start-2 col-start-1 flex items-end justify-center">
        <img src={img} alt={cardTitle} className="w-full" />
        <div className="absolute -top-56 rotate-180">
          <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
            <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="row-start-2 col-start-2 flex items-start p-5">
        <div>
          <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
          <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
          <p className="text-base text-white/80">{cardDetailedText}</p>
        </div>
      </div>
    </div>
  );
};

const layoutBottom = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
}) => {
  return (
    <div className="grid grid-cols-[2fr_3fr] grid-rows-2 min-h-[100vh] bg-black text-white p-20">
      <div className="relative row-start-1 col-start-2 flex items-end justify-center">
        <img src={img} alt={cardTitle} className="w-full" />
        <div className="absolute -bottom-56">
          <div className="relative flex items-center justify-start w-[2px] h-[30vh] ">
            <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="row-start-1 col-start-1 flex items-end px-3">
        <div>
          <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
          <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
          <p className="text-base text-white/80">{cardDetailedText}</p>
        </div>
      </div>
      <div className="row-start-2 col-start-2 flex flex-col items-end justify-center gap-2 -translate-x-38 translate-y-10">
        <h1 className="text-4xl font-bold">{number}</h1>
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

const EAndESection = () => {
  const scrollTargetRef = useRef(null);
  const containerRef = useRef(null);

  const education = [
    {
      number: "01",
      title: "2021 - 2025",
      cardTitle: "Bachelor in Technology",
      cardSubtitle: "Sri Sairam Institute of Technology | Information Technology",
      cardDetailedText:
        "Developed AI-powered sign language translator as final year project, gaining hands-on expertise in React.js, Node.js, and cloud databases. Awarded for innovation in tech competitions and project showcases, demonstrating strong technical and problem-solving skills.",
      layout: layoutRight,
      img: "./images/Sairam.jpg",
    },
    {
      number: "02",
      title: "2023 - Present",
      cardTitle: "CCBP 4.0 Academy",
      cardSubtitle: "Nxtwave Academy | Full Stack Development Program",
      cardDetailedText:
        "Completed 20+ real-world web applications using React, Tailwind, and Node.js, mastering API integration and dynamic routing. Achieved 300+ problem-solving milestones across full stack tech stacks, building production-ready applications with modern development practices.",
      layout: layoutLeft,
      img: "./images/Nxtwave.png",
    },
    {
      number: "03",
      title: "2024 - Present",
      cardTitle: "CCBP 4.0 Academy",
      cardSubtitle: "Nxtwave Academy | Data Science and Machine Learning Program",
      cardDetailedText:
        "Currently learning advanced machine learning models and data visualization techniques while building predictive analytics projects focused on real-world impact. Sharpening Python, TensorFlow, and AI model deployment skills to complement full stack development expertise.",
      layout: layoutRight,
      img: "./images/Nxtwave.png",
    },
  ];

  const experience = [
    {
      number: "01",
      title: "Feb 2024 - Apr 2024",
      cardTitle: "Software Intern",
      cardSubtitle: "Genik Technologies Pvt Ltd | Full Stack Developer",
      cardDetailedText:
        "Built ReArticle, a groundbreaking academic writing platform that converts documents to LaTeX, featuring React.js frontend with Firebase backend. Designed end-to-end systems and collaborated with cross-functional teams to deliver production-ready applications following agile methodologies.",
      layout: layoutTop,
      img: "./images/Genik.png",
    },
    {
      number: "02",
      title: "Jul 2023 - Sep 2023",
      cardTitle: "Frontend Developer",
      cardSubtitle: "Agsaimo Organic Solutions Pvt Ltd",
      cardDetailedText:
        "Developed and optimized customer-facing web portals for organic products, implementing responsive designs that boosted UX/UI engagement. Integrated Firebase authentication and dynamic content management while enhancing SEO performance across all digital platforms.",
      layout: layoutBottom,
      img: "./images/Agsaimo.png",
    },
    {
      number: "03",
      title: "April 2025 - May 2025",
      cardTitle: "AI Intern",
      cardSubtitle: "Edunet Foundation | AI Developer",
      cardDetailedText:
        "Mastered 15+ Microsoft-certified courses on AI, ML, and Data Science fundamentals while building predictive models using Scikit-learn. Gained hands-on experience with Copilot Hub to accelerate model development workflows and evaluated real-world datasets for practical applications.",
      layout: layoutTop,
      img: "./images/Edunet.png",
    },
  ];

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      
      <div ref={scrollTargetRef} className="scrollTarget relative z-10">
        <h1 className="text-3xl font-bold text-white text-center py-10 px-20">
          Education
        </h1>
        {education.map((item, index) => (
          <div key={`edu-${index}`}>
            <item.layout {...item} />
          </div>
        ))}
        <h1 className="text-3xl font-bold text-white text-center py-10 px-20">
          Experience
        </h1>
        {experience.map((item, index) => (
          <div key={`exp-${index}`}>
            <item.layout {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EAndESection;
