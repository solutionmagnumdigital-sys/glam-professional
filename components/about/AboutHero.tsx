// components/about/AboutHero.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight, Gem } from "lucide-react";

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const imageY1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] pt-40 pb-32 md:pt-48 md:pb-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[15%] left-0 whitespace-nowrap text-[12rem] md:text-[20rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0"
      >
        GLAM PROFESSIONALS
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply" 
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          
          <div className="lg:col-span-6 relative z-30 lg:pr-10">
            <div className="absolute -left-12 top-20 -rotate-90 hidden xl:flex items-center gap-4 text-[#C8A97E] tracking-[0.4em] text-[10px] font-bold uppercase origin-left">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              Agra's Finest Artistry
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-4 h-4 text-[#C8A97E]" />
                <span className="uppercase tracking-[0.3em] text-[#C8A97E] text-[10px] md:text-xs font-bold">
                  The Signature Profile
                </span>
              </div>

              <h1 className="font-playfair text-6xl md:text-7xl lg:text-[7rem] font-normal leading-[0.9] tracking-tight text-[#2A2520] relative z-10">
                Architecting <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] to-[#B59567] ml-0 md:ml-20 inline-block mt-2">
                  Elegance
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
              className="mt-12 md:mt-16 ml-0 md:ml-12 pl-6 md:pl-10 border-l-[1.5px] border-[#C8A97E]/30"
            >
              <p className="text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-md">
                Welcome to Glam Professionals By Shivani, Agra's premier makeup studio. Experience the pinnacle of bespoke bridal transformations, flawless airbrushing, and elite masterclass education tailored to enhance your inner confidence.
              </p>

              <div className="mt-8 space-y-4">
                {["Flawless Bridal Glamour", "High-Fashion Editorials", "4.6 Rated Academy in Agra"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]/40 group-hover:bg-[#C8A97E] transition-colors duration-300" />
                    <span className="text-[#2A2520] font-medium tracking-wide uppercase text-[10px] md:text-xs group-hover:tracking-[0.1em] transition-all duration-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-12 py-5 bg-[#2A2520] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(200,169,126,0.3)] hover:-translate-y-1"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                  <span className="relative z-10 flex items-center gap-3">
                    Reserve Your Date
                    <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative mt-20 lg:mt-0 h-[600px] md:h-[800px] w-full">
            <motion.div 
              style={{ y: imageY1 }}
              className="absolute top-0 right-0 w-[85%] md:w-[75%] h-[80%] md:h-[85%] overflow-hidden rounded-t-full rounded-b-[3rem] border-[6px] border-white shadow-[0_40px_80px_rgba(200,169,126,0.2)] bg-[#E8DCCB] z-10 group"
            >
              <Image
                src="/images/glam/shivani.jpg" 
                alt="Main Artistry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            <motion.div 
              style={{ y: imageY2 }}
              className="absolute bottom-10 left-0 w-[55%] md:w-[45%] aspect-square overflow-hidden rounded-[2rem] border-[8px] border-[#FAF7F2] shadow-[0_30px_60px_rgba(42,37,32,0.15)] bg-white z-20 group"
            >
              <Image
                src="/images/glam/glam1 (2).jpeg" 
                alt="Detail Artistry"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.1]"
              />
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] left-[10%] w-32 h-32 md:w-40 md:h-40 z-30 pointer-events-none drop-shadow-xl"
            >
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                <path id="textPathHero" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                <text className="font-sans font-bold uppercase tracking-[0.25em] text-[#C8A97E] text-[14px]">
                  <textPath href="#textPathHero" startOffset="0%">
                    • GLAM BY SHIVANI • AGRA
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: cinematicEase }}
              className="absolute bottom-0 right-0 md:-right-10 flex items-center gap-4 rounded-full border border-white/60 bg-white/70 backdrop-blur-3xl px-6 py-4 shadow-[0_20px_40px_rgba(200,169,126,0.2)] z-30"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2A2520] shadow-inner">
                <Gem className="w-5 h-5 text-[#C8A97E]" />
              </div>
              <div className="pr-2">
                <h4 className="font-playfair text-[#2A2520] font-bold text-xl leading-none mb-1">
                  Premium
                </h4>
                <p className="text-[#5A5045] text-[9px] font-bold uppercase tracking-[0.2em]">
                  Beauty Studio
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}