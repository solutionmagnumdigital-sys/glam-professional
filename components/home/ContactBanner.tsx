"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Crown,
  PhoneCall,
  MapPin,
  Star,
  StarHalf,
} from "lucide-react";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

const cinematicEase = [0.16, 1, 0.3, 1];

// Business Details from GMB
const businessPhone = "919639211114";
const waMessage = encodeURIComponent(
  "Hello Glam Professionals By Shivani! ✨\n\nI am looking for your luxury makeup/academy services in Agra. Could you please share more details regarding packages and availability?"
);
const whatsappLink = `https://wa.me/${businessPhone}?text=${waMessage}`;
const googleMapsLink = "https://share.google/CRSbcFtKrJ0LCUPW3";

const services = [
  "Bridal Make-up",
  "Airbrush Make-up",
  "Hairstyling",
  "Makeup Classes",
  "Special Occasion Makeup",
  "Photography Make-up",
  "Fashion Show Makeup",
  "Skin Care",
  "Makeovers",
  "Eye Make-up",
];

// Scalable Locations Array
const studioLocations = [
  {
    id: "sikandra",
    name: "Sikandra Studio",
    address: "2nd Floor, Sikandra-Bodla Rd, Kargil Petrol Pump, Suruchipuram Colony, Sikandra, Agra, Uttar Pradesh 282007",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.507193884502!2d77.95340809999999!3d27.2032215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974774b78f1b10f%3A0xa14c82c9278bef91!2sGlam%20Professionals%20By%20Shivani%20-%20Best%20Makeup%20Artist%20in%20Agra!5e0!3m2!1sen!2sin!4v1781597841058!5m2!1sen!2sin",
    link: googleMapsLink, 
    hours: "Closed · Opens 9:00 AM Daily",
  },
  {
    id: "fatehabad",
    name: "Fatehabad Rd Studio",
    address: "54, Fatehabad Rd, Agra Cantt, Idgah Colony, Agra, Uttar Pradesh 282001",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.922497876938!2d78.0249509!3d27.1587286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471ebbc872b69%3A0x1f455412ef688b28!2sGlam%20Professionals%20By%20Shivani%20-%20%231%20Makeup%20Artist%20in%20Agra!5e0!3m2!1sen!2sin!4v1781597878044!5m2!1sen!2sin",
    link: "https://maps.google.com/?q=54,+Fatehabad+Rd,+Agra+Cantt,+Idgah+Colony,+Agra", // Fallback generated link
    hours: "Closed · Opens 9:00 AM Daily",
  }
];

export default function LuxuryContactBanner() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Ambient Parallax Glows
  const glowY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  // Slower parallax for the main glass card to create depth
  const cardY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-40 bg-[#FAF7F2] text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      {/* Required Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ================= ULTRA LUXURY BACKGROUND (LIGHT) ================= */}
      <motion.div 
        style={{ y: glowY1 }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/15 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        style={{ y: glowY2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/50 blur-[150px] rounded-full pointer-events-none" 
      />
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />

      <div className="relative max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20 z-10">
        
        {/* ================= FROSTED IVORY GLASS CARD ================= */}
        <motion.div
          style={{ y: cardY }}
          className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/60 bg-white/50 backdrop-blur-3xl shadow-[0_40px_100px_rgba(200,169,126,0.12)] pt-20 md:pt-28 flex flex-col"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />

          {/* Decorative Rotating Dials */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border border-dashed border-[#C8A97E]/30 rounded-full pointer-events-none hidden md:block"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[30%] -left-[10%] w-[800px] h-[800px] border border-[#C8A97E]/15 rounded-full pointer-events-none hidden md:block"
          />

          {/* ================= FLOATING GOOGLE REVIEW BADGE ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: cinematicEase }}
            className="absolute top-6 left-6 md:top-10 md:left-10 z-20"
          >
            <a 
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-white rounded-full p-2 pr-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
                <FaGoogle className="w-5 h-5 text-[#4285F4]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[#2A2520] text-sm mr-1">4.7</span>
                  <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                  <StarHalf className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                </div>
                <span className="text-[10px] text-[#5A5045] font-semibold tracking-wide uppercase mt-0.5">388 Reviews</span>
              </div>
            </a>
          </motion.div>

          <div className="px-6 md:px-16 lg:px-24 flex-grow flex flex-col items-center pb-10">
            
            {/* Top Brand Name */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: cinematicEase }}
              className="flex justify-center mb-8 md:mb-12 relative z-10"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] backdrop-blur-xl px-6 py-2.5 shadow-[0_10px_30px_rgba(200,169,126,0.1)]">
                <Crown className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#C8A97E]">
                  Glam Professionals By Shivani
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <div className="text-center max-w-4xl mx-auto relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
                className="font-playfair text-5xl sm:text-6xl md:text-[5.5rem] font-normal leading-[1.05] text-[#2A2520]"
              >
                Agra's Finest <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] drop-shadow-sm">
                  Beauty Artistry
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: cinematicEase }}
                className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl mx-auto"
              >
                Experience the pinnacle of luxury makeup. Whether you desire an ethereal bridal glow, high-fashion editorial styling, or elite makeup education, your masterpiece begins here.
              </motion.p>
            </div>

            {/* ================= LUXURY CTA BUTTONS ================= */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }}
              className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto relative z-10"
            >
              <a
                href="tel:+919639211114"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 md:px-12 py-5 bg-[#2A2520] border border-[#2A2520] text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(42,37,32,0.2)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(200,169,126,0.3)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                <span className="relative z-10 flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                  Call For Booking
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 md:px-12 py-5 border border-[#C8A97E]/30 bg-white/80 backdrop-blur-xl text-[#2A2520] font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-sm transition-all duration-500 hover:border-[#25D366]/40 hover:bg-white hover:text-[#25D366] hover:shadow-[0_15px_40px_rgba(37,211,102,0.15)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-[#C8A97E] group-hover:text-[#25D366] transition-colors duration-500" />
                  Chat on WhatsApp
                  <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-[#25D366] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ================= STUDIO LOCATIONS & SERVICES ================= */}
          <div className="mt-10 border-t border-white/60 relative z-10 bg-white/40 backdrop-blur-lg">
            
            {/* Services Marquee (Infinite Scroll) */}
            <div className="border-b border-white/60 py-4 overflow-hidden relative flex">
              <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF7F2]/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF7F2]/80 to-transparent z-10" />
              
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex whitespace-nowrap gap-8 px-4"
              >
                {[...services, ...services].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-8">
                    <span className="text-[#5A5045] font-playfair italic text-lg md:text-xl tracking-wide opacity-80">
                      {service}
                    </span>
                    <Sparkles className="w-3 h-3 text-[#C8A97E]/50" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dynamic Two-Column Locations Layout */}
            <div className="px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {studioLocations.map((location) => (
                <div key={location.id} className="flex flex-col gap-6">
                  {/* Location Details Header */}
                  <div className="flex flex-col gap-5">
                    <a 
                      href={location.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-white border border-[#C8A97E]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C8A97E] group-hover:shadow-md transition-all duration-500">
                        <MapPin className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="text-[#2A2520] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1.5 group-hover:text-[#C8A97E] transition-colors duration-300">
                          {location.name} <ArrowUpRight className="inline w-3 h-3 mb-1" />
                        </h4>
                        <p className="text-[#5A5045] text-xs md:text-sm font-light leading-relaxed max-w-sm group-hover:text-[#2A2520] transition-colors duration-300">
                          {location.address}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/50 border border-white/40 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <div className="flex flex-col justify-center h-10">
                        <p className="text-[#5A5045] text-xs md:text-sm font-light">
                          {location.hours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location Embedded Map */}
                  <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden border-2 border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative group">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
                    <iframe 
                      src={location.mapSrc}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full object-cover filter grayscale-[15%] contrast-[1.05] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}