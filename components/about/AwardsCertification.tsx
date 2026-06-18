// components/about/AwardsCertification.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Award, Crown, Gem, GraduationCap, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "Best Makeup Artist Agra",
    description: "Recognized as a top-rated luxury bridal and beauty artistry destination in the city.",
  },
  {
    icon: GraduationCap,
    title: "International Beauty Training",
    description: "Professional beauty education focused on modern glam and skin-first artistry.",
  },
  {
    icon: Crown,
    title: "Luxury Bridal Specialist",
    description: "Expertise in timeless bridal transformations crafted for elegant modern brides.",
  },
  {
    icon: Gem,
    title: "Advanced HD & Airbrush",
    description: "High-definition makeup finishes designed for photography and luxury events.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Hygiene Standards",
    description: "Professional beauty practices with strictly sanitized tools and luxury client care.",
  },
  {
    icon: Trophy,
    title: "4.6 Rated Academy",
    description: "Training aspiring makeup artists with premium industry-level beauty education.",
  },
];

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1]; [0.16, 1, 0.3, 1];

export default function AwardsCertification() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, mass: 0.5 });
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-35%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[10%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0 will-change-transform"
      >
        EXCELLENCE
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
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
              Awards & Credentials
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
            Trusted Expertise With <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block">
              Luxury Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl"
          >
            Trusted by over 390 happy clients with a stellar 4.6-star rating, our premium beauty expertise reflects profound dedication to delivering flawless luxury bridal transformations in Agra.
          </motion.p>
        </div>

        <div className="mt-20 md:mt-32 border-t border-l border-[#C8A97E]/20 bg-white/40 backdrop-blur-2xl rounded-tr-[3rem] rounded-bl-[3rem] shadow-[0_30px_80px_rgba(200,169,126,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => {
              const Icon = item.icon;
              const borderClasses = `
                border-r border-b border-[#C8A97E]/20 
                ${index === 5 ? "rounded-br-[3rem]" : ""}
                ${(index === 3 || index === 4 || index === 5) ? "lg:border-b-0" : ""}
                ${(index === 4 || index === 5) && "md:border-b-0"}
              `;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 0.1 + (index * 0.1), ease: cinematicEase }}
                  className={`group relative p-10 lg:p-14 hover:bg-white transition-colors duration-700 ${borderClasses}`}
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

                  <div className="relative z-10 flex flex-col h-full items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500 shadow-sm mb-8">
                      <Icon className="w-7 h-7 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-playfair text-2xl font-normal text-[#2A2520] mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5A5045] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }}
          className="mt-28 md:mt-40 rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-12 md:p-16 shadow-[0_40px_100px_rgba(200,169,126,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#2A2520]">
                Luxury Beauty Backed By <br className="hidden lg:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
                  Professional Excellence
                </span>
              </h3>
              <p className="mt-8 text-[#5A5045] font-light leading-relaxed text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
                Every luxury bridal transformation and academy session is powered by certified professional expertise, flawless premium techniques, and an absolute passion for timeless beauty.
              </p>
            </div>

            <div className="flex items-center gap-6 rounded-[2.5rem] border border-[#C8A97E]/30 bg-[#FAF7F2] p-8 md:p-10 shadow-sm hover:shadow-[0_20px_40px_rgba(200,169,126,0.15)] transition-shadow duration-500 w-full sm:w-auto justify-center lg:justify-start">
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#2A2520] shrink-0 shadow-inner">
                <Crown className="w-8 h-8 md:w-10 md:h-10 text-[#C8A97E]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-playfair text-2xl md:text-3xl font-medium text-[#2A2520] leading-none mb-2">
                  Premium Brand
                </h4>
                <p className="text-[#5A5045] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                  Glam Professionals By Shivani
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}