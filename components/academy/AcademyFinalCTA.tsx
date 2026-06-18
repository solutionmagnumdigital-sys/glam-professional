// components/academy/AcademyFinalCTA.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function AcademyFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-36 md:py-52 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-15%] w-[1200px] h-[1200px] bg-[#C8A97E]/[0.09] blur-[260px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[1200px] h-[1200px] bg-[#D4B58A]/[0.09] blur-[260px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1.5, ease: luxuryEase }}
          className="relative overflow-hidden rounded-[65px] border border-[#C8A97E]/40 bg-white p-10 sm:p-16 md:p-24 shadow-[0_50px_120px_rgba(200,169,126,0.15)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.04] via-transparent to-pink-500/[0.01] pointer-events-none" />
          <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-[#C8A97E]/[0.08] blur-[180px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: luxuryEase }}
                className="inline-flex items-center gap-3.5 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] px-8 py-3.5 shadow-sm hover:border-[#C8A97E]/60 transition-colors duration-500"
              >
                <Sparkles className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-[#C8A97E] font-bold">
                  Glam Professionals By Shivani
                </span>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
              className="mt-12 font-playfair text-5xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520] max-w-6xl text-center md:text-left"
            >
              Become Agra's Best <br />
              <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-3 pb-2 drop-shadow-sm">
                Luxury Makeup Artist
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
              className="mt-10 text-base sm:text-xl md:text-2xl text-[#5A5045] font-light leading-relaxed max-w-4xl text-center md:text-left"
            >
              Join our elite flagship beauty academy in Sikandra and master heritage bridal application architecture, cinematic micro-atomized airbrush finishes, and ultimate luxury business scaling profiles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: luxuryEase }}
              className="mt-16 flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-6 w-full"
            >
              <Link
                href="/contact"
                className="group relative h-20 px-14 rounded-full bg-[#2A2520] border border-[#2A2520] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_rgba(200,169,126,0.3)] w-full md:w-auto shadow-xl transform hover:-translate-y-1 active:scale-[0.99]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 flex items-center gap-3 text-white font-bold text-sm uppercase tracking-[0.2em]">
                  <span>Enroll Now</span>
                  <ArrowUpRight className="w-5 h-5 text-[#C8A97E] group-hover:text-white group-hover:rotate-45 transition-transform duration-500" strokeWidth={2} />
                </span>
              </Link>

              <Link
                href="https://wa.me/919639211114"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-20 px-12 rounded-full border border-black/[0.06] bg-[#FAF7F2]/60 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-white hover:border-[#25D366] hover:shadow-[0_20px_50px_rgba(37,211,102,0.18)] w-full md:w-auto shadow-xs transform hover:-translate-y-1 active:scale-[0.99]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full bg-[#25D366]/[0.02]" />
                <span className="relative z-10 flex items-center gap-4 text-[#2A2520] font-bold text-sm uppercase tracking-[0.18em] transition-colors duration-500 group-hover:text-[#25D366]">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[6deg]" />
                  <span>WhatsApp Us</span>
                </span>
              </Link>

              <Link
                href="tel:+919639211114"
                className="group relative h-20 px-12 rounded-full border border-black/[0.06] bg-[#FAF7F2]/60 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-white hover:border-[#C8A97E] hover:shadow-[0_20px_50px_rgba(200,169,126,0.15)] w-full md:w-auto shadow-xs transform hover:-translate-y-1 active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center gap-4 text-[#2A2520] font-bold text-sm uppercase tracking-[0.18em] transition-colors duration-500 group-hover:text-[#C8A97E]">
                  <Phone className="w-5 h-5 text-[#C8A97E] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  <span>Call Concierge</span>
                </span>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}