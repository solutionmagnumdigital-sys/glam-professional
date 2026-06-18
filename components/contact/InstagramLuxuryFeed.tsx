// components/contact/InstagramLuxuryFeed.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Play,
  BadgeCheck,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.4, ease: luxuryEase } 
  }
};

const instagramPosts = [
  { image: "/images/glam/glam1 (10).jpeg", likes: "12.4K", category: "Luxury Bridal" },
  { image: "/images/glam/glam1 (11).jpeg", likes: "18.7K", category: "Celebrity Glam" },
  { image: "/images/glam/glam1 (12).jpeg", likes: "9.8K", category: "HD Makeup" },
  { image: "/images/glam/glam1 (13).jpeg", likes: "21.3K", category: "Luxury Shoot" },
  { image: "/images/glam/glam1 (14).jpeg", likes: "14.9K", category: "Bridal Look" },
  { image: "/images/glam/glam1 (15).jpeg", likes: "25.1K", category: "Premium Reel" },
];

export default function InstagramLuxuryFeed() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-24 md:py-36 text-[#2A2520] select-none selection:bg-[#C8A97E]/30 antialiased">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[1300px] h-[1300px] bg-[#C8A97E]/[0.06] blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[1200px] h-[1200px] bg-[#D4B58A]/[0.05] blur-[260px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-6 sm:px-10 md:px-16 w-full">
        
        <div className="text-center max-w-5xl mx-auto mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="inline-flex items-center gap-3.5 rounded-full border border-[#C8A97E]/40 bg-white/80 backdrop-blur-xl px-7 py-3 shadow-xs mb-8 group cursor-pointer hover:border-[#C8A97E]/80 transition-colors duration-500"
          >
            <Sparkles className="w-4 h-4 text-[#C8A97E] group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-500" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C8A97E] font-bold">
              Luxury Social Presence
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
              Follow Our <br />
              <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-3 pb-2 drop-shadow-sm">
                Luxury Beauty Journey
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
            className="mt-6 text-base sm:text-xl md:text-2xl text-[#5A5045] font-light leading-relaxed max-w-3xl mx-auto"
          >
            Explore our cinematic bridal transformations, celebrity glam sessions, premium makeup artistry reels, and luxury beauty moments by Agra's top makeup artist.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 w-full"
        >
          {instagramPosts.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[45px] border border-black/[0.04] bg-white p-3.5 shadow-[0_35px_90px_rgba(200,169,126,0.1)] transition-all duration-700 hover:border-[#C8A97E]/40 hover:shadow-[0_45px_110px_rgba(200,169,126,0.16)] cursor-pointer"
            >
              <div className="relative h-[450px] sm:h-[500px] w-full rounded-[35px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-cover scale-100 group-hover:scale-[1.05] transition-transform duration-[4000ms] ease-out filter contrast-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520]/95 via-[#2A2520]/20 to-transparent opacity-85 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-[#C8A97E]/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 z-20 transform -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#2A2520]/40 backdrop-blur-xl px-4 py-2 shadow-xl">
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold">Atelier Verified</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl relative">
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-70 group-hover:animate-none" />
                    <Play className="w-7 h-7 text-white fill-white ml-1.5 transition-transform group-hover:scale-105" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[#C8A97E] uppercase tracking-[0.25em] text-[10px] font-bold">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-playfair text-2xl font-normal text-white tracking-wide leading-none">
                        Glam Professional
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-3.5 py-2 shadow-lg group/likes hover:bg-[#C8A97E] transition-all duration-300">
                      <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 group-hover/likes:text-[#2A2520] group-hover/likes:fill-[#2A2520] transition-colors" />
                      <span className="text-xs font-bold text-white group-hover/likes:text-[#2A2520] transition-colors">
                        {item.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}