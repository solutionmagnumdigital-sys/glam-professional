// components/portfolio/PortfolioMasonry.tsx
"use client";

import React, { useMemo, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const categories = [
  "All",
  "Bridal",
  "Reception",
  "Engagement",
  "Editorial",
  "HD Makeup",
  "Airbrush",
];

const galleryItems = [
  {
    id: 1,
    image: "/images/glam/glam1 (1).jpeg",
    category: "Bridal",
    title: "Royal Bridal Grandeur",
    height: "h-[480px] md:h-[540px]",
    finishes: "100% Waterproof HD Silk",
    skinType: "Normal to Dry Skin",
    description: "A comprehensive traditional bridal presentation utilizing rich gold detailing, customized high-definition contour architecture, and velvety smooth pore ventilation."
  },
  {
    id: 2,
    image: "/images/glam/glam1 (2).jpeg",
    category: "Reception",
    title: "Midnight Allure Glamour",
    height: "h-[360px] md:h-[420px]",
    finishes: "Velvet Matte Finish",
    skinType: "All Skin Types",
    description: "Designed exclusively for high-end night receptions. Features a deep smokey dynamic eye architecture coupled with highly reflective liquid-glass cheek highlights."
  },
  {
    id: 3,
    image: "/images/glam/glam1 (3).jpeg",
    category: "Editorial",
    title: "High-Fashion Glass Skin",
    height: "h-[540px] md:h-[620px]",
    finishes: "Dewy Hyper-Luminous Finish",
    skinType: "Sensitive Skin Safe",
    description: "A premier skin-focused conceptual look crafted for elite runways and close-up photography, maintaining hyper-hydration metrics throughout the shoot."
  },
  {
    id: 4,
    image: "/images/glam/glam1 (4).jpeg",
    category: "Engagement",
    title: "Gilded Glow Transformation",
    height: "h-[380px] md:h-[460px]",
    finishes: "Satin Airbrush Finish",
    skinType: "Delicate Skin Approved",
    description: "A beautiful fusion of minimal skin weights with vibrant soft pastel colors, engineered to look deeply refreshing for morning pre-wedding rituals."
  },
  {
    id: 5,
    image: "/images/glam/glam1 (5).jpeg",
    category: "Editorial",
    title: "Haute Couture Face Concept",
    height: "h-[500px] md:h-[580px]",
    finishes: "Ultra High Definition Matte",
    skinType: "Hypoallergenic Certified",
    description: "Bold editorial statements blending graphic eye outlines with perfectly muted premium lips, designed to stand out against high-intensity strobe flashes."
  },
  {
    id: 6,
    image: "/images/glam/glam1 (6).jpeg",
    category: "Bridal",
    title: "Ethereal Bridal Perfection",
    height: "h-[560px] md:h-[660px]",
    finishes: "Sweat-Resistant Airbrush",
    skinType: "Sensitive Safe Formula",
    description: "Meticulously layered bridal transformation engineered to remain flawlessly long-lasting, defying high summer humidity and close photography ranges."
  },
  {
    id: 7,
    image: "/images/glam/glam1 (7).jpeg", 
    category: "HD Makeup",
    title: "Cinematic High Definition Artistry",
    height: "h-[480px] md:h-[540px]",
    finishes: "High Definition Micronized Layer",
    skinType: "Combination Skin Match",
    description: "Finely milled particles applied with surgical precision to ensure zero flashback under heavy movie lights and digital portrait lenses."
  },
  {
    id: 8,
    image: "/images/glam/glam1 (8).jpeg", 
    category: "Airbrush",
    title: "Airbrush Diamond Perfection",
    height: "h-[360px] md:h-[420px]",
    finishes: "Micro-Atomized Liquid Silk",
    skinType: "All Oily/Dry Skin Types",
    description: "Applied using a state-of-the-art compressor to lay down a featherweight layer that binds perfectly with the skin texture for up to 24 hours."
  },
  {
    id: 9,
    image: "/images/glam/glam1 (9).jpeg",
    category: "HD Makeup",
    title: "Flawless HD Velvet Finish",
    height: "h-[540px] md:h-[620px]",
    finishes: "HD Camera Safe Matte",
    skinType: "Normal Skin Alignment",
    description: "Bespoke studio finish configured to blur pores, fine texture lines, and redness without building up any heavy product mask layer on the face."
  },
  {
    id: 10,
    image: "/images/glam/glam1 (10).jpeg",
    category: "Airbrush",
    title: "Celebrity Airbrush Veil",
    height: "h-[380px] md:h-[460px]",
    finishes: "Waterproof Micro Veil",
    skinType: "Hyper-Sensitive Skin Safe",
    description: "A custom fluid blend sprayed evenly across the face structure, resulting in a celebrity-standard soft focus mask that feels completely weightless."
  },
  {
    id: 11,
    image: "/images/glam/glam1 (11).jpeg",
    category: "Reception",
    title: "Stardust Evening Glam",
    height: "h-[500px] md:h-[580px]",
    finishes: "Luminous Metallic Accents",
    skinType: "All Skin Types",
    description: "Infused with ultra-fine diamond shifting pigments around the eyes to create a mesmerizing under-light glow for high-end elite wedding events."
  },
  {
    id: 12,
    image: "/images/glam/glam1 (12).jpeg",
    category: "Engagement",
    title: "Modern Minimal Portrait Glam",
    height: "h-[560px] md:h-[660px]",
    finishes: "Monochromatic Silk Finish",
    skinType: "Dry Skin Hydration Plus",
    description: "A clean, upscale presentation focused on premium nude tones and sharp brow alignment, curated for elegant evening cocktail banquets."
  }
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function PortfolioMasonry() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 20 });
  const bgTextX = useTransform(smoothProgress, [0, 1], ["0%", "-25%"]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter(
      (item) => item.category.trim().toLowerCase() === activeCategory.trim().toLowerCase()
    );
  }, [activeCategory]);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
  };

  return (
    <section
      ref={containerRef}
      id="portfolio-gallery"
      className="relative overflow-hidden bg-[#FAF7F2] py-32 md:py-52 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[8%] left-0 whitespace-nowrap text-[15rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 will-change-transform select-none"
      >
        THE EXHIBITION ROW
      </motion.div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#2A2520]/10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Lookbook Gallery
              </span>
            </div>
            <h2 className="font-playfair text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight text-[#2A2520]">
              Cinematic Masterpieces
            </h2>
          </div>
          <p className="text-sm md:text-base font-light text-[#5A5045] max-w-sm leading-relaxed">
            A meticulous showcase of premier transformations, fashion lookbooks, and high-definition bridal architecture by Shivani.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-start gap-x-10 gap-y-4 border-b border-[#2A2520]/10 pb-6 overflow-x-auto no-scrollbar">
          {categories.map((category, index) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`relative py-2 text-xs md:text-sm font-bold uppercase tracking-[0.25em] outline-none transition-colors duration-300 ${isSelected ? "text-[#C8A97E]" : "text-[#2A2520]/50 hover:text-[#2A2520]"}`}
              >
                {category}
                {isSelected && (
                  <motion.div 
                    layoutId="activeFilterLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A97E]"
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div 
          layout 
          className="mt-20 columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: luxuryEase }}
                onClick={() => setSelectedIndex(index)}
                className="break-inside-avoid w-full p-4 bg-white border border-white/80 shadow-[0_25px_60px_rgba(200,169,126,0.06)] hover:shadow-[0_35px_80px_rgba(200,169,126,0.14)] rounded-[2rem] group flex flex-col justify-between cursor-pointer transition-all duration-700 relative overflow-hidden"
              >
                <div className={`relative w-full ${item.height} rounded-[1.6rem] overflow-hidden bg-[#E8DCCB]`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center md:object-[center_20%] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full border border-white/30 bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 transform scale-90 group-hover:scale-100 z-20">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="pt-6 pb-2 px-2">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8A97E]">{item.category}</span>
                    <span className="w-3 h-px bg-[#C8A97E]/40"></span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A5045]/40">Couture Edit</span>
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-medium text-[#2A2520] tracking-tight group-hover:text-[#C8A97E] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[999] bg-[#0A0A09]/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10 select-none"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-50 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 scale-90 md:scale-100 outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-10 z-50 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 scale-90 md:scale-100 outline-none"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-10 z-50 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 scale-90 md:scale-100 outline-none"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="relative w-full max-w-[1300px] h-[78vh] md:h-[82vh] grid lg:grid-cols-12 gap-8 lg:gap-16 items-center" onClick={(e) => e.stopPropagation()}>
              
              <div className="lg:col-span-7 w-full h-full relative rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.6, ease: luxuryEase }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      priority
                      className="object-cover object-center md:object-[center_15%]"
                      sizes="100vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="lg:col-span-5 text-left text-[#FAF7F2] flex flex-col justify-center h-full pr-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: luxuryEase }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-[1px] bg-[#C8A97E]"></span>
                      <span className="text-[#C8A97E] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                        {selectedItem.category} Masterpiece
                      </span>
                    </div>

                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-tight">
                      {selectedItem.title}
                    </h2>

                    <p className="text-sm md:text-base text-[#FAF7F2]/60 font-light leading-relaxed mb-8 max-w-md">
                      {selectedItem.description}
                    </p>

                    <div className="pt-6 border-t border-white/10 flex items-center justify-between max-w-xs">
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold mb-1">Standard Finishes</span>
                        <span className="text-xs text-[#FAF7F2]/40 font-medium">{selectedItem.finishes}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold mb-1">Skin Type Match</span>
                        <span className="text-xs text-[#FAF7F2]/40 font-medium">{selectedItem.skinType}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}