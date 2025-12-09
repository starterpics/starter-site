"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  Play,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* Main content area */}
      <div className="relative min-h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* Status badge */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/5 backdrop-blur-sm text-green-300 text-sm font-medium">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Terminal className="w-3 h-3" />
              <span className="font-mono">SYSTEM_STATUS: READY</span>
            </div>
          </motion.div>

          {/* Main title area */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 font-mono">
              <span className="block text-white mb-4">
                Turn Your Images Into a
              </span>
              <motion.span
                className="block bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Profitable Website
                <motion.div
                  className="absolute -top-4 -right-4"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-green-400 opacity-70" />
                </motion.div>
              </motion.span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Stop letting your{" "}
              <span className="text-white font-semibold">
                thousands of images
              </span>{" "}
              sit unused. Build a professional image website that generates{" "}
              <span className="text-green-300 font-semibold">
                real Google traffic
              </span>{" "}
              and revenue.
            </motion.p>
          </motion.div>

          {/* CTA buttons area */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA */}
              <motion.button
                className="relative group"
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/15 to-green-500/20 rounded-2xl blur-sm"
                  animate={{
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-green-500/30"
                  animate={{
                    borderColor: [
                      "rgba(34, 197, 94, 0.3)",
                      "rgba(34, 197, 94, 0.5)",
                      "rgba(34, 197, 94, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-black font-mono font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 backdrop-blur-xl shadow-2xl shadow-green-500/20">
                  <div className="flex items-center justify-center gap-3">
                    <Zap className="w-5 h-5" />
                    <span>Start Building Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="relative group"
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gray-700/10 via-gray-600/5 to-gray-700/10 rounded-2xl blur-sm"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-gray-600/20"
                  animate={{
                    borderColor: [
                      "rgba(156, 163, 175, 0.2)",
                      "rgba(156, 163, 175, 0.4)",
                      "rgba(156, 163, 175, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/40 text-gray-200 font-mono font-semibold text-lg px-10 py-5 rounded-2xl transition-all duration-300">
                  <div className="flex items-center justify-center gap-3">
                    <Play className="w-5 h-5" />
                    <span>View Live Demo</span>
                  </div>
                </div>
              </motion.button>
            </div>

            {/* Additional info */}
            <motion.div
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>No coding required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Launch in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>100% Google safe</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              {
                icon: Globe,
                title: "SEO Optimized",
              },
              {
                icon: Shield,
                title: "Google Safe",
              },
              {
                icon: Database,
                title: "Admin Dashboard",
              },
              {
                icon: Zap,
                title: "Launch Ready",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-600/50 flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(34, 197, 94, 0.1)",
                      "0 0 20px rgba(34, 197, 94, 0.2)",
                      "0 0 10px rgba(34, 197, 94, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <feature.icon className="w-4 h-4 text-green-400" />
                </motion.div>
                <span className="font-mono font-medium">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Statistics data */}
          <motion.div
            className="text-center border-t border-gray-800/60 pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$0", label: "Monthly hosting costs" },
                { value: "10K+", label: "Images supported" },
                { value: "< 24h", label: "Launch time" },
                { value: "100%", label: "Google safe" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-green-400 mb-2 font-mono"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(34,197,94,0)",
                        "0 0 15px rgba(34,197,94,0.3)",
                        "0 0 5px rgba(34,197,94,0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
