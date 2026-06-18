// components/services/LuxuryTestimonials.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    image: "/images/glam/glam1 (12).jpeg", 
    role: "Luxury Bridal Client",
    review: "Absolutely the best bridal makeup experience I could ever imagine. My look was elegant, luxurious, and flawless throughout the entire wedding day in Agra.",
    location: "ITC Mughal, Agra"
  },
  {
    name: "Anjali Verma",
    image: "/images/glam/glam1 (13).jpeg", 
    role: "Celebrity Reception Glam",
    review: "The makeup artistry was beyond perfection. Every single detail was crafted beautifully by Shivani and I truly felt like a celebrity on my grand stage.",
    location: "Taj Hotel, Agra"
  },
  {
    name: "Riya Kapoor",
    image: "/images/glam/glam1 (14).jpeg", 
    role: "Engagement Bride",
    review: "Luxury products, premium experience, and timeless beauty. Everyone kept complimenting my bridal glow throughout the entire evening.",
    location: "Jaypee Palace, Agra"
  },
  {
    name: "Sneha Malhotra",
    image: "/images/glam/glam1 (15).jpeg", 
    role: "Destination Wedding Bride",
    review: "Professional, graceful, and incredibly talented. My bridal transformation looked absolutely magical both in person and in my photographs.",
    location: "Courtyard by Marriott, Agra"
  },
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function LuxuryTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20, mass: 0.6 });
  const bgTextX = useTransform(smoothProgress, [0, 1], ["10%", "-30%"]);
  
  const imageParallax = useTransform(smoothProgress, [0, 1], ["-3%", "3%"]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-24 md:py-40 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght=0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        @keyframes subtleStampRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-stamp-spin {
          animation: subtleStampRotate 20s linear infinite;
        }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[8%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.03] pointer-events-none z-0 will-change-transform"
      >
        TESTIMONIALS OF GOLD
      </motion.div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 relative">
            
            <div className="absolute -top-12 -left-12 w-36 h-36 z-30 pointer-events-none drop-shadow-sm select-none hidden xl:block">
              <svg viewBox="0 0 200 200" className="w-full h-full animate-stamp-spin">
                <path id="stampPath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="transparent" />
                <text className="font-sans font-bold uppercase tracking-[0.35em] fill-[#C8A97E] text-[12px]">
                  <textPath href="#stampPath" startOffset="0%">
                    • SIGNATURE BRIDE • SEVEN STAR CRITIQUE
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="relative w-full aspect-[3/4] max-h-[500px] md:max-h-[680px] overflow-hidden rounded-t-[16rem] rounded-b-[2rem] border-[6px] md:border-[8px] border-white shadow-[0_30px_70px_rgba(200,169,126,0.15)] bg-[#E8DCCB] will-change-transform">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1.2, ease: luxuryEase }}
                  style={{ y: imageParallax }}
                  className="absolute inset-0 w-full h-[106%] -top-[3%] will-change-transform"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    priority
                    className="object-cover object-center md:object-[center_15%]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none z-10" />

              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-3 rounded-xl border border-white/20 bg-black/30 backdrop-blur-xl px-4 py-2.5 max-w-max">
                <BadgeCheck className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <span className="text-white text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">{active.location}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative lg:pl-6">
            
            <div className="absolute -top-16 -left-4 opacity-[0.03] text-[#C8A97E] text-[15rem] md:text-[20rem] font-playfair pointer-events-none select-none leading-none">
              “
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
                The Heritage Voice
              </span>
            </div>

            <div className="min-h-[140px] md:min-h-[180px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: luxuryEase }}
                  className="font-playfair text-2xl md:text-3xl lg:text-[2.5rem] font-normal leading-[1.45] text-[#2A2520] italic will-change-transform"
                >
                  “{active.review}”
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-1.5 mt-6 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-[#C8A97E] fill-[#C8A97E]" strokeWidth={0} />
              ))}
            </div>

            <div className="pt-6 border-t border-[#C8A97E]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-medium tracking-tight text-[#2A2520]">{active.name}</h3>
                <p className="text-[#C8A97E] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mt-1">{active.role}</p>
              </div>

              <div className="flex items-center gap-4">
                <button onClick={prevSlide} className="group w-12 h-12 rounded-full border border-[#C8A97E]/30 bg-transparent text-[#2A2520] flex items-center justify-center hover:bg-[#2A2520] hover:text-white hover:border-[#2A2520] transition-all duration-500 shadow-sm">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </button>
                <button onClick={nextSlide} className="group w-12 h-12 rounded-full border border-[#C8A97E]/30 bg-transparent text-[#2A2520] flex items-center justify-center hover:bg-[#2A2520] hover:text-white hover:border-[#2A2520] transition-all duration-500 shadow-sm">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {testimonials.map((item, index) => {
            const isSelected = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[1.8rem] border p-5 text-left transition-all duration-500 outline-none ${
                  isSelected 
                    ? "border-[#C8A97E] bg-white shadow-[0_20px_40px_rgba(200,169,126,0.1)] -translate-y-1" 
                    : "border-white/80 bg-white/40 backdrop-blur-xl hover:bg-white hover:border-[#C8A97E]/40"
                }`}
              >
                <div className={`absolute top-0 left-0 h-[3px] bg-[#C8A97E] transition-all duration-500 origin-left ${isSelected ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C8A97E]/20 bg-[#E8DCCB] shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover object-center" sizes="48px" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-playfair font-medium text-base text-[#2A2520] truncate">{item.name}</h4>
                    <p className="text-[#C8A97E] text-[8px] font-bold uppercase tracking-[0.2em] truncate mt-0.5">{item.role.split(" ")[0]} Edition</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}