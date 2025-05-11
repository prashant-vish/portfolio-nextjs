"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 overflow-hidden bg-background">
      {/* Background Effects - similar to contact section for consistency */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/2 to-primary/5 mix-blend-normal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.7))]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6"
          >
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Prashant Vishwakarma. All rights reserved.
            </div>

            {/* Made with love */}
            <div className="text-gray-400 text-sm flex items-center">
              Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-primary animate-pulse" />{" "}
              using Next.js
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
