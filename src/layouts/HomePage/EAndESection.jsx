import React from 'react';
import { Chrono } from 'react-chrono';
import * as Tabs from '@radix-ui/react-tabs';
import LabelUnderLine from '../../components/General/LabelUnderLine';

const EAndESection = () => {

  const education = [
    {
      title: "2021 - 2025", 
      cardTitle: "Bachelor in Technology",
      cardSubtitle: "Sri Sairam Institute of Technology | Information Technology",
      cardDetailedText: [
        "Developed AI-powered sign language translator as final year project",
        "Hands-on expertise in React.js, Node.js, and cloud databases",
        "Awarded for innovation in tech competitions and project showcases"
      ]
    },
    {
      title: "2023 - Present", 
      cardTitle: "CCBP 4.0 Academy",
      cardSubtitle: "Nxtwave Academy | Full Stack Development Program",
      cardDetailedText: [
        "Completed 20+ real-world web applications using React, Tailwind, and Node.js",
        "Mastered API integration, dynamic routing, and full-stack application development",
        "Achieved 300+ problem-solving milestones across full stack tech stacks"
      ]
    },
    {
      title: "2024 - Present", 
      cardTitle: "CCBP 4.0 Academy",
      cardSubtitle: "Nxtwave Academy | Data Science and Machine Learning Program",
      cardDetailedText: [
        "Learning advanced machine learning models and data visualization techniques",
        "Building predictive analytics projects focused on real-world impact",
        "Sharpening Python, TensorFlow, and AI model deployment skills"
      ]
    }
  ];
  
  const experience = [
    {
      title: "Feb 2024 - Apr 2024",
      cardTitle: "Software Intern",
      cardSubtitle: "Genik Technologies Pvt Ltd | Full Stack Developer",
      cardDetailedText: [
        "Built ReArticle: A groundbreaking academic writing platform converting docs to LaTeX",
        "Designed end-to-end systems with React.js frontend and Firebase backend",
        "Collaborated with cross-functional teams, delivering production-ready applications"
      ]
    },
    {
      title: "Jul 2023 - Sep 2023",
      cardTitle: "Frontend Developer",
      cardSubtitle: "Agsaimo Organic Solutions Pvt Ltd",
      cardDetailedText: [
        "Developed and optimized customer-facing web portals for organic products",
        "Boosted UX/UI engagement through responsive designs and SEO enhancements",
        "Integrated Firebase authentication and dynamic content management"
      ]
    },
    {
      title: "April 2025 - May 2025", 
      cardTitle: "AI Intern",
      cardSubtitle: "Edunet Foundation | AI Developer",
      cardDetailedText: [
        "Mastered 15+ Microsoft-certified courses on AI, ML, and Data Science fundamentals",
        "Built predictive models using Scikit-learn and evaluated real-world datasets",
        "Hands-on experience with Copilot Hub, accelerating model development workflows"
      ]
    }
  ];
  

  const customTheme = {
    primary: '#00ADB5',
    secondary: 'white',
    cardBgColor: 'transparent',
    cardForeColor: 'white',
    titleColor: 'white',
    titleColorActive: 'black',
    timelineContentColor: 'black',
    timelinePointBackground: 'white',
  };

  return (
    <div className="w-full min-h-[150vh] bg-primary text-white py-16 px-4 md: h-full sm:px-8 lg:px-8">
      <div className="mx-auto px-12">
        <div className="text-center mb-12">
          <LabelUnderLine name="Education & Experience" status={1} />
        </div>

        <Tabs.Root 
          className="flex flex-col"
          defaultValue="education"
        >
          <Tabs.List className="flex mx-auto mb-12 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            <Tabs.Trigger
              value="education"
              className="px-6 py-2 text-sm font-medium rounded-md transition-all data-[state=active]:bg-white/20 data-[state=active]:text-[#00ADB5] data-[state=active]:shadow-sm text-white/80 hover:text-white"
            >
              Education
            </Tabs.Trigger>
            <Tabs.Trigger
              value="experience"
              className="px-6 py-2 text-sm font-medium rounded-md transition-all data-[state=active]:bg-white/20 data-[state=active]:text-[#00ADB5] data-[state=active]:shadow-sm text-white/80 hover:text-white"
            >
              Experience
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="education" className="outline-none">
            <div className="h-full [&_.react-chrono-timeline]:!bg-white/20">
              <Chrono
                items={education}
                mode="VERTICAL_ALTERNATING"
                hideControls
                disableToolbar
                cardWidth={600}
                scrollable
                useReadMore={false}
                fontSizes={{
                  cardSubtitle: '0.9rem',
                  cardText: '1rem',
                  cardTitle: '1.2rem',
                  title: '1rem',
                }}
                timelinePointShape="circle"
                timelinePointDimension={20}
                theme={customTheme}
                classNames={{
                  card: '!bg-white/10 !backdrop-blur-md !border !border-white/20 !rounded-2xl !shadow-lg !p-6 !transition-all hover:!bg-white/20 hover:!shadow-xl',
                  cardSubTitle: '!text-white/90 !mb-3',
                  cardText: '!text-white/80 !leading-relaxed',
                  cardTitle: '!text-[#00ADB5] !font-semibold !mb-2',
                }}
              />
            </div>
          </Tabs.Content>

          <Tabs.Content value="experience" className="outline-none">
            <div className="h-full [&_.react-chrono-timeline]:!bg-white/20">
              <Chrono
                items={experience}
                mode="VERTICAL_ALTERNATING"
                hideControls
                disableToolbar
                cardWidth={600}
                scrollable
                useReadMore={false}
                fontSizes={{
                  cardSubtitle: '0.9rem',
                  cardText: '1rem',
                  cardTitle: '1.2rem',
                  title: '1rem',
                }}
                timelinePointShape="circle"
                timelinePointDimension={20}
                theme={customTheme}
                classNames={{
                  card: '!bg-white/10 !backdrop-blur-md !border !border-white/20 !rounded-2xl !shadow-lg !p-6 !transition-all hover:!bg-white/20 hover:!shadow-xl',
                  cardSubTitle: '!text-white/90 !mb-3',
                  cardText: '!text-white/80 !leading-relaxed',
                  cardTitle: '!text-[#00ADB5] !font-semibold !mb-2',
                }}
              />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default EAndESection;