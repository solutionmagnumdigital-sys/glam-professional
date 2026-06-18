// components/about/BeautyPhilosophy.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Crown, Sparkles, Star, Gem, HeartHandshake, Flower2, Quote } from "lucide-react";

const philosophyPoints = [
  { icon: Sparkles, title: "Natural Radiance", description: "Enhancing your true essence with luminous, skin-focused luxury artistry." },
  { icon: Crown, title: "Timeless Elegance", description: "Bridal transformations crafted to remain graceful and iconic forever." },
  { icon: HeartHandshake, title: "Bespoke Curation", description: "Every look is uniquely architected to match your persona and occasion." },
  { icon: Gem, title: "Elite Standards", description: "Premium cosmetics, flawless techniques, and elevated beauty experiences." },
];

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const floatAnimation = { animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } } };
const floatAnimationDelayed = { animate: { y: [0, 10, 0], transition: { duration: 5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], delay: 1 } } };

export default function BeautyPhilosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, mass: 0.5 });
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["10%", "-30%"]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-5%", "10%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div style={{ x: bgTextX }} className="absolute top-[20%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 will-change-transform">
        PHILOSOPHY
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 relative">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: cinematicEase }} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
                <Flower2 className="w-3.5 h-3.5" />
                The Core Vision
              </span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.1, ease: cinematicEase }} className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight">
              Beauty Should Feel <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] relative inline-block mt-2">
                Elegant & You
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/50 to-transparent" />
              </span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.2, ease: cinematicEase }} className="mt-10 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-lg">
              We believe true luxury is not about hiding who you are—it’s about enhancing your confidence, natural radiance, and individuality with timeless artistry in Agra.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.4, delay: 0.3, ease: cinematicEase }} className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {philosophyPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl p-8 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(200,169,126,0.15)] hover:bg-white cursor-default">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500 shadow-sm mb-6">
                      <Icon className="w-6 h-6 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-playfair text-2xl text-[#2A2520] group-hover:text-[#C8A97E] transition-colors duration-500 mb-3">{item.title}</h3>
                    <p className="text-xs md:text-sm text-[#5A5045] font-light leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative mt-16 lg:mt-0 lg:pl-10">
            <motion.div style={{ y: imageY }} className="relative w-full aspect-[4/5] overflow-hidden rounded-t-[20rem] rounded-b-[2rem] border-[8px] border-white shadow-[0_40px_80px_rgba(200,169,126,0.15)] bg-[#E8DCCB] will-change-transform">
              <Image src="/images/glam/glam1 (20).jpeg" alt="Luxury Beauty Philosophy" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[3000ms] hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
            </motion.div>

            <motion.div variants={floatAnimation} animate="animate" className="absolute -top-6 -left-6 md:-top-10 md:-left-12 hidden lg:flex items-center gap-5 rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-3xl px-8 py-6 shadow-[0_30px_60px_rgba(200,169,126,0.15)] z-20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#C8A97E] shadow-inner">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-playfair text-[#2A2520] font-bold text-2xl mb-0.5">Timeless</h4>
                <p className="text-[#5A5045] text-[9px] uppercase tracking-[0.2em] font-bold">Luxury Experience</p>
              </div>
            </motion.div>

            <motion.div variants={floatAnimationDelayed} animate="animate" className="absolute bottom-10 -right-6 md:bottom-16 md:-right-12 hidden lg:flex items-center gap-5 rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-3xl px-8 py-6 shadow-[0_30px_60px_rgba(200,169,126,0.15)] z-20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2A2520] shadow-inner">
                <Star className="w-6 h-6 text-[#C8A97E]" />
              </div>
              <div className="pr-2">
                <h4 className="font-playfair text-[#2A2520] font-bold text-2xl mb-0.5">Skin First</h4>
                <p className="text-[#5A5045] text-[9px] uppercase tracking-[0.2em] font-bold">Radiant Natural Glow</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4, ease: cinematicEase }} className="mt-28 md:mt-40 relative rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-16 md:p-20 text-center shadow-[0_40px_100px_rgba(200,169,126,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/30 shadow-inner mb-10">
              <Quote className="w-8 h-8 text-[#C8A97E]" fill="currentColor" />
            </div>
            <h3 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-normal text-[#2A2520] leading-[1.2]">
              "Luxury beauty is about confidence, <br className="hidden md:block" />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E]">elegance, and timeless femininity.</span>"
            </h3>
            <p className="mt-10 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-3xl mx-auto">
              Our absolute mission is to make every woman feel radiant, empowered, and unforgettable through premium beauty artistry and unparalleled personalized experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="w-10 h-[1px] bg-[#C8A97E]/50"></span>
              <span className="text-[10px] md:text-xs text-[#2A2520] font-bold uppercase tracking-[0.3em]">Glam Professionals By Shivani</span>
              <span className="w-10 h-[1px] bg-[#C8A97E]/50"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}