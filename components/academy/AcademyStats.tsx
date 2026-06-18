// components/academy/AcademyStats.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  Users,
  GraduationCap,
  Award,
  BriefcaseBusiness,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const statsData = [
  {
    id: "ST-01",
    icon: Users,
    targetNumber: 5000,
    suffix: "+",
    label: "Students Trained",
    desc: "Professional makeup artists transformed through advanced luxury beauty education globally, operating across top heritage fashion weeks.",
    alphaTag: "ALUMNI REGISTER"
  },
  {
    id: "ST-02",
    icon: Award,
    targetNumber: 10,
    suffix: "+",
    label: "Years High Mastery",
    desc: "A decade of high masterly expertise in traditional bridal artistry, premium studio layout design, and elite international cosmetics alignment.",
    alphaTag: "TEMPORAL MATRIX"
  },
  {
    id: "ST-03",
    icon: GraduationCap,
    targetNumber: 100,
    suffix: "%",
    label: "Global Certification",
    desc: "Industry-recognized credentials with intensive premium beauty verification systems valid in high-end global fashion and couture circuits.",
    alphaTag: "VALIDATED LEDGER"
  },
  {
    id: "ST-04",
    icon: BriefcaseBusiness,
    targetNumber: 95,
    suffix: "%",
    label: "Career Acceleration",
    desc: "Elite students working professionally across international bridal hubs, celebrity production houses, and upscale freelance networks.",
    alphaTag: "PLACEMENT BluePrint"
  },
];

function LuxuryCounter({ target, duration = 2.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInViewport = useInView(elementRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInViewport) return;

    let startTime: number | null = null;
    const finalValue = target;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const calculatedProgress = (timestamp - startTime) / (duration * 1000);

      if (calculatedProgress < 1) {
        const easeOutCurve = 1 - Math.pow(1 - calculatedProgress, 4);
        setCount(Math.floor(easeOutCurve * finalValue));
        requestAnimationFrame(animateCount);
      } else {
        setCount(finalValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInViewport, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function LuxuryAcademyStats() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 22, mass: 0.6 });
  
  const backdropTextX = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const structuralLeftY = useTransform(smoothProgress, [0, 1], ["4%", "-4%"]);
  const structuralRightY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-36 md:py-60 text-[#2A2520] selection:bg-[#C8A97E]/30 w-full"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: backdropTextX }}
        className="absolute top-[25%] left-0 whitespace-nowrap text-[15rem] md:text-[28rem] font-playfair italic text-[#C8A97E]/[0.025] pointer-events-none z-0 select-none will-change-transform"
      >
        THE KINETIC TIMELINE
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-[#E8DCCB]/50 blur-[180px] rounded-full mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            style={{ y: structuralLeftY }}
            className="lg:col-span-5 relative lg:sticky lg:top-24 will-change-transform"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
                Glam Professionals Academy
              </span>
            </div>

            <h2 className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]">
              Empowering <br />
              Future <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E]">Masters</span>
            </h2>

            <p className="mt-8 text-sm md:text-base text-[#5A5045] font-light leading-relaxed max-w-md">
              We do not teach makeup; we architect individual cosmetic careers. Our analytical training ledger documents unmatched data metrics across global bridal circuits from Agra.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-[#C8A97E]/30 bg-white/60 p-4 shadow-sm max-w-xs">
              <Award className="w-5 h-5 text-[#C8A97E] shrink-0" />
              <p className="text-[11px] text-[#5A5045] font-medium leading-normal italic">
                Consistently ranked as Agra's premier high-ticket academy for elite cosmetics mastery.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: structuralRightY }}
            className="lg:col-span-7 space-y-0 divider-y divide-[#C8A97E]/20 will-change-transform w-full"
          >
            {statsData.map((item, index) => {
              const IconModule = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.4, delay: index * 0.1, ease: luxuryEase }}
                  className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-12 md:py-16 border-b border-[#2A2520]/10 w-full overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] transition-all duration-700 ease-out origin-left group-hover:w-full" />

                  <div className="flex items-start md:items-center gap-6 md:gap-8 max-w-xl">
                    <div className="font-mono text-[10px] font-bold text-[#C8A97E]/40 uppercase tracking-widest hidden md:block shrink-0 pt-2 md:pt-0">
                      // {item.id}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2.5">
                        <IconModule className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8A97E]">{item.alphaTag}</span>
                      </div>
                      
                      <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#2A2520] mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">
                        {item.label}
                      </h3>
                      
                      <p className="text-xs md:text-sm text-[#5A5045] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="font-playfair text-5xl md:text-7xl lg:text-[5.5rem] font-normal leading-none tracking-tighter text-[#2A2520]/80 group-hover:text-[#2A2520] transition-colors duration-500 flex items-baseline sm:text-right shrink-0 will-change-transform">
                    <LuxuryCounter target={item.targetNumber} duration={2.4} />
                    <span className="text-[#C8A97E] text-3xl font-light ml-0.5">{item.suffix}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}