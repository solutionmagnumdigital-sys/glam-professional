"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Quote, Star, Sparkles, MoveRight } from "lucide-react";

// ================= TESTIMONIAL DATA ================= //
const testimonials = [
  {
    id: 1,
    name: "Sneha Rajput",
    role: "Signature Airbrush Bride",
    image: "/images/glam/glam1 (22).jpeg", 
    review: "An ultra-glam transformation crafted with absolute precision by Shivani. It felt like stepping out of a royal portrait. The airbrush base was flawless and weightless.",
    col: 1, // Left Column
  },
  {
    id: 2,
    name: "Ananya Singh",
    role: "Engagement Glow",
    image: "/images/glam/glam1 (24).jpeg", 
    review: "Radiant glass skin finish with stunning detailing. The premium luxury aesthetic at Glam Professionals made me feel like an absolute celebrity on my special day.",
    col: 2, // Right Column
  },
  {
    id: 3,
    name: "Riya Khandelwal",
    role: "HD Reception Glamour",
    image: "/images/glam/glam1 (26).jpeg", 
    review: "Unreal contouring and eye detailing. My reception makeup lasted flawlessly through hours of extreme lighting and humidity in Agra.",
    col: 1, // Left Column
  },
  {
    id: 4,
    name: "Kavya Sharma",
    role: "Haldi & Mehendi Look",
    image: "/images/glam/glam1 (32).jpeg", 
    review: "Subtle, ethereal, and glowing. The HD base was so skin-like yet immaculate. This is what true luxury beauty feels like.",
    col: 2, // Right Column
  },
];

const cinematicEase = [0.25, 1, 0.5, 1];

// ================= 3D TILT CARD COMPONENT ================= //
const TiltCard = ({ item }: { item: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Framer motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for buttery hover feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation angles (max 8 degrees tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: cinematicEase }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-full perspective-[1500px]"
    >
      <div 
        className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] bg-[#111] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5"
        style={{ transform: "translateZ(30px)" }} // Pops the card out in 3D space
      >
        {/* Main Image with Zoom on Hover */}
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/90 opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-[#C8A97E]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Top Gold Badge */}
        <div 
          className="absolute top-6 left-6 md:top-8 md:left-8 z-20"
          style={{ transform: "translateZ(50px)" }} // Pops the badge out more
        >
          <div className="rounded-full border border-[#C8A97E]/30 bg-black/40 backdrop-blur-md px-4 py-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C8A97E]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-[9px] md:text-[10px] tracking-[0.3em] text-[#C8A97E] uppercase font-bold relative z-10">
              {item.role}
            </p>
          </div>
        </div>

        {/* The Glassmorphism Review Box */}
        <div 
          className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6"
          style={{ transform: "translateZ(60px)" }} // Highest 3D pop-out
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-8 transition-all duration-700 group-hover:bg-black/60 group-hover:border-[#C8A97E]/40 group-hover:shadow-[0_20px_40px_rgba(200,169,126,0.1)]">
            
            {/* Animated Stars */}
            <div className="mb-5 flex gap-1.5 transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Star className="h-3.5 w-3.5 fill-[#C8A97E] text-[#C8A97E] drop-shadow-[0_0_8px_rgba(200,169,126,0.6)]" />
                </motion.div>
              ))}
            </div>

            <p className="text-sm md:text-[15px] leading-relaxed text-white/90 font-light italic mb-6">
              "{item.review}"
            </p>

            {/* Author Footer */}
            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <h3 className="font-playfair text-xl md:text-2xl text-white group-hover:text-[#C8A97E] transition-colors duration-500">
                {item.name}
              </h3>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] transition-all duration-500">
                <MoveRight className="h-4 w-4 text-[#C8A97E] group-hover:text-[#050505] transition-colors duration-500 group-hover:translate-x-1" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};


// ================= MAIN COMPONENT ================= //
export default function UltraLuxuryTestimonials() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  // Complex Parallax Scroll Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Left column moves slightly up, Right column moves slightly down (creates floating illusion)
  const yCol1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Background Ambience Parallax
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <section 
      ref={containerRef}
      // Increased bottom padding (pb-48, md:pb-64, lg:pb-[20rem]) to prevent the downward scrolling right column from getting clipped at the bottom.
      className="relative overflow-hidden bg-[#050505] pt-32 pb-48 md:pt-48 md:pb-64 lg:pb-[20rem] text-white selection:bg-[#C8A97E]/40 selection:text-white"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        .shimmer-text {
          background: linear-gradient(90deg, #C8A97E 0%, #FAF7F2 50%, #C8A97E 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }
      `}</style>

      {/* Luxury Ambient Glows */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute top-0 left-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#C8A97E]/10 blur-[150px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute bottom-[-10%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-[#E8DCCB]/5 blur-[120px] pointer-events-none" 
      />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0"></div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-12 lg:px-20">
        
        {/* ================= HEADER AREA ================= */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: cinematicEase }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-[1px] bg-[#C8A97E]"></span>
              <p className="tracking-[0.4em] text-[#C8A97E] uppercase text-[10px] md:text-xs font-semibold flex items-center gap-3">
                <Sparkles className="w-3.5 h-3.5" />
                Glam Professionals By Shivani
              </p>
            </div>

            <h2 className="font-playfair text-5xl md:text-7xl lg:text-[6.5rem] font-normal leading-[1.05] tracking-tight text-white">
              The Muses of <br />
              <span className="italic shimmer-text drop-shadow-2xl">
                True Elegance.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <Quote className="w-12 h-12 text-[#C8A97E]/30 mb-6 rotate-180" />
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
              Step into the diaries of our most exquisite transformations in Agra. Where 4.6-star rated high-end cosmetics meet unparalleled artistry to create unforgettable moments.
            </p>
          </motion.div>
        </div>

        {/* ================= PARALLAX GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 relative">
          
          {/* Column 1 (Scrolls Up) */}
          <motion.div 
            style={{ y: mounted && window.innerWidth > 768 ? yCol1 : 0 }} 
            className="flex flex-col gap-8 md:gap-12 lg:gap-20"
          >
            {testimonials.filter(t => t.col === 1).map((item) => (
              <TiltCard key={item.id} item={item} />
            ))}
          </motion.div>

          {/* Column 2 (Scrolls Down / Staggered) */}
          <motion.div 
            style={{ y: mounted && window.innerWidth > 768 ? yCol2 : 0 }} 
            className="flex flex-col gap-8 md:gap-12 lg:gap-20 md:mt-24 lg:mt-40"
          >
            {testimonials.filter(t => t.col === 2).map((item) => (
              <TiltCard key={item.id} item={item} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}