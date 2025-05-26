import { Typewriter } from 'react-simple-typewriter';
import { PiGraduationCapDuotone, PiBriefcaseDuotone, PiMapPinDuotone, PiBookDuotone } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import ParticlesBg from '../../components/General/ParticlesBg';

const HeroSection = () => {
  const educationInfo = [
  { icon: <PiGraduationCapDuotone />, label: "Graduate on 2025" },
  { icon: <PiBriefcaseDuotone />, label: "B Tech (Bachelor of Technology)" },
  { icon: <PiBookDuotone />, label: "Information Technology (IT)" },
  { icon: <PiMapPinDuotone />, label: "Chennai" },
];

  return (
    <div className='relative h-[150vh] md:h-[99vh]'>
      <ParticlesBg />
      <div className='relative flex flex-col items-center justify-around gap-0 h-full p-8 text-quaternary z-10 md:flex-row sm:gap-4'>
        
        <div className='flex flex-col items-center gap-4 justify-center md:items-start'>
          <h2 className='text-xl sm:text-4xl'>Hello, I'm</h2>
          <h1 className="outlined-text text-5xl font-bold font-sans sm:text-6xl">NARESH B A</h1>
          <span className='text-tertiary text-xl sm:text-2xl'>
            <Typewriter
              words={[
                    'Full Stack Developer',
                    'AI/ML Engineer',
                    'Generative AI Developer',
                    'Data Analyst',
                    'MLOps & LLMOps Engineer',
                    'Computer Vision Developer',
                  ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <div className="mt-4 flex flex-col items-start gap-2 text-lg text-white">
            {educationInfo.map(({ icon, label }, index) => (
              <Info key={index} icon={icon} label={label} />
            ))}
          </div>

          <a
            href='https://drive.google.com/file/d/1Rvmc7fboNMR1CklFDANsSkI5UnvlpzJZ/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-medium shadow-lg hover:bg-gray-200 transition duration-300'
          >
            <IoDocumentTextOutline className="text-xl" />
            Download Resume
          </a>
        </div>

        <div className='rounded-full shadow-md shadow-white overflow-hidden w-60 h-60 sm:w-72 sm:h-72 border-2 border-white'>
          <img
            src="/images/Profile2.png"
            alt="profile"
            className='w-full h-full object-cover rounded-full object-top'
          />
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <div className="text-xl text-white">{icon}</div>
    <span>{label}</span>
  </div>
);

export default HeroSection;
