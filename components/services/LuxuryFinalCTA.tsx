// components/services/UltraLuxuryFinalCTA.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Crown,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Clock,
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const luxuryEase = [0.16, 1, 0.3, 1]; 

export default function UltraLuxuryFinalCTA() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 45, 
    damping: 22, 
    mass: 0.5 
  });

  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-25%"]);
  const mainImageY = useTransform(smoothProgress, [0, 1], ["-8%", "8%"]);
  const floatCardY = useTransform(smoothProgress, [0, 1], ["12%", "-12%"]);
  const ambientBlurY = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-32 md:py-56 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[15%] left-0 whitespace-nowrap text-[12rem] md:text-[24rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 select-none will-change-transform"
      >
        THE GRAND FINALE
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: ambientBlurY }}
          className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-[#C8A97E]/10 blur-[160px] rounded-full mix-blend-multiply will-change-transform" 
        />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-6 relative z-10">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: luxuryEase }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
                <Crown className="w-3.5 h-3.5" />
                Bespoke Curation
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
            >
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight">
                Architecting Your <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] drop-shadow-sm mt-1 inline-block">
                  Forever Memory
                </span>
              </h2>

              <p className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-xl">
                Luxury bridal beauty is an investment in absolute confidence and timeless heritage. Secure your calendar date with Glam Professionals By Shivani and experience a celebrity-grade metamorphosis tailored exclusively for you.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
                className="group relative p-6 rounded-[2rem] border border-white/70 bg-white/40 backdrop-blur-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_25px_50px_rgba(200,169,126,0.1)] cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                <Clock className="w-5 h-5 text-[#C8A97E] mb-4" strokeWidth={1.5} />
                <h4 className="font-playfair text-xl font-medium text-[#2A2520] mb-2">Seasonal Limitation</h4>
                <p className="text-xs text-[#5A5045] font-light leading-relaxed">We strictly limit our bridal bookings to preserve premium quality and devotion for every queen in Agra.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: luxuryEase }}
                className="group relative p-6 rounded-[2rem] border border-white/70 bg-white/40 backdrop-blur-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_25px_50px_rgba(200,169,126,0.1)] cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                <MapPin className="w-5 h-5 text-[#C8A97E] mb-4" strokeWidth={1.5} />
                <h4 className="font-playfair text-xl font-medium text-[#2A2520] mb-2">Global Destination</h4>
                <p className="text-xs text-[#5A5045] font-light leading-relaxed">Our elite makeup team is fully equipped to travel worldwide for royal palace and luxury destination weddings.</p>
              </motion.div>

            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: luxuryEase }}
              className="mt-14 flex flex-wrap items-center gap-8 border-t border-[#C8A97E]/20 pt-8"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-12 py-5 bg-[#2A2520] border border-[#2A2520] text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(42,37,32,0.2)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(200,169,126,0.25)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10 flex items-center gap-3">
                  <CalendarDays className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-500" />
                  Secure Your Date
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2A2520] relative py-2 transition-colors duration-300 hover:text-[#C8A97E]">
                <FaWhatsapp className="w-4 h-4 text-green-600" />
                <span>WhatsApp Advising</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8A97E] group-hover:w-full transition-all duration-500" />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2A2520] relative py-2 transition-colors duration-300 hover:text-[#C8A97E]">
                <FaInstagram className="w-4 h-4 text-pink-600" />
                <span>Instagram Lookbook</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8A97E] group-hover:w-full transition-all duration-500" />
              </a>
            </motion.div>

          </div>

          <div className="lg:col-span-6 relative h-[650px] md:h-[850px] w-full flex items-center justify-end">
            
            <motion.div 
              style={{ y: mainImageY }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: luxuryEase }}
              className="relative w-[85%] md:w-[78%] h-[85%] overflow-hidden rounded-t-[18rem] rounded-b-[2.5rem] border-[8px] border-white shadow-[0_40px_90px_rgba(200,169,126,0.15)] bg-[#E8DCCB] group will-change-transform z-10"
            >
              <Image
                src="/images/glam/glam1 (2).jpeg" 
                alt="Luxury Bridal Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
            </motion.div>

            <motion.div 
              style={{ y: floatCardY }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
              className="absolute bottom-10 left-0 w-[45%] md:w-[42%] aspect-[3/4] overflow-hidden rounded-t-[10rem] rounded-b-[1.5rem] border-[6px] border-[#FAF7F2] shadow-[0_30px_70px_rgba(0,0,0,0.18)] bg-white z-20 will-change-transform group"
            >
              <Image
                src="/images/glam/glam1 (5).jpeg" 
                alt="Artistry Close Up"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/[0.05] group-hover:opacity-0 transition-opacity duration-700" />
            </motion.div>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay: 0.4, ease: luxuryEase }}
          className="mt-28 w-full border-t border-[#C8A97E]/30 pt-14"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y-0 grid-rows-2 lg:grid-rows-1 lg:divide-x divide-[#C8A97E]/20">
            {[
              { number: "500+", label: "Luxury Brides" },
              { number: "4.6", label: "Google Rating" },
              { number: "8+", label: "Years Mastery" },
              { number: "20+", label: "Premium Services" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center lg:px-6">
                <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-[#2A2520] mb-2">
                  {item.number}
                </h3>
                <p className="text-[#5A5045] text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-xs text-[#5A5045]/60 tracking-widest font-light max-w-xl mx-auto leading-relaxed uppercase">
            Limited Availability • Bookings Curated By Invitation Only
          </p>
        </div>

      </div>
    </section>
  );
}