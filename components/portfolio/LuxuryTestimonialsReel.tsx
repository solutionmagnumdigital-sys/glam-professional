// components/portfolio/LuxuryTestimonialsReel.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Star,
  Sparkles,
  Crown,
  BadgeCheck,
  Play,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarohi Sharma",
    role: "Luxury Bridal Client",
    image: "/images/glam/glam1 (3).jpeg",
    review: "Absolutely the most luxurious bridal experience I could ever imagine. Shivani made my makeup look flawless throughout the entire wedding ceremony.",
    location: "ITC Mughal, Agra"
  },
  {
    id: 2,
    name: "Kiara Malhotra",
    role: "Celebrity Bride",
    image: "/images/glam/glam1 (4).jpeg",
    review: "The detailing, skin finish, and eye artistry were simply breathtaking. I felt like a queen walking into my grand reception venue.",
    location: "The Leela Palace"
  },
  {
    id: 3,
    name: "Meher Kapoor",
    role: "Destination Wedding Bride",
    image: "/images/glam/glam1 (5).jpeg",
    review: "The transformation was cinematic. Every single guest complimented the elegance and extreme softness of my natural bridal look.",
    location: "Jaypee Palace, Agra"
  },
  {
    id: 4,
    name: "Riya Khanna",
    role: "Premium HD Bridal",
    image: "/images/glam/glam1 (6).jpeg",
    review: "Truly luxury-level artistry. The high-definition makeup layer photographed beautifully under heavy high-intensity lightning conditions.",
    location: "Courtyard by Marriott"
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function LuxuryTestimonialsReel() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20, mass: 0.6 });
  const bgTextX = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-32 md:py-52 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[10%] left-0 whitespace-nowrap text-[15rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 will-change-transform select-none"
      >
        THE KINETIC REELS
      </motion.div>

      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#2A2520]/10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Cinema Critique
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight text-[#2A2520]">
              Real Brides. <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
                Cinematic Reality.
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base font-light text-[#5A5045] max-w-sm leading-relaxed">
            Discover unfiltered luxury bridal stories and moving portrait documentations captured across grand royal heritage weddings in Agra.
          </p>
        </div>

        <div className="relative overflow-hidden mt-20 md:mt-28 w-full no-scrollbar mask-grad-horizontal">
          
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF7F2] to-transparent z-20 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF7F2] to-transparent z-20 pointer-events-none hidden md:block" />

          <motion.div
            animate={{ x: [0, -1600] }} 
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }} 
            className="flex gap-8 md:gap-12 w-max will-change-transform py-4"
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group relative flex flex-col justify-between w-[320px] md:w-[380px] p-4 bg-white border border-white/80 shadow-[0_25px_60px_rgba(200,169,126,0.05)] hover:shadow-[0_45px_90px_rgba(200,169,126,0.12)] hover:-translate-y-2 rounded-[2.5rem] transition-all duration-700 select-none overflow-hidden"
              >
                <div className="relative h-[440px] md:h-[500px] rounded-[1.8rem] overflow-hidden bg-[#E8DCCB]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center md:object-[center_20%] transition-transform duration-[2500ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-95 pointer-events-none" />

                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-4 py-2">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#C8A97E]" />
                    <span className="text-white text-[8px] font-bold uppercase tracking-[0.2em]">{item.location}</span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center transform scale-95 group-hover:scale-100 transition-all duration-500 shadow-md">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5 animate-pulse" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 pointer-events-none">
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#C8A97E] fill-[#C8A97E]" strokeWidth={0} />
                      ))}
                    </div>

                    <p className="text-white text-sm md:text-[15px] font-light leading-relaxed tracking-wide italic mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                      “{item.review}”
                    </p>

                    <div className="pt-5 border-t border-white/20 flex items-center justify-between">
                      <div>
                        <h4 className="font-playfair text-xl font-medium text-white tracking-tight">{item.name}</h4>
                        <p className="text-[#C8A97E] text-[9px] font-bold uppercase tracking-widest mt-1">{item.role}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                        <Crown className="w-4 h-4 text-[#C8A97E]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 w-full border-t border-[#C8A97E]/30 pt-12"
        >
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#C8A97E]/20">
            {[
              { number: "500+", label: "Luxury Brides Adorned" },
              { number: "4.6★", label: "Elite Google Critique" },
              { number: "8+", label: "Years of High Mastery" },
              { number: "100%", label: "Premium Product Kits" },
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