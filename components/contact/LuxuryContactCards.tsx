// components/contact/LuxuryContactCards.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
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

const contactCards = [
  {
    icon: Phone,
    title: "Call Our Luxury Team",
    subtitle: "Bridal Phone Line",
    value: "+91 96392 11114",
    href: "tel:+919639211114",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    textColor: "hover:text-[#C8A97E] border-amber-500/20",
  },
  {
    icon: WhatsAppVectorIcon,
    title: "WhatsApp Booking",
    subtitle: "Premium Support Chat",
    value: "Chat With Us",
    href: "https://wa.me/919639211114",
    iconBg: "bg-[#25D366]",
    iconColor: "text-white",
    textColor: "hover:text-[#C8A97E] border-[#25D366]/20",
  },
  {
    icon: Mail,
    title: "Luxury Email Concierge",
    subtitle: "Artistry Assistance",
    value: "info@glamprofessional.com",
    href: "mailto:info@glamprofessional.com",
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
    textColor: "hover:text-[#C8A97E] border-cyan-500/20",
  },
  {
  icon: MapPin,
  title: "Visit Luxury Studio",
  subtitle: "Exclusive Bridal Atelier",
  addresses: [
    "2nd Floor, Sikandra-Bodla Rd, Kargil Petrol Pump, Suruchipuram Colony, Sikandra, Agra, Uttar Pradesh 282007",
    "54, Fatehabad Rd, Agra Cantt, Idgah Colony, Agra, Uttar Pradesh 282001",
  ],
  href: "#",
  iconBg: "bg-purple-500",
  iconColor: "text-white",
  textColor: "hover:text-[#C8A97E] border-purple-500/20",
},
  
];

export default function LuxuryContactCards() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 md:pt-20 pb-28 md:pb-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[1300px] h-[1300px] bg-[#C8A97E]/[0.05] blur-[260px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[1300px] h-[1300px] bg-[#D4B58A]/[0.06] blur-[260px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="text-center max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="inline-flex items-center gap-3.5 rounded-full border border-[#C8A97E]/40 bg-white/80 backdrop-blur-xl px-7 py-3 shadow-xs mb-8 group cursor-pointer hover:border-[#C8A97E]/80 transition-colors duration-500"
          >
            <Sparkles className="w-4 h-4 text-[#C8A97E] group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-500" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C8A97E] font-bold">
              Premium Contact Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight text-[#2A2520]"
          >
            Connect With Our <br />
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-3 pb-2 drop-shadow-xs">
              Luxury Beauty Experts
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {contactCards.map((item, index) => {
            const CardIcon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, delay: index * 0.06, ease: luxuryEase }}
                className="group relative overflow-hidden rounded-[40px] border border-black/[0.04] bg-white p-7 sm:p-8 flex flex-col justify-between shadow-[0_15px_45px_rgba(200,169,126,0.03)] hover:shadow-[0_25px_65px_rgba(200,169,126,0.1)] transition-all duration-500 transform-gpu cursor-default"
              >
                <div className="relative z-10 w-full">
                  
                  <div className="flex items-center justify-between gap-4 w-full">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-[20px] shadow-sm transition-transform duration-500 group-hover:scale-105 ${item.iconBg}`}>
                      <CardIcon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={1.5} />
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-black/[0.04] bg-[#FAF7F2] px-3.5 py-1.5 shadow-inner">
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2} />
                      <span className="text-[9px] uppercase tracking-[0.12em] text-[#5A5045] font-bold">Verified</span>
                    </div>
                  </div>

                  <div className="mt-10">
                    <span className="text-[#C8A97E] uppercase tracking-[0.25em] text-[9px] font-bold block mb-1.5">// {item.subtitle}</span>
                    <h3 className="font-playfair text-2xl font-normal text-[#2A2520] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-3 space-y-3">
  {item.addresses ? (
    item.addresses.map((address, i) => (
      <p
        key={i}
        className={`font-serif text-sm sm:text-base font-medium tracking-tight leading-relaxed border-b border-transparent pb-0.5 transition-colors duration-300 ${item.textColor}`}
      >
        <span className="font-semibold text-[#2A2520]">
          Studio Address {i + 1}:
        </span>
        <br />
        {address}
      </p>
    ))
  ) : (
    <p
      className={`font-serif text-base sm:text-lg font-medium tracking-tight break-all border-b border-transparent pb-0.5 inline-block transition-colors duration-300 ${item.textColor}`}
    >
      {item.value}
    </p>
  )}
</div>
                  </div>
                </div>

                <div className="mt-8 relative z-10">
                  <Link
                    href={item.href}
                    target={item.href.startsWith("https") ? "_blank" : "_self"}
                    className="relative h-12 px-6 rounded-full border border-black/[0.06] bg-[#FAF7F2] inline-flex items-center justify-center font-bold text-[11px] uppercase tracking-[0.2em] shadow-xs transition-colors duration-300 hover:bg-[#2A2520] hover:text-white hover:border-[#2A2520] w-full sm:w-auto text-center"
                  >
                    <span className="flex items-center gap-2">
                      <span>Connect Now</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A97E]" strokeWidth={2} />
                    </span>
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}