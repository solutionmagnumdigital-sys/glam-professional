"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Award,
  GraduationCap,
  Star,
  MapPin
} from "lucide-react";

// ================= RICH CURRICULUM DATA ================= //
// Removed Price & Duration. Replaced with Certification & Format.
const curriculum = [
  {
    id: "01",
    title: "Signature Bridal Masterclass",
    subtitle: "The Timeless Bride",
    description: "Master the art of tear-proof, glowing bases, intricate eye makeup, and traditional-to-modern bridal transformations. Learn exclusive techniques perfected by Agra's highest-rated bridal experts.",
    certification: "Master Diploma",
    format: "1-on-1 Mentorship",
    image: "/images/glam/glam1 (18).jpeg", // Perfect Bridal Heavy Jewelry
    modules: [
      "Skin Science & Deep Hydration Preparation",
      "Flawless HD & Waterproof Base Creation",
      "Traditional & Contemporary Bridal Eyes",
      "Lighting, Photography & Client Consultation",
      "Portfolio Building & Business Setup in Agra"
    ]
  },
  {
    id: "02",
    title: "Advanced HD & Airbrush",
    subtitle: "Flawless Perfection",
    description: "Unlock the secrets of high-definition, silicone-based airbrushing perfect for 4K photography and ultra-humid climates. Create weightless, rub-proof glass skin for your luxury clients.",
    certification: "Advanced Certificate",
    format: "Hands-on Practice",
    image: "/images/glam/glam1 (20).jpeg", // Flawless HD Base
    modules: [
      "Airbrush Machine Maintenance & Control",
      "Silicone vs Water-Based Mixing Techniques",
      "Targeted Concealing & Correcting via Airbrush",
      "Advanced Bridal & Editorial Airbrush Applications"
    ]
  },
  {
    id: "03",
    title: "Salon & Hair Artistry",
    subtitle: "Premium Styling",
    description: "Beyond basic cuts. Learn advanced hair coloring, Keratin treatments, organic spa therapies, and high-end bridal updos that define luxury salon services at our Sikandra studio.",
    certification: "Pro Artistry Diploma",
    format: "Live Demonstrations",
    image: "/images/glam/glam1 (30).jpeg", // Intricate Hair Details
    modules: [
      "Advanced Haircut & Global Coloring",
      "Keratin, Spa & Deep Conditioning Treatments",
      "Russian 3D Braids & Bridal Updos",
      "Seamless Hair Extension Blending"
    ]
  },
  {
    id: "04",
    title: "Self-Grooming & Skincare",
    subtitle: "Personal Elegance",
    description: "A specialized masterclass for individuals seeking to elevate their everyday look. Master organic skincare, flawless daily makeup, and precision grooming techniques.",
    certification: "Grooming Certificate",
    format: "Personalized Session",
    image: "/images/glam/glam1 (21).jpeg", // Elegant, Soft, Clean Look
    modules: [
      "Organic Skincare & Facial Routines",
      "Everyday HD Base & Concealing",
      "Personal Eye Makeup & Brow Precision",
      "Basic Nail Care & Gel Art Introduction"
    ]
  },
];

const cinematicEase: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function UltraLuxuryEditorialAcademy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);
  
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCourse]);

  return (
    <section className="relative w-full bg-[#FAF7F2] text-[#2A2520] pt-12 md:pt-16 lg:pt-20 pb-20 lg:pb-32 overflow-hidden selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .luxury-scrollbar::-webkit-scrollbar { width: 4px; }
        .luxury-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.02); }
        .luxury-scrollbar::-webkit-scrollbar-thumb { background: #C8A97E; border-radius: 10px; }
      `}</style>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#C8A97E]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#E8DCCB]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* ================= GMB OPTIMIZED HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-16 gap-6 lg:gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center gap-3 lg:gap-4 mb-4 lg:mb-6"
            >
              <span className="w-8 lg:w-12 h-[1px] bg-[#C8A97E]"></span>
              <span className="text-[#C8A97E] uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[9px] lg:text-[10px] font-semibold flex items-center gap-2">
                <Star className="w-3.5 h-3.5 fill-[#C8A97E]" />
                4.6 Rated Academy
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C8A97E]/50"></span>
              <span className="text-[#5A5045] uppercase tracking-[0.2em] text-[9px] font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Sikandra, Agra
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }}
              className="font-playfair text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-normal leading-[1.1] tracking-tight text-[#2A2520]"
            >
              Curriculum of <br className="hidden sm:block"/>
              <span className="italic text-[#C8A97E] font-light">Master Artistry</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            className="max-w-sm lg:pb-2"
          >
            <p className="text-[#5A5045] text-sm lg:text-base font-light leading-relaxed">
              Trusted by <strong className="font-medium text-[#2A2520]">390+ clients</strong>. Glam Professionals By Shivani is Agra's leading destination for high-end bridal makeovers and advanced beauty education.
            </p>
          </motion.div>
        </div>

        {/* ================= COHESIVE EDITORIAL LAYOUT ================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start relative">
          
          {/* LEFT: Tightly Controlled Image Frame (Desktop) */}
          <div className="hidden lg:block w-[45%] xl:w-[40%] relative">
            <div className="sticky top-24 w-full aspect-[3/4] max-h-[85vh] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(42,37,32,0.08)] bg-[#E8DCCB]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: cinematicEase }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={curriculum[activeIndex].image}
                    alt={curriculum[activeIndex].title}
                    fill
                    className="object-cover object-top" 
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </motion.div>
              </AnimatePresence>

              {/* Elegant Certification Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-3 shadow-lg z-10">
                <GraduationCap className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                <span className="uppercase tracking-[0.2em] text-[9px] font-bold text-[#2A2520]">
                  {curriculum[activeIndex].certification}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Structured & Unified List */}
          <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col">
            <div className="border-t border-[#C8A97E]/30">
              {curriculum.map((course, index) => {
                const isActive = activeIndex === index;
                
                return (
                  <div
                    key={course.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setSelectedCourse(course)}
                    className={`group relative border-b border-[#C8A97E]/30 cursor-pointer transition-all duration-500 ${isActive ? 'bg-[#C8A97E]/5' : 'hover:bg-[#C8A97E]/5'}`}
                  >
                    <div className="py-6 sm:py-8 lg:py-10 px-2 sm:px-4 lg:px-6 flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 relative z-10">
                      
                      {/* Mobile Image */}
                      <div className="block lg:hidden w-full aspect-[3/4] sm:aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative mb-2 shadow-lg bg-[#E8DCCB]">
                        <Image 
                          src={course.image} 
                          alt={course.title} 
                          fill 
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Content Alignment */}
                      <div className="flex-grow flex items-center justify-between gap-4 w-full">
                        <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                          
                          <span className={`font-playfair text-2xl sm:text-3xl lg:text-4xl italic transition-colors duration-500 pt-1 ${isActive ? 'text-[#C8A97E]' : 'text-[#C8A97E]/40 group-hover:text-[#C8A97E]/70'}`}>
                            {course.id}
                          </span>
                          
                          <div className="flex flex-col gap-1 sm:gap-2">
                            <h3 className={`font-playfair text-xl sm:text-2xl lg:text-3xl leading-tight transition-colors duration-500 ${isActive ? 'text-[#C8A97E]' : 'text-[#2A2520]'}`}>
                              {course.title}
                            </h3>
                            <span className="uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[8px] sm:text-[9px] font-bold text-[#5A5045] flex items-center gap-2 mt-1">
                              {course.subtitle} 
                              <span className="w-4 h-[1px] bg-[#C8A97E]/50 hidden sm:block"></span>
                              <span className="text-[#C8A97E] hidden sm:block">Explore Program</span>
                            </span>
                          </div>
                        </div>
                        
                        <div className={`hidden sm:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full border items-center justify-center transition-all duration-500 shrink-0 ${isActive ? 'border-[#C8A97E] bg-[#C8A97E] text-white rotate-45' : 'border-[#C8A97E]/30 text-[#C8A97E] group-hover:border-[#C8A97E]'}`}>
                           <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1} />
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= REFINED MODAL ================= */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-8">
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#2A2520]/80 backdrop-blur-xl"
              onClick={() => setSelectedCourse(null)}
            />

            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: cinematicEase }}
              className="relative w-full h-full md:w-[90vw] md:h-[90vh] lg:max-w-[1200px] lg:h-[85vh] bg-[#FAF7F2] md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#C8A97E] hover:text-white transition-all shadow-md border border-[#C8A97E]/20"
              >
                <X className="w-5 h-5 text-[#2A2520] hover:text-white" strokeWidth={1.5} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-[45%] h-[40vh] md:h-full relative shrink-0 bg-[#E8DCCB]">
                <Image 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title} 
                  fill 
                  className="object-cover object-top" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent md:hidden" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-[55%] h-[60vh] md:h-full overflow-y-auto luxury-scrollbar p-6 md:p-8 lg:p-12 flex flex-col">
                
                <div className="mb-6 lg:mb-8">
                  <span className="inline-block uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[9px] lg:text-[10px] font-bold text-[#C8A97E] mb-3 border border-[#C8A97E]/20 px-3 py-1.5 rounded-sm">
                    {selectedCourse.subtitle}
                  </span>
                  <h2 className="font-playfair text-3xl lg:text-5xl text-[#2A2520] leading-tight">
                    {selectedCourse.title}
                  </h2>
                </div>

                {/* Updated Premium Info Cards (No Price/Duration) */}
                <div className="grid grid-cols-2 gap-3 lg:gap-6 mb-6 lg:mb-8">
                  <div className="bg-white p-4 lg:p-5 rounded-xl border border-[#C8A97E]/10 shadow-sm flex flex-col justify-center">
                    <GraduationCap className="w-4 h-4 lg:w-5 lg:h-5 text-[#C8A97E] mb-2" />
                    <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#5A5045] mb-1">Certification</p>
                    <p className="text-sm lg:text-base font-medium text-[#2A2520]">{selectedCourse.certification}</p>
                  </div>
                  <div className="bg-white p-4 lg:p-5 rounded-xl border border-[#C8A97E]/10 shadow-sm flex flex-col justify-center">
                    <Award className="w-4 h-4 lg:w-5 lg:h-5 text-[#C8A97E] mb-2" />
                    <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#5A5045] mb-1">Training Format</p>
                    <p className="text-sm lg:text-base font-medium text-[#2A2520]">{selectedCourse.format}</p>
                  </div>
                </div>

                <p className="text-[#5A5045] text-sm lg:text-base leading-relaxed font-light mb-8 lg:mb-10">
                  {selectedCourse.description}
                </p>

                <div className="mb-10 lg:mb-12">
                  <h4 className="font-playfair text-xl lg:text-2xl text-[#2A2520] mb-4 lg:mb-6 border-b border-[#C8A97E]/20 pb-4">
                    Masterclass Modules
                  </h4>
                  <ul className="space-y-3 lg:space-y-4">
                    {selectedCourse.modules.map((module: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 lg:gap-4 group">
                        <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#C8A97E] shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-sm lg:text-base text-[#5A5045] font-light">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-[#C8A97E]/20">
                  <Link
                    href="/contact"
                    className="group relative flex items-center justify-between bg-[#2A2520] text-white px-6 lg:px-8 py-4 lg:py-5 rounded-xl overflow-hidden transition-all hover:-translate-y-1 shadow-lg"
                  >
                    <span className="absolute inset-0 bg-[#C8A97E] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative z-10 flex flex-col">
                      <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 group-hover:text-white transition-colors">
                        Join Elite Network
                      </span>
                      <span className="text-base lg:text-lg font-playfair">Inquire About Masterclass</span>
                    </div>
                    <ArrowRight className="relative z-10 w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}