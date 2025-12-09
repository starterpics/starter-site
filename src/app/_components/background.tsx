"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 预计算粒子位置
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
        size: Math.random() * 2 + 1,
      })),
    [],
  );

  return (
    <div
      className="fixed inset-0 -z-10 bg-black"
      onMouseMove={(e) => {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      }}
    >
      {/* Base gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(156,163,175,0.05),transparent_50%)]" />

      {/* Mouse-following glow effect */}
      <motion.div
        className="absolute w-96 h-96 bg-green-400/6 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * window.innerWidth - 192,
          y: mousePosition.y * window.innerHeight - 192,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-25">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-green-400/50 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-6, 6, -6],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background ambient lights */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}
