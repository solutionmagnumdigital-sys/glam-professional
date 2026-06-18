// components/academy/AcademyGalleryPreview.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const galleryImages = [
  {
    image: "/images/glam/glam1 (4).jpeg",
    title: "The Royal Bride Masterclass",
    category: "Bridal Masterclass",
    height: "h-[560px]",
  },
  {
    image: "/images/glam/glam1 (5).jpeg",
    title: "Glass Skin Canvas Methods",
    category: "HD Glam Training",
    height: "h-[380px]",
  },
  {
    image: "/images/glam/glam1 (6).jpeg",
    title: "High Architecture Styling",
    category: "Luxury Hairstyling",
    height: "h-[480px]",
  },
  {
    image: "/images/glam/glam1 (7).jpeg",
    title: "Haute Couture Runway Layout",
    category: "Hands-On Experience",
    height: "h-[640px]",
  },
  {
    image: "/images/glam/glam1 (8).jpeg",
    title: "Cinematic Fine Editorial Capture",
    category: "Advanced Beauty Artistry",
    height: "h-[420px]",
  },
  {
    image: "/images/glam/glam1 (9).jpeg",
    title: "Gilded Glow Texture Designs",
    category: "Premium Academy",
    height: "h-[540px]",
  },
  {
    image: "/images/glam/glam1 (10).jpeg",
    title: "Micro-Atomized Fluid Airbrush",
    category: "Airbrush Luxury",
    height: "h-[460px]",
  },
  {
    image: "/images/glam/glam1 (11).jpeg",
    title: "Ethereal Elegance Fine Profiling",
    category: "Editorial Masterclass",
    height: "h-[580px]",
  },
  {
    image: "/images/glam/glam1 (12).jpeg",
    title: "Midnight Allure Luxury Cosmetics",
    category: "Advanced Beauty Artistry",
    height: "h-[400px]",
  },
];

export default function AcademyGalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-44 text-[#2A2520] selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[900px] h-[900px] bg-[#C8A97E]/[0.06] blur-[200px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[900px] h-[900px] bg-[#D4B58A]/[0.06] blur-[200px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.018] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:110px_110px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-md px-6 py-2.5 shadow-xs mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C8A97E] font-bold">
              High Art & Academy Archives
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl md:text-8xl font-normal leading-[1] tracking-tight mb-8"
          >
            Curated Glimpses Of <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] drop-shadow-xs">
              Luxury Artistry
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
            className="text-[#5A5045] font-light text-base md:text-xl leading-relaxed max-w-2xl"
          >
            Explore real procedural captures, production metrics, and high-fashion aesthetics configured by Glam Professionals By Shivani.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8 w-full">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`card-container-${item.image}`}
              onClick={() => setSelectedItem(item)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: index * 0.05, ease: luxuryEase }}
              className="group relative overflow-hidden rounded-[45px] bg-white border border-black/[0.03] shadow-[0_20px_50px_rgba(200,169,126,0.05)] break-inside-avoid cursor-pointer transform-gpu"
            >
              <div className={`relative overflow-hidden ${item.height} w-full`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520] via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-700 z-10" />
                <div className="absolute inset-0 border-[0px] group-hover:border-[14px] border-white/10 transition-all duration-700 pointer-events-none z-20" />

                <div className="absolute top-7 left-7 z-20">
                  <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="rounded-[35px] border border-white/10 bg-[#2A2520]/50 backdrop-blur-2xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1.5px] bg-[#C8A97E]/30" />
                    
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[#C8A97E] uppercase tracking-[0.25em] text-[9px] font-bold mb-1.5">// MASTER REGISTRY</p>
                        <h4 className="font-playfair text-xl md:text-2xl font-normal text-white leading-tight tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}