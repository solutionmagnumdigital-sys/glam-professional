// components/testimonials/LuxuryVideoTestimonials.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Sparkles,
  Star,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const NativeInstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const videoTestimonials = [
  {
    image: "/images/glam/glam1 (10).jpeg",
    bride: "Aarushi Sharma",
    title: "Luxury Bridal Reveal",
    desc: "A cinematic bridal transformation experience with flawless HD glam.",
  },
  {
    image: "/images/glam/glam1 (11).jpeg",
    bride: "Simran Kapoor",
    title: "Celebrity Glam Experience",
    desc: "Elegant bridal artistry crafted for luxury wedding photography.",
  },
  {
    image: "/images/glam/glam1 (12).jpeg",
    bride: "Khushi Mehra",
    title: "Royal Wedding Glam",
    desc: "Premium bridal styling with luxury skin finish and editorial beauty.",
  },
  {
    image: "/images/glam/glam1 (13).jpeg",
    bride: "Riya Malhotra",
    title: "Luxury Reception Look",
    desc: "High-fashion bridal glow with cinematic elegance and detailing.",
  },
];

export default function LuxuryVideoTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#C8A97E]/[0.06] blur-[220px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-[#D4B58A]/[0.06] blur-[220px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="text-center max-w-5xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-md px-6 py-2.5 shadow-xs mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
              Real Luxury Experiences
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight"
          >
            Cinematic Stories <br />
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 drop-shadow-xs">
              From Our Luxury Brides
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
            className="mt-6 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Watch real bridal transformations, emotional wedding reveals, and high-fashion makeup closures optimized strictly for elite wedding aesthetics by Shivani in Agra.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch w-full">
          {videoTestimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, delay: index * 0.1, ease: luxuryEase }}
              className="group relative overflow-hidden rounded-[50px] border border-black/[0.04] bg-white flex flex-col shadow-[0_25px_60px_rgba(200,169,126,0.06)] hover:shadow-[0_45px_100px_rgba(200,169,126,0.18)] hover:border-[#C8A97E]/40 transition-all duration-700 hover:-translate-y-2 transform-gpu"
            >
              
              <div className="relative h-[650px] sm:h-[720px] md:h-[780px] overflow-hidden rounded-[48px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520] via-transparent to-transparent opacity-90 transition-all duration-700" />
                <div className="absolute inset-0 border-[0px] group-hover:border-[16px] border-white/10 transition-all duration-700 pointer-events-none z-20" />

                <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20 pointer-events-none">
                  <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2.5 shadow-sm">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white font-semibold flex items-center gap-2">
                      <NativeInstagramIcon className="w-3.5 h-3.5 text-white" />
                      Luxury Reel
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2.5 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-[#C8A97E] fill-[#C8A97E]" />
                    <span className="text-xs font-bold text-white">5.0</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl transition-colors duration-500 group-hover:bg-white group-hover:border-white cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:text-[#2A2520] fill-current ml-1 transition-colors duration-500" />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="rounded-[40px] border border-white/10 bg-[#2A2520]/50 backdrop-blur-2xl p-7 sm:p-9 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1.5px] bg-[#C8A97E]/40" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 w-full">
                      <div className="max-w-xl">
                        <span className="text-[#C8A97E] uppercase tracking-[0.25em] text-[9px] font-bold block mb-1.5">// PRODUCTION READY PRINT</span>
                        <h3 className="font-playfair text-2xl sm:text-3xl font-normal text-white leading-tight tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}