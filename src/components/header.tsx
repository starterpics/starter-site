"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Header background opacity based on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.5]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerOpacity.get()})`,
        backdropFilter: `blur(${headerBlur.get()}px)`,
        borderBottom: `1px solid rgba(31, 41, 55, ${borderOpacity.get()})`,
      }}
    >
      {/* Top glow line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-green-400/50 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-11 h-11 bg-linear-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-xl font-bold text-white font-mono">
              StarterPics
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-green-300 transition-colors font-mono text-sm py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                </motion.a>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="/docs"
              className="px-5 py-2.5 text-gray-300 hover:text-green-300 transition-colors font-mono text-sm border border-gray-700/50 rounded-full hover:border-green-400/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Documentation
            </motion.a>
            <motion.a
              href="/get-started"
              className="px-6 py-2.5 bg-linear-to-r from-green-600 to-emerald-700 text-white rounded-full font-mono font-medium text-sm shadow-lg shadow-green-500/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 bg-black/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-300 hover:text-green-300 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800/50"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center gap-4 text-gray-300 hover:text-green-300 transition-colors font-mono py-3"
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-6 border-t border-gray-800/50 space-y-4">
              <motion.a
                href="/docs"
                className="block w-full px-5 py-3.5 text-center text-gray-300 border border-gray-700/50 rounded-xl font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Documentation
              </motion.a>
              <motion.a
                href="/get-started"
                className="block w-full px-5 py-3.5 text-center bg-linear-to-r from-green-600 to-emerald-700 text-white rounded-xl font-mono font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

const navItems = [
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
