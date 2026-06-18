"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";

// ================= GALLERY DATA WITH METADATA ================= //
// Note: In a true masonry layout, we don't force heights. The images will 
// naturally take their original aspect ratios without cutting.
const galleryItems = [
  {
    src: "/images/glam/glam1 (1).jpeg",
    title: "Glass Skin Glam",
    category: "Editorial Beauty",
  },
  {
    src: "/images/glam/glam1 (4).jpeg",
    title: "Gilded Glow",
    category: "Signature Bridal",
  },
  {
    src: "/images/glam/glam1 (8).jpeg",
    title: "The Royal Bride",
    category: "Traditional Luxury",
  },
  {
    src: "/images/glam/glam1 (12).jpeg",
    title: "Midnight Allure",
    category: "Evening Glamour",
  },
  {
    src: "/images/glam/glam1 (18).jpeg",
    title: "Haute Couture",
    category: "Runway Artistry",
  },
  {
    src: "/images/glam/glam1 (21).jpeg",
    title: "Ethereal Elegance",
    category: "Soft Glam",
  },
  {
    src: "/images/glam/glam1 (24).jpeg",
    title: "Timeless Classic",
    category: "Masterclass",
  },
  {
    src: "/images/glam/glam1 (30).jpeg",
    title: "Avant-Garde",
    category: "Fashion Editorial",
  },
];

const cinematicEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function LuxuryGalleryMasonry() {
  const containerRef = useRef(null);

  // Subtle Parallax for Background Glows
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[#FAF7F2] text-[#2A2520] overflow-hidden selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      {/* Required Fonts & Masonry CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        /* Smooth image rendering */
        img { image-rendering: -webkit-optimize-contrast; }
      `}</style>

      {/* Luxury Ambient Glows */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#C8A97E]/10 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute bottom-0 right-[-10%] w-[50vw] h-[50vw] bg-[#E8DCCB]/30 blur-[140px] rounded-full pointer-events-none" 
      />

      <div className="relative max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 flex flex-col items-center">
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
              The Grand Portfolio
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]"
          >
            Signature Beauty <br />
            <span className="italic text-[#C8A97E] font-light relative inline-block mt-2">
              Masterpieces
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/50 to-transparent" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            className="mt-8 text-[#5A5045] text-sm md:text-lg font-light leading-relaxed max-w-2xl"
          >
            Explore our most exquisite creations. From timeless bridal elegance to avant-garde editorial glamour, witness the art of flawless transformations without boundaries.
          </motion.p>
        </div>

        {/* ================= TRUE MASONRY GRID (Pinterest Style) ================= */}
        {/* The columns utility handles the masonry layout automatically */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (index % 4) * 0.1, ease: cinematicEase }}
              className="group relative overflow-hidden rounded-[2rem] bg-[#E8DCCB] border border-white shadow-[0_20px_40px_rgba(200,169,126,0.05)] hover:shadow-[0_30px_60px_rgba(200,169,126,0.15)] transition-all duration-700 break-inside-avoid"
            >
              {/* Note: NO fixed aspect ratio here. Using width/height with h-auto keeps original proportions */}
              <Image
                src={item.src}
                alt={item.title}
                width={1200}
                height={1600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-[#C8A97E]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Icon Top Right */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-[-20px] group-hover:translate-y-0 transition-all duration-700 z-20 shadow-xl">
                <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>

              {/* Bottom Frosted Content Reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[1.5rem] p-6 shadow-2xl relative overflow-hidden">
                  {/* Animated Shine Line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out origin-left" />
                  
                  <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] mb-2 drop-shadow-md">
                    {item.category}
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl text-white font-medium leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= PREMIUM CTA BUTTON ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }}
          className="flex justify-center mt-20 md:mt-32"
        >
          <Link
            href="/academy-gallery"
            className="group relative inline-flex items-center justify-center gap-4 bg-[#2A2520] border border-[#2A2520] px-10 md:px-14 py-5 md:py-6 overflow-hidden transition-all duration-700 rounded-xl shadow-[0_20px_40px_rgba(42,37,32,0.15)] hover:shadow-[0_20px_50px_rgba(200,169,126,0.3)] hover:-translate-y-1 w-full sm:w-max"
          >
            {/* Interactive Golden Hover Sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            
            <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white transition-colors duration-500">
              Unlock the Full Gallery
            </span>
            
            {/* Arrow Wrapper */}
            <div className="relative z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-500">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-500" strokeWidth={2} />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}