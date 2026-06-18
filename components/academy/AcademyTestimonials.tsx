// components/academy/AcademyTestimonials.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  Quote,
  Play,
  BadgeCheck,
  TrendingUp,
  Star,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    name: "Aarushi Sharma",
    role: "Luxury Bridal Artist",
    image: "/images/glam/glam1 (14).jpeg",
    result: "Now Working With Premium Bridal Clients",
    review:
      "This academy completely transformed my confidence and artistry. Shivani's luxury practical sessions and bridal techniques changed my career forever.",
  },
  {
    name: "Simran Kapoor",
    role: "Professional Makeup Artist",
    image: "/images/glam/glam1 (15).jpeg",
    result: "Started Her Own Beauty Studio",
    review:
      "The cinematic learning environment and premium mentorship gave me real industry exposure. I now handle bridal bookings independently across Agra.",
  },
  {
    name: "Khushi Mehra",
    role: "Celebrity Glam Artist",
    image: "/images/glam/glam1 (1).jpeg",
    result: "Luxury Freelance Makeup Artist",
    review:
      "The academy teaches far beyond makeup. Client handling, luxury workflow, branding, and practical artistry made me fully industry ready.",
  },
];

export default function AcademyTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[850px] h-[850px] bg-[#C8A97E]/[0.05] blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[850px] h-[850px] bg-[#D4B58A]/[0.05] blur-[200px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:110px_110px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        
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
              Student Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
            className="font-playfair text-5xl md:text-7xl font-normal leading-[1.1] tracking-tight"
          >
            From Passionate Learners <br />
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 drop-shadow-xs">
              To Luxury Beauty Professionals
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
            className="mt-6 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Discover how Glam Professionals By Shivani enables talented aspirants to architect high-ticket client networks globally.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch w-full">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: luxuryEase }}
              className="group relative overflow-hidden rounded-[45px] border border-black/[0.04] bg-white flex flex-col justify-between shadow-[0_20px_50px_rgba(200,169,126,0.05)] hover:shadow-[0_40px_90px_rgba(200,169,126,0.16)] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="relative h-[400px] overflow-hidden rounded-t-[43px] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520] via-[#2A2520]/20 to-transparent opacity-85 transition-opacity duration-700" />

                  <div className="absolute top-6 left-6 flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg z-20">
                    <Quote className="w-4 h-4 text-[#C8A97E] fill-[#C8A97E]" />
                  </div>

                  <div className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-[#2A2520]/40 backdrop-blur-md shadow-md z-20 group-hover:bg-[#2A2520] group-hover:scale-110 transition-all duration-500">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                    <div className="rounded-[30px] border border-white/10 bg-[#2A2520]/60 backdrop-blur-xl p-5 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1.5px] bg-[#C8A97E]/30" />
                      
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-[9px] font-bold block mb-1">// COHORT STUDIOS</span>
                          <h3 className="font-playfair text-2xl font-normal text-white tracking-tight">
                            {item.name}
                          </h3>
                          <p className="text-white/70 text-xs font-light tracking-wide mt-1">
                            {item.role}
                          </p>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shrink-0">
                          <Crown className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-7 md:p-9">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-[#C8A97E] fill-[#C8A97E]"
                      />
                    ))}
                  </div>

                  <p className="mt-6 text-sm md:text-base text-[#5A5045] font-light leading-relaxed italic">
                    “{item.review}”
                  </p>
                </div>
              </div>

              <div className="p-7 md:p-9 pt-0">
                <div className="rounded-[32px] border border-[#C8A97E]/30 bg-[#FAF7F2] p-5 shadow-xs relative overflow-hidden">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2A2520] shrink-0 shadow-md">
                      <TrendingUp className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-[#C8A97E] uppercase tracking-[0.2em] text-[9px] font-bold mb-0.5">Career Milestone</p>
                      <h4 className="text-sm md:text-base font-semibold text-[#2A2520] leading-snug tracking-tight">
                        {item.result}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-black/[0.05]">
                  {["Certified Artist", "Elite Portfolio Ready"].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-full bg-[#2A2520]/5 px-3.5 py-1.5 border border-black/[0.02]"
                    >
                      <BadgeCheck className="w-3.5 h-3.5 text-[#C8A97E]" />
                      <span className="text-[10px] uppercase tracking-wide font-medium text-[#5A5045]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}