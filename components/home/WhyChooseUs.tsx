"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, animate, useMotionValue, useInView, useSpring } from "framer-motion";
import {
  Award,
  Sparkles,
  Gem,
  Crown,
  CheckCircle2,
} from "lucide-react";

// ================= ULTRA PRO MAX PREMIM DATA ================= //
const features = [
  {
    icon: Crown,
    title: "Signature Bridal Expertise",
    description: "Premium bridal and pre-bridal transformations tailored for Agra's elite, featuring flawless HD and Airbrush techniques.",
  },
  {
    icon: Sparkles,
    title: "High-End Cosmetics",
    description: "Exclusive use of international luxury brands like Dior, Charlotte Tilbury, and NARS for a radiant, sweat-proof finish.",
  },
  {
    icon: Gem,
    title: "Premium Salon Artistry",
    description: "Beyond makeup—experience luxury keratin treatments, advanced coloring, and bespoke hairstyling at our Sikandra studio.",
  },
  {
    icon: Award,
    title: "Professional Masterclasses",
    description: "Comprehensive makeup and self-grooming education designed to cultivate the next generation of industry leaders.",
  },
];

const stats = [
  { value: 390, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Mastery" },
  { value: 50, suffix: "+", label: "Luxury Services" },
  { value: 100, suffix: "%", label: "Prestige Rating" },
];

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1]; // High-end easing curve

// ================= 60FPS ANIMATED COUNTER ================= //
const AnimatedCounter = ({ from = 0, to, suffix }: { from?: number, to: number, suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: 3,
        ease: [0.32, 1, 0.68, 1], // Ultra smooth count easing
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return controls.stop;
    }
  }, [isInView, motionValue, to]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

// ================= MAIN COMPONENT ================= //
export default function WhyChooseGlamPremium() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  // Framer motion values for 3D tilt
  const xMouse = useMotionValue(0);
  const yMouse = useMotionValue(0);

  // Smooth springs for buttery hover feel (Magnetic effect)
  const mouseXSpring = useSpring(xMouse, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(yMouse, { stiffness: 100, damping: 25 });

  // Map mouse position to rotation angles (very subtle 5deg max tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  // Inverse transforms for the background to create depth
  const inverseRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-1deg", "1deg"]);
  const inverseRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["1deg", "-1deg"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the main section glow
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    xMouse.set((e.clientX - rect.left) / rect.width - 0.5);
    yMouse.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    xMouse.set(0);
    yMouse.set(0);
  };

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      {/* Required Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Luxury Ambient Background Glows */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] bg-gradient-to-br from-[#C8A97E]/10 to-transparent blur-[160px] rounded-full pointer-events-none" 
      />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        
        {/* Asymmetrical Grid: 5 col (text), 7 col (image) */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Elegant Cinematic Tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-16 h-[1px] bg-[#C8A97E]"></span>
              <span className="uppercase tracking-[0.45em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Glam Professionals By Shivani
              </span>
            </motion.div>

            {/* Haute Couture Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.1, ease: cinematicEase }}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight"
            >
              Architecting <br />
              <span className="italic text-[#C8A97E] font-light relative inline-block mt-2">
                Prestige Beauty
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/50 to-transparent" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: cinematicEase }}
              className="mt-10 text-sm md:text-[17px] text-[#5A5045] font-light leading-relaxed max-w-lg"
            >
              Located in Sikandra, Agra, we don't simply apply makeup; we orchestrate confidence. Experience bespoke bridal transformations, premium hair artistry, and elite makeup education backed by a 4.6-star legacy.
            </motion.p>

            {/* Micro-Interaction Feature Rows */}
            <div className="mt-16 md:mt-20 space-y-3 border-t border-[#C8A97E]/20 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: index * 0.15 + 0.3, ease: cinematicEase }}
                    className="group relative p-6 rounded-2xl overflow-hidden transition-all duration-700 hover:bg-white cursor-default"
                  >
                    {/* Hover Gold Line reveal */}
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#C8A97E] scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

                    <div className="flex gap-6 items-start">
                      {/* Premium Icon Circle */}
                      <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/20 shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500 shadow-inner group-hover:shadow-lg">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.2} />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-playfair text-[#2A2520] group-hover:text-[#C8A97E] transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-[#5A5045] font-light leading-relaxed max-w-md">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT SIDE (3D Magnetic Frame) ================= */}
          <motion.div 
            ref={imageWrapperRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: cinematicEase }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative mt-16 lg:mt-0 lg:pl-10"
            style={{ perspective: "1500px" }}
          >
            
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="
                relative 
                w-full 
                h-[900px]              /* height increase */
                rounded-[4rem]         /* more border radius */
                overflow-hidden        /* important */
                border-[10px] 
                border-white 
                shadow-[0_50px_100px_rgba(200,169,126,0.18)] 
                bg-[#E8DCCB] 
                lg:w-[95%] 
                ml-auto
              "
            >
              <Image
                src="/images/glam/glam1 (18).jpeg"
                alt="Luxury Bridal Transformation Agra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-[2000ms] hover:scale-[1.03]"
                style={{ transform: "translateZ(30px)" }}
              />
              
              {/* Subtle Real Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />

              {/* Inverse Moving Aesthetic Orbs */}
              <motion.div style={{ rotateX: inverseRotateX, rotateY: inverseRotateY, translateZ: "-50px" }} className="absolute -top-12 -left-12 w-40 h-40 bg-[#C8A97E]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Floating Top Label */}
              <div 
                className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-2.5 flex items-center gap-2.5 shadow-xl z-10"
                style={{ transform: "translateZ(70px)" }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                </motion.div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">
                  Top Rated Artistry
                </span>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Counter Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: cinematicEase }}
              className="absolute -bottom-12 lg:-bottom-20 left-0 lg:-left-16 w-[95%] lg:w-[105%] bg-white/60 backdrop-blur-3xl border border-white rounded-[2.5rem] p-10 lg:p-12 shadow-[0_40px_90px_rgba(42,37,32,0.12)] z-30"
              style={{ translateZ: "100px" }}
            >
              {/* Opulent Grid Structure */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#C8A97E]/20">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left md:pl-8 first:pl-0 group">
                    <h3 className="font-playfair text-5xl md:text-6xl text-[#2A2520] group-hover:text-[#C8A97E] transition-colors duration-500 drop-shadow-sm">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="mt-2.5 text-[10px] lg:text-[11px] uppercase tracking-[0.25em] font-bold text-[#5A5045]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Badge Line */}
              <div className="mt-10 pt-8 border-t border-[#C8A97E]/10 flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/30 flex items-center justify-center shrink-0 shadow-inner">
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <CheckCircle2 className="w-5 h-5 text-[#C8A97E]" strokeWidth={2} />
                  </motion.div>
                </div>
                <p className="text-xs md:text-[13px] text-[#5A5045] font-light tracking-wide uppercase">
                  Trusted by 390+ elite bridal, fashion, and luxury salon clients across Agra.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}