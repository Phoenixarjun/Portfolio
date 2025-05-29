const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const inlineStyles = {
    "--after-duration": `${speed * 0.5}s`,
    "--before-duration": `${speed * 0.3}s`,
  };

  const baseClasses = "relative inline-block select-none cursor-pointer";

  const pseudoClasses = `
    after:content-[attr(data-text)] 
    after:absolute 
    after:top-0 
    after:left-0 
    after:w-full 
    after:h-full 
    after:text-white 
    after:opacity-80
    before:content-[attr(data-text)] 
    before:absolute 
    before:top-0 
    before:left-0 
    before:w-full 
    before:h-full 
    before:text-white 
    before:opacity-80
  `;

  const effectClasses = enableShadows ? `
    after:[text-shadow:4px_0_red]
    before:[text-shadow:-4px_0_cyan]
  ` : '';

  const hoverClasses = enableOnHover ? `
    group-hover:after:animate-glitch-after
    group-hover:before:animate-glitch-before
  ` : `
    after:animate-glitch-after
    before:animate-glitch-before
  `;

  const combinedClasses = [
    baseClasses,
    pseudoClasses,
    effectClasses,
    hoverClasses,
    className
  ].join(' ').replace(/\s+/g, ' ').trim();

  return (
    <span 
      style={inlineStyles} 
      data-text={children} 
      className={combinedClasses}
    >
      {children}
    </span>
  );
};

export default GlitchText;