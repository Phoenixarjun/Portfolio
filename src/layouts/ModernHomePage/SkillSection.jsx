import React, { useEffect, useRef, useState } from 'react';
import { Engine, Render, Runner, World, Bodies, Body, Mouse, MouseConstraint, Events } from 'matter-js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../../components/ModernHomePage/BlurText';

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
  frontend: [
    { title: 'HTML', percentage: 90 },
    { title: 'CSS', percentage: 90 },
    { title: 'JavaScript', percentage: 85 },
    { title: 'React.js', percentage: 85 },
    { title: 'Tailwind CSS', percentage: 80 },
    { title: 'Bootstrap', percentage: 80 },
    { title: 'Next.js', percentage: 70 },
  ],
  backend: [
    { title: 'Node.js', percentage: 80 },
    { title: 'FastAPI', percentage: 70 },
    { title: 'Flask', percentage: 70 },
    { title: 'Express.js', percentage: 75 },
  ],
  coding: [
    { title: 'Python', percentage: 90 },
    { title: 'C++', percentage: 80 },
    { title: 'Java', percentage: 75 },
    { title: 'C', percentage: 70 },
  ],
  aiMl: [
    { title: 'TensorFlow', percentage: 70 },
    { title: 'sklearn', percentage: 70 },
    { title: 'OpenCV', percentage: 65 },
    { title: 'Deep Learning', percentage: 65 },
  ],
  webDesign: [
    { title: 'Figma', percentage: 80 },
    { title: 'Canva', percentage: 80 },
  ],
  database: [
    { title: 'SQL', percentage: 85 },
    { title: 'MySQL', percentage: 80 },
    { title: 'SQLite', percentage: 80 },
    { title: 'Firebase', percentage: 75 },
    { title: 'MongoDB', percentage: 70 },
  ],
  generalSkills: [
    { title: 'Prompt Writing', percentage: 80 },
    { title: 'Time Management', percentage: 85 },
  ],
};

const categorySkillsColor = {
  frontend: '#3b82f6', // blue
  backend: '#10b981', // green
  coding: '#8b5cf6', // purple
  aiMl: '#f59e0b', // amber
  webDesign: '#ec4899', // pink
  database: '#ef4444', // red
  generalSkills: '#6b7280', // gray
};

const categoryBoxShadow = {
  frontend: '0 0 15px 4px rgba(59, 130, 246, 0.7)', // blue glow
  backend: '0 0 15px 4px rgba(16, 185, 129, 0.7)', // green glow
  coding: '0 0 15px 4px rgba(139, 92, 246, 0.7)', // purple glow
  aiMl: '0 0 15px 4px rgba(245, 158, 11, 0.7)', // amber glow
  webDesign: '0 0 15px 4px rgba(236, 72, 153, 0.7)', // pink glow
  database: '0 0 15px 4px rgba(239, 68, 68, 0.7)', // red glow
  generalSkills: '0 0 15px 4px rgba(107, 114, 128, 0.7)', // gray glow
};

const allSkills = Object.entries(skillsData)
  .flatMap(([category, skills]) =>
    skills.map(skill => ({ ...skill, category }))
  )

const SkillSection = () => {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const engineRef = useRef(Engine.create());
  const [hoverSkill, setHoverSkill] = useState(null);
  const [ballLabels, setBallLabels] = useState([]);
  const [shouldAnimateTitle, setShouldAnimateTitle] = useState(false);
  const radius = 50;

  useEffect(() => {
    // Set up scroll trigger for title animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => setShouldAnimateTitle(true),
      once: true
    });

    const engine = engineRef.current;
    const scene = sceneRef.current;
    const width = scene.clientWidth;
    const height = scene.clientHeight;

    // Clear previous world and engine state
    World.clear(engine.world);
    Engine.clear(engine);

    // Create renderer
    const render = Render.create({
      element: scene,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Create balls with transparent fill and category glow
    const balls = allSkills.map(skill => {
      const ball = Bodies.circle(
        Math.random() * (width - radius * 2) + radius,
        Math.random() * (height / 2),
        radius,
        {
          restitution: 0.9,
          label: skill.title,
          render: {
            fillStyle: 'transparent', // transparent background
            strokeStyle: categorySkillsColor[skill.category] || '#fff',
            lineWidth: 3,
          },
          frictionAir: 0.2, // a bit air friction for smoothness
        }
      );
      ball.skillData = skill;
      return ball;
    });

    // Container boundaries — ground + walls, **balls cannot exit**
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -50, width, 100, { isStatic: true });
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });

    // Mouse and constraints
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    // Add all bodies to world
    World.add(engine.world, [...balls, ground, ceiling, leftWall, rightWall, mouseConstraint]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Apply force on scroll enter (preserve existing logic)
    ScrollTrigger.create({
      trigger: scene,
      start: 'top 80%',
      onEnter: () => {
        balls.forEach(ball => {
          Body.applyForce(ball, ball.position, {
            x: (Math.random() - 0.5) * 0.005,
            y: Math.random() * -0.02,
          });
        });
      },
    });

    // Handle hover detection & tooltip
    render.canvas.addEventListener('mousemove', e => {
      const rect = render.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Find hovered ball within radius
      const hovered = balls.find(ball => {
        const dx = ball.position.x - mouseX;
        const dy = ball.position.y - mouseY;
        return Math.sqrt(dx * dx + dy * dy) < radius;
      });

      if (hovered) {
        setHoverSkill({
          title: hovered.skillData.title,
          category: hovered.skillData.category,
          percentage: hovered.skillData.percentage,
          x: e.clientX,
          y: e.clientY,
        });
      } else {
        setHoverSkill(null);
      }
    });

    Events.on(engine, 'beforeUpdate', () => {
      balls.forEach(ball => {
        const { x, y } = ball.position;
        let moved = false;
        if (x - radius < 0) {
          Body.setPosition(ball, { x: radius, y });
          Body.setVelocity(ball, { x: Math.abs(ball.velocity.x) * 0.8, y: ball.velocity.y });
          moved = true;
        }
        if (x + radius > width) {
          Body.setPosition(ball, { x: width - radius, y });
          Body.setVelocity(ball, { x: -Math.abs(ball.velocity.x) * 0.8, y: ball.velocity.y });
          moved = true;
        }
        if (y - radius < 0) {
          Body.setPosition(ball, { x, y: radius });
          Body.setVelocity(ball, { x: ball.velocity.x, y: Math.abs(ball.velocity.y) * 0.8 });
          moved = true;
        }
        if (y + radius > height) {
          Body.setPosition(ball, { x, y: height - radius });
          Body.setVelocity(ball, { x: ball.velocity.x, y: -Math.abs(ball.velocity.y) * 0.8 });
          moved = true;
        }
        if (moved) {
          // add a slight bounce effect on correction
          Body.setAngularVelocity(ball, 0);
        }
      });
    });

    // Track ball positions for labels
    let animationFrameId;
    function updateLabels() {
      const balls = engine.world.bodies.filter(body => body.label !== 'Mouse Constraint' && !body.isStatic);
      setBallLabels(
        balls.map(ball => ({
          id: ball.id,
          x: ball.position.x,
          y: ball.position.y,
          skill: ball.skillData,
        }))
      );
      animationFrameId = requestAnimationFrame(updateLabels);
    }
    updateLabels();

    return () => {
      cancelAnimationFrame(animationFrameId);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 relative bg-black"
    >
      {shouldAnimateTitle ? (
        <BlurText
          text="My Skills"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl mb-8 text-white font-bold"
        />
      ) : (
        <h2 className="text-4xl mb-8 text-white font-bold opacity-0">My Skills</h2>
      )}

      <div
        ref={sceneRef}
        className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden border-2 border-white"
        style={{
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)'
        }}
      >
      <div className='absolute top-0 left-0 p-4'>
        <ul className="space-y-2 text-white font-semibold">
          {Object.entries(categorySkillsColor).map(([category, color]) => (
            <li key={category} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className='text-sm'>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </li>
          ))}
        </ul>
      </div>
        {ballLabels.map(({ id, x, y, skill }) => {
          const glow = categoryBoxShadow[skill.category];
          return (
            <div
              key={id}
              className="flex items-center justify-center absolute select-none pointer-events-none font-semibold"
              style={{
                left: x - radius,
                top: y - radius,
                width: radius * 2,
                height: radius * 2,
                borderRadius: '50%',
                color: '#fff',
                boxShadow: glow,
                backgroundColor: 'rgba(255,255,255,0)', 
                WebkitUserSelect: 'none',
                userSelect: 'none',
                fontSize: '0.6rem',
                lineHeight: '1.2',
                textAlign: 'center',
                padding: 8,
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
              title={`${skill.title} - ${skill.percentage}%`}
            >
              {skill.title}
            </div>
          );
        })}
      </div>

      {hoverSkill && (
        <div
          className="absolute px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-50"
          style={{
            backgroundColor: categorySkillsColor[hoverSkill.category],
            left: hoverSkill.x + 15,
            top: hoverSkill.y + 15,
            color: 'white',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.7))',
          }}
        >
          <p className="font-bold">{hoverSkill.title}</p>
          <p className="text-xs">{hoverSkill.percentage}%</p>
        </div>
      )}
    </div>
  );
};

export default SkillSection;