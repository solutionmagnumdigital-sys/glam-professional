// components/services/LuxuryServicesGrid.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Gem,
} from "lucide-react";

const services = [
  {
    title: "Luxury Bridal Glamour",
    description: "Signature bridal glam crafted with flawless skin finish, timeless elegance, and absolute premium artistry by Shivani.",
    price: "From ₹15,000",
    image: "/images/glam/glam1 (2).jpeg", 
    badge: "Signature Collection",
  },
  {
    title: "High-Definition Artistry",
    description: "Flawless HD makeup designed for ultra-clear photography, cinematic bridal shoots, and luxury events in Agra.",
    price: "From ₹8,000",
    image: "/images/glam/glam1 (3).jpeg", 
    badge: "Flawless Finish",
  },
  {
    title: "Airbrush Metamorphosis",
    description: "Feather-light airbrush luxury with long-lasting waterproof coverage for the modern, elegant bride.",
    price: "From ₹12,000",
    image: "/images/glam/glam1 (4).jpeg", 
    badge: "Premium Canvas",
  },
  {
    title: "Engagement Elegance",
    description: "Soft, glamorous engagement looks meticulously designed for unparalleled glow and sophisticated beauty.",
    price: "From ₹7,000",
    image: "/images/glam/glam1 (5).jpeg", 
    badge: "Radiant Glow",
  },
  {
    title: "Reception Haute Couture",
    description: "Bold, luxurious reception glam featuring exquisite contouring and celebrity-inspired flawless finishes.",
    price: "From ₹9,000",
    image: "/images/glam/glam1 (6).jpeg", 
    badge: "Celebrity Vibe",
  },
  {
    title: "Elite Crown Styling",
    description: "Luxury bridal hair architecture including intricate buns, Hollywood waves, and premium floral styling.",
    price: "From ₹4,000",
    image: "/images/glam/glam1 (7).jpeg", 
    badge: "Bespoke Hair",
  },
];

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1]; 

export default function LuxuryServicesGrid() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 20, 
    mass: 0.5 
  });

  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-25%"]);

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
        className="absolute top-[8%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0 will-change-transform"
      >
        COLLECTIONS
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: bgY1 }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" 
        />
        <motion.div 
          style={{ y: bgY2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" 
        />
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
              The Artistry Menu
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
            Signature Services For <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block">
              Modern Elegance
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl"
          >
            Discover our meticulously curated bespoke packages in Agra. From unparalleled bridal transformations to flawless high-definition editorial glam.
          </motion.p>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.1 * index, ease: cinematicEase }}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/50 backdrop-blur-2xl p-3 shadow-[0_20px_50px_rgba(200,169,126,0.08)] hover:bg-white hover:shadow-[0_30px_60px_rgba(200,169,126,0.15)] transition-all duration-700"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent group-hover:w-full transition-all duration-700 ease-out z-20" />

              <div className="relative w-full h-[320px] md:h-[380px] rounded-[2rem] overflow-hidden bg-[#E8DCCB]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-5 py-2 z-10 shadow-lg">
                  <span className="text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]">
                    {service.badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-grow px-5 py-8 md:px-6 md:py-10">
                <h3 className="font-playfair text-2xl md:text-3xl font-medium text-[#2A2520] mb-3 leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-[#5A5045] font-light text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-[#C8A97E]/20 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C8A97E] mb-1">
                      Investment
                    </span>
                    <span className="font-playfair italic text-xl md:text-2xl text-[#2A2520]">
                      {service.price}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-white group-hover:border-[#C8A97E] transition-all duration-500 shadow-sm hover:scale-110"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }}
          className="mt-24 md:mt-32 rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-14 md:p-16 shadow-[0_40px_100px_rgba(200,169,126,0.1)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 relative z-10">
            
            <div className="max-w-3xl text-center xl:text-left">
              <div className="flex items-center justify-center xl:justify-start gap-4 mb-6">
                <span className="w-8 h-[1px] bg-[#C8A97E]"></span>
                <span className="text-[#C8A97E] uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs">
                  Signature Bridal Experience
                </span>
              </div>

              <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#2A2520]">
                Elevate Your Beauty With <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
                  Absolute Grandeur
                </span>
              </h3>

              <p className="mt-6 text-[#5A5045] font-light leading-relaxed text-sm md:text-lg max-w-2xl mx-auto xl:mx-0">
                Experience flawless transformations meticulously crafted with luxury techniques, premium international collections, and an undying devotion to timeless feminine elegance.
              </p>
            </div>

            <div className="flex items-center divide-x divide-[#C8A97E]/20">
              {[
                { number: "500+", label: "Bridal Makeovers" },
                { number: "4.6", label: "Google Rating" },
                { number: "20+", label: "Premium Services" },
              ].map((item, index) => (
                <div key={index} className="px-6 md:px-8 flex flex-col items-center justify-center text-center">
                  <h4 className="font-playfair text-3xl md:text-4xl text-[#2A2520] mb-2">
                    {item.number}
                  </h4>
                  <p className="text-[#5A5045] text-[9px] font-bold uppercase tracking-[0.2em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}