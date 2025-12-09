"use client";

import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Globe,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useMemo, useRef } from "react";
import { Badge } from "@/components/ui/badge";

export function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 优化：预计算随机位置，避免每次渲染重新计算
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      })),
    [],
  );

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* 优化的标题区域 */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/5 backdrop-blur-sm text-green-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono">TARGET_ANALYSIS.exe</span>
            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronRight className="w-3 h-3" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-6xl font-bold tracking-tight mb-6 font-mono relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="relative text-white">
              WHO IS THIS FOR?
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6 text-green-400" />
              </motion.div>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Built for{" "}
            <span className="text-green-300 font-semibold">
              elite AI creators
            </span>{" "}
            who demand{" "}
            <span className="text-gray-200 font-semibold">
              enterprise-grade tools
            </span>{" "}
            to monetize their digital assets
          </motion.p>
        </motion.div>

        {/* 优化的主要卡片 */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative group">
            {/* 简化背景层 */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-green-600/8 to-emerald-600/8 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* 移除复杂的角落装饰，使用简单边框效果 */}
            <motion.div
              className="absolute inset-0 rounded-3xl border border-green-500/10"
              animate={{
                borderColor: [
                  "rgba(34, 197, 94, 0.1)",
                  "rgba(34, 197, 94, 0.2)",
                  "rgba(34, 197, 94, 0.1)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* 简化网格动画 */}
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl" />
            </div>

            <div className="relative bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-gray-800/85 backdrop-blur-xl border border-green-500/20 rounded-3xl p-12 shadow-2xl shadow-green-500/5">
              <div className="text-center space-y-8">
                <div className="relative">
                  <motion.div
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl shadow-green-500/25"
                    animate={{
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-400/15 to-emerald-500/15"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <Zap className="w-12 h-12 text-white relative z-10 drop-shadow-lg" />
                  </motion.div>

                  {/* 简化旋转环效果 */}
                  <motion.div
                    className="absolute -inset-4 border border-green-500/8 rounded-3xl"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                <div>
                  <motion.h3
                    className="text-4xl font-bold mb-4 font-mono text-white drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <span className="text-green-400">&lt;</span>
                    Elite AI Engineers
                    <span className="text-green-400">/&gt;</span>
                  </motion.h3>
                  <motion.p
                    className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    You've mastered AI generation pipelines, understand{" "}
                    <span className="text-green-300 font-medium">
                      scalable architecture
                    </span>
                    , and are ready to deploy{" "}
                    <span className="text-gray-300 font-medium">
                      production-grade
                    </span>{" "}
                    monetization systems.
                  </motion.p>
                </div>

                {/* 简化徽章动画 */}
                <motion.div
                  className="flex flex-wrap justify-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  {techFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    >
                      <Badge className="px-4 py-2 text-sm font-mono bg-gray-800/90 border border-gray-600/60 text-gray-200 backdrop-blur-sm shadow-lg">
                        {feature.icon && (
                          <feature.icon className="w-3 h-3 mr-2" />
                        )}
                        {feature.label}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 优化的网格布局 */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {techTargets.map((target, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 1.2 + index * 0.2,
                ease: "easeOut",
              }}
            >
              {/* 简化背景效果 */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-green-500/6 via-gray-800/8 to-emerald-500/6 rounded-2xl blur-sm"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.8,
                }}
              />

              {/* 简化发光边框 */}
              <motion.div
                className="absolute inset-0 rounded-2xl border border-green-500/8"
                animate={{
                  borderColor: [
                    "rgba(34, 197, 94, 0.08)",
                    "rgba(34, 197, 94, 0.15)",
                    "rgba(34, 197, 94, 0.08)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />

              <div className="relative backdrop-blur-xl border border-gray-700/40 rounded-2xl p-8 bg-gradient-to-br from-gray-900/70 via-gray-900/50 to-gray-800/70">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center border border-gray-600/50 backdrop-blur-sm shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 0 15px rgba(34, 197, 94, 0.1)",
                          "0 0 25px rgba(34, 197, 94, 0.2)",
                          "0 0 15px rgba(34, 197, 94, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      <target.icon className="w-7 h-7 text-green-400 drop-shadow-lg" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white font-mono">
                      {target.title}
                    </h4>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {target.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {target.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-gray-800/80 border border-gray-600/40 rounded-full text-gray-300 font-mono backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 1.4 + index * 0.2 + tagIndex * 0.1,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 简化的CTA按钮 */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-mono font-medium cursor-pointer shadow-xl shadow-green-500/20 backdrop-blur-sm"
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 25px rgba(34, 197, 94, 0.2)",
                "0 0 35px rgba(34, 197, 94, 0.3)",
                "0 0 25px rgba(34, 197, 94, 0.2)",
              ],
            }}
            transition={{
              scale: { duration: 0.2 },
              boxShadow: { duration: 3, repeat: Infinity },
            }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                opacity: [1, 0.6, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <TrendingUp className="w-5 h-5" />
            <span>INITIALIZE_MONETIZATION.run()</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const techFeatures = [
  { label: "1000+ Assets", icon: Database },
  { label: "ML Pipeline", icon: Cpu },
  { label: "Global CDN", icon: Globe },
  { label: "Enterprise Security", icon: Shield },
  { label: "API-First", icon: Code2 },
];

const techTargets = [
  {
    title: "AI Architects",
    description:
      "Full-stack creators building sophisticated AI art generation systems with advanced prompt engineering and model optimization expertise.",
    icon: Cpu,
    tags: ["ML/AI", "Scalable", "Production"],
  },
  {
    title: "DevOps Artists",
    description:
      "Technical creators who understand CI/CD pipelines, cloud infrastructure, and want to automate their AI art monetization workflows.",
    icon: Globe,
    tags: ["Cloud", "Automation", "Infrastructure"],
  },
  {
    title: "Data Engineers",
    description:
      "Analytics-driven creators who leverage data science techniques to optimize content performance and revenue generation algorithms.",
    icon: Database,
    tags: ["Analytics", "Optimization", "Data-Driven"],
  },
];
