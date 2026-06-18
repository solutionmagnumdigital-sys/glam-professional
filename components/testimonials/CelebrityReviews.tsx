// components/testimonials/CelebrityReviews.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const CustomInstagramIcon = ({ className }: { className?: string }) => (
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

const celebrityReviews = [
  {
    name: "Riya Kapoor",
    role: "Fashion Influencer",
    image: "/images/glam/glam1 (1).jpeg",
    quote: "This wasn’t just makeup — it was a luxury beauty experience crafted with absolute perfection by Shivani.",
    followers: "1.2M Followers",
  },
  {
    name: "Aaradhya Mehta",
    role: "Celebrity Bride",
    image: "/images/glam/glam1 (2).jpeg",
    quote: "The bridal glam looked flawless, glowing, and radiant in every cinematic wedding lens shot.",
    followers: "850K Followers",
  },
  {
    name: "Simran Khanna",
    role: "Beauty Creator",
    image: "/images/glam/glam1 (3).jpeg",
    quote: "Absolutely premium artistry in Agra. The micro-contour detailing and glass skin textures were unreal.",
    followers: "640K Followers",
  },
  {
    name: "Meera Rajput",
    role: "Vogue Elite Model",
    image: "/images/glam/glam1 (4).jpeg",
    quote: "The deep twilight blending and velvet textures remained sharp and pristine throughout the show.",
    followers: "920K Followers",
  },
  {
    name: "Ananya Panday",
    role: "Bespoke High Client",
    image: "/images/glam/glam1 (5).jpeg",
    quote: "An elite experience matching classic European boutique standards. Meticulous skin preparation.",
    followers: "2.1M Followers",
  },
  {
    name: "Isha Ambani",
    role: "Heritage Bride Look",
    image: "/images/glam/glam1 (6).jpeg",
    quote: "Masterful dupatta layout setting combined with high-end premium cosmetic chemistry profiles.",
    followers: "1.5M Followers",
  },
];

const doubledReviews = [...celebrityReviews, ...celebrityReviews];

export default function CelebrityReviews() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 md:pt-20 pb-28 md:pb-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= EXTRA LARGE ROYAL BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-[#C8A97E]/[0.05] blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#D4B58A]/[0.05] blur-[240px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative z-10 w-full mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-20 px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-md px-6 py-2.5 shadow-xs mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
              Celebrity & Influencer Reviews
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight"
          >
            Trusted By Agra's <br />
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 drop-shadow-xs">
              Elite Brides & Influencers
            </span>
          </motion.h2>
        </div>

        {/* ================= AUTOMATIC INFINITE SLIDING MARQUEE TRACK ================= */}
        <div className="relative overflow-hidden w-full flex py-4 mask-vignette-effect">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent z-20 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent z-20 pointer-events-none hidden md:block" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 45,
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
            className="flex gap-6 shrink-0 w-max px-4"
          >
            {doubledReviews.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[40px] border border-black/[0.04] bg-white flex flex-col justify-between shadow-[0_15px_40px_rgba(200,169,126,0.03)] hover:shadow-[0_30px_70px_rgba(200,169,126,0.12)] transition-all duration-700 hover:-translate-y-1.5 transform-gpu w-[310px] sm:w-[350px]"
              >
                <div>
                  <div className="relative h-[340px] sm:h-[360px] overflow-hidden rounded-t-[38px] w-full bg-[#fcfbfa]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top transition-transform duration-[2500ms] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 350px"
                      priority={index < 3}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520]/90 via-[#2A2520]/10 to-transparent opacity-85 transition-opacity duration-700" />
                    <div className="absolute inset-0 border-[0px] group-hover:border-[10px] border-white/5 transition-all duration-700 pointer-events-none z-20" />
                    
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                      <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-2 shadow-xs">
                        <span className="text-[9px] uppercase tracking-[0.22em] text-white font-semibold flex items-center gap-2">
                          <CustomInstagramIcon className="w-3 h-3 text-pink-400" />
                          Verified Account
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C8A97E] to-[#D4B58A] flex items-center justify-center shadow-md">
                        <BadgeCheck className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                      <div className="rounded-[25px] border border-white/10 bg-[#2A2520]/50 backdrop-blur-2xl p-4 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[1.5px] bg-[#C8A97E]/30" />
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-[8px] font-bold block mb-1">// GLAM BY SHIVANI</span>
                            <h3 className="font-playfair text-lg sm:text-xl font-normal text-white tracking-tight leading-none">
                              {item.name}
                            </h3>
                            <p className="text-white/60 text-[10px] font-light mt-1">
                              {item.role} • <span className="text-[#C8A97E] font-medium">{item.followers}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-6 md:p-8 pb-3">
                    <p className="text-xs sm:text-sm text-[#5A5045] font-light leading-relaxed italic relative z-10">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}