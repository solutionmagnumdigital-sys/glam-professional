// components/portfolio/PortfolioHero.tsx
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Camera, Sparkles } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function PortfolioHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);
  const opacityFade = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A08] text-[#FAF7F2] flex flex-col justify-between"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= BACKGROUND: FULL-BLEED KINETIC CANVAS ================= */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 w-full h-full z-0 will-change-transform"
      >
        <img
          src="/images/glam/glam1 (7).jpeg" 
          alt="High Artistry Lookbook Back"
          className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0A0A08]" />
        <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-[#FAF7F2] to-transparent opacity-10" />
      </motion.div>

      {/* ================= TOP ANCHOR: MINIMAL BRAND SUB-ROW ================= */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-32 flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="flex items-center gap-3"
        >
          <Camera className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-[#C8A97E]">
            Glam Professionals Portfolio
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
          className="hidden md:flex flex-col text-right items-end"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A97E] mb-1">
            Agra's Finest
          </span>
          <span className="font-playfair italic text-sm text-[#FAF7F2]/60 max-w-[180px] leading-tight">
            Curated pieces for elite bridal transformations
          </span>
        </motion.div>
      </div>

      {/* ================= CENTER ANCHOR: TYPOGRAPHIC MATRIX ================= */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center my-auto">
        <motion.div 
          style={{ y: textY, opacity: opacityFade }}
          className="w-full flex flex-col items-center text-center will-change-transform"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-[#C8A97E]">
              The Portfolio Entrance
            </span>
          </div>

          <h1 className="font-playfair text-6xl sm:text-8xl md:text-[7.5rem] lg:text-[9.5rem] font-normal tracking-tight leading-[0.95] text-white">
            THE ART OF <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] font-medium drop-shadow-lg">
              METAMORPHOSIS
            </span>
          </h1>

          <p className="mt-8 text-sm md:text-xl font-light text-[#FAF7F2]/80 max-w-2xl leading-relaxed">
            A continuous curation of luxury bridal edits, editorial fashion statements, and skin-focused high glamour in Agra. Architected for the modern couture woman.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link
              href="#portfolio-gallery"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#FAF7F2] text-[#2A2520] px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 hover:bg-[#C8A97E] hover:text-white hover:-translate-y-1 w-full sm:w-auto"
            >
              Enter Gallery
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-xl px-10 py-5 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-[#2A2520] hover:border-white hover:-translate-y-1 w-full sm:w-auto"
            >
              Reserve Calendar
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM ANCHOR: MINIMAL MATRIC SHEET ================= */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          
          <div className="flex items-center gap-4 text-[#FAF7F2]/40 group cursor-pointer">
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
            >
              <ArrowDown className="w-4 h-4 text-[#C8A97E]" />
            </motion.div>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] group-hover:text-[#C8A97E] transition-colors duration-300">
              Scroll to discover exhibit
            </span>
          </div>

          <div className="flex items-center gap-10 md:gap-16">
            {[
              { val: "500+", title: "Brides" },
              { val: "4.6★", label: "Rating" },
              { val: "100%", title: "Luxury" }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-baseline gap-2">
                <span className="font-playfair text-xl md:text-2xl text-white">{stat.val}</span>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-[#C8A97E]">{stat.title || stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}