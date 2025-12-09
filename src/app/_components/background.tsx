"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function Background() {
  // 预计算粒子位置和属性
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        size: Math.random() * 3 + 1,
        direction: Math.random() * 360,
        amplitude: Math.random() * 40 + 20,
      })),
    [],
  );

  // 预计算光圈属性 - 修复立即消失问题
  const lightRings = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
        delay: i * 4, // 增加延迟时间
        duration: 12, // 固定持续时间
        size: 150 + i * 30,
        maxOpacity: 0.2 + i * 0.03, // 最大透明度
      })),
    [],
  );

  // 预计算网格线条
  const gridLines = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        delay: i * 2,
        duration: 12 + Math.random() * 8,
        direction: i % 2 === 0 ? "horizontal" : "vertical",
        position: Math.random() * 100,
      })),
    [],
  );

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Base gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black to-gray-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(156,163,175,0.05),transparent_50%)]" />

      {/* Animated light rings - 修复立即消失的BUG */}
      <div className="absolute inset-0">
        {lightRings.map((ring) => (
          <motion.div
            key={ring.id}
            suppressHydrationWarning
            className="absolute border border-green-400/40 rounded-full"
            style={{
              left: `${ring.x}%`,
              top: `${ring.y}%`,
              width: `${ring.size}px`,
              height: `${ring.size}px`,
              transform: `translate(-50%, -50%)`,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.2, 1.8, 0],
              opacity: [0, ring.maxOpacity, ring.maxOpacity * 0.6, 0],
            }}
            transition={{
              duration: ring.duration,
              repeat: Infinity,
              delay: ring.delay,
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1], // 控制动画时间分布
            }}
          />
        ))}
      </div>

      {/* Floating particles with complex motion */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <motion.div
            suppressHydrationWarning
            key={particle.id}
            className="absolute bg-green-400/60 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [
                0,
                Math.sin((particle.direction * Math.PI) / 180) *
                  particle.amplitude,
                0,
              ],
              x: [
                0,
                Math.cos((particle.direction * Math.PI) / 180) *
                  particle.amplitude,
                0,
              ],
              opacity: [0.3, 1, 0.3],
              scale: [0.6, 1.5, 0.6],
              rotate: [0, 180, 360],
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

      {/* Pulsing ambient lights */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1.2, 1],
            opacity: [0.4, 0.8, 0.6, 0.4],
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.4, 1.2],
            opacity: [0.6, 0.3, 0.7, 0.6],
            x: [0, -40, 30, 0],
            y: [0, 50, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/4 w-60 h-60 bg-cyan-500/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        {gridLines.map((line) => (
          <motion.div
            suppressHydrationWarning
            key={line.id}
            className={`absolute bg-green-400/60 ${
              line.direction === "horizontal" ? "w-full h-px" : "h-full w-px"
            }`}
            style={{
              [line.direction === "horizontal" ? "top" : "left"]:
                `${line.position}%`,
            }}
            animate={{
              opacity: [0, 0.3, 0.1, 0],
              scale:
                line.direction === "horizontal" ? [0, 1, 1, 0] : [0, 1, 1, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Flowing energy streams */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
          animate={{
            x: ["-100%", "100vw"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
          animate={{
            y: ["-100%", "100vh"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
          animate={{
            x: ["100%", "-100vw"],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
        />
      </div>

      {/* Breathing background pulse */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-emerald-900/5"
        animate={{
          opacity: [0.3, 0.7, 0.5, 0.3],
          scale: [1, 1.02, 1.01, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23ffffff'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
