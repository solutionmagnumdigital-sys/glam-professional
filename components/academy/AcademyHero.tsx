// components/academy/AcademyHero.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  PlayCircle,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1]; 

export default function LuxuryAcademyHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 45, 
    damping: 22, 
    mass: 0.5 
  });

  const bgTextX = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);
  const imageParallaxY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);
  const textBlockY = useTransform(smoothProgress, [0, 1], ["0%", "8%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#FAF7F2] flex items-center pt-36 pb-24 md:pt-48 md:pb-32 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[18%] left-0 whitespace-nowrap text-[15rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 select-none will-change-transform"
      >
        THE ACADEMY MATRIC
      </motion.div>

      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          <motion.div style={{ y: textBlockY }} className="lg:col-span-6 relative z-10 will-change-transform">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Glam Professionals By Shivani
              </span>
            </motion.div>

            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]">
              Build Your Career In <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-1 drop-shadow-sm">
                Luxury Makeup Artistry
              </span>
            </h1>

            <p className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-xl">
              Master fine bridal application, advanced micro-atomized airbrush finishes, and luxury portfolio architecting at Agra's top-rated 4.6 star academy. Our immersive masterclasses are meticulously structured to configure raw talent into industry-recognized beauty professionals.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
              {[
                { icon: Award, text: "Global Premium Accreditation" },
                { icon: BookOpen, text: "Live Practical Studio Layouts" },
                { icon: Users, text: "Celebrity Client Management Guides" },
                { icon: Sparkles, text: "High-End Portfolio Shoot Assisting" }
              ].map((spec, i) => {
                const SpecIcon = spec.icon;
                return (
                  <div key={i} className="flex items-center gap-3.5 group">
                    <div className="w-8 h-8 rounded-full border border-[#C8A97E]/30 bg-white flex items-center justify-center shadow-sm group-hover:bg-[#2A2520] group-hover:border-[#2A2520] transition-colors duration-500">
                      <SpecIcon className="w-3.5 h-3.5 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium tracking-wide text-[#5A5045] group-hover:text-[#2A2520] transition-colors duration-300">{spec.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-12 py-5 bg-[#2A2520] border border-[#2A2520] text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(42,37,32,0.18)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(200,169,126,0.25)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10 flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-500" />
                  Enroll Now
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              <Link
                href="/academy-gallery"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/50 backdrop-blur-xl px-10 py-5 text-[#2A2520] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:shadow-md hover:-translate-y-1 w-full sm:w-auto"
              >
                <PlayCircle className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                <span>Explore Academy</span>
              </Link>
            </div>

          </motion.div>

          <div className="lg:col-span-6 relative h-[650px] md:h-[850px] w-full flex items-center justify-end">
            
            <motion.div 
              style={{ y: imageParallaxY }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: luxuryEase }}
              className="relative w-[85%] md:w-[76%] h-[85%] overflow-hidden rounded-t-[18rem] rounded-b-[2.5rem] border-[8px] border-white shadow-[0_40px_90px_rgba(200,169,126,0.14)] bg-[#E8DCCB] group will-change-transform z-10"
            >
              <Image
                src="/images/glam/glam1 (13).jpeg" 
                alt="Luxury Academy Curation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover object-center transition-transform duration-[4000ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
              className="absolute bottom-16 left-0 w-[48%] md:w-[44%] rounded-[2rem] border border-white/80 bg-white/40 backdrop-blur-3xl p-6 md:p-8 shadow-[0_30px_70px_rgba(200,169,126,0.12)] z-20"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#C8A97E]/20 mb-4">
                <div>
                  <span className="text-[8px] uppercase tracking-widest font-bold text-[#C8A97E] block mb-0.5">Rating Metrics</span>
                  <h4 className="font-playfair text-2xl font-semibold text-[#2A2520]">4.6 / 5.0</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#2A2520] flex items-center justify-center text-white">
                  <span className="text-xs font-bold">★</span>
                </div>
              </div>
              <p className="text-[11px] text-[#5A5045] font-light leading-relaxed">
                Consistently rated as Agra's premier high-ticket academy for elite cosmetics mastery.
              </p>
            </motion.div>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: luxuryEase }}
          className="mt-24 md:mt-32 w-full border-t border-[#C8A97E]/30 pt-12"
        >
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#C8A97E]/20">
            {[
              { number: "5000+", label: "Alumni Graduated" },
              { number: "10+", label: "Years High Mastery" },
              { number: "100%", label: "Professional Credentials" },
              { number: "390+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className={`w-full md:w-1/4 flex flex-col items-center justify-center ${index > 0 ? 'pt-6 md:pt-0' : ''}`}>
                <h3 className="font-playfair text-4xl md:text-5xl font-normal text-[#2A2520] mb-1">
                  {stat.number}
                </h3>
                <p className="text-[#5A5045] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">
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