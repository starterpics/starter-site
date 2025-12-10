"use client";

import { motion, useInView } from "framer-motion";
import {
  Database,
  Globe,
  type LucideIcon,
  Search,
  Settings,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useRef } from "react";

export function WhatYouGet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header 区域 */}
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
            <Terminal className="w-3 h-3" />
            <span className="font-mono">FEATURES</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight font-mono text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-green-400">[</span>
            WHAT YOU GET
            <span className="text-green-400">]</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to launch a{" "}
            <span className="text-green-300 font-semibold">
              professional image website
            </span>{" "}
            that generates real traffic and revenue
          </motion.p>
        </motion.div>

        {/* Bento Grid 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Headless DAM System - 大卡片 */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 md:row-span-2 relative group"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-linear-to-br from-gray-900/60 via-gray-900/40 to-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full overflow-hidden group-hover:border-green-400/30 transition-all duration-500">
              {/* 角落装饰 */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-green-400/10 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-linear-to-tl from-green-400/5 to-transparent rounded-tl-full" />

              {/* 顶部光效带 */}
              <motion.div
                className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-green-400/60 to-transparent"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-8">
                  <motion.div
                    className="w-16 h-16 shrink-0 bg-linear-to-br from-black/80 to-gray-800/60 rounded-2xl flex items-center justify-center border border-green-400/20 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      borderColor: [
                        "rgba(34, 197, 94, 0.2)",
                        "rgba(34, 197, 94, 0.4)",
                        "rgba(34, 197, 94, 0.2)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Database className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono mb-3 tracking-wide">
                      Headless DAM System
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Multi-CDN delivery with{" "}
                      <span className="text-green-300 font-semibold bg-green-400/10 px-2 py-1 rounded">
                        Cloudflare R2
                      </span>{" "}
                      integration and optimized caching for ultra-fast image
                      loading.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Multi-CDN global distribution",
                    "Cloudflare R2 integration",
                    "Intelligent caching layers",
                    "Automatic image optimization",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 text-sm text-gray-300 bg-black/20 rounded-lg p-3 border border-gray-700/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm shadow-green-400/50" />
                      <span className="font-mono">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 其他feature cards */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FeatureCard
              icon={Search}
              title="AI-Powered SEO"
              description="Automated alt text, titles, and schema markup to boost search visibility."
            />
          </motion.div>

          <motion.div
            className="md:col-span-1 lg:col-span-1 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <FeatureCard
              icon={Sparkles}
              title="Content Automation"
              description="AI-powered content processing, organization, and bulk operations."
            />
          </motion.div>

          <motion.div
            className="md:col-span-1 lg:col-span-1 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FeatureCard
              icon={Shield}
              title="Google-Safe Design"
              description="Anti-spam architecture with manual publishing controls. No thin content risk."
            />
          </motion.div>

          <motion.div
            className="md:col-span-1 lg:col-span-1 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <FeatureCard
              icon={Globe}
              title="Production Ready"
              description="Complete deployment setup with monitoring and one-click launch."
            />
          </motion.div>

          <motion.div
            className="md:col-span-2 lg:col-span-2 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <WideFeatureCard
              icon={Zap}
              title="Performance Optimized"
              description="Built with Next.js 15 App Router, edge caching, and optimized images for lightning-fast page loads."
              tags={["Next.js 15", "App Router", "Edge Caching"]}
            />
          </motion.div>

          <motion.div
            className="md:col-span-2 lg:col-span-2 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <WideFeatureCard
              icon={Settings}
              title="Admin Dashboard"
              description="Comprehensive content management system with:"
              tags={[
                "Bulk Upload",
                "Auto Tagging",
                "Publishing Controls",
                "User Management",
              ]}
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="text-gray-200 mb-8 text-lg md:text-xl leading-relaxed">
            Ready to turn your images into a{" "}
            <span className="text-green-300 font-semibold">
              profitable business
            </span>
            ?
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Next.js 15 + App Router",
              "TypeScript + Prisma",
              "Tailwind + shadcn/ui",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-gray-700/50 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <span className="text-gray-300 font-mono">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 重新设计的小卡片组件
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative bg-linear-to-br from-gray-900/50 via-gray-900/30 to-black/30 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-6 h-full overflow-hidden group cursor-pointer"
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(34, 197, 94, 0.3)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* 角落装饰 */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-linear-to-bl from-green-400/5 to-transparent rounded-bl-full" />

      {/* 顶部光效线 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-green-400/40 to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* 悬浮光效 */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-green-400/0 via-green-400/0 to-green-400/5 rounded-3xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className="w-12 h-12 shrink-0 bg-linear-to-br from-black/70 to-gray-800/50 rounded-2xl flex items-center justify-center border border-green-400/20 shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="w-6 h-6 text-green-400" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white font-mono mb-2 leading-tight group-hover:text-green-100 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 重新设计的宽卡片组件
function WideFeatureCard({
  icon: Icon,
  title,
  description,
  tags,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <motion.div
      className="relative bg-linear-to-br from-gray-900/50 via-gray-900/30 to-black/30 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-6 h-full overflow-hidden group cursor-pointer"
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(34, 197, 94, 0.3)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* 装饰元素 */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-linear-to-br from-green-400/8 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-linear-to-tl from-green-400/5 to-transparent rounded-tl-full" />

      {/* 顶部光效线 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-green-400/40 to-transparent"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* 悬浮光效 */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-green-400/0 via-green-400/0 to-green-400/5 rounded-3xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            className="w-12 h-12 shrink-0 bg-linear-to-br from-black/70 to-gray-800/50 rounded-2xl flex items-center justify-center border border-green-400/20 shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="w-6 h-6 text-green-400" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-green-100 transition-colors">
              {title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1.5 bg-black/40 border border-gray-600/40 rounded-full text-xs text-gray-300 font-mono backdrop-blur-sm group-hover:border-green-400/30 group-hover:bg-green-400/5 transition-all"
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
