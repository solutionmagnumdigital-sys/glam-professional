// components/contact/ContactHero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  ArrowUpRight,
  Phone,
  MapPin,
  Star,
  Gem,
  BadgeCheck,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const WhatsAppVectorIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] min-h-screen flex items-center pt-28 pb-24 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[1100px] h-[1100px] bg-[#C8A97E]/[0.06] blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[1100px] h-[1100px] bg-[#D4B58A]/[0.06] blur-[240px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:135px_135px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-md px-6 py-2.5 shadow-xs mb-8 group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E] group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-300" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
                Luxury Beauty Consultation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
              className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]"
            >
              Let’s Create Your <br />
              <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 pb-1 drop-shadow-sm">
                Dream Bridal Look
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
              className="mt-8 text-base sm:text-xl text-[#5A5045] font-light leading-relaxed max-w-2xl"
            >
              Book your luxury bridal consultation at Glam Professionals By Shivani, Agra's Best Makeup Studio, and experience cinematic beauty artistry trusted by premium brides globally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: luxuryEase }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
            >
              <Link
                href="#booking-form"
                className="group relative h-18 px-12 rounded-full bg-[#2A2520] border border-[#2A2520] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(200,169,126,0.25)] shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99] w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 flex items-center gap-2.5 text-white font-bold text-xs uppercase tracking-[0.2em]">
                  <span>Book Luxury Session</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-transform duration-500 group-hover:rotate-45" strokeWidth={2} />
                </span>
              </Link>

              <Link
                href="https://wa.me/919639211114"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-18 px-10 rounded-full border border-black/[0.06] bg-white flex items-center justify-center transition-all duration-500 hover:border-[#25D366] hover:shadow-[0_15px_40px_rgba(37,211,102,0.15)] shadow-xs transform hover:-translate-y-0.5 active:scale-[0.99] w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-3.5 text-[#2A2520] font-bold text-xs uppercase tracking-[0.15em] transition-colors duration-500 group-hover:text-[#25D366]">
                  <WhatsAppVectorIcon className="w-5 h-5 text-[#25D366] transition-transform duration-500 group-hover:scale-110" />
                  <span>WhatsApp Us</span>
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4, ease: luxuryEase }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
            >
              {[
                { icon: Crown, value: "500+", label: "Bridal Makeovers", color: "group-hover:text-amber-300" },
                { icon: Star, value: "4.6", label: "Google Rating", color: "group-hover:text-amber-400 group-hover:fill-amber-400" },
                { icon: Gem, value: "HD", label: "Luxury Finish", color: "group-hover:text-cyan-300" },
                { icon: BadgeCheck, value: "390+", label: "Happy Clients", color: "group-hover:text-emerald-400" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[30px] border border-black/[0.04] bg-white/70 backdrop-blur-xl p-5 transition-all duration-500 hover:border-[#C8A97E]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(200,169,126,0.06)] cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2A2520] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className={`w-4 h-4 text-[#C8A97E] transition-colors duration-300 ${item.color}`} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-playfair mt-5 text-2xl font-normal text-[#2A2520] tracking-tight">
                      {item.value}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#5A5045] font-light tracking-wide">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative overflow-hidden rounded-[50px] border border-[#C8A97E]/30 bg-white p-8 sm:p-10 md:p-12 shadow-[0_45px_110px_rgba(200,169,126,0.14)] relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.03] via-transparent to-pink-500/[0.01] pointer-events-none" />
              
              <div className="relative z-10 w-full">
                
                <div className="flex items-start justify-between gap-5 border-b border-black/[0.05] pb-6">
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-[9px] font-bold block mb-1">// STUDIO RESERVATION</span>
                    <h3 className="font-playfair text-3xl font-normal text-[#2A2520] tracking-tight transition-colors duration-500 group-hover:text-[#25D366]">
                      Atelier Concierge
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#2A2520] flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#C8A97E]">
                    <Crown className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="mt-8 space-y-4 w-full">
                  {[
                    { icon: Phone, title: "Call Concierge", value: "+91 96392 11114", color: "hover:border-[#C8A97E] hover:text-[#C8A97E]", href: "tel:+919639211114" },
                    { icon: WhatsAppVectorIcon, title: "WhatsApp Booking", value: "Instant Luxury Booking", color: "hover:border-[#25D366] hover:text-[#25D366]", href: "https://wa.me/919639211114" },
                    { icon: MapPin, title: "Studio Address 1 (Sikandra)", value: "2nd Floor, Sikandra-Bodla Rd, Kargil Petrol Pump, Sikandra, Agra 282007", color: "hover:border-pink-400 hover:text-pink-400", href: "#" },
                    { icon: MapPin, title: "Studio Address 2 (Fatehabad Rd)", value: "54, Fatehabad Rd, Agra Cantt, Idgah Colony, Agra 282001", color: "hover:border-purple-400 hover:text-purple-400", href: "#" },
                  ].map((item, index) => {
                    const CardIcon = item.icon;

                    return (
                      <Link
                        href={item.href}
                        key={index}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        className={`group/item flex items-center gap-5 rounded-[28px] border border-black/[0.04] bg-[#FAF7F2]/80 p-5 transition-all duration-500 w-full shadow-inner ${item.color} hover:bg-white hover:-translate-y-1 block`}
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2A2520] text-white shadow-sm shrink-0 transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-[-6deg] group-hover/item:bg-[#C8A97E]">
                          <CardIcon className="w-4 h-4 text-[#C8A97E] group-hover/item:text-white transition-colors duration-300" strokeWidth={1.5} />
                        </div>

                        <div>
                          <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-[#2A2520]/40 group-hover/item:text-[#C8A97E] transition-colors">
                            {item.title}
                          </h4>
                          <p className="mt-1 font-serif text-sm sm:text-base font-medium text-[#2A2520] transition-colors duration-300 group-hover/item:text-black leading-snug">
                            {item.value}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/bridal-portfolio"
                  className="group relative h-16 mt-8 w-full rounded-full border border-black/[0.08] bg-[#FAF7F2] flex items-center justify-center font-bold text-xs uppercase tracking-[0.2em] shadow-xs transition-all duration-500 hover:bg-[#2A2520] hover:text-white hover:border-[#2A2520] transform hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Explore Luxury Portfolio</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] }}
              className="absolute -bottom-6 -left-6 hidden xl:block rounded-[30px] border border-[#C8A97E]/30 bg-white p-5 shadow-2xl z-20 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2A2520] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:bg-amber-400">
                  <Star className="w-4 h-4 text-[#C8A97E] fill-[#C8A97E] transition-colors duration-500 group-hover:text-white group-hover:fill-white" />
                </div>
                <div>
                  <h4 className="font-playfair text-2xl font-normal text-[#2A2520] tracking-tight leading-none">4.6 / 5.0</h4>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#5A5045] font-light">Luxury Client Rating</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}