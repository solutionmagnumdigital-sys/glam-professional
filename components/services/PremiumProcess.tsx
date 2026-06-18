// components/services/LuxuryPremiumProcess.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  Crown,
  Brush,
  CalendarCheck,
  Gem,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Luxury Consultation",
    description: "Bespoke bridal consultation at our Agra studio to deeply understand your aesthetic vision, outfit couture, skin tone, and dream glamour.",
    features: ["Personalized Aesthetic Map", "Outfit Synergy", "Skin Analysis"],
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Skin & Canvas Prep",
    description: "Premium skin analysis and luxury beauty preparation guidance for achieving an illuminated, flawless bridal foundation.",
    features: ["Hydration Protocol", "Texture Smoothing", "Glow Prep"],
  },
  {
    number: "03",
    icon: Brush,
    title: "The Artistry Trial",
    description: "An exclusive luxury trial session where we architect and perfect your signature bridal look with precision artistry.",
    features: ["Look Finalization", "Feature Highlighting", "Confidence Check"],
  },
  {
    number: "04",
    icon: Crown,
    title: "Bridal Metamorphosis",
    description: "The complete high-end bridal transformation utilizing international luxury cosmetics and advanced flawless techniques.",
    features: ["HD/Airbrush Glam", "Premium Lashes", "Signature Contour"],
  },
  {
    number: "05",
    icon: Gem,
    title: "Timeless Finish",
    description: "Final luxury touches, intricate detailing, and premium setting spray for a long-lasting, celebrity-grade appearance.",
    features: ["Waterproof Seal", "Jewelry Setting", "Final Polish"],
  },
];

const cinematicEase = [0.16, 1, 0.3, 1];

export default function LuxuryPremiumProcess() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress: bgScroll } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothBg = useSpring(bgScroll, { stiffness: 50, damping: 20, mass: 0.5 });
  const bgY1 = useTransform(smoothBg, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothBg, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothBg, [0, 1], ["5%", "-25%"]);

  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"], 
  });

  const lineProgress = useSpring(timelineScroll, { 
    stiffness: 70, 
    damping: 25, 
    mass: 0.5 
  });

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        @keyframes liquidWave {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-liquid {
          animation: liquidWave 4s linear infinite;
        }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[10%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0 will-change-transform"
      >
        THE JOURNEY
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              The Artistry Process
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }}
            className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]"
          >
            Your Path To <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block">
              Absolute Grandeur
            </span>
          </motion.h2>
        </div>

        <div ref={timelineRef} className="relative mt-24 md:mt-36 pb-10">
          
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#C8A97E]/15 -translate-x-1/2 z-0" />

          <motion.div 
            style={{ scaleY: lineProgress }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(200,169,126,0.6)] z-10 will-change-transform"
          />

          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.4, delay: 0.1, ease: cinematicEase }}
                  className={`relative flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-1/2 flex ${isEven ? "justify-end text-left" : "justify-start text-left lg:text-right"}`}>
                    <div className="group relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-white/80 bg-white/60 backdrop-blur-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(200,169,126,0.08)] hover:bg-white hover:shadow-[0_30px_60px_rgba(200,169,126,0.15)] transition-all duration-700 w-full xl:w-[90%]">
                      
                      <div className={`absolute top-0 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent group-hover:w-full transition-all duration-700 ease-out z-20 ${isEven ? 'left-0' : 'right-0'}`} />

                      <div className={`absolute -top-10 font-playfair italic text-[8rem] md:text-[10rem] font-bold text-[#C8A97E]/[0.08] pointer-events-none select-none z-0 ${isEven ? '-right-10' : '-left-10'}`}>
                        {step.number}
                      </div>

                      <div className="relative z-10">
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'}`}>
                          <span className="font-playfair text-[#C8A97E] text-xl md:text-2xl italic opacity-70">
                            Phase {step.number}
                          </span>
                        </div>

                        <h3 className="font-playfair text-3xl md:text-4xl font-normal text-[#2A2520] mb-4">
                          {step.title}
                        </h3>

                        <p className="text-sm md:text-base text-[#5A5045] font-light leading-relaxed mb-8">
                          {step.description}
                        </p>

                        <div className={`flex flex-col gap-3 ${isEven ? 'items-start' : 'items-start lg:items-end'}`}>
                          {step.features.map((feature, i) => (
                            <div key={i} className={`flex items-center gap-3 ${isEven ? 'flex-row' : 'flex-row lg:flex-row-reverse'}`}>
                              <div className="w-5 h-5 rounded-full border border-[#C8A97E]/50 flex items-center justify-center bg-transparent group-hover:bg-[#C8A97E] transition-colors duration-300 shrink-0">
                                <CheckCircle2 className="w-3 h-3 text-[#C8A97E] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                              </div>
                              <span className="text-[#5A5045] text-xs md:text-sm font-medium tracking-wide">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-20 h-20 z-20">
                    <motion.div 
                      initial="empty"
                      whileInView="filled"
                      viewport={{ once: true, margin: "-45% 0px -45% 0px" }} 
                      className="relative w-16 h-16 rounded-full border-[3px] border-[#C8A97E]/30 bg-[#FAF7F2] overflow-hidden shadow-[0_10px_30px_rgba(200,169,126,0.3)] flex items-center justify-center"
                    >
                      <motion.div
                        variants={{
                          empty: { top: "100%" }, 
                          filled: { top: "-20%" } 
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[50%] -translate-x-1/2 w-[250%] h-[250%] rounded-[40%] bg-gradient-to-t from-[#D4B58A] to-[#C8A97E] animate-liquid z-0"
                      />
                      <motion.div
                        variants={{
                          empty: { color: "#C8A97E" }, 
                          filled: { color: "#FFFFFF" }  
                        }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative z-10 flex items-center justify-center"
                      >
                        <Icon className="w-6 h-6 drop-shadow-md" strokeWidth={2} />
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }}
          className="mt-28 md:mt-40 rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-14 md:p-16 shadow-[0_40px_100px_rgba(200,169,126,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-3xl text-center xl:text-left">
              <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#2A2520]">
                Every Bride Deserves <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
                  A Celebrity Metamorphosis
                </span>
              </h3>
            </div>

            <div className="flex items-center divide-x divide-[#C8A97E]/20">
              {[
                { number: "500+", label: "Bridal Makeovers" },
                { number: "4.6", label: "Google Rating" },
                { number: "100%", label: "Premium Elite" },
              ].map((item, index) => (
                <div key={index} className="px-5 md:px-8 flex flex-col items-center justify-center text-center">
                  <h4 className="font-playfair text-3xl md:text-4xl text-[#2A2520] mb-2">{item.number}</h4>
                  <p className="text-[#5A5045] text-[9px] font-bold uppercase tracking-[0.2em]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}