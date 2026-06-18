"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, animate, useMotionValue, useInView } from "framer-motion";
import { Sparkles, ArrowUpRight, Diamond, Crown, Star } from "lucide-react";

// --- SEPARATED DATA ARRAYS ---
const portfolioItems = [
  {
    title: "Signature Bridal",
    category: "Bridal Specialization",
    image: "/images/glam/glam1 (5).jpeg",
    height: "h-[500px] md:h-[650px]",
    align: "mt-0",
  },
  {
    title: "Flawless Airbrush",
    category: "Advanced Techniques",
    image: "/images/glam/glam1 (8).jpeg",
    height: "h-[450px] md:h-[580px]",
    align: "mt-0 md:mt-32 lg:mt-24",
  },
  {
    title: "Engagement Glow",
    category: "Bridal Specialization",
    image: "/images/glam/glam1 (12).jpeg",
    height: "h-[550px] md:h-[650px]",
    align: "mt-0 lg:mt-12",
  },
  {
    title: "High-Definition Glam",
    category: "HD Makeup",
    image: "/images/glam/glam1 (16).jpeg",
    height: "h-[500px] md:h-[600px]",
    align: "mt-0 md:-mt-20 lg:mt-0",
  },
  {
    title: "Haldi Ceremony",
    category: "Bridal Specialization",
    image: "/images/glam/glam1 (20).jpeg",
    height: "h-[550px] md:h-[650px]",
    align: "mt-0 md:mt-16 lg:mt-32",
  },
  {
    title: "Regal Makeover",
    category: "Premium Salon",
    image: "/images/glam/glam1 (24).jpeg",
    height: "h-[500px] md:h-[600px]",
    align: "mt-0 md:-mt-20 lg:mt-12",
  },
  {
    title: "Mehendi Artistry",
    category: "Bridal Specialization",
    image: "/images/glam/glam1 (28).jpeg",
    height: "h-[450px] md:h-[550px]",
    align: "mt-0 lg:-mt-10",
  },
  {
    title: "Clinical Perfection",
    category: "Photography Makeup",
    image: "/images/glam/glam1 (30).jpeg",
    height: "h-[500px] md:h-[600px]",
    align: "mt-0 md:mt-20 lg:mt-0",
  },
  {
  title: "Bridal Makeup Artist",
  category: "Best Makeup Artist in Agra",
  image: "/images/glam/glam1 (32).jpeg",
  height: "h-[550px] md:h-[550px]",
  align: "mt-0 md:mt-10 lg:-mt-6",
},
];

const stats = [
  { value: 390, suffix: "+", label: "Happy Clients", icon: Crown, isDecimal: false },
  { value: 4.6, suffix: "", label: "Google Rating", icon: Star, isDecimal: true },
  { value: 100, suffix: "%", label: "Premium Quality", icon: Diamond, isDecimal: false },
  { value: 1, suffix: "st", label: "Choice in Agra", icon: Sparkles, isDecimal: false },
];

const premiumEasing = [0.25, 0.1, 0.25, 1];

// ================= REUSABLE COMPONENTS ================= //

/**
 * 60FPS Hardware Accelerated Number Counter
 */
const AnimatedCounter = ({ from = 0, to, suffix, isDecimal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: 2.5,
        ease: premiumEasing,
        onUpdate: (latest) => {
          if (isDecimal) {
            setDisplayValue(latest.toFixed(1));
          } else {
            setDisplayValue(Math.floor(latest));
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, motionValue, to, isDecimal]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

/**
 * Encapsulated Portfolio Card with Typewriter Effect
 */
const PortfolioCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Split text for typewriter effect
  const titleChars = item.title.split("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: premiumEasing, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-xl md:rounded-2xl bg-white border border-[#C8A97E]/10 hover:border-[#C8A97E]/40 transition-all duration-700 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(200,169,126,0.15)] cursor-pointer ${item.align}`}
    >
      <div className={`relative w-full ${item.height} overflow-hidden bg-[#FAF7F2]`}>
        
        {/* Image Zoom */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Light Frosted Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/90 via-[#FAF7F2]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 backdrop-blur-[4px] transition-all duration-700 z-10" />

        {/* Content Container */}
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20">
          
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <span className="uppercase tracking-[0.3em] text-[9px] text-[#2A2520] font-bold bg-[#C8A97E]/20 px-3 py-1.5 rounded-sm backdrop-blur-md border border-[#C8A97E]/30 shadow-sm inline-block mb-3">
              {item.category}
            </span>
          </div>

          {/* EDITORIAL TYPEWRITER EFFECT */}
          <h3 className="font-playfair text-3xl md:text-4xl text-[#2A2520] flex flex-wrap">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.21, 1.02, 0.73, 1],
                  delay: isHovered ? i * 0.03 : 0, 
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h3>

          <div className="mt-6 flex items-center gap-4 overflow-hidden transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 ease-[cubic-bezier(0.21,1.02,0.73,1)]">
            <div className="w-10 h-10 rounded-full border border-[#C8A97E] flex items-center justify-center bg-transparent group-hover:bg-[#C8A97E] transition-colors duration-500">
              <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-500" />
            </div>
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#2A2520] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#C8A97E] after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-700">
              View Editorial
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ================= MAIN COMPONENT ================= //

export default function LightLuxuryPortfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#2A2520] py-32 md:py-48 selection:bg-[#C8A97E]/30 selection:text-[#2A2520]"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        .premium-shine-light {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          animation: shine 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
        }
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>

      {/* Aesthetic Background Glows */}
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[#C8A97E]/10 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: yBg2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#E8DCCB]/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEasing }}
            className="flex items-center gap-4 mb-8 group cursor-default"
          >
            <div className="h-[1px] w-8 md:w-16 bg-[#C8A97E] group-hover:w-24 transition-all duration-700" />
            <span className="uppercase tracking-[0.4em] text-[9px] md:text-xs font-semibold text-[#C8A97E]">
              Glam Professionals By Shivani
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-[#C8A97E] group-hover:w-24 transition-all duration-700" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: premiumEasing, delay: 0.1 }}
            className="font-playfair text-5xl md:text-7xl lg:text-[5.5rem] font-normal text-[#2A2520] leading-[1.1] tracking-tight"
          >
            Elevating Beauty to <br className="hidden md:block" />
            <span className="italic text-[#C8A97E] font-light relative inline-block mt-2">
              High Art
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEasing, delay: 0.2 }}
            className="mt-8 md:mt-10 text-sm md:text-lg text-[#5A5045] font-light max-w-2xl leading-relaxed tracking-wide"
          >
            Immerse yourself in a portfolio of bespoke transformations. 
            Where luxury cosmetics meet visionary artistry to create timeless elegance.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-start">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Animated Counting Stats */}
        <div className="mt-32 md:mt-48 relative border-y border-[#C8A97E]/10 bg-white/40 backdrop-blur-md rounded-3xl md:rounded-[3rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 divide-x divide-[#C8A97E]/10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: premiumEasing }}
                  className="flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-[#FAF7F2] flex items-center justify-center border border-[#C8A97E]/20 group-hover:border-[#C8A97E]/60 group-hover:bg-[#C8A97E] transition-all duration-500 shadow-sm">
                    <Icon className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-start gap-1">
                    <h4 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#2A2520] group-hover:text-[#C8A97E] transition-colors duration-500">
                      <AnimatedCounter 
                        to={stat.value} 
                        suffix={stat.suffix} 
                        isDecimal={stat.isDecimal} 
                      />
                    </h4>
                  </div>
                  <p className="mt-3 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5A5045] group-hover:text-[#2A2520] transition-colors duration-500">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="mt-32 md:mt-40 flex flex-col items-center pb-20"
        >
          <Link
            href="/academy-gallery"
            className="group relative flex items-center justify-center gap-4 bg-transparent border border-[#C8A97E]/50 px-10 py-5 md:px-14 md:py-6 overflow-hidden transition-all duration-700 hover:border-[#C8A97E] shadow-[0_10px_40px_rgba(200,169,126,0.1)] rounded-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <div className="premium-shine-light" />
            
            <Sparkles className="relative z-10 w-4 h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
            <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-[#2A2520] group-hover:text-white transition-colors duration-700">
              Unlock The Vault
            </span>
          </Link>
          <p className="mt-8 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#5A5045] font-semibold">
            View the complete masterpiece collection
          </p>
        </motion.div>

      </div>
    </section>
  );
}