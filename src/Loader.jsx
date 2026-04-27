import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "./assets/assets";
import "./Loader.css";

const PARTICLE_COUNT = 30;

const generateParticles = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));
};

const Loader = () => {
  const [particles] = useState(() => generateParticles(PARTICLE_COUNT));
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        return 100;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="particles-background">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="magic-particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
              y: [`${particle.y}%`, `${particle.y - 12}%`],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="loader-content">
        <motion.div
          className="image-wrapper"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img src={assets.unicorn} alt="Logo" className="image-loader" />
        </motion.div>

        <div className="progress-section">
          <span className="percentage">{count}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
