// components/about/FounderStory.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Crown, Sparkles, Award, Quote } from "lucide-react";

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FounderStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, mass: 0.5 });
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-20%"]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div style={{ x: bgTextX }} className="absolute top-[15%] left-0 whitespace-nowrap text-[15rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 will-change-transform">
        THE FOUNDER
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-0 items-start">
          
          <div className="lg:col-span-7 relative h-[650px] md:h-[900px] w-full">
            <motion.div style={{ y: imageY }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: cinematicEase }} className="absolute top-0 left-0 w-[95%] h-full overflow-hidden rounded-t-[20rem] rounded-br-[15rem] rounded-bl-[2rem] border-[8px] border-white shadow-[0_40px_80px_rgba(200,169,126,0.15)] bg-[#E8DCCB] group will-change-transform">
              <Image src="/images/glam/shivani.jpg" alt="Shivani - Founder Portrait" fill sizes="(max-width: 1024px) 100vw, 60vw" priority className="object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 pointer-events-none z-10 transition-opacity duration-1000 group-hover:opacity-80" />

              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 rounded-[2rem] border border-white/20 bg-black/20 backdrop-blur-2xl p-6 md:p-8 flex items-center gap-5 z-20 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:bg-black/30">
                <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FAF7F2] shrink-0 shadow-inner">
                  <Crown className="w-6 h-6 md:w-8 md:h-8 text-[#C8A97E]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-4xl font-medium text-white mb-1 drop-shadow-sm">Shivani</h3>
                  <p className="text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]">The Visionary Behind Glam Professionals</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 10 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.4, delay: 0.3, ease: cinematicEase }} className="absolute -top-4 -right-4 md:-top-8 md:-right-8 flex flex-col items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-white/60 bg-white/80 backdrop-blur-3xl shadow-[0_30px_60px_rgba(200,169,126,0.15)] z-30 will-change-transform">
              <Award className="w-7 h-7 text-[#C8A97E] mb-1.5" strokeWidth={1.5} />
              <h4 className="font-playfair text-[#2A2520] font-bold text-4xl md:text-5xl mb-1">8+</h4>
              <p className="text-[#5A5045] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-center px-4">Years Mastery</p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative z-30 lg:-ml-12 mt-20 lg:mt-32">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.4, delay: 0.2, ease: cinematicEase }} className="rounded-[2.5rem] md:rounded-[3rem] border border-white/80 bg-white/60 backdrop-blur-3xl p-8 md:p-14 shadow-[0_40px_80px_rgba(200,169,126,0.1)] will-change-transform">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[1px] bg-[#C8A97E]"></span>
                <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Founder's Journey
                </span>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#2A2520]">
                Beauty Is Not Just <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block">Confidence</span>
              </h2>

              <p className="mt-8 md:mt-10 text-sm md:text-base text-[#5A5045] font-light leading-relaxed max-w-lg">
                What started as a profound passion for aesthetics transformed into a luxury artistry journey dedicated to empowering women in Agra through unparalleled elegance, precision techniques, and timeless glam transformations.
              </p>

              <p className="mt-6 ml-0 md:ml-8 pl-5 md:pl-6 border-l-[1.5px] border-[#C8A97E]/30 text-sm md:text-base text-[#5A5045]/80 font-light leading-relaxed max-w-lg">
                Every bridal look, every masterclass at Glam Professionals By Shivani, is crafted with meticulous attention to detail. We believe every woman deserves to feel radiant, confident, and unforgettable on her special day.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.4, delay: 0.4, ease: cinematicEase }} className="mt-12 md:mt-16 px-6 md:px-10 relative will-change-transform">
              <Quote className="absolute -top-4 -left-2 md:-left-4 w-12 h-12 text-[#C8A97E]/15 rotate-180" fill="currentColor" />
              <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl text-[#2A2520] leading-[1.4] italic max-w-md relative z-10">
                "Luxury beauty is not about changing who you are — it’s about enhancing your natural elegance in the most timeless way possible."
              </h3>
              <div className="flex items-center gap-3 mt-6">
                <span className="w-6 h-[1px] bg-[#C8A97E]/50"></span>
                <span className="text-[9px] md:text-[10px] text-[#5A5045] font-bold uppercase tracking-[0.3em]">Shivani, Founder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}