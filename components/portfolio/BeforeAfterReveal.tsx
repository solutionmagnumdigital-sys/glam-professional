// components/portfolio/BeforeAfterReveal.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  Crown,
  MoveHorizontal,
  Star,
  ShieldCheck,
  Gem,
  Award,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function BeforeAfterReveal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layoutRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // ================= HARDWARE ACCELERATED SPRING PHYSICS ================= //
  const { scrollYProgress } = useScroll({
    target: layoutRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-25%"]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    if (position < 0 || position > 100) return;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section
      ref={layoutRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-32 md:py-52 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Massive Parallax Background String */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[12%] left-0 whitespace-nowrap text-[15rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 will-change-transform select-none"
      >
        THE METAMORPHOSIS
      </motion.div>

      {/* Soft Grain Backdrop Noise Layer */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* ================= EDITORIAL TOP HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Interactive Reveal
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <h2 className="font-playfair text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight text-[#2A2520]">
            Witness The Power Of <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
              Bridal Transformation
            </span>
          </h2>
          
          <p className="mt-8 text-sm md:text-lg font-light text-[#5A5045] max-w-2xl leading-relaxed">
            Experience flawless bridal artistry by Shivani through our curated interactive canvas, showcasing real skin textures, precision lining, and high-fashion symmetry.
          </p>
        </div>

        {/* ================= THE INTERACTIVE REVEAL CORE CANVAS ================= */}
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#E8DCCB] border-[6px] md:border-[10px] border-white shadow-[0_40px_90px_rgba(200,169,126,0.16)]">
          
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="relative h-[520px] md:h-[760px] lg:h-[820px] overflow-hidden cursor-ew-resize select-none"
          >
            {/* --- BEFORE LAYER --- */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/glam/glam1 (1).jpeg" 
                alt="Before Artistry"
                fill
                priority
                className="object-cover object-center md:object-[center_20%]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 rounded-full border border-white/30 bg-black/30 backdrop-blur-md px-5 py-2.5">
                <span className="text-white text-[9px] font-bold uppercase tracking-[0.25em]">Canvas Before</span>
              </div>
            </div>

            {/* --- AFTER LAYER (CLIPPED VIEWPORT Matrix) --- */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/images/glam/glam1 (2).jpeg" 
                alt="After Artistry"
                fill
                priority
                className="object-cover object-center md:object-[center_20%]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 rounded-full border border-[#C8A97E]/40 bg-white/20 backdrop-blur-md px-5 py-2.5">
                <span className="text-white text-[9px] font-bold uppercase tracking-[0.25em]">Artistry After</span>
              </div>
            </div>

            {/* --- THE CENTRIC LIQUID SPLIT TRACKER --- */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="relative h-full w-[2px] bg-white shadow-[0_0_15px_rgba(200,169,126,0.8)]">
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/80 bg-white/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-300 ${isDragging ? "scale-110 bg-white/40" : "scale-100"}`}
                >
                  <MoveHorizontal className="w-5 h-5 text-white drop-shadow-sm" strokeWidth={1.5} />
                  <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* --- FOOT COVER TEXT SPEC SHEET OVERLAY --- */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-none">
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/20 backdrop-blur-md px-4 py-2">
                  <Crown className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold">Celebrity Bridal Glam</span>
                </div>
                <h3 className="mt-4 font-playfair text-3xl md:text-5xl font-normal text-white drop-shadow-md">
                  Luxury HD Bridal Finish
                </h3>
              </div>
              <p className="text-white/70 font-light text-xs md:text-sm max-w-xs leading-relaxed drop-shadow-sm hidden md:block">
                Premium bridal architecture designed to generate a weightless, highly photographic velvet skin finish at Glam Professionals.
              </p>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM METRIC SPEC CARDS ================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: Gem,
              title: "HD Luxury Finish",
              desc: "Skin-perfect micro bridal makeup layers optimized specifically for cinematic ultra-high-definition lenses.",
            },
            {
              icon: ShieldCheck,
              title: "Premium Products Only",
              desc: "Exclusively tailored with world-class international formulations (Chanel, Dior, Charlotte Tilbury) for absolute skin safety.",
            },
            {
              icon: Award,
              title: "Celebrity-Level Glam",
              desc: "High-end bespoke facial mapping technique crafted to emphasize your signature profile features organically.",
            },
          ].map((item, index) => {
            const SpecIcon = item.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/40 backdrop-blur-xl p-8 transition-all duration-700 hover:bg-white hover:shadow-[0_30px_60px_rgba(200,169,126,0.12)] hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 mb-6 group-hover:bg-[#C8A97E] transition-colors duration-500 shadow-sm">
                  <SpecIcon className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                <h3 className="font-playfair text-2xl font-medium text-[#2A2520] mb-3 transition-colors duration-300 group-hover:text-[#C8A97E]">
                  {item.title}
                </h3>
                
                <p className="text-[#5A5045] font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}