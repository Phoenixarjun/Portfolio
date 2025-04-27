import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';
import LabelUnderLine from '../../components/General/LabelUnderLine';
import SkillLevel from '../../components/HomePage/SkillLevel';
import classNames from 'classnames';


const SkillsSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const skillsData = {
    frontend: [
      { title: "HTML", percentage: 90 },
      { title: "CSS", percentage: 90 },
      { title: "JavaScript", percentage: 85 },
      { title: "React.js", percentage: 85 },
      { title: "Tailwind CSS", percentage: 80 },
      { title: "Bootstrap", percentage: 80 },
      { title: "Next.js", percentage: 70 },
    ],
    backend: [
      { title: "Node.js", percentage: 80 },
      { title: "FastAPI", percentage: 70 },
      { title: "Flask", percentage: 70 },
      { title: "Express.js", percentage: 75 },
    ],
    coding: [
      { title: "Python", percentage: 90 },
      { title: "C++", percentage: 80 },
      { title: "Java", percentage: 75 },
      { title: "C", percentage: 70 },
    ],
    aiMl: [
      { title: "TensorFlow", percentage: 70 },
      { title: "scikit-learn (sklearn)", percentage: 70 },
      { title: "OpenCV", percentage: 65 },
      { title: "Basics of Deep Learning & ML Models", percentage: 65 },
    ],
    webDesign: [
      { title: "Figma", percentage: 80 },
      { title: "Canva", percentage: 80 },
    ],
    database: [
      { title: "SQL", percentage: 85 },
      { title: "MySQL", percentage: 80 },
      { title: "SQLite", percentage: 80 },
      { title: "Firebase", percentage: 75 },
      { title: "MongoDB", percentage: 70 },
    ],
    generalSkills: [
      { title: "Prompt Writing", percentage: 80 },
      { title: "Communication Skills", percentage: 75 },
      { title: "Time Management", percentage: 85 },
      { title: "Team Collaboration", percentage: 80 },
      { title: "Adaptability and Flexibility", percentage: 85 },
    ],
  };

  const categoryDisplayNames = {
    frontend: "Frontend",
    backend: "Backend",
    coding: "Programming",
    aiMl: "AI/ML",
    webDesign: "Design",
    database: "Database",
    generalSkills: "General"
  };

  const [selectedTab, setSelectedTab] = React.useState('frontend');

  return (
    <div ref={sectionRef} className='w-full min-h-screen bg-primary text-white py-16 px-4 sm:px-8 lg:px-8'>
      <div className='mx-auto px-12'>
        <div className='text-center mb-12'>
          <LabelUnderLine name='Skills' status={1} />
        </div>

        {/* Mobile Select (md breakpoint and below) */}
        <div className="md:hidden mx-auto mb-12 max-w-md">
          <Select.Root value={selectedTab} onValueChange={setSelectedTab}>
            <Select.Trigger
              className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:text-white outline-none transition-all"
              aria-label="Skill categories"
            >
              <Select.Value>{categoryDisplayNames[selectedTab]}</Select.Value>
              <Select.Icon className="text-white/80">
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="z-50 overflow-hidden rounded-lg bg-primary border border-white/20 shadow-lg backdrop-blur-md">
                <Select.ScrollUpButton className="flex items-center justify-center h-8 bg-white/5 cursor-default">
                  <ChevronUpIcon className="text-white/80" />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-2">
                  {Object.keys(skillsData).map((category) => (
                    <SelectItem 
                      key={category} 
                      value={category}
                      className="text-sm"
                    >
                      {categoryDisplayNames[category]}
                    </SelectItem>
                  ))}
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-8 bg-white/5 cursor-default">
                  <ChevronDownIcon className="text-white/80" />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        {/* Desktop Tabs (above md breakpoint) */}
        <Tabs.Root 
          className="hidden md:flex flex-col"
          value={selectedTab} 
          onValueChange={setSelectedTab}
        >
          <Tabs.List className="flex mx-auto mb-12 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            {Object.keys(skillsData).map((category) => (
              <Tabs.Trigger
                key={category}
                value={category}
                className={classNames(
                  "px-6 py-2 text-sm font-medium rounded-md transition-all",
                  "data-[state=active]:bg-white/20 data-[state=active]:text-[#00ADB5]",
                  "data-[state=active]:shadow-sm text-white/80 hover:text-white"
                )}
              >
                {categoryDisplayNames[category]}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        {/* Skills Content */}
        <div className="flex flex-wrap justify-center gap-8">
          {skillsData[selectedTab].map((skill, index) => (
            <SkillLevel
              key={`${selectedTab}-${index}`}
              name={skill.title}
              level={skill.percentage}
              color={getCategoryColor(selectedTab)}
              shouldAnimate={isSectionVisible}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Custom SelectItem component
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classNames(
          "relative flex items-center h-10 pl-8 pr-4 rounded-md text-sm leading-none select-none",
          "data-[highlighted]:bg-white/20 data-[highlighted]:text-[#00ADB5] outline-none",
          "data-[highlighted]:outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-2 inline-flex items-center justify-center w-4">
          <CheckIcon className="text-[#00ADB5]" />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

// Helper function for category colors
const getCategoryColor = (category) => {
  const colors = {
    frontend: '#4FD1C5',  
    backend: '#F687B3',  
    coding: '#63B3ED',    
    aiMl: '#F6AD55',     
    webDesign: '#B794F4', 
    database: '#68D391',  
    generalSkills: '#A0AEC0' 
  };
  return colors[category] || '#00ADB5'; // Default to frontend color
};

export default SkillsSection;