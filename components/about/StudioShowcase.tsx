// components/about/StudioShowcase.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Crown, Sparkles, Camera, Gem, Award, Star } from "lucide-react";

const studioImages = [
  { src: "/images/glam/glam1 (9).jpeg", title: "Luxury Bridal Studio", subtitle: "Elegant Glam Experience in Agra", height: "h-[500px] md:h-[700px]", span: "col-span-1" },
  { src: "/images/glam/glam1 (10).jpeg", title: "Premium Vanity Setup", subtitle: "Luxury Beauty Space", height: "h-[600px] md:h-[800px]", span: "col-span-1" },
  { src: "/images/glam/glam1 (11).jpeg", title: "Professional Academy", subtitle: "4.6 Rated Beauty Education", height: "h-[700px] md:h-[900px]", span: "col-span-1 md:col-span-2" },
  { src: "/images/glam/glam1 (12).jpeg", title: "Luxury Makeup Lounge", subtitle: "Sikandra Studio Experience", height: "h-[700px] md:h-[900px]", span: "col-span-1" },
];

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function StudioShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, mass: 0.5 });
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-35%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div style={{ x: bgTextX }} className="absolute top-[10%] left-0 whitespace-nowrap text-[12rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0 will-change-transform">
        THE ATELIER
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: cinematicEase }} className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" /> The Grand Studio
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }} className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]">
            A Premium Space Designed <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block">For Luxury Beauty</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }} className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl">
            Step into our sanctuary of elegance in Sikandra, Agra. Our atelier is thoughtfully architected to provide an exclusive environment for elite bridal transformations and professional masterclasses.
          </motion.p>
        </div>

        <div className="mt-20 md:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <div className="flex flex-col gap-6 lg:gap-10">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }} className={`group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[#E8DCCB] border-[6px] border-white shadow-[0_30px_60px_rgba(200,169,126,0.15)] ${studioImages[0].height} w-full`}>
                <Image src={studioImages[0].src} alt={studioImages[0].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C8A97E]/30 bg-white/10 backdrop-blur-md shadow-inner shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500">
                      <Crown className="w-6 h-6 md:w-7 md:h-7 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-playfair text-3xl font-medium text-white mb-1 drop-shadow-md">{studioImages[0].title}</h3>
                      <p className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em]">{studioImages[0].subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: 0.3, ease: cinematicEase }} className={`group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[#E8DCCB] border-[6px] border-white shadow-[0_30px_60px_rgba(200,169,126,0.15)] ${studioImages[3].height} w-full`}>
                <Image src={studioImages[3].src} alt={studioImages[3].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C8A97E]/30 bg-white/10 backdrop-blur-md shadow-inner shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500">
                      <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-playfair text-3xl font-medium text-white mb-1 drop-shadow-md">{studioImages[3].title}</h3>
                      <p className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em]">{studioImages[3].subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-6 lg:gap-10 md:mt-24">
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }} className={`group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[#E8DCCB] border-[6px] border-white shadow-[0_30px_60px_rgba(200,169,126,0.15)] ${studioImages[1].height} w-full`}>
                <Image src={studioImages[1].src} alt={studioImages[1].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="font-playfair text-2xl font-medium text-white mb-1 drop-shadow-md">{studioImages[1].title}</h3>
                  <p className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em]">{studioImages[1].subtitle}</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }} className={`group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[#E8DCCB] border-[6px] border-white shadow-[0_30px_60px_rgba(200,169,126,0.15)] ${studioImages[2].height} w-full`}>
                <Image src={studioImages[2].src} alt={studioImages[2].title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className="font-playfair text-2xl font-medium text-white mb-1 drop-shadow-md">{studioImages[2].title}</h3>
                  <p className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em]">{studioImages[2].subtitle}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5, ease: cinematicEase }} className="mt-28 md:mt-40 rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-12 md:p-14 shadow-[0_40px_100px_rgba(200,169,126,0.1)] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10 divide-y md:divide-y-0 md:divide-x divide-[#C8A97E]/20">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 mb-6 shadow-sm">
                <Gem className="w-6 h-6 text-[#C8A97E]" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-[#2A2520] mb-3">Premium Ambience</h3>
              <p className="text-sm text-[#5A5045] font-light leading-relaxed max-w-xs mx-auto md:mx-0">Designed with feminine luxury aesthetics for an elevated and highly comfortable beauty experience.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0 md:pl-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 mb-6 shadow-sm">
                <Award className="w-6 h-6 text-[#C8A97E]" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-[#2A2520] mb-3">Professional Setup</h3>
              <p className="text-sm text-[#5A5045] font-light leading-relaxed max-w-xs mx-auto md:mx-0">Industry-grade beauty stations and flawless lighting environment for precision makeup artistry.</p>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-10 md:pt-0 md:pl-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 mb-6 shadow-sm">
                <Star className="w-6 h-6 text-[#C8A97E]" strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-[#2A2520] mb-3">Luxury Experience</h3>
              <p className="text-sm text-[#5A5045] font-light leading-relaxed max-w-xs mx-auto md:mx-0">Every detail meticulously crafted to make you feel confident, radiant, and deeply pampered.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}