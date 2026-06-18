// components/contact/StudioLocation.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Clock3,
  Phone,
  ArrowUpRight,
  Star,
  Copy,
  CheckCircle2,
  Crown
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

const premiumItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.4, ease: luxuryEase } 
  }
};

const studioLocations = [
  {
    id: "sikandra",
    name: "Sikandra Studio",
    address: "2nd Floor, Sikandra-Bodla Rd, Kargil Petrol Pump, Suruchipuram Colony, Sikandra, Agra, Uttar Pradesh 282007",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.507193884502!2d77.95340809999999!3d27.2032215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974774b78f1b10f%3A0xa14c82c9278bef91!2sGlam%20Professionals%20By%20Shivani%20-%20Best%20Makeup%20Artist%20in%20Agra!5e0!3m2!1sen!2sin!4v1781597841058!5m2!1sen!2sin",
    link: "https://share.google/CRSbcFtKrJ0LCUPW3",
    hours: "10:00 AM — 09:00 PM (Daily)",
  },
  {
    id: "fatehabad",
    name: "Fatehabad Rd Studio",
    address: "54, Fatehabad Rd, Agra Cantt, Idgah Colony, Agra, Uttar Pradesh 282001",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.922497876938!2d78.0249509!3d27.1587286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471ebbc872b69%3A0x1f455412ef688b28!2sGlam%20Professionals%20By%20Shivani%20-%20%231%20Makeup%20Artist%20in%20Agra!5e0!3m2!1sen!2sin!4v1781597878044!5m2!1sen!2sin",
    link: "https://maps.google.com/?q=54,+Fatehabad+Rd,+Agra+Cantt,+Idgah+Colony,+Agra",
    hours: "10:00 AM — 09:00 PM (Daily)",
  }
];

export default function StudioLocation() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-24 md:pt-36 pb-36 md:pb-52 text-[#2A2520] select-none selection:bg-[#C8A97E]/30 antialiased">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= EXTRA LARGE ULTRA-LUXURY LIGHT AMBIENT GLOWS ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-15%] w-[1300px] h-[1300px] bg-[#C8A97E]/[0.08] blur-[260px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-15%] w-[1300px] h-[1300px] bg-[#D4B58A]/[0.08] blur-[260px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-10 md:px-16 w-full">
        
        {/* ================= HIGH-FASHION EDITORIAL HEADING ================= */}
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="inline-flex items-center gap-3.5 rounded-full border border-[#C8A97E]/40 bg-white/80 backdrop-blur-xl px-7 py-3 shadow-xs mb-8 group cursor-pointer hover:border-[#C8A97E]/80 transition-colors duration-500"
          >
            <Sparkles className="w-4 h-4 text-[#C8A97E] group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-500" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C8A97E] font-bold">
              Luxury Bridal Studios
            </span>
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: luxuryEase }}
              className="font-playfair text-5xl sm:text-7xl md:text-8xl font-normal leading-[1.05] tracking-tight text-[#2A2520]"
            >
              Visit Our Premium <br />
              <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-3 pb-2 drop-shadow-sm">
                Luxury Beauty Ateliers
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="mt-8 text-base sm:text-xl md:text-2xl text-[#5A5045] font-light leading-relaxed max-w-4xl mx-auto"
          >
            Step into our ultra-luxury bridal beauty studios located at Sikandra and Fatehabad Road. Designed exclusively for premium bridal transformations and celebrity glam sessions in Agra.
          </motion.p>
        </div>

        {/* ================= DUAL MAP LOCATIONS GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-stretch w-full"
        >
          {studioLocations.map((location) => (
            <motion.div key={location.id} variants={premiumItemVariants} className="flex flex-col space-y-6">
              
              {/* Info Card */}
              <div className="relative overflow-hidden rounded-[40px] border border-[#C8A97E]/30 bg-white p-8 md:p-10 shadow-[0_30px_80px_rgba(200,169,126,0.12)] z-10 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.03] via-transparent to-transparent pointer-events-none" />
                
                <div className="flex items-start justify-between gap-5 border-b border-black/[0.05] pb-6">
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.25em] text-[9px] font-bold block mb-1.5">// {location.name.toUpperCase()}</span>
                    <h3 className="font-playfair text-3xl font-normal text-[#2A2520] tracking-tight">
                      {location.name}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#2A2520] flex items-center justify-center shadow-md transition-all duration-500 hover:rotate-12 hover:bg-[#C8A97E] group/icon shrink-0">
                    <Crown className="w-4 h-4 text-[#C8A97E] group-hover/icon:text-[#2A2520] transition-colors" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#FAF7F2]/80 border border-black/[0.02]">
                    <MapPin className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="font-serif text-sm md:text-base text-[#2A2520] leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#FAF7F2]/80 border border-black/[0.02]">
                    <Clock3 className="w-5 h-5 text-[#C8A97E] shrink-0" strokeWidth={1.5} />
                    <p className="font-serif text-sm md:text-base text-[#2A2520]">
                      {location.hours}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-black/[0.05] flex items-center gap-4">
                  <Link
                    href={location.link}
                    target="_blank"
                    className="flex-1 group relative h-12 rounded-full bg-[#2A2520] border border-[#2A2520] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_15px_30px_rgba(200,169,126,0.25)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="relative z-10 flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.2em]">
                      Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>

                  <button 
                    onClick={() => handleCopyAddress(location.id, location.address)}
                    className={`h-12 px-6 rounded-full border transition-all duration-500 flex items-center justify-center relative shrink-0 ${
                      copiedId === location.id ? "bg-emerald-50 border-emerald-500/30 text-emerald-600" : "bg-[#FAF7F2] border-black/[0.05] text-[#C8A97E] hover:bg-white hover:border-[#C8A97E]/40"
                    }`}
                  >
                    {copiedId === location.id ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Map Canvas Card */}
              <div className="relative overflow-hidden rounded-[40px] border border-[#C8A97E]/20 bg-white p-3 shadow-[0_30px_70px_rgba(200,169,126,0.1)] group/map w-full h-[350px] md:h-[450px]">
                <div className="overflow-hidden rounded-[30px] relative z-10 w-full h-full">
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05) brightness(0.98)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-[30px] transition-transform duration-1000 group-hover/map:scale-[1.02]"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM CONTACT META ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: luxuryEase }}
          className="mt-20 md:mt-28 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-[40px] border border-[#C8A97E]/30 bg-white shadow-[0_30px_80px_rgba(200,169,126,0.08)]"
        >
          <div className="flex items-center gap-4 bg-[#FAF7F2] border border-black/[0.03] p-4 rounded-[22px] shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2A2520]">
              <Star className="w-4 h-4 text-[#C8A97E] fill-[#C8A97E]" />
            </div>
            <div>
              <h4 className="font-playfair text-2xl font-normal text-[#2A2520] tracking-tight leading-none">4.6 / 5.0</h4>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-[#5A5045] font-light">Verified Google Reviews</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <div className="text-center sm:text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C8A97E] mb-1">Direct Booking</p>
              <h4 className="font-serif text-lg font-medium text-[#2A2520]">+91 96392 11114</h4>
            </div>
            <Link
              href="/contact"
              className="h-16 px-10 rounded-full bg-[#FAF7F2] border border-black/[0.06] flex items-center justify-center font-bold text-xs uppercase tracking-[0.2em] shadow-sm transition-all duration-500 hover:bg-[#2A2520] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}