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
import { useRef } from "react";

export function ForWho() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header区域 */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/5 backdrop-blur-sm text-green-300 text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Target className="w-3 h-3" />
            <span className="font-mono">TARGET AUDIENCE</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 font-mono text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-green-400">[</span>
            WHO IS THIS FOR
            <span className="text-green-400">]</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Built for{" "}
            <span className="text-green-300 font-semibold">
              professional developers
            </span>{" "}
            who need{" "}
            <span className="text-white font-semibold">
              enterprise-grade solutions
            </span>{" "}
            to monetize their digital assets
          </motion.p>
        </motion.div>

        {/* 卡片瀑布流布局 */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-0">
          {audienceTypes.map((audience, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <AudienceCard audience={audience} index={index} />
            </motion.div>
          ))}
        </div>

        {/* 技术要求说明 */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="relative bg-gradient-to-br from-black/60 via-black/40 to-gray-900/40 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-10 lg:p-12 max-w-5xl mx-auto shadow-2xl shadow-black/20 overflow-hidden">
            {/* 顶部光效线 */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* 角落装饰 */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400/8 to-transparent rounded-br-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green-400/5 to-transparent rounded-tl-3xl" />

            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  className="w-12 h-12 bg-black/50 rounded-xl flex items-center justify-center border border-green-400/30"
                  animate={{
                    borderColor: [
                      "rgba(34, 197, 94, 0.3)",
                      "rgba(34, 197, 94, 0.6)",
                      "rgba(34, 197, 94, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Code2 className="w-6 h-6 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-mono">
                  Technical Requirements
                </h3>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Designed for developers with experience in modern web
                technologies and cloud infrastructure
              </p>

              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {techRequirements.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-5 py-3 bg-black/60 border border-gray-600/40 rounded-full text-sm text-gray-200 font-mono backdrop-blur-sm shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 1.7 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(34, 197, 94, 0.3)",
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    {tech.icon && (
                      <tech.icon className="w-4 h-4 text-green-400" />
                    )}
                    <span>{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 简化的受众卡片组件
function AudienceCard({ audience, index }: { audience: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-br from-black/60 via-black/40 to-gray-900/40 backdrop-blur-2xl border border-gray-700/50 rounded-3xl p-8 overflow-hidden group cursor-pointer shadow-xl shadow-black/20"
    >
      {/* 顶部光效线 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.8,
        }}
      />

      {/* 角落装饰 */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-400/8 to-transparent rounded-bl-3xl" />

      {/* 悬浮光效 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-400/0 to-green-400/5 rounded-3xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 space-y-6">
        {/* 头部区域 */}
        <div className="flex items-start gap-5">
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-black/80 to-gray-800/60 rounded-2xl flex items-center justify-center border border-green-400/20 shrink-0 shadow-lg"
            animate={{
              borderColor: [
                "rgba(34, 197, 94, 0.2)",
                "rgba(34, 197, 94, 0.5)",
                "rgba(34, 197, 94, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.7,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <audience.icon className="w-8 h-8 text-green-400" />
          </motion.div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white font-mono leading-tight mb-2 group-hover:text-green-100 transition-colors">
              {audience.title}
            </h4>
            <p className="text-sm text-green-300 font-mono font-medium">
              {audience.subtitle}
            </p>
          </div>
        </div>

        {/* 描述区域 */}
        <p className="text-gray-200 leading-relaxed text-base group-hover:text-gray-100 transition-colors">
          {audience.description}
        </p>

        {/* 技能标签区域 */}
        <div className="space-y-4">
          <h5 className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
            Core Skills
          </h5>
          <div className="flex flex-wrap gap-3">
            {audience.skills.map((skill: string, skillIndex: number) => (
              <motion.span
                key={skillIndex}
                className="text-xs px-4 py-2 bg-black/60 border border-gray-600/40 rounded-full text-gray-200 font-mono backdrop-blur-sm shadow-md group-hover:border-green-400/30 group-hover:bg-green-400/5 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + index * 0.2 + skillIndex * 0.1,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 经验等级区域 */}
        <div className="pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-gray-300 font-medium">
              Experience Level
            </span>
            <div className="flex gap-2">
              {[...Array(audience.level)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-sm shadow-green-400/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.2,
                    delay: 1 + index * 0.2 + i * 0.1,
                  }}
                />
              ))}
              {[...Array(5 - audience.level)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-gray-600 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const audienceTypes = [
  {
    title: "Full-Stack Developers",
    subtitle: "Frontend + Backend",
    description:
      "Experienced developers who understand both client and server-side technologies, ready to build complete monetization platforms.",
    icon: Code2,
    skills: ["React/Next.js", "Node.js", "Database Design", "API Development"],
    level: 4,
  },
  {
    title: "DevOps Engineers",
    subtitle: "Infrastructure + Automation",
    description:
      "Cloud infrastructure specialists who want to automate deployment, scaling, and monitoring of image delivery systems.",
    icon: Globe,
    skills: ["AWS/Cloudflare", "CI/CD", "Docker", "Monitoring"],
    level: 5,
  },
  {
    title: "Product Engineers",
    subtitle: "Business + Technology",
    description:
      "Technical product builders who combine business acumen with engineering skills to create profitable digital products.",
    icon: Target,
    skills: ["MVP Development", "Analytics", "User Research", "Growth"],
    level: 3,
  },
  {
    title: "AI Engineers",
    subtitle: "Machine Learning + Computer Vision",
    description:
      "Specialists in AI/ML who want to productionize their computer vision models and image generation systems.",
    icon: Cpu,
    skills: ["Computer Vision", "ML Pipelines", "Model Optimization", "Python"],
    level: 5,
  },
  {
    title: "Startup Founders",
    subtitle: "Vision + Execution",
    description:
      "Technical founders building image-centric startups who need enterprise-grade infrastructure from day one.",
    icon: TrendingUp,
    skills: [
      "Product Strategy",
      "Team Building",
      "Fundraising",
      "Tech Leadership",
    ],
    level: 4,
  },
  {
    title: "Enterprise Architects",
    subtitle: "Scale + Security",
    description:
      "Senior engineers designing large-scale systems who need proven patterns for image asset management and distribution.",
    icon: Shield,
    skills: ["System Design", "Security", "Performance", "Compliance"],
    level: 5,
  },
];

const techRequirements = [
  { label: "TypeScript", icon: Code2 },
  { label: "Cloud Services", icon: Globe },
  { label: "Database Design", icon: Database },
  { label: "REST APIs", icon: Zap },
  { label: "Modern Frontend", icon: Sparkles },
];
