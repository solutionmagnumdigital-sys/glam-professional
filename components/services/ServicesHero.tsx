// components/services/LuxuryServicesHero.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  Crown,
  Star,
  Gem,
  ArrowUpRight,
  Brush,
} from "lucide-react";

const cinematicEase = [0.16, 1, 0.3, 1]; 

const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};
const floatAnimationDelayed = {
  animate: {
    y: [0, 12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
  }
};

export default function LuxuryServicesHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 20, 
    mass: 0.5 
  });

  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-5%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden min-h-screen bg-[#FAF7F2] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[12%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0 will-change-transform"
      >
        SIGNATURE
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/15 blur-[160px] rounded-full mix-blend-multiply will-change-transform" 
        />
        <motion.div 
          style={{ y: bgY2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" 
        />
        <div className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] bg-white/40 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-10 items-center">
          
          <div className="lg:col-span-6 relative z-30 lg:pr-10">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: cinematicEase }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Glam Professionals By Shivani
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: cinematicEase }}
              className="font-playfair text-6xl md:text-7xl lg:text-[6.5rem] font-normal leading-[1.05] tracking-tight"
            >
              Artistry For <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block drop-shadow-sm">
                Timeless Beauty
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: cinematicEase }}
              className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-xl"
            >
              Discover ultra-premium bridal makeup, HD glam transformations, and flawless editorial beauty experiences meticulously crafted at our Sikandra, Agra studio.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: cinematicEase }}
              className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl"
            >
              {[
                "Luxury Bridal Makeup",
                "HD & Airbrush Glam",
                "Premium Hair Styling",
                "Destination Weddings",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-xl hover:bg-white hover:shadow-[0_15px_30px_rgba(200,169,126,0.1)] transition-all duration-500 cursor-default overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-[#C8A97E] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-top" />
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] group-hover:bg-white transition-colors duration-500" />
                  </div>

                  <span className="text-[#2A2520] font-medium text-sm md:text-base tracking-wide group-hover:text-[#C8A97E] transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: cinematicEase }}
              className="mt-14 flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 md:px-12 py-5 bg-[#2A2520] border border-[#2A2520] text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(42,37,32,0.2)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(200,169,126,0.3)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10 flex items-center gap-3">
                  Book Experience
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/50 backdrop-blur-xl px-10 py-5 text-[#2A2520] font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:shadow-[0_15px_30px_rgba(200,169,126,0.1)] hover:-translate-y-1 w-full sm:w-auto"
              >
                View Portfolio
                <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative mt-16 lg:mt-0 w-full h-[600px] md:h-[800px]">
            
            <motion.div 
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: cinematicEase }}
              className="absolute top-0 right-0 w-[95%] h-full overflow-hidden rounded-t-[20rem] rounded-b-[2rem] border-[6px] md:border-[8px] border-white shadow-[0_40px_80px_rgba(200,169,126,0.15)] bg-[#E8DCCB] group will-change-transform"
            >
              <Image
                src="/images/glam/glam1 (2).jpeg"
                alt="Luxury Beauty Transformation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none transition-opacity duration-1000 group-hover:opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 rounded-[2rem] border border-white/20 bg-black/30 backdrop-blur-2xl p-6 md:p-8 flex items-center gap-5 z-20 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:bg-black/40">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/30 shrink-0 shadow-inner">
                  <Brush className="w-6 h-6 md:w-7 md:h-7 text-[#C8A97E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-medium text-white mb-1 drop-shadow-md">
                    Bridal Perfection
                  </h3>
                  <p className="text-white/70 text-[9px] md:text-xs font-bold uppercase tracking-[0.25em]">
                    Signature Glamour
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute top-20 -left-6 md:-left-12 hidden lg:flex items-center gap-4 rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-3xl px-6 py-5 shadow-[0_30px_60px_rgba(200,169,126,0.15)] z-30"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#D4B58A] shadow-md">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <div className="pr-2">
                <h4 className="font-playfair text-[#2A2520] font-bold text-xl leading-none mb-1">
                  Premium Products
                </h4>
                <p className="text-[#5A5045] text-[9px] font-bold uppercase tracking-[0.2em]">
                  International Brands
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={floatAnimationDelayed}
              animate="animate"
              className="absolute top-1/2 -right-6 md:-right-10 hidden lg:flex items-center gap-4 rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-3xl px-6 py-5 shadow-[0_30px_60px_rgba(200,169,126,0.15)] z-30"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2A2520] shadow-md">
                <Star className="w-5 h-5 text-[#C8A97E] fill-[#C8A97E]" />
              </div>
              <div className="pr-2">
                <h4 className="font-playfair text-[#2A2520] font-bold text-xl leading-none mb-1">
                  4.6 Google Rating
                </h4>
                <p className="text-[#5A5045] text-[9px] font-bold uppercase tracking-[0.2em]">
                  Trusted by Agra
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: cinematicEase }}
          className="mt-20 md:mt-32 rounded-[2.5rem] md:rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-10 shadow-[0_40px_100px_rgba(200,169,126,0.1)] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          
          <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-center gap-10 lg:gap-6 relative z-10 divide-y md:divide-y-0 md:divide-x divide-[#C8A97E]/20">
            
            {[
              { number: "500+", label: "Bridal Makeovers" },
              { number: "8+", label: "Years of Mastery" },
              { number: "390+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className={`flex flex-col items-center justify-center w-full md:w-1/3 ${index > 0 ? 'pt-8 md:pt-0' : ''}`}>
                <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-[#2A2520] mb-2">
                  {stat.number}
                </h3>
                <p className="text-[#5A5045] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}