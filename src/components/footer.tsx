"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  Shield,
  Twitter,
  Zap,
} from "lucide-react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="relative py-20 overflow-hidden border-t border-gray-800/50"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-gray-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.05),transparent_70%)]" />

      {/* Top glow line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-green-400/40 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-mono">
                  StarterpicsAI
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Enterprise-grade AI image monetization platform designed for{" "}
                <span className="text-green-300 font-medium">
                  professional developers
                </span>{" "}
                who demand excellence.
              </p>

              {/* Features highlight */}
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 font-mono">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white font-mono mb-6 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-green-400" />
              Quick Access
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-300 transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <link.icon className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                  <span className="text-sm font-mono">{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white font-mono mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4 text-green-400" />
              Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-300 transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-black/50 rounded-lg flex items-center justify-center border border-gray-700/50 group-hover:border-green-400/50 transition-colors">
                    <social.icon className="w-4 h-4 group-hover:text-green-400 transition-colors" />
                  </div>
                  <span className="text-sm font-mono">{social.label}</span>
                </motion.a>
              ))}

              {/* Contact CTA */}
              <motion.div
                className="pt-4 border-t border-gray-800/50"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  href="mailto:contact@starterpics.ai"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-green-600 to-emerald-700 text-white rounded-full font-mono font-medium text-sm shadow-lg shadow-green-500/20"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3 h-3" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
              <span>© 2024 StarterpicsAI. Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <Heart className="w-4 h-4 text-red-400" />
              </motion.div>
              <span>for developers.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-green-300 transition-colors font-mono"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-gray-500 font-mono">
                All systems operational
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            suppressHydrationWarning
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </footer>
  );
}

const highlights = [
  "Enterprise Security & Compliance",
  "Global CDN & Edge Distribution",
  "Real-time Analytics Dashboard",
  "API-first Architecture",
];

const quickLinks = [
  { label: "Documentation", href: "/docs", icon: Code2 },
  { label: "API Reference", href: "/api", icon: Zap },
  { label: "Security", href: "/security", icon: Shield },
  { label: "Status Page", href: "/status", icon: Globe },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];
