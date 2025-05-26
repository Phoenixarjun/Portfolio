import { useEffect, useRef, useState } from 'react';
import ProjectSection from '../layouts/HomePage/ProjectSection';
import Navbar from '../components/General/Navbar';
import EAndESection from '../layouts/HomePage/EAndESection';
import QuoteSection from '../layouts/HomePage/QuoteSection';
import SkillsSection from '../layouts/HomePage/SkillsSection';
import MyServiceLayout from '../layouts/HomePage/MyServiceLayout';
import Footer from '../components/General/Footer';
import HeroSection from '../layouts/HomePage/HeroSection';
import AboutSection from '../layouts/HomePage/AboutSection';
import ContactSection from '../layouts/HomePage/ContactSection';
import BannerSection from '../layouts/HomePage/BannerSection';
import Connect from '../components/HomePage/Connect';
import ModernHomePage from './ModernHomePage';
import PixelTransition from '../components/General/PixelTransition';


const HomePage = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const classicLayoutRef = useRef(null);
  const modernLayoutRef = useRef(null);

  const handleToggle = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <PixelTransition
        firstContent={
          <div ref={classicLayoutRef}>
            <Navbar toggleOpen={toggleOpen} handleToggle={handleToggle} isToggle={true} />
            <BannerSection />
            <HeroSection />
            <AboutSection />
            <MyServiceLayout />
            <EAndESection />
            <QuoteSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            <Footer status={1} />
            <Connect />
          </div>
        }
        secondContent={
          <div ref={modernLayoutRef}>
            <ModernHomePage toggleOpen={toggleOpen} handleToggle={handleToggle} />
          </div>
        }
        gridSize={12}
        pixelColor='#ffffff'
        animationStepDuration={0.4}
        className="w-full min-h-screen"
        isActive={toggleOpen}
        onTransitionComplete={() => setIsTransitioning(false)}
      />
    </>
  );
};

export default HomePage;