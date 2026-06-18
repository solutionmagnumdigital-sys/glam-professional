// components/academy/LuxuryCoursesShowcase.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  ArrowUpRight,
  Clock3,
  ShieldCheck,
  GraduationCap,
  Gem,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const courses = [
  {
    id: "LUX-CRS-01",
    title: "Luxury Bridal Mastery",
    subtitle: "Celebrity Bridal Makeup Program",
    image: "/images/glam/glam1 (2).jpeg",
    duration: "3 Months",
    students: "1200+ Alumni",
    level: "Advanced Elite",
    tagline: "Master high-end traditional heritage bridal application metrics and micro-contour architecture.",
    features: ["Palace Wedding Exposure", "Cosmetic Chemistry Analytics", "Dupatta Setting Layouts"]
  },
  {
    id: "LUX-CRS-02",
    title: "HD & Airbrush Makeup",
    subtitle: "Editorial & Camera Finish Techniques",
    image: "/images/glam/glam1 (3).jpeg",
    duration: "2 Months",
    students: "900+ Alumni",
    level: "Professional Elite",
    tagline: "Learn micro-atomized fluid spray application optimized strictly for cinematic digital capture lenses.",
    features: ["Cinematic Texture Blurring", "Heavy Strobe Lighting Safety", "Glass Skin Canvas Methods"]
  },
  {
    id: "LUX-CRS-03",
    title: "Luxury Hair Styling",
    subtitle: "Bridal Hairstyling & Texture Design",
    image: "/images/glam/glam1 (4).jpeg",
    duration: "45 Days",
    students: "700+ Alumni",
    level: "Intermediate Mastery",
    tagline: "Architect classic Hollywood waves, upscale royal crown buns, and fine texture element controls.",
    features: ["Extension Structural Anchoring", "Volume Extension Mapping", "Velvet Spray Sculpting"]
  },
  {
    id: "LUX-CRS-04",
    title: "Self Makeup Masterclass",
    subtitle: "Personal Glam & Beauty Confidence",
    image: "/images/glam/glam1 (5).jpeg",
    duration: "15 Days",
    students: "1500+ Alumni",
    level: "Beginner Portfolio",
    tagline: "Configure your personal signature look utilizing high-fashion cosmetic profiles tailored for you.",
    features: ["Personal Profiling Matrix", "Day-To-Night Transit Layers", "Symmetric Brow Architecting"]
  },
];

export default function LuxuryCoursesShowcase() {
  const [activePanel, setActivePanel] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-40 text-[#2A2520] w-full z-10 select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#C8A97E]/[0.06] blur-[220px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#D4B58A]/[0.06] blur-[220px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/60 backdrop-blur-xl px-6 py-2.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
              Glam Professionals Academy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
            className="mt-8 font-playfair text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight"
          >
            Curated Curriculums In <br />
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 drop-shadow-xs">
              Elite Beauty Masterclasses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="mt-6 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore luxury makeup artistry systems structured meticulously by Shivani to transform passionate learners into internationally accredited, high-ticket beauty designers.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 min-h-[640px] md:min-h-[720px] w-full items-stretch">
          {courses.map((course, index) => {
            const isActive = activePanel === index;

            return (
              <motion.div
                key={course.id || index}
                onMouseEnter={() => setActivePanel(index)}
                onClick={() => setActivePanel(index)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: luxuryEase }}
                className={`relative overflow-hidden rounded-[40px] border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-6 md:p-8 lg:p-12 cursor-pointer ${
                  isActive 
                    ? "flex-[3] bg-white border-[#C8A97E]/30 shadow-[0_40px_100px_rgba(200,169,126,0.18)]" 
                    : "flex-[0.7] lg:max-w-[180px] bg-white/20 border-black/[0.04] hover:border-[#C8A97E]/40"
                }`}
              >
                <div className="absolute inset-0 anonymity-layer z-0 overflow-hidden rounded-[38px]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className={`object-cover object-center transition-transform duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "scale-[1.04] contrast-[1.02]" : "scale-100 opacity-60 contrast-[0.9]"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={index === 0}
                  />
                  <div className={`absolute inset-0 transition-all duration-1000 ${
                    isActive 
                      ? "bg-gradient-to-t from-[#2A2520] via-[#2A2520]/40 to-transparent opacity-95" 
                      : "bg-[#FAF7F2]/80 backdrop-blur-[2px] hover:opacity-75"
                  }`} />
                </div>

                <div className={`absolute inset-0 flex flex-col justify-between p-8 z-10 transition-all duration-700 select-none pointer-events-none items-center lg:items-start ${
                  isActive ? "opacity-0 invisible scale-95 translate-y-4" : "opacity-100 visible scale-100 translate-y-0"
                }`}>
                  <div className="w-10 h-10 rounded-full bg-[#2A2520] border border-[#C8A97E]/20 flex items-center justify-center shadow-md">
                    <span className="text-[#C8A97E] font-medium text-xs font-serif">0{index + 1}</span>
                  </div>
                  
                  <div className="hidden lg:block origin-left transform rotate-90 translate-x-3.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em] text-[#2A2520]/60">
                    {course.title}
                  </div>

                  <div className="rounded-full border border-black/10 bg-white/60 px-4 py-1.5 backdrop-blur-md">
                    <span className="text-[#2A2520] text-[9px] font-bold uppercase tracking-wider">{course.duration}</span>
                  </div>
                </div>

                <div className={`relative z-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end w-full h-full ${
                  isActive ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-12 invisible max-h-0 overflow-hidden"
                }`}>
                  
                  <div className="flex flex-wrap items-center gap-2.5 mb-6 select-none pointer-events-none">
                    <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-4 py-1.5 shadow-xs">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-white font-semibold">{course.level}</span>
                    </div>
                    <div className="rounded-full border border-[#C8A97E]/30 bg-[#2A2520]/80 backdrop-blur-xl px-4 py-1.5 shadow-sm">
                      <span className="text-[10px] uppercase tracking-[0.12em] text-[#C8A97E] font-semibold">{course.students}</span>
                    </div>
                  </div>

                  <p className="text-[#C8A97E] font-serif text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5">// ACADEMY INDEX: 0{index + 1}</p>
                  <p className="text-white/70 uppercase tracking-[0.2em] text-[11px] font-medium mb-2">{course.subtitle}</p>
                  
                  <h3 className="font-playfair text-3xl md:text-5xl font-normal leading-tight text-white tracking-tight">
                    {course.title}
                  </h3>

                  <p className="text-xs md:text-sm text-white/80 font-light leading-relaxed mt-4 max-w-xl">
                    {course.tagline}
                  </p>

                  <div className="mt-6 grid sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-3xl">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 relative py-1 group/line cursor-default">
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C8A97E]/50 transition-all duration-500 group-hover/line:w-full" />
                        
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 shadow-md transition-colors duration-300 group-hover/line:bg-[#C8A97E]/30">
                          {i === 0 ? <Gem className="w-3.5 h-3.5 text-[#C8A97E]" strokeWidth={1.5} /> : i === 1 ? <GraduationCap className="w-3.5 h-3.5 text-[#C8A97E]" strokeWidth={1.5} /> : <ShieldCheck className="w-3.5 h-3.5 text-[#C8A97E]" strokeWidth={1.5} />}
                        </div>
                        <span className="text-xs font-light text-white/90 tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 w-full">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-xs">
                      <Clock3 className="w-4 h-4 text-[#C8A97E]" />
                      <span className="text-white font-medium text-xs uppercase tracking-wider">{course.duration}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="group relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3.5 text-[#2A2520] text-xs font-bold uppercase tracking-[0.18em] shadow-[0_15px_35px_rgba(42,37,32,0.2)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(200,169,126,0.3)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                        <span>Enroll Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A97E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </span>
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}