// components/academy/AcademyExperience.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame } from "framer-motion";
import {
  Sparkles,
  Crown,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1]; 

const baseExperienceData = [
  {
    id: "ACAD-INFINITE-01",
    number: "10+",
    title: "Years Of Luxury Education",
    description: "A comprehensive decade dedicated entirely to configuring and shaping upscale bridal makeup professionals with intensive real-world cosmetic business layouts by Shivani.",
    image: "/images/glam/glam1 (1).jpeg",
    tagCode: "REG-ED // 2016",
    metricString: "SYSTEMA / ACADEMY",
    stampText: "• GLAM BY SHIVANI • ESTABLISHED 2016",
    details: ["Palace Wedding Production Exposure", "Advanced Cosmetic Chemistry Analytics", "Studio Lighting Grid Synchronizations"]
  },
  {
    id: "ACAD-INFINITE-02",
    number: "5000+",
    title: "Students Successfully Trained",
    description: "Thousands of global beauty aspirants transformed into highly confident celebrity-grade artists utilizing our customized hands-on clinical training sheets at our Agra Studio.",
    image: "/images/glam/glam1 (2).jpeg",
    tagCode: "ALUMNI // NETWORK",
    metricString: "LEDGER / RECORD",
    stampText: "• ELITE NETWORK • ALUMNI COUTURE",
    details: ["Global Luxury Salon Tie-Ups", "Premium Freelance Business Launch Blueprints", "Bespoke Celebrity Artistry Kit Architecture"]
  },
  {
    id: "ACAD-INFINITE-03",
    number: "4.6★",
    title: "Google Rated Excellence",
    description: "Rigorous industry-level certification programs structured meticulously to qualify individuals safely for premier international runways and high-ticket bridal contracts.",
    image: "/images/glam/glam1 (3).jpeg",
    tagCode: "VALIDATION // ISO",
    metricString: "CREDENTIAL / MATRIX",
    stampText: "• TOP RATED AGRA • BEST MAKEUP ARTIST",
    details: ["Trusted by 390+ Elite Clients", "Live Portfolio Lookbook Shoot Assisting", "Lifetime Post-Graduate Concierge Advisory Support"]
  },
];

const infiniteExperienceData = [
  ...baseExperienceData,
  ...baseExperienceData,
  ...baseExperienceData,
];

export default function UltimateLuxuryAcademyExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderConstraintsRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [singleLoopWidth, setSingleLoopWidth] = useState(0);
  const [maxVelocityScrollLimit, setMaxVelocityScrollLimit] = useState(0);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothPointerX = useSpring(pointerX, { stiffness: 60, damping: 25 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 60, damping: 25 });

  const pointerImageShiftX = useTransform(smoothPointerX, [-0.5, 0.5], [-12, 12]);
  const pointerImageShiftY = useTransform(smoothPointerY, [-0.5, 0.5], [-12, 12]);
  const pointerTextShiftX = useTransform(smoothPointerX, [-0.5, 0.5], [6, -6]);
  const pointerTextShiftY = useTransform(smoothPointerY, [-0.5, 0.5], [6, -6]);

  const dragX = useMotionValue(0);
  const smoothDragX = useSpring(dragX, { stiffness: 65, damping: 22, mass: 0.5 });

  useEffect(() => {
    const calculateStructuralDimensions = () => {
      if (trackRef.current && sliderConstraintsRef.current) {
        const totalScrollWidth = trackRef.current.scrollWidth;
        const widthOfSingleSet = totalScrollWidth / 3;
        const visibleWidth = sliderConstraintsRef.current.offsetWidth;

        setSingleLoopWidth(widthOfSingleSet);
        setMaxVelocityScrollLimit(visibleWidth - totalScrollWidth);
        
        if (dragX.get() === 0) {
          dragX.set(-widthOfSingleSet);
        }
      }
    };

    const timer = setTimeout(calculateStructuralDimensions, 150);
    window.addEventListener("resize", calculateStructuralDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateStructuralDimensions);
    };
  }, [dragX]);

  const autoplayVelocitySpeed = 1.95;

  useAnimationFrame(() => {
    if (isDragging || singleLoopWidth === 0) return;

    let currentXPosition = dragX.get() - autoplayVelocitySpeed;

    if (currentXPosition <= -singleLoopWidth * 2) {
      currentXPosition += singleLoopWidth;
    }

    dragX.set(currentXPosition);
  });

  const checkLoopWrapMetrics = () => {
    if (singleLoopWidth === 0) return;
    let currentX = dragX.get();

    if (currentX <= -singleLoopWidth * 2) {
      dragX.set(currentX + singleLoopWidth);
    } else if (currentX >= -singleLoopWidth) {
      dragX.set(currentX - singleLoopWidth);
    }
  };

  const liveProgressScaleX = useTransform(smoothDragX, (currentVal) => {
    if (singleLoopWidth === 0) return 0;
    const absoluteWrappedValue = Math.abs((currentVal + singleLoopWidth) % singleLoopWidth);
    return absoluteWrappedValue / singleLoopWidth;
  });

  const handlePointerInteraction = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const currentX = (e.clientX - left) / width - 0.5;
    const currentY = (e.clientY - top) / height - 0.5;
    pointerX.set(currentX);
    pointerY.set(currentY);
  };

  const resetPointerInteraction = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handlePointerInteraction}
      onMouseLeave={resetPointerInteraction}
      className="relative bg-[#FAF7F2] py-24 md:py-36 w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        @keyframes blueprintStampSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-stamp-spin {
          animation: blueprintStampSpin 24s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[55vw] h-[55vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-5 sm:px-10 lg:px-16 w-full flex flex-col justify-between h-full">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#2A2520]/10 w-full shrink-0">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Infinite Motion Exhibit
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-6xl font-normal tracking-tight text-[#2A2520] leading-none">
              Not Just An Academy — <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] to-[#B59567]">A Luxury Beauty Empire</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm font-light text-[#5A5045] max-w-xs leading-relaxed pointer-events-none">
            Autoplay fast velocity loop is active from Right to Left. Drag metrics manually to alter coordinates anytime.
          </p>
        </div>

        <div ref={sliderConstraintsRef} className="w-full my-14 md:my-20 overflow-visible relative">
          <motion.div
            ref={trackRef}
            drag="x"
            _dragX={dragX}
            style={{ x: smoothDragX }}
            dragConstraints={{ right: 200, left: maxVelocityScrollLimit - 200 }}
            onDragStart={() => setIsDragging(true)}
            onDrag={checkLoopWrapMetrics}
            onDragEnd={() => {
              setIsDragging(false);
              checkLoopWrapMetrics();
            }}
            className="flex gap-16 lg:gap-28 w-max will-change-transform items-center py-4 cursor-grab active:cursor-grabbing"
          >
            {infiniteExperienceData.map((item, index) => {
              const baseIndex = index % baseExperienceData.length;
              
              return (
                <div 
                  key={`${item.id}-${index}`}
                  className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-[85vw] sm:w-[75vw] lg:w-[68vw] max-w-[1200px] shrink-0 pointer-events-none"
                >
                  <motion.div 
                    style={{ x: pointerImageShiftX, y: pointerImageShiftY }}
                    className="w-full lg:w-[46%] relative aspect-[4/5] max-h-[480px] lg:max-h-[580px] rounded-t-[14rem] rounded-b-[2rem] border-[8px] border-white shadow-[0_40px_90px_rgba(200,169,126,0.12)] bg-[#E8DCCB] overflow-hidden shrink-0 group will-change-transform"
                  >
                    <div className="absolute -top-12 -left-12 w-36 h-36 z-30 pointer-events-none drop-shadow-sm select-none hidden md:block">
                      <svg viewBox="0 0 200 200" className="w-full h-full animate-stamp-spin">
                        <path id={`infinitePath-${item.id}-${index}`} d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="transparent" />
                        <text className="font-sans font-bold uppercase tracking-[0.38em] fill-[#C8A97E] text-[11px]">
                          <textPath href={`#infinitePath-${item.id}-${index}`} startOffset="0%">
                            {item.stampText}
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index < 3}
                      className="object-cover object-center md:object-[center_20%] select-none pointer-events-none"
                      sizes="(max-width: 1024px) 85vw, 35vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />
                    
                    <div className="absolute bottom-6 left-6 z-20 rounded-xl border border-white/20 bg-black/20 backdrop-blur-md px-4 py-2">
                      <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em]">{item.tagCode}</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    style={{ x: pointerTextShiftX, y: pointerTextShiftY }}
                    className="w-full lg:w-[54%] text-left flex flex-col justify-center will-change-transform"
                  >
                    <div className="text-[10px] font-mono font-bold text-[#C8A97E] uppercase tracking-[0.25em] mb-3">
                      LOOP ROW ID // 0{baseIndex + 1} • {item.metricString}
                    </div>

                    <h3 className="font-playfair text-5xl md:text-7xl font-normal leading-none tracking-tighter text-[#C8A97E]/30 mb-2">
                      {item.number}
                    </h3>

                    <h4 className="font-playfair text-2xl md:text-4xl lg:text-[2.5rem] font-normal leading-tight tracking-tight text-[#2A2520]">
                      {item.title}
                    </h4>

                    <p className="mt-5 text-xs md:text-sm lg:text-base text-[#5A5045] font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-8 space-y-3.5 border-t border-[#C8A97E]/25 pt-6 max-w-xl">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-4 relative py-0.5">
                          <div className="w-4.5 h-4.5 rounded-full border border-[#C8A97E]/40 flex items-center justify-center bg-transparent shrink-0">
                            {i === 0 ? <Crown className="w-2.5 h-2.5 text-[#C8A97E]" /> : i === 1 ? <GraduationCap className="w-2.5 h-2.5 text-[#C8A97E]" /> : <ShieldCheck className="w-2.5 h-2.5 text-[#C8A97E]" />}
                          </div>
                          <span className="text-xs md:text-sm font-medium tracking-wide text-[#5A5045]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="w-full pt-4 flex flex-col gap-6 shrink-0">
          <div className="w-full h-[2px] bg-[#2A2520]/10 relative rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleX: liveProgressScaleX }}
              className="absolute top-0 left-0 bottom-0 right-0 bg-[#C8A97E] origin-left will-change-transform"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full text-center">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5A5045]/50">
              INFINITE LOOP SLIDER CONTROL // EQUALIZED / ONLINE
            </p>
            <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8A97E]">
              <span>• RIGHT-TO-LEFT COUTURE VECTOR</span>
              <span>• JERKLESS WRAPPING REVEAL READY</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}