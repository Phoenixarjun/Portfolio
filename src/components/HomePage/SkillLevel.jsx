import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const SkillLevel = ({ name, color, level, shouldAnimate }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (shouldAnimate) {
      setProgress(level);
    } else {
      setProgress(0);
    }
  }, [level, shouldAnimate]);

  const getEmoji = (level) => {
    if (level >= 90) return "./animations/Excellent.gif";
    if (level >= 70) return "./animations/Good.gif";
    if (level >= 50) return "./animations/Moderate.gif";
    return "./animations/Sad.gif";
  };

  return (
    <div className='flex flex-col gap-2 w-2/5'>
      <div className='flex justify-between items-center'>
        <h4 className='font-bold text-white'>{name}</h4>
        {shouldAnimate && (
          <img 
            src={getEmoji(level)} 
            alt="skill level indicator" 
            className='w-6 h-6 transition-opacity duration-300 ease-in-out'
          />
        )}
      </div>
      
      <Progress.Root
        className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200/30 shadow-inner"
        style={{ transform: 'translateZ(0)' }}
        value={progress}
      >
        <Progress.Indicator
          className="h-full w-full rounded-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transform: `translateX(-${100 - progress}%)`,
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`
          }}
        />
      </Progress.Root>
    </div>
  );
};

export default SkillLevel;