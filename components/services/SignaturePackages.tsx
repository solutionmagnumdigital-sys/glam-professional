// components/services/LuxurySignaturePackages.tsx
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Gem,
  Check,
  ArrowUpRight,
} from "lucide-react";

const packages = [
  {
    name: "Silver Bridal",
    // price: "₹15,000",
    badge: "Elegant Start",
    description: "Perfect luxury bridal package for intimate weddings with flawless HD glam finish.",
    features: ["HD Bridal Makeup", "Basic Hair Styling", "Luxury Skin Prep", "Premium Lashes"],
    popular: false,
  },
  {
    name: "Gold Bridal",
    // price: "₹25,000",
    badge: "Most Popular",
    description: "Signature luxury bridal experience by Shivani with premium beauty artistry and glamorous finish.",
    features: ["Luxury HD Makeup", "Advanced Hair Styling", "Airbrush Finish", "Premium Accessories", "Bridal Draping"],
    popular: true,
  },
  {
    name: "Platinum Bridal",
    // price: "₹40,000",
    badge: "Celebrity Choice",
    description: "Ultra-premium celebrity bridal transformation crafted with timeless elegance and perfection.",
    features: ["Celebrity Makeup", "Luxury Airbrush", "Signature Hair Arch", "VIP Experience", "Touch-Up Kit"],
    popular: false,
  },
];

const cinematicEase = [0.16, 1, 0.3, 1];

export default function LuxurySignaturePackages() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-25%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[5%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0"
      >
        COLLECTIONS
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold">Investment</span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-7xl font-normal tracking-tight text-[#2A2520]">
            Glam Professionals <span className="italic text-[#C8A97E]">Packages</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.1 * index, ease: cinematicEase }}
              className={`group relative rounded-[2.5rem] p-8 md:p-10 border transition-all duration-700 ${
                pkg.popular 
                  ? "bg-white border-[#C8A97E]/50 shadow-[0_40px_80px_rgba(200,169,126,0.15)] scale-[1.02]" 
                  : "bg-white/40 border-white/60 backdrop-blur-xl hover:bg-white hover:shadow-[0_20px_40px_rgba(200,169,126,0.1)]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#2A2520] px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white z-20">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border ${pkg.popular ? "border-[#C8A97E]/30 bg-[#FAF7F2]" : "border-white/50 bg-white"}`}>
                    <Gem className={`w-6 h-6 ${pkg.popular ? "text-[#C8A97E]" : "text-[#5A5045]"}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A97E]">{pkg.badge}</span>
                </div>
                <h3 className="font-playfair text-3xl font-medium text-[#2A2520] mb-3">{pkg.name}</h3>
                <p className="text-[#5A5045] font-light text-sm leading-relaxed">{pkg.description}</p>
              </div>

              <div className="mb-10 pb-10 border-b border-[#2A2520]/10">
                <span className="text-4xl font-playfair text-[#2A2520]">{pkg.price}</span>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-[#5A5045] font-light">
                    <div className="w-5 h-5 rounded-full bg-[#C8A97E]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#C8A97E]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full flex items-center justify-between px-8 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                  pkg.popular 
                    ? "bg-[#2A2520] text-white hover:bg-[#C8A97E]" 
                    : "bg-transparent border border-[#2A2520] text-[#2A2520] hover:bg-[#2A2520] hover:text-white"
                }`}
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}