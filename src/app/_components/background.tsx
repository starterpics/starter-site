"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function Background() {
  // 恢复粒子数量并优化性能
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

  // 恢复光圈数量并优化渲染
  const lightRings = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
        delay: i * 4,
        duration: 12,
        size: 150 + i * 30,
        maxOpacity: 0.2 + i * 0.03,
      })),
    [],
  );

  // 优化网格线条 - 修复闪烁但保持效果
  const gridLines = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: i * 4, // 增大延迟避免同时触发
        duration: 18 + Math.random() * 4, // 更长的持续时间
        direction: i % 2 === 0 ? "horizontal" : "vertical",
        position: 15 + Math.random() * 70, // 避免边缘
        intensity: 0.12 + Math.random() * 0.08,
      })),
    [],
  );

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden pointer-events-none"
      style={{
        zIndex: -1,
        willChange: "transform",
        backfaceVisibility: "hidden",
        // 强制开启硬件加速
        transform: "translateZ(0)",
      }}
    >
      {/* 基础渐变层 */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/40 via-black to-gray-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(156,163,175,0.05),transparent_50%)]" />

      {/* 光圈动画 - 保持原有数量和质量 */}
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
              willChange: "transform, opacity",
              // 使用contain提升性能
              contain: "layout style paint",
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
              times: [0, 0.3, 0.7, 1],
            }}
          />
        ))}
      </div>

      {/* 浮动粒子 - 保持原有数量 */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            suppressHydrationWarning
            className="absolute bg-green-400/60 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              willChange: "transform, opacity",
              contain: "layout style paint",
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

      {/* 环境光 - 恢复三个光源 */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          suppressHydrationWarning
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"
          style={{
            willChange: "transform, opacity",
            contain: "layout style",
          }}
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
          style={{
            willChange: "transform, opacity",
            contain: "layout style",
          }}
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
          style={{
            willChange: "transform, opacity",
            contain: "layout style",
          }}
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

      {/* 优化的网格线条 - 修复闪烁但保持效果 */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          contain: "layout style paint",
        }}
      >
        {gridLines.map((line) => (
          <motion.div
            suppressHydrationWarning
            key={line.id}
            className={`absolute ${
              line.direction === "horizontal" ? "w-full h-px" : "h-full w-px"
            }`}
            style={{
              [line.direction === "horizontal" ? "top" : "left"]:
                `${line.position}%`,
              willChange: "transform, opacity",
              contain: "layout style paint",
              background:
                line.direction === "horizontal"
                  ? `linear-gradient(to right, transparent, rgba(34, 197, 94, ${line.intensity}), transparent)`
                  : `linear-gradient(to bottom, transparent, rgba(34, 197, 94, ${line.intensity}), transparent)`,
            }}
            initial={{
              opacity: 0,
              scaleX: line.direction === "horizontal" ? 0 : 1,
              scaleY: line.direction === "vertical" ? 0 : 1,
            }}
            animate={{
              opacity: [0, 1, 0.8, 0.6, 0],
              scaleX: line.direction === "horizontal" ? [0, 0.4, 1, 1, 0] : 1,
              scaleY: line.direction === "vertical" ? [0, 0.4, 1, 1, 0] : 1,
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: [0.25, 0.46, 0.45, 0.94], // 自定义贝塞尔曲线
              times: [0, 0.3, 0.6, 0.8, 1],
            }}
          />
        ))}
      </div>

      {/* 能量流 - 恢复三条 */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-transparent via-green-400/50 to-transparent"
          style={{
            willChange: "transform",
            contain: "layout style paint",
          }}
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
          className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-emerald-400/50 to-transparent"
          style={{
            willChange: "transform",
            contain: "layout style paint",
          }}
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
          className="absolute top-0 right-0 w-1 h-full bg-linear-to-b from-transparent via-cyan-400/30 to-transparent"
          style={{
            willChange: "transform",
            contain: "layout style paint",
          }}
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

      {/* 背景脉动 */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-green-900/5 via-transparent to-emerald-900/5"
        style={{
          willChange: "transform, opacity",
          contain: "layout style paint",
        }}
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

      {/* 噪音纹理 */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23ffffff'/%3E%3C/svg%3E")`,
          contain: "layout style paint",
        }}
      />
    </div>
  );
}
