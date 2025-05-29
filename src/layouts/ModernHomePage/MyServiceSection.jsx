import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MyServiceSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    let currentIndex = 0; // Start at first panel
    let animating;
    const swipePanels = panelsRef.current;

    // Set initial positions
    gsap.set('.x-100', { xPercent: 100 });
    gsap.set(swipePanels, {
      zIndex: (i) => i,
    });

    let intentObserver = ScrollTrigger.observe({
      type: 'wheel,touch',
      onUp: () => !animating && gotoPanel(currentIndex + 1, true),
      onDown: () => !animating && gotoPanel(currentIndex - 1, false),
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onPress: (self) => {
        ScrollTrigger.isTouch && self.event.preventDefault();
      },
    });
    intentObserver.disable();

    const gotoPanel = (index, isScrollingDown) => {
      animating = true;
      
      // If trying to scroll up from first panel
      if (index === -1 && currentIndex === 0) {
        // Disable observer and allow vertical scroll
        intentObserver.disable();
        animating = false;
        
        // Scroll the page up slightly to trigger vertical scroll
        window.scrollBy(0, -10);
        return;
      }
      
      // If at boundaries
      if ((index === swipePanels.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
        gsap.to({}, {
          duration: 0.01,
          onComplete: () => {
            animating = false;
            isScrollingDown && intentObserver.disable();
          },
        });
        return;
      }

      const target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];

      gsap.to(target, {
        xPercent: isScrollingDown ? 0 : 100,
        duration: 0.75,
        onComplete: () => {
          animating = false;
        },
      });
      currentIndex = index;
    };

    const sectionTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        intentObserver.enable();
        currentIndex = 0; // Reset to first panel when entering
        gsap.set(swipePanels, { xPercent: i => i === 0 ? 0 : 100 });
      },
      onLeave: () => {
        intentObserver.disable();
      },
      onEnterBack: () => {
        intentObserver.enable();
      },
      onLeaveBack: () => {
        intentObserver.disable();
      },
      markers: true // Remove in production
    });

    return () => {
      intentObserver.kill();
      sectionTrigger.kill();
    };
  }, []);

  const services = [
    {
      name: 'Full Stack Web Development',
      description: 'Building complete, responsive, and scalable web applications for your business.',
      img: './logo/webDevelopment.png'
    },
    {
      name: 'Data Analytics & Visualization',
      description: 'Transforming raw data into actionable insights with stunning dashboards and reports.',
      img: './logo/dataAnalysis.png'
    },
    {
      name: 'AI & Machine Learning Solutions',
      description: 'Creating smart AI models that learn, predict, and drive better outcomes.',
      img: './logo/machineLearning.png'
    },
    {
      name: 'Generative AI & Custom Chatbots',
      description: 'Building AI-powered tools, chatbots, and automation tailored to your needs.',
      img: './logo/artificialIntelligence.png'
    },
    {
      name: 'Cloud Deployment & DevOps',
      description: 'Deploying, scaling, and managing apps with Docker, Kubernetes, and cloud platforms.',
      img: './logo/Cloud.png'
    }
  ]


  const ServiceCard = () => {
    return(
      <div className="flex flex-wrap justify-center items-center p-10 gap-6 w-full h-full max-w-screen-xl mx-auto">
    {services.map((service, index) => (
      <div 
        key={index}
        className="relative group rounded-2xl backdrop-blur-sm z-30 overflow-hidden transition-all duration-500 ease-out shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.9),0_0_80px_rgba(139,92,246,0.6)]"
        style={{
          flex: '1 1 300px', // Flex basis of 300px but can grow/shrink
          maxWidth: '400px', // Maximum card width
          minHeight: '350px' // Minimum card height
        }}
      >
        {/* Glass card background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-md border border-white/10 rounded-2xl"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-500 rounded-2xl"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-6 flex flex-col items-center justify-center">
          {/* Image container */}
          <div className="w-20 h-20 mb-4 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <img 
              src={service.img} 
              alt={service.name} 
              className="w-12 h-12 object-contain"
            />
          </div>
          
          {/* Title */}
          <h3 className="text-xl text-center font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {service.name}
          </h3>
          
          {/* Description */}
          <p className="text-white/70 mb-4 flex-grow text-center">
            {service.description}
          </p>
          
        </div>
        
        {/* Hover scale effect */}
        <div className="absolute inset-0 transition-all duration-500 ease-out transform group-hover:scale-105 z-0"></div>
      </div>
    ))}
  </div>
    )
  }

  return (
<div className="relative w-full h-screen overflow-hidden" ref={containerRef}>
      <div ref={sectionRef} className="h-screen w-full">
        {['red', 'purple', 'blue', 'orange'].map((color, i) => (
          <div
            key={color}
            ref={(el) => (panelsRef.current[i] = el)}
            className={`absolute panel bg-${color}-500 text-white w-full h-full text-center text-xl font-bold flex items-center justify-center ${
              i !== 0 ? 'x-100' : ''
            }`}
          >
            {color === 'red'
              ? 'ScrollTrigger.observe() section'
              : `Section ${i + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServiceSection;