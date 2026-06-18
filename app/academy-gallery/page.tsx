"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Maximize2 } from "lucide-react";
import ImageLightbox from "@/components/gallery/ImageLightbox";

// ================= FULL 32 IMAGES ARRAY ================= //
const galleryImages = Array.from({ length: 32 }, (_, i) => `/images/glam/glam1 (${i + 1}).jpeg`);

// Aesthetic metadata generator to make the UI look rich
// Updated with modulo operator (%) to loop the premium titles infinitely for all 32 images
const getAestheticData = (index: number) => {
  const titles = [
    "Glass Skin Glam", 
    "Gilded Glow", 
    "The Royal Bride", 
    "Midnight Allure", 
    "Haute Couture", 
    "Ethereal Elegance", 
    "Timeless Classic", 
    "Avant-Garde"
  ];
  const categories = [
    "Editorial Beauty", 
    "Signature Bridal", 
    "Traditional Luxury", 
    "Evening Glamour", 
    "Runway Artistry", 
    "Soft Glam", 
    "Masterclass", 
    "Fashion Editorial"
  ];
  
  return { 
    title: titles[index % titles.length], 
    category: categories[index % categories.length] 
  };
};

const cinematicEase: [number, number, number, number] = [0.25, 1, 0.5, 1];

export default function AcademyGalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };
  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#2A2520] overflow-hidden selection:bg-[#C8A97E]/30 selection:text-[#2A2520] pt-32 pb-24 md:pt-48 md:pb-32">
      
      {/* Required Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        img { image-rendering: -webkit-optimize-contrast; }
      `}</style>

      {/* Luxury Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[50vw] h-[50vw] bg-[#E8DCCB]/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* ================= GRAND HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: cinematicEase }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              The Vault
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: cinematicEase }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]"
          >
            Signature Beauty <br />
            <span className="italic text-[#C8A97E] font-light relative inline-block mt-2">
              Masterpieces
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/50 to-transparent" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            className="mt-8 text-[#5A5045] text-sm md:text-lg font-light leading-relaxed max-w-2xl"
          >
            Discover the curated collection by Glam Professionals By Shivani—featuring timeless bridal artistry, editorial transformations in Agra, flawless glam looks, and absolute beauty craftsmanship.
          </motion.p>
        </div>

        {/* ================= TRUE MASONRY GALLERY ================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((image, index) => {
            const data = getAestheticData(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: (index % 4) * 0.1, ease: cinematicEase }}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-[2rem] bg-[#E8DCCB] border border-white shadow-[0_20px_40px_rgba(200,169,126,0.05)] hover:shadow-[0_30px_60px_rgba(200,169,126,0.15)] transition-all duration-700 cursor-pointer break-inside-avoid"
              >
                {/* W-full H-auto allows true masonry height adjustments without cropping */}
                <Image
                  src={image}
                  alt={data.title}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
                />

                {/* Cinematic Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-[#C8A97E]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Center Hover Action (Glassmorphism Icon) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-700 ease-out">
                    <Maximize2 className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Bottom Frosted Info Reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 pointer-events-none">
                  <div className="bg-black/40 backdrop-blur-2xl border border-white/20 rounded-[1.5rem] p-5 shadow-2xl relative overflow-hidden">
                    {/* Animated Shine Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out origin-left" />
                    
                    <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] mb-1 drop-shadow-md">
                      {data.category}
                    </span>
                    <h3 className="font-playfair text-xl md:text-2xl text-white font-medium leading-tight">
                      {data.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= LIGHTBOX INTEGRATION ================= */}
      {selectedIndex !== null && (
        <ImageLightbox
          images={galleryImages}
          selectedIndex={selectedIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </main>
  );
}