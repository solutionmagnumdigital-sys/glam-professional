// components/testimonials/TestimonialsHero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  ArrowUpRight,
  Star,
  Heart,
  Quote,
  Gem,
  BadgeCheck,
  HeartHandshake, // <-- Ye import miss ho gaya tha
} from "lucide-react";

// Master High-Tier Luxurious Cubic Bezier
const luxuryEase = [0.16, 1, 0.3, 1];

const floatingReviews = [
  {
    name: "Aarushi",
    review: "Absolutely Luxury Experience",
    image: "/images/glam/glam1 (14).jpeg",
    position: "top-[10%] left-[4%]",
    delay: 0,
  },
  {
    name: "Simran",
    review: "Best Bridal Makeup Artist",
    image: "/images/glam/glam1 (15).jpeg",
    position: "top-[16%] right-[6%]",
    delay: 1.5,
  },
  {
    name: "Khushi",
    review: "Felt Like A Celebrity Bride",
    image: "/images/glam/glam1 (1).jpeg",
    position: "bottom-[14%] left-[8%]",
    delay: 0.8,
  },
  {
    name: "Riya",
    review: "Premium & Elegant Service",
    image: "/images/glam/glam1 (2).jpeg",
    position: "bottom-[16%] right-[8%]",
    delay: 2.2,
  },
];

export default function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] min-h-screen flex items-center py-36 md:py-52 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      {/* Editorial Luxury Google Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= EXTRA LARGE ROYAL BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[1100px] h-[1100px] bg-[#C8A97E]/[0.08] blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[1100px] h-[1100px] bg-[#D4B58A]/[0.08] blur-[240px] rounded-full" />
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        {/* Geometric Atelier Grid Lines */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:130px_130px]" />
      </div>

      {/* ================= COUTURE FLOATING INTERACTIVE CARDS ================= */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none z-10">
        {floatingReviews.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -22, 0],
            }}
            transition={{
              opacity: { duration: 1.5, delay: index * 0.2, ease: luxuryEase },
              scale: { duration: 1.5, delay: index * 0.2, ease: luxuryEase },
              y: {
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }
            }}
            className={`absolute ${item.position} pointer-events-auto rounded-[35px] border border-[#C8A97E]/30 bg-white/70 backdrop-blur-xl p-6 w-[320px] shadow-[0_30px_70px_rgba(200,169,126,0.12)] hover:shadow-[0_40px_90px_rgba(200,169,126,0.22)] hover:border-[#C8A97E]/60 transition-all duration-500 group transform hover:-translate-y-2 cursor-pointer`}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-black/[0.04] shadow-inner">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div>
                <h4 className="font-playfair text-lg font-medium text-[#2A2520]">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 text-[#C8A97E] fill-[#C8A97E]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 font-light text-sm text-[#5A5045] leading-relaxed italic">
              “{item.review}”
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= MAIN CONTAINER SYSTEM ================= */}
      <div className="relative z-20 max-w-[1750px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 w-full">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* --- TOP BADGE CREST --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="inline-flex items-center gap-3.5 rounded-full border border-[#C8A97E]/30 bg-white/80 backdrop-blur-md px-7 py-3 shadow-xs mb-10"
          >
            <Sparkles className="w-4 h-4 text-[#C8A97E]" />
            <span className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-[#C8A97E] font-bold">
              Luxury Client Experiences
            </span>
          </motion.div>

          {/* --- HEADING DESIGN WITH GRADIENT MASKS --- */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]"
          >
            Trusted By Agra's <br />
            <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-3 pb-2 drop-shadow-sm">
              Elite Brides
            </span>
            <span className="block mt-2 text-[#2A2520] text-3xl sm:text-5xl md:text-6xl pt-2">
              Glam Professionals By Shivani
            </span>
          </motion.h1>

          {/* --- REFINED TEXT MANIFESTO --- */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="mt-10 text-base sm:text-xl md:text-2xl text-[#5A5045] font-light leading-relaxed max-w-4xl mx-auto"
          >
            Discover real stories from bespoke brides, high-fashion editorial icons, and academy alumni who experienced cinematic transformations under Agra's Best Makeup Artist.
          </motion.p>

          {/* --- HIGH-TICKET GOLD STAR ARRAYS --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: luxuryEase }}
            className="mt-14 flex items-center justify-center gap-4"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2A2520] shadow-[0_15px_40px_rgba(42,37,32,0.15)] cursor-pointer"
              >
                <Star className="w-5 h-5 text-[#C8A97E] fill-[#C8A97E]" />
              </motion.div>
            ))}
          </motion.div>

          {/* --- DETAILED ATELIER METRICS GRID --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: luxuryEase }}
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {[
              { icon: Crown, title: "500+", subtitle: "Bespoke Royal Brides" },
              { icon: Star, title: "4.6 / 5.0", subtitle: "Google Rating Metrics" },
              { icon: HeartHandshake, title: "390+", subtitle: "Happy Clients in Agra" },
              { icon: Gem, title: "8+ Years", subtitle: "High Mastery Experience" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[40px] border border-black/[0.04] bg-white p-8 transition-all duration-700 hover:border-[#C8A97E]/50 hover:bg-white hover:shadow-[0_30px_70px_rgba(200,169,126,0.1)] hover:-translate-y-1.5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2A2520] shadow-sm transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                    </div>

                    <h3 className="font-playfair mt-6 text-3xl sm:text-4xl font-normal text-[#2A2520] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#5A5045] font-light tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* --- ACTION CTA TRIGGERS (With Sliding Hover Overlays) --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: luxuryEase }}
            className="mt-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 w-full"
          >
            {/* Primary Action Button */}
            <Link
              href="/contact"
              className="group relative h-20 px-12 rounded-full bg-[#2A2520] border border-[#2A2520] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_rgba(200,169,126,0.25)] w-full sm:w-auto shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em]">
                <span>Book Your Luxury Experience</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-transform duration-500 group-hover:rotate-45" strokeWidth={2} />
              </span>
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="/bridal-portfolio"
              className="group relative h-20 px-12 rounded-full border border-black/[0.06] bg-white flex items-center justify-center transition-all duration-500 hover:border-[#C8A97E] hover:shadow-[0_20px_50px_rgba(200,169,126,0.12)] w-full sm:w-auto shadow-xs transform hover:-translate-y-0.5 active:scale-[0.99]"
            >
              <span className="relative z-10 flex items-center gap-3 text-[#2A2520] font-bold text-xs uppercase tracking-[0.18em] transition-colors duration-500 group-hover:text-[#C8A97E]">
                <Quote className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                <span>View Client Transformations</span>
              </span>
            </Link>
          </motion.div>

          {/* --- BOTTOM SYMMETRICAL TRUST STRIP --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: luxuryEase }}
            className="mt-24 rounded-[40px] border border-[#C8A97E]/40 bg-white shadow-[0_30px_80px_rgba(200,169,126,0.08)] p-6 md:p-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2A2520] shadow-md shrink-0">
                  <BadgeCheck className="w-5 h-5 text-[#C8A97E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-normal text-[#2A2520] tracking-tight">
                    Premium Registered Luxury Atelier Brand
                  </h4>
                  <p className="mt-0.5 text-xs text-[#5A5045] font-light tracking-wide">
                    Globally recognized and trusted by high-ticket influencers and luxury wedding studios in Agra.
                  </p>
                </div>
              </div>

              <Link
                href="/services"
                className="group relative h-16 px-9 rounded-full bg-[#FAF7F2] border border-black/[0.06] flex items-center justify-center font-bold text-xs uppercase tracking-[0.18em] shadow-xs transition-all duration-500 hover:bg-[#2A2520] hover:text-white hover:border-[#2A2520] shrink-0 w-full sm:w-auto transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A97E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}