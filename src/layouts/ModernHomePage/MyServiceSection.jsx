import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MyServiceSection = () => {
  const containerRef = useRef(null);
  const horizontalContainerRef = useRef(null);
  const panelsRef = useRef([]);
  const verticalContentRef = useRef(null);

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
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div
        className="relative group rounded-2xl backdrop-blur-sm z-30 overflow-hidden transition-all duration-500 ease-out shadow-[0_0_30px_rgba(139,92,246,0.8),0_0_60px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.9),0_0_80px_rgba(139,92,246,0.6)]"
        style={{
          flex: '1 1 300px',
          maxWidth: '400px',
          minHeight: '350px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-md border border-white/10 rounded-2xl"></div>
        <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-500 rounded-2xl"></div>

        <div className="relative z-10 h-full p-6 flex flex-col items-center justify-center">
          <div className="w-20 h-20 mb-4 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <img src={service.img} alt={service.name} className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-xl text-center font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-white/70 mb-4 flex-grow text-center">{service.description}</p>
        </div>
        <div className="absolute inset-0 transition-all duration-500 ease-out transform group-hover:scale-105 z-0"></div>
      </div>
    );
  };

  const pages = [
    // Page 1 - Just heading
    () => (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative z-20">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-300 mb-8">Explore the range of services I offer to help your business grow.</p>
      </div>
    ),
    // Page 2 - Heading + 1 card
    () => (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative z-20">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-300 mb-8">Explore the range of services I offer to help your business grow.</p>
        <div className="w-full h-full flex items-center justify-center flex-wrap gap-6">
          <ServiceCard service={services[0]} />
        </div>
      </div>
    ),
    // Page 3 - Heading + 2 cards
    () => (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative z-20">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-300 mb-8">Explore the range of services I offer to help your business grow.</p>
        <div className="w-full h-full flex items-center justify-center flex-wrap gap-6">
          {services.slice(0, 2).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    ),
    // Page 4 - Heading + 3 cards
    () => (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative z-20">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-300 mb-8">Explore the range of services I offer to help your business grow.</p>
        <div className="w-full h-full flex items-center justify-center flex-wrap gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    ),
    // Page 5 - Heading + 4 cards (last horizontal page)
    () => (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative z-20">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-300 mb-8">Explore the range of services I offer to help your business grow.</p>
        <div className="w-full h-full flex items-center justify-center flex-wrap gap-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    )
  ];

  const verticalPage = (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative z-20 pt-20 pb-40">
      <h1 className="text-4xl font-bold mb-4">All Services</h1>
      <p className="text-lg text-gray-300 mb-8">Here's the complete range of services I offer</p>
      <div className="w-full flex flex-wrap justify-center gap-6 px-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set up horizontal scroll
      const horizontalPanels = panelsRef.current;
      const totalHorizontalPanels = horizontalPanels.length;

      // Create horizontal scroll timeline
      const horizontalScroll = gsap.to(horizontalPanels, {
        xPercent: -100 * (totalHorizontalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalContainerRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * (totalHorizontalPanels - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false,
          onLeave: () => {
            // When horizontal scroll ends, show vertical content
            gsap.to(verticalContentRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            });
          },
          onEnterBack: () => {
            // When scrolling back into horizontal section, hide vertical content
            gsap.to(verticalContentRef.current, {
              opacity: 0,
              y: 50,
              duration: 0.8,
              ease: "power3.out"
            });
          }
        }
      });

      // Initially hide vertical content
      gsap.set(verticalContentRef.current, { opacity: 0, y: 50 });

      // Create a dummy ScrollTrigger to prevent conflicts with TubeScrollExperience
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => ScrollTrigger.getAll().forEach(t => {
          if (t.trigger === horizontalContainerRef.current) t.enable();
        }),
        onLeaveBack: () => ScrollTrigger.getAll().forEach(t => {
          if (t.trigger === horizontalContainerRef.current) t.disable();
        })
      });

      return () => {
        horizontalScroll.scrollTrigger?.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden z-20" ref={containerRef}>
      {/* Horizontal Scroll Container */}
      <div
        ref={horizontalContainerRef}
        className="h-screen w-[500vw] flex"
      >
        {pages.map((Page, i) => (
          <div
            key={`panel-${i}`}
            ref={(el) => (panelsRef.current[i] = el)}
            className="w-screen h-screen flex-shrink-0"
          >
            <Page />
          </div>
        ))}
      </div>

      {/* Vertical Scroll Section */}
      <div
        ref={verticalContentRef}
        className="relative w-full opacity-0 translate-y-12"
      >
        {verticalPage}
      </div>
    </div>
  );
};

export default MyServiceSection;