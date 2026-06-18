// components/services/LuxuryTransformationGallery.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface TransformationPayload {
  id: string;
  before: string;
  after: string;
  title: string;
  subtitle: string;
  desc: string;
}

const TRANSFORMATIONS: TransformationPayload[] = [
  {
    id: "royal-bridal",
    before: "/images/glam/glam1 (8).jpeg",
    after: "/images/glam/glam1 (9).jpeg",
    title: "Royal Bridal Metamorphosis",
    subtitle: "Soft Glam Bridal Look",
    desc: "A breathtaking transition from natural canvas to ethereal bridal radiance by Shivani.",
  },
  {
    id: "celeb-glam",
    before: "/images/glam/glam1 (10).jpeg",
    after: "/images/glam/glam1 (11).jpeg",
    title: "Celebrity Reception Glam",
    subtitle: "Radiant Luxury Finish",
    desc: "Architectural contouring and ultra-luxe HD finishing for the grand stage.",
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
  }),
};

export default function LuxuryTransformationGallery() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, TRANSFORMATIONS.length, page);
  const active = TRANSFORMATIONS[imageIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-28 md:py-48 text-[#1A1816]">
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#D4AF37]/10 to-[#F3E5AB]/20 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-gradient-to-tr from-[#E6C27A]/10 to-transparent blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-16 h-[1px] bg-[#D4AF37]"></span>
              <span className="uppercase tracking-[0.3em] text-[#D4AF37] text-xs font-semibold">
                The Signature Artistry
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
              Before & After <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8942E]">
                Metamorphosis
              </span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => paginate(-1)} 
              aria-label="Previous Transformation"
              className="w-14 h-14 rounded-full border border-[#1A1816]/20 bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-[#1A1816] hover:text-white hover:border-[#1A1816] transition-all duration-500 group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={() => paginate(1)} 
              aria-label="Next Transformation"
              className="w-14 h-14 rounded-full border border-[#1A1816]/20 bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-[#1A1816] hover:text-white hover:border-[#1A1816] transition-all duration-500 group"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

       <div className="relative h-[800px] md:h-[1000px] w-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                filter: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute w-full h-full grid lg:grid-cols-2 gap-6 md:gap-10 cursor-grab active:cursor-grabbing"
            >
              
              <div className="group relative h-full rounded-[2rem] overflow-hidden bg-[#F5EFEB] border border-white/40 shadow-[0_20px_40px_rgba(212,175,55,0.05)]">
                <Image 
                  src={active.before} 
                  alt={`${active.title} Before`} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                  priority
                />
                <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase text-[#1A1816] shadow-sm">
                  The Canvas
                </div>
              </div>

              <div className="group relative h-full rounded-[2rem] overflow-hidden bg-[#F5EFEB] border border-white/40 shadow-[0_20px_40px_rgba(212,175,55,0.05)]">
                <Image 
                  src={active.after} 
                  alt={`${active.title} After`} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                  priority
                />
                
                <div className="absolute top-8 left-8 bg-[#1A1816]/80 backdrop-blur-xl border border-white/10 px-6 py-2.5 rounded-full text-white text-[10px] font-bold tracking-[0.25em] uppercase shadow-xl">
                  The Masterpiece
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-white/10 backdrop-blur-2xl border border-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-2 drop-shadow-md">
                        {active.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-md">
                        {active.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}