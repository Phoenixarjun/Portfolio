import React, { useRef, useEffect, useState } from "react";
import TubeScrollExperience from "./TubeScrollExperience"; // Ensure this path is correct
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlitchText from "../../components/General/GlitchText"; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const HeadingComponent = ({ text, id }) => {
  const headingRef = useRef(null);
  // const sectionRef = useRef(null); // sectionRef is not used in HeadingComponent

  useEffect(() => {
    if (!headingRef.current) return;

    const animation = gsap.fromTo(headingRef.current,
      {
        scale: 0.8,
        opacity: 0,
        y: 150,
        filter: "blur(5px)"
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: true,
          markers: false,
          id: `${id}-heading`
        }
      }
    );

    return () => {
      animation.kill(); // Kill the GSAP animation itself
      ScrollTrigger.getById(`${id}-heading`)?.kill();
    };
  }, [id]);

  return (
    // Removed sectionRef from here as it's not used within HeadingComponent's direct logic
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden group">
      <div
        ref={headingRef}
        className="relative z-10"
        style={{
          display: 'inline-block',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
      >
        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className="text-6xl md:text-8xl font-bold"
        >
          {text}
        </GlitchText>
      </div>
    </div>
  );
};

const LayoutWrapper = ({ children, id }) => {
  const layoutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!layoutRef.current || !containerRef.current) return; // Check both refs

    const elements = layoutRef.current.querySelectorAll('.layout-element');

    gsap.set(elements, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      filter: "blur(4px)"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Use containerRef as the trigger
        start: "top 75%",
        end: "top 25%",
        scrub: 1,
        markers: false,
        id: `layout-${id}`
      }
    });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out"
    });

    return () => {
      tl.kill(); // Kill the timeline
      ScrollTrigger.getById(`layout-${id}`)?.kill();
    };
  }, [id]);

  return (
    <div ref={containerRef} className="relative"> {/* Attach containerRef here */}
      <div ref={layoutRef} className="layout-container">
        {children}
      </div>
    </div>
  );
};

const layoutRight = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
  id,
}) => {
  return (
    <LayoutWrapper id={`right-${id}`}>
      <div className="grid grid-cols-[3fr_2fr] grid-rows-2 min-h-[100vh] bg-none text-white p-20">
        <div className="relative row-start-1 col-start-1 flex items-end justify-center">
          <img src={img} alt={cardTitle} className="w-full layout-element shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(139,92,246,0.5)]" />
          <div className="absolute top-20 -right-28 -rotate-90 layout-element">
            <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
              <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="row-start-2 col-start-2 flex items-start p-5">
          <div className="text-white z-10 layout-element">
            <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
            <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
            <p className="text-base text-white/80">{cardDetailedText}</p>
          </div>
        </div>
        <div className="row-start-1 col-start-2 flex flex-col items-end justify-start gap-2 -translate-x-48 translate-y-10 layout-element">
          <h1 className="text-4xl font-bold">{number}</h1>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
      </div>
    </LayoutWrapper>
  );
};

const layoutLeft = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
  id
}) => {
  return (
    <LayoutWrapper id={`left-${id}`}>
      <div className="grid grid-cols-[2fr_3fr] grid-rows-2 min-h-[100vh] bg-none text-white p-20">
        <div className="row-start-1 col-start-1 flex flex-col items-start justify-start gap-2 translate-x-48 translate-y-10 layout-element">
          <h1 className="text-4xl font-bold">{number}</h1>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
        <div className="relative row-start-1 col-start-2 flex items-end justify-center">
          <img src={img} alt={cardTitle} className="w-full layout-element shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(139,92,246,0.5)]" />
          <div className="absolute top-20 -left-28 rotate-90 layout-element">
            <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
              <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="row-start-2 col-start-1 flex items-start p-5">
          <div className="text-white z-10 layout-element">
            <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
            <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
            <p className="text-base text-white/80">{cardDetailedText}</p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

const layoutTop = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
  id
}) => {
  return (
    <LayoutWrapper id={`top-${id}`}>
      <div className="grid grid-cols-[3fr_2fr] grid-rows-2 min-h-[100vh] bg-none text-white p-20">
        <div className="row-start-1 col-start-1 flex flex-col items-center justify-center gap-2 translate-x-48 translate-y-10 layout-element">
          <h1 className="text-4xl font-bold">{number}</h1>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
        <div className="relative row-start-2 col-start-1 flex items-end justify-center">
          <img src={img} alt={cardTitle} className="w-full layout-element shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(139,92,246,0.5)]" />
          <div className="absolute -top-56 rotate-180 layout-element">
            <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
              <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="row-start-2 col-start-2 flex items-start p-5">
          <div className="text-white z-10 layout-element">
            <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
            <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
            <p className="text-base text-white/80">{cardDetailedText}</p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

const layoutBottom = ({
  number,
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  img,
  id
}) => {
  return (
    <LayoutWrapper id={`bottom-${id}`}>
      <div className="grid grid-cols-[2fr_3fr] grid-rows-2 min-h-[100vh] bg-none text-white p-20">
        <div className="relative row-start-1 col-start-2 flex items-end justify-center">
          <img src={img} alt={cardTitle} className="w-full layout-element shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(139,92,246,0.5)]" />
          <div className="absolute -bottom-56 layout-element">
            <div className="relative flex items-center justify-start w-[2px] h-[30vh] bg-gray-300">
              <div className="absolute -left-[11px] top-52 w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="row-start-1 col-start-1 flex items-end px-3">
          <div className="text-white z-10 layout-element">
            <h3 className="text-xl font-bold mb-2">{cardTitle}</h3>
            <h4 className="text-lg text-white/70 mb-4">{cardSubtitle}</h4>
            <p className="text-base text-white/80">{cardDetailedText}</p>
          </div>
        </div>
        <div className="row-start-2 col-start-2 flex flex-col items-end justify-center gap-2 -translate-x-38 translate-y-10 layout-element">
          <h1 className="text-4xl font-bold">{number}</h1>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
      </div>
    </LayoutWrapper>
  );
};


const EAndESection = () => {
  const sectionRef = useRef(null); // Ref for the entire EAndESection container
  const [isTubeActive, setIsTubeActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTubeActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this value: 0 (soon as 1px is visible) to 1 (100% visible)
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      observer.disconnect();
    };
  }, []);

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
      id: "edu-1"
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
      id: "edu-2"
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
      id: "edu-3"
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
      id: "exp-1"
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
      id: "exp-2"
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
      id: "exp-3"
    },
  ];

  const EducationContent = () => (
    <div className="space-y-0">
      {education.map((item, index) => (
        <div key={`edu-${index}`}>
          <item.layout {...item} id={`edu-${index}`} />
        </div>
      ))}
    </div>
  );

  const ExperienceContent = () => (
    <div className="space-y-0">
      {experience.map((item, index) => (
        <div key={`exp-${index}`}>
          <item.layout {...item} id={`exp-${index}`} />
        </div>
      ))}
    </div>
  );

  return (
    <div ref={sectionRef} className="relative w-full">
      <TubeScrollExperience isActive={isTubeActive} />
      
      <div className="relative z-10">
        <HeadingComponent text="Education" id="education" />
        <EducationContent />
      </div>
      
      <div className="relative z-10">
        <HeadingComponent text="Experience" id="experience" />
        <ExperienceContent />
      </div>
    </div>
  );
};

export default EAndESection;