import { Link } from 'react-router-dom';
import WebDevelopment from '/logo/webDevelopment.png';

const ProjectCard = ({ title, shortDescription, projectId, cardImg, domainImg }) => {
  const domainImage = domainImg || WebDevelopment;

  return (
    <div className='w-80 h-[55vh] relative group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
      <div className='h-48 overflow-hidden'>
        <img 
          src={cardImg} 
          alt={title} 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
        />
      </div>
      
      <div className='absolute -top-1/2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md border-4 border-gray-800 flex items-center justify-center transition-all ease-in-out group-hover:top-40 duration-700'>
        <img 
          src={domainImage} 
          alt="Domain" 
          className='w-12 h-12 object-contain rounded-full' 
        />
      </div>
      
      <div className='p-5 pt-8 flex flex-col items-center justify-center gap-3'>
        <h2 className='text-xl font-bold text-gray-800 text-center'>{title}</h2>
        <p className='text-gray-600 text-sm text-center line-clamp-3'>{shortDescription}</p>
        
        <Link 
          to={`/project/${projectId}`} 
          className='mt-4 mx-auto'
        >
          <button className='px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px]'>
            View Project →
          </button>
        </Link>
      </div>
      
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500'></div>
    </div>
  )
}

export default ProjectCard;