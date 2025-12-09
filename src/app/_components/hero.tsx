"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
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
              <span className="font-mono">Production Ready</span>
            </div>
          </motion.div>

          {/* Main title area */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 font-mono">
              <span className="block text-white mb-4">
                Transform Your Images Into
              </span>
              <motion.span
                className="block bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Revenue-Generating Sites
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
              Professional image websites with{" "}
              <span className="text-green-300 font-semibold">
                SEO optimization
              </span>
              , powerful admin tools, and{" "}
              <span className="text-white font-semibold">
                Google-safe architecture
              </span>
              . Launch in 24 hours.
            </motion.p>
          </motion.div>

          {/* CTA buttons area */}
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <motion.button
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-black font-mono font-bold text-xl px-10 py-4 rounded-xl shadow-lg transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Start Building</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                className="border border-green-400/40 text-green-300 font-mono font-semibold text-lg px-10 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  <span>View Demo</span>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              {
                icon: Globe,
                title: "SEO Ready",
                desc: "Built for search engines",
              },
              {
                icon: Shield,
                title: "Google Safe",
                desc: "Anti-spam architecture",
              },
              {
                icon: Database,
                title: "Full CMS",
                desc: "Complete admin dashboard",
              },
              {
                icon: Zap,
                title: "Fast Deploy",
                desc: "Launch in 24 hours",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-600/50 flex items-center justify-center shadow-lg"
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
                  <feature.icon className="w-6 h-6 text-green-400" />
                </motion.div>
                <h3 className="text-white font-bold text-lg font-mono mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            className="text-center border-t border-gray-800/60 pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$0", label: "Monthly hosting" },
                { value: "10K+", label: "Images capacity" },
                { value: "24h", label: "Launch time" },
                { value: "100%", label: "SEO safe" },
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
