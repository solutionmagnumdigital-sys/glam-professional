// components/about/ExperienceStats.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, animate, useMotionValue, useInView } from "framer-motion";
import { Crown, Sparkles, Gem, Award, GraduationCap } from "lucide-react";

const stats = [
  { target: 500, suffix: "+", title: "Bridal Makeovers", description: "Timeless bridal transformations crafted with flawless luxury artistry.", icon: Crown },
  { target: 8, suffix: "+", title: "Years Of Experience", description: "Professional beauty expertise delivering supreme elegance and confidence.", icon: Award },
  { target: 390, suffix: "+", title: "Happy Clients", description: "Rated 4.6 stars on Google for exceptional premium beauty services.", icon: GraduationCap },
  { target: 20, suffix: "+", title: "Premium Services", description: "Exclusive HD makeup, Airbrush bridal, and elite salon treatments.", icon: Sparkles },
];

const cinematicEase = [0.16, 1, 0.3, 1];

const AnimatedCounter = ({ from = 0, to, suffix }: { from?: number, to: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: 3,
        ease: [0.32, 1, 0.68, 1],
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [isInView, motionValue, to]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

export default function ExperienceStats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-40 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#C8A97E]/10 blur-[140px] rounded-full mix-blend-multiply will-change-transform" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#E8DCCB]/30 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: cinematicEase }} className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
              <Gem className="w-3.5 h-3.5" />
              The Legacy
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }} className="font-playfair text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#2A2520]">
            Redefining Beauty With <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block drop-shadow-sm">
              Luxury Excellence
            </span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }} className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl">
            Every transformation, every bridal glam, and every academy session reflects our absolute dedication to premium artistry in Agra, undeniable elegance, and timeless confidence.
          </motion.p>
        </div>

        <div className="mt-20 md:mt-32 border-t border-l border-[#C8A97E]/20 bg-white/40 backdrop-blur-2xl rounded-tr-3xl rounded-bl-3xl shadow-[0_30px_80px_rgba(200,169,126,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const borderClasses = `border-r border-b border-[#C8A97E]/20 ${index === 3 ? "rounded-br-3xl" : ""} ${index === 2 && "md:border-b-0 lg:border-b"} ${index === 3 && "md:border-b-0"}`;

              return (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay: 0.2 + (index * 0.15), ease: cinematicEase }} className={`group relative p-10 lg:p-12 hover:bg-white transition-colors duration-700 ${borderClasses}`}>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500 shadow-sm">
                        <Icon className="w-6 h-6 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                      </div>
                      <span className="font-playfair italic text-5xl text-[#C8A97E]/10 pointer-events-none select-none">0{index + 1}</span>
                    </div>
                    <h3 className="font-playfair text-5xl md:text-6xl font-normal text-[#2A2520] mb-4">
                      <AnimatedCounter to={stat.target} suffix={stat.suffix} />
                    </h3>
                    <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#C8A97E] mb-4">{stat.title}</h4>
                    <p className="text-sm text-[#5A5045] font-light leading-relaxed mt-auto">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5, ease: cinematicEase }} className="mt-20 md:mt-24 rounded-[2.5rem] border border-white/60 bg-white/60 backdrop-blur-3xl px-8 py-10 md:p-14 shadow-[0_30px_60px_rgba(200,169,126,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] text-[#2A2520]">
                Luxury Beauty Is Our <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
                  Passion & Expertise
                </span>
              </h3>
              <p className="mt-6 text-[#5A5045] font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto lg:mx-0">
                From bespoke bridal elegance to professional beauty education at Sikandra, every experience is meticulously designed to make you feel confident, radiant, and unforgettable.
              </p>
            </div>
            <div className="flex items-center gap-5 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] px-6 py-4 md:px-8 md:py-6 shadow-sm hover:shadow-[0_20px_40px_rgba(200,169,126,0.15)] transition-shadow duration-500 w-full sm:w-auto justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#2A2520] shrink-0 shadow-inner">
                <Crown className="w-5 h-5 md:w-7 md:h-7 text-[#C8A97E]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-playfair text-xl md:text-2xl font-medium text-[#2A2520] leading-none mb-1.5">Trusted Luxury Brand</h4>
                <p className="text-[#5A5045] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]">Glam Professionals By Shivani</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}