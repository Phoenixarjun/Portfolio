import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  className = '',
  style = {},
  isActive = false,
  onTransitionComplete = () => {},
}) {
  const pixelGridRef = useRef(null);
  const firstContentRef = useRef(null);
  const secondContentRef = useRef(null);

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel', 'absolute');
        pixel.style.backgroundColor = pixelColor;
        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;
        pixel.style.opacity = 0;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  useEffect(() => {
    const pixels = pixelGridRef.current?.querySelectorAll('.pixelated-image-card__pixel') ?? [];
    const firstEl = firstContentRef.current;
    const secondEl = secondContentRef.current;
    if (!pixels.length || !firstEl || !secondEl) return;

    gsap.killTweensOf(pixels);
    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    const showPixels = () =>
      gsap.to(pixels, {
        autoAlpha: 1,
        stagger: { each: staggerDuration, from: 'random' },
        duration: 0.2,
      });

    const hidePixels = () =>
      gsap.to(pixels, {
        autoAlpha: 0,
        stagger: { each: staggerDuration, from: 'random' },
        duration: 0.2,
        onComplete: onTransitionComplete,
      });

    if (isActive) {
      gsap.set(secondEl, { display: 'none' });
      gsap.set(firstEl, { display: 'block' });
      showPixels();

      gsap.delayedCall(animationStepDuration / 2, () => {
        gsap.set(firstEl, { display: 'none' });
        gsap.set(secondEl, { display: 'block' });
      });

      gsap.delayedCall(animationStepDuration, hidePixels);
    } else {
      gsap.set(firstEl, { display: 'none' });
      gsap.set(secondEl, { display: 'block' });
      showPixels();

      gsap.delayedCall(animationStepDuration / 2, () => {
        gsap.set(secondEl, { display: 'none' });
        gsap.set(firstEl, { display: 'block' });
      });

      gsap.delayedCall(animationStepDuration, hidePixels);
    }
  }, [isActive, animationStepDuration, onTransitionComplete]);

  return (
    <div className={`${className}`} style={style}>
      <div ref={firstContentRef} className={`${isActive ? 'hidden' : 'block'}`}>
        {firstContent}
      </div>
      <div ref={secondContentRef} className={`${isActive ? 'block' : 'hidden'}`}>
        {secondContent}
      </div>
      <div
        ref={pixelGridRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
    </div>
  );
}


export default PixelTransition;
