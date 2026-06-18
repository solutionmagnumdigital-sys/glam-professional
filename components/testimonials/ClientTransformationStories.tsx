// components/testimonials/ClientTransformationStories.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  Star,
  Heart,
  Quote,
  Gem,
  BadgeCheck,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const stories = [
  {
    name: "Aarushi Sharma",
    role: "Royal Bridal Transformation",
    image: "/images/glam/glam1 (7).jpeg",
    quote:
      "I didn’t just receive bridal makeup — I experienced a luxury transformation by Shivani that made me feel unforgettable.",
    story:
      "From skin preparation to bridal detailing, every step was crafted with precision and elegance. The final look felt cinematic, timeless, and deeply personal.",
  },
  {
    name: "Simran Kapoor",
    role: "Luxury Reception Glam",
    image: "/images/glam/glam1 (8).jpeg",
    quote:
      "The entire experience felt like working with a celebrity beauty team right here in Agra.",
    story:
      "The makeup artistry enhanced my natural features beautifully while keeping the luxury bridal aesthetic soft, modern, and editorial.",
  },
  {
    name: "Khushi Mehra",
    role: "Editorial Bridal Experience",
    image: "/images/glam/glam1 (9).jpeg",
    quote:
      "Every guest asked who created my bridal look. The finish was simply flawless.",
    story:
      "The elegance, glow, precision, and luxurious attention to detail created a bridal transformation beyond my expectations.",
  },
];

export default function ClientTransformationStories() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-12 md:pt-20 pb-28 md:pb-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-[#C8A97E]/[0.05] blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[1000px] h-[1000px] bg-[#D4B58A]/[0.05] blur-[240px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
        <div className="text-center max-w-5xl mx-auto mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: luxuryEase }}
            className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-md px-6 py-2.5 shadow-xs mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
              Emotional Luxury Transformations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight"
          >
            More Than Makeup <br />
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 drop-shadow-xs">
              These Are Luxury Memories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
            className="mt-6 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Every bridal transformation tells a unique story filled with deep emotions, unmatched confidence, elegance, and unforgettable signature beauty metrics crafted by Agra's Best Makeup Artist, Shivani.
          </motion.p>
        </div>

        <div className="space-y-36 w-full">
          {stories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, delay: index * 0.08, ease: luxuryEase }}
              className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-last" : ""
              }`}
            >
              
              <div className="lg:col-span-6 relative">
                <div className="group relative overflow-hidden rounded-[55px] border border-black/[0.04] bg-white h-[540px] sm:h-[640px] md:h-[700px] shadow-[0_30px_70px_rgba(200,169,126,0.06)] hover:shadow-[0_45px_100px_rgba(200,169,126,0.18)] hover:border-[#C8A97E]/30 transition-all duration-700 transform-gpu">
                  
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520] via-[#2A2520]/20 to-transparent opacity-85 transition-opacity duration-700" />
                  <div className="absolute inset-0 border-[0px] group-hover:border-[16px] border-white/10 transition-all duration-700 pointer-events-none z-20" />

                  <div className="absolute top-8 left-8 z-20">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2A2520] border border-[#C8A97E]/20 shadow-xl">
                      <Quote className="w-5 h-5 text-[#C8A97E] fill-[#C8A97E]" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                    <div className="rounded-[35px] border border-white/10 bg-[#2A2520]/50 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1.5px] bg-[#C8A97E]/30" />
                      
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[#C8A97E] uppercase tracking-[0.25em] text-[9px] font-bold block mb-1">// BRIDAL BLUEPRINT</span>
                          <h3 className="font-playfair text-2xl sm:text-3xl font-normal text-white leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-white/70 text-xs sm:text-sm font-light mt-1">
                            {item.role}
                          </p>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shrink-0 group-hover:rotate-[12deg] transition-transform duration-500">
                          <Crown className="w-5 h-5 text-[#C8A97E]" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
                
                <div className="rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-xs">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E] font-bold flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/10" />
                    Real Emotional Experience
                  </span>
                </div>

                <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-[#2A2520] mt-8 tracking-tight">
                  “{item.quote}”
                </h3>

                <p className="mt-6 text-sm sm:text-base md:text-lg text-[#5A5045] font-light leading-relaxed">
                  {item.story}
                </p>

                <div className="mt-8 flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2A2520] shadow-md cursor-pointer"
                    >
                      <Star className="w-4 h-4 text-[#C8A97E] fill-[#C8A97E]" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 grid sm:grid-cols-2 gap-4 w-full">
                  {[
                    { icon: Gem, title: "Luxury Bridal Finish" },
                    { icon: BadgeCheck, title: "Verified Premium Registry" },
                  ].map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={i}
                        className="group/feat relative overflow-hidden rounded-[26px] border border-black/[0.04] bg-white p-5 transition-all duration-500 hover:border-[#C8A97E]/40"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#FAF7F2] shrink-0 border border-black/[0.02] shadow-xs group-hover/feat:bg-[#2A2520] transition-colors duration-500">
                            <Icon className="w-4 h-4 text-[#C8A97E] group-hover/feat:text-white transition-colors duration-500" strokeWidth={1.5} />
                          </div>
                          <h4 className="text-xs sm:text-sm font-semibold text-[#2A2520] leading-tight tracking-tight">
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}