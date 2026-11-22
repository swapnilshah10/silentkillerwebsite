"use client"
import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const initEngine = async (engine) => {
  await loadFull(engine);
};

const App = () => {
  const options = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fullScreen: { enable: true, zIndex: -1 },
    detectRetina: true,
    fpsLimit: 60,
    particles: {
      number: { value: 70, density: { enable: true } },
      color: { value: ["#ffffff", "#c9a96e"] },
      opacity: { value: { min: 0.15, max: 0.6 } },
      size: { value: { min: 0.5, max: 1.8 } },
      move: { enable: true, speed: 0.25, direction: "none", outModes: { default: "out" } },
      links: { enable: true, distance: 140, color: "#c9a96e", opacity: 0.08, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 140, links: { opacity: 0.25 } } },
    },
  }), []);

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="tsparticles" options={options} />
    </ParticlesProvider>
  );
};

export default App;
