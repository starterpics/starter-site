"use client";

import { motion, useInView } from "framer-motion";
import {
  Activity,
  Code,
  Database,
  Globe,
  Search,
  Settings,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useMemo, useRef } from "react";

export function WhatYouGet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 预计算随机粒子位置
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 2,
      })),
    [],
  );

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-black">
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
            <span className="font-mono">SYSTEM_FEATURES.list()</span>
          </motion.div>

          <motion.h2
            className="text-5xl font-bold tracking-tight font-mono text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-green-400">[</span>
            WHAT YOU GET
            <span className="text-green-400">]</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
            {/* 背景效果 */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-br from-green-500/8 via-gray-800/10 to-emerald-500/8 rounded-2xl blur-sm"
              animate={{
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border border-green-500/10"
              animate={{
                borderColor: [
                  "rgba(34, 197, 94, 0.1)",
                  "rgba(34, 197, 94, 0.2)",
                  "rgba(34, 197, 94, 0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-800/80 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-8 h-full">
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 shrink-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center border border-gray-600/40"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(34, 197, 94, 0.1)",
                      "0 0 25px rgba(34, 197, 94, 0.2)",
                      "0 0 15px rgba(34, 197, 94, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Database className="w-7 h-7 text-green-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono mb-2">
                    Headless DAM System
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed mb-4">
                    Multi-CDN delivery with{" "}
                    <span className="text-green-300">Cloudflare R2</span>{" "}
                    integration and optimized caching for ultra-fast image
                    loading.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Multi-CDN global distribution",
                  "Cloudflare R2 integration",
                  "Intelligent caching layers",
                  "Automatic image optimization",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="font-mono">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI-Powered SEO Engine */}
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

          {/* Smart Content Automation */}
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

          {/* Google-Safe Architecture */}
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

          {/* Production Ready */}
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

          {/* Performance Optimized */}
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

          {/* Admin Dashboard */}
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
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready to turn your images into a{" "}
            <span className="text-green-300 font-semibold">
              profitable business
            </span>
            ?
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              "Next.js 15 + App Router",
              "TypeScript + Prisma",
              "Tailwind + shadcn/ui",
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-600/30 rounded-full backdrop-blur-sm"
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

// 小卡片组件
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <>
      <motion.div
        className="absolute -inset-1 bg-gradient-to-br from-green-500/6 to-gray-800/8 rounded-2xl blur-sm"
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
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
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center border border-gray-600/40"
            animate={{
              boxShadow: [
                "0 0 10px rgba(34, 197, 94, 0.1)",
                "0 0 20px rgba(34, 197, 94, 0.15)",
                "0 0 10px rgba(34, 197, 94, 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Icon className="w-5 h-5 text-green-400" />
          </motion.div>
          <h3 className="text-sm font-bold text-white font-mono">{title}</h3>
        </div>
        <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
      </div>
    </>
  );
}

// 宽卡片组件
function WideFeatureCard({
  icon: Icon,
  title,
  description,
  tags,
}: {
  icon: any;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <>
      <motion.div
        className="absolute -inset-1 bg-gradient-to-br from-green-500/6 to-gray-800/8 rounded-2xl blur-sm"
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
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
          duration: 3,
          repeat: Infinity,
        }}
      />

      <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl flex items-center justify-center border border-gray-600/40"
            animate={{
              boxShadow: [
                "0 0 10px rgba(34, 197, 94, 0.1)",
                "0 0 20px rgba(34, 197, 94, 0.15)",
                "0 0 10px rgba(34, 197, 94, 0.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Icon className="w-6 h-6 text-green-400" />
          </motion.div>
          <h3 className="text-lg font-bold text-white font-mono">{title}</h3>
        </div>
        <p className="text-gray-200 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800/60 border border-gray-600/30 rounded-full text-xs text-gray-300 font-mono backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
