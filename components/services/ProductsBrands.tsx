// components/services/LuxuryBrandsShowcase.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  ShieldCheck,
  Gem,
  Star,
  CheckCircle2,
} from "lucide-react";

interface Brand {
  name: string;
  logo: string;
}

interface TrustFeature {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface StatDetails {
  number: string;
  label: string;
}

const BRANDS: Brand[] = [
  { name: "MAC", logo: "/images/brands/mac.png" },
  { name: "Huda Beauty", logo: "/images/brands/huda.png" },
  { name: "Dior", logo: "/images/brands/dior.png" },
  { name: "NARS", logo: "/images/brands/nars.png" },
  { name: "Charlotte Tilbury", logo: "/images/brands/ct.png" },
  { name: "Chanel", logo: "/images/brands/chanel.png" },
  { name: "Bobbi Brown", logo: "/images/brands/bobbi-brown.png" },
  { name: "Estee Lauder", logo: "/images/brands/estee.png" },
];

const TRUST_FEATURES: TrustFeature[] = [
  {
    icon: ShieldCheck,
    title: "100% Authentic",
    desc: "Exclusively verified genuine luxury beauty formulations.",
  },
  {
    icon: Crown,
    title: "Celebrity Finish",
    desc: "Architectural contouring for the grand stage.",
  },
  {
    icon: Sparkles,
    title: "Liquid Glow",
    desc: "Ethereal, long-lasting bridal radiance.",
  },
  {
    icon: Star,
    title: "Dermatologically Safe",
    desc: "Premium curation suitable for all skin topologies.",
  },
];

const STATS: StatDetails[] = [
  { number: "8+", label: "Luxury Maisons" },
  { number: "100%", label: "Authentic Sourcing" },
  { number: "390+", label: "Happy Clients" },
  { number: "4.6★", label: "Google Rating" },
];

export default function LuxuryBrandsShowcase() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40 bg-[#FAF7F2] text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], y: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[55vw] h-[55vw] bg-[#C8A97E]/12 blur-[140px] rounded-full mix-blend-multiply will-change-transform" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-[#E8DCCB]/30 blur-[150px] rounded-full mix-blend-multiply will-change-transform" 
        />
        
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/60 backdrop-blur-xl px-6 py-2.5 shadow-[0_10px_30px_rgba(200,169,126,0.06)]">
            <Gem className="w-4 h-4 text-[#C8A97E]" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A97E]">
              The Curator's Vault
            </span>
          </div>

          <h2 className="mt-8 font-playfair text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight">
            Only Premium <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block drop-shadow-sm">
              Luxury Brands
            </span>
          </h2>

          <p className="mt-6 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl">
            We source exclusively from authentic, world-class luxury cosmetic houses to construct flawless, high-endurance transformations at Glam Professionals.
          </p>
        </div>

        <div className="relative mt-24 md:mt-32 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-max gap-6 md:gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {[...BRANDS, ...BRANDS].map((brand, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[240px] md:w-[280px] rounded-[2rem] border border-white/80 bg-white/40 backdrop-blur-xl p-8 md:p-10 transition-all duration-700 hover:bg-white hover:border-[#C8A97E]/40 hover:-translate-y-2 shadow-[0_15px_35px_rgba(200,169,126,0.04)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#C8A97E]/5 via-transparent to-transparent rounded-[2rem] pointer-events-none" />

                <div className="relative h-16 flex items-center justify-center mb-6">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    fill
                    sizes="280px"
                    className="object-contain opacity-75 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-playfair text-lg md:text-xl font-medium text-[#2A2520]">
                    {brand.name}
                  </h3>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#C8A97E]/20 bg-[#FAF7F2]/60 px-3 py-1">
                    <CheckCircle2 className="w-3 h-3 text-[#C8A97E]" />
                    <span className="text-[9px] text-[#5A5045] uppercase tracking-widest font-bold">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-28 md:mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRUST_FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-[2rem] border border-white/80 bg-white/40 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:bg-white hover:border-[#C8A97E]/30 hover:-translate-y-1.5 shadow-[0_20px_40px_rgba(200,169,126,0.03)]"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#C8A97E]/20 flex items-center justify-center mb-6 shadow-inner group-hover:bg-[#C8A97E] transition-colors duration-500">
                    <Icon className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-playfair text-xl font-medium text-[#2A2520] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#5A5045] leading-relaxed font-light mt-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative mt-28 md:mt-36 rounded-[2.5rem] md:rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl p-10 md:p-16 lg:p-20 overflow-hidden shadow-[0_40px_90px_rgba(200,169,126,0.06)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/4 via-transparent to-[#C8A97E]/4 pointer-events-none rounded-[3rem]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
                <Crown className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-[#C8A97E] uppercase tracking-[0.25em] text-xs font-bold">
                  The Gold Standard
                </span>
              </div>
              <h3 className="font-playfair text-4xl md:text-5xl font-normal text-[#2A2520] leading-[1.15]">
                Architecting <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-1 inline-block">
                  Timeless Beauty
                </span>
              </h3>
              <p className="mt-6 text-sm md:text-base text-[#5A5045] font-light leading-relaxed">
                We believe the canvas is only as good as the paint. Every execution is backed by elite tier inventory to guarantee an uncompromised, photographic finish.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto shrink-0">
              {STATS.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-white/80 bg-white/60 p-6 sm:p-8 flex flex-col items-center justify-center text-center min-w-[150px] sm:min-w-[190px] shadow-[0_15px_30px_rgba(200,169,126,0.03)]"
                >
                  <h4 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal text-[#2A2520] mb-2">
                    {item.number}
                  </h4>
                  <p className="text-[9px] tracking-[0.18em] text-[#5A5045] uppercase font-bold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}