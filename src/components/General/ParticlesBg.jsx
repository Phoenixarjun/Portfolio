import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {};

  const options = useMemo(() => ({
    background: {
      color: { value: "#0f0f0f" }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect",
          parallax: { enable: false }
        },
        resize: true
      },
      modes: {
        connect: {
          distance: 120,
          radius: 60,
          links: { opacity: 0.3 }
        }
      }
    },
    particles: {
      color: { value: "#bbbbbb" },
      links: {
        enable: true,
        color: "#bbbbbb",
        distance: 130,
        opacity: 0.2,
        width: 2
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "out" }
      },
      number: {
        value: 60,
        density: { enable: true, area: 800 }
      },
      opacity: {
        value: 0.4,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
          sync: false
        }
      },
      shape: { type: "circle" },
      size: {
        value: { min: 2, max: 3.5 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.5,
          sync: false
        }
      }
    },
    detectRetina: true
  }), []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
      )}
    </>
  );
};

export default ParticlesBg;
