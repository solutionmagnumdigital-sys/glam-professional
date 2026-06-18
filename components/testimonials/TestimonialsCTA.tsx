// components/testimonials/TestimonialsCTA.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Phone,
} from "lucide-react";

// Ultra High-Tier Luxurious Cubic Bezier
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

export default function TestimonialsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 md:pt-20 pb-28 md:pb-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= EXTRA LARGE ROYAL BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[1100px] h-[1100px] bg-[#C8A97E]/[0.06] blur-[220px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[1100px] h-[1100px] bg-[#D4B58A]/[0.06] blur-[220px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:130px_130px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        {/* ================= HIGH-END EMBEDDED CTA BOX ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, ease: luxuryEase }}
          className="relative overflow-hidden rounded-[60px] border border-[#C8A97E]/40 bg-white p-10 sm:p-16 md:p-24 shadow-[0_45px_110px_rgba(200,169,126,0.14)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.04] via-transparent to-pink-500/[0.01] pointer-events-none" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C8A97E]/[0.06] blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: luxuryEase }}
                className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] px-6 py-2.5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
                  Luxury Beauty Experience
                </span>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
              className="mt-10 font-playfair text-4xl sm:text-6xl md:text-8xl font-normal leading-[1.05] tracking-tight text-[#2A2520] max-w-5xl text-center md:text-left"
            >
              Your Luxury Bridal <br />
              <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 pb-2 drop-shadow-xs">
                Transformation Starts Here
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
              className="mt-8 text-base sm:text-xl md:text-2xl text-[#5A5045] font-light leading-relaxed max-w-3xl text-center md:text-left"
            >
              Experience luxury bridal artistry trusted by premium brides, global influencers, and celebrity creators. Reserve your exclusive red-carpet session registry today at Glam Professionals By Shivani.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: luxuryEase }}
              className="mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-start gap-5 w-full"
            >
              <Link
                href="/contact"
                className="group relative h-18 px-12 rounded-full bg-[#2A2520] border border-[#2A2520] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(200,169,126,0.25)] w-full md:w-auto shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99] text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 flex items-center gap-2.5 text-white font-bold text-xs uppercase tracking-[0.2em]">
                  <span>Book Luxury Glam</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white group-hover:rotate-45 transition-transform duration-500" strokeWidth={2} />
                </span>
              </Link>

              <Link
                href="https://wa.me/919639211114"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-18 px-10 rounded-full border border-black/[0.06] bg-[#FAF7F2]/60 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-white hover:border-[#25D366] hover:shadow-[0_15px_40px_rgba(37,211,102,0.15)] w-full md:w-auto shadow-xs transform hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center gap-3.5 text-[#2A2520] font-bold text-xs uppercase tracking-[0.15em] transition-colors duration-500 group-hover:text-[#25D366]">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] transition-transform duration-500 group-hover:scale-110" />
                  <span>WhatsApp Us</span>
                </span>
              </Link>

              <Link
                href="tel:+919639211114"
                className="group relative h-18 px-10 rounded-full border border-black/[0.06] bg-[#FAF7F2]/60 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-white hover:border-[#C8A97E] hover:shadow-[0_15px_40px_rgba(200,169,126,0.12)] w-full md:w-auto shadow-xs transform hover:-translate-y-0.5 active:scale-[0.99]"
              >
                <span className="relative z-10 flex items-center gap-3.5 text-[#2A2520] font-bold text-xs uppercase tracking-[0.15em] transition-colors duration-500 group-hover:text-[#C8A97E]">
                  <Phone className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                  <span>Call Concierge</span>
                </span>
              </Link>
            </motion.div>

            {/* --- SCALE UP PREMIUM ACCOMPLISHMENTS METRICS GRID --- */}
            <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {[
                { title: "500+", subtitle: "Bridal Makeovers" },
                { title: "4.6 / 5.0", subtitle: "Google Rating" },
                { title: "390+", subtitle: "Happy Clients" },
                { title: "20+", subtitle: "Premium Services" },
              ].map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.08, ease: luxuryEase }}
                    className="group relative overflow-hidden rounded-[35px] border border-black/[0.04] bg-[#FAF7F2]/60 backdrop-blur-xl p-7 transition-all duration-500 hover:border-[#C8A97E]/40 hover:bg-white hover:shadow-[0_25px_60px_rgba(200,169,126,0.08)] hover:-translate-y-1.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <h3 className="font-playfair mt-6 text-3xl sm:text-4xl font-normal text-[#2A2520] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#5A5045] font-light tracking-wide">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}