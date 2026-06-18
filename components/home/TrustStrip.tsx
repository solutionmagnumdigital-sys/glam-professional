"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Users, 
  Award, 
  Crown, 
  Gem,
  Wand2,      
  Flower2,    
  Droplets    
} from "lucide-react";

// Stat Data with Targets for Counting Math (Updated for GMB Data)
const stats = [
  {
    icon: Users,
    target: 390,
    suffix: "+",
    label: "Happy Clients",
    hoverImg: "/images/hero/trust-strip-1.jpg", 
  },
  {
    icon: Award,
    target: 4,
    suffix: ".6", 
    label: "Google Rating",
    hoverImg: "/images/hero/trust-strip-2.jpg", 
  },
  {
    icon: Sparkles,
    target: 20,
    suffix: "+",
    label: "Premium Services", 
    hoverImg: "/images/hero/hero.webp", 
  },
  {
    icon: Crown,
    target: 500,
    suffix: "+",
    label: "Bridal Makeovers", 
    hoverImg: "/images/hero/trust-strip-4.jpg", 
  },
];

// Sub-Component: Individual Card with Hover Counting Logic
function HoverStatCard({ item }) {
  const Icon = item.icon;
  const [count, setCount] = useState(item.target);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth Counting Animation Logic
  useEffect(() => {
    if (isHovering) {
      let start = 0;
      const end = item.target;
      const duration = 1200; 
      const frameRate = 1000 / 60; 
      const totalFrames = Math.round(duration / frameRate);
      let currentFrame = 0;

      const timer = setInterval(() => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(end * easeProgress);

        setCount(currentCount);

        if (currentFrame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        }
      }, frameRate);

      return () => clearInterval(timer);
    } else {
      setCount(item.target);
    }
  }, [isHovering, item.target]);

  const displayCount = (item.target === 1000 && count === 1000) ? "1k" : count;

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      // ✅ FIX: Height and padding adjusted for 2-column mobile layout
      className="group relative h-[160px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] 2xl:h-[320px] rounded-xl sm:rounded-2xl bg-white border border-[#C8A97E]/20 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(200,169,126,0.2)] flex flex-col items-center justify-center text-center p-2 sm:p-5 xl:p-6"
    >
      <img
        src={item.hoverImg}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 group-hover:opacity-40 group-hover:scale-100 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-white/20 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* ✅ FIX: Smaller icon container on mobile to save space */}
        <div className="w-8 h-8 sm:w-12 sm:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/30 flex items-center justify-center mb-2 sm:mb-4 xl:mb-5 2xl:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#C8A97E] group-hover:border-transparent">
          <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#C8A97E] group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
        </div>

        {/* ✅ FIX: Number text reduced for mobile (text-2xl) */}
        <h3 className="font-playfair text-2xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#2A2520] mb-1 transition-transform duration-500 group-hover:-translate-y-1">
          {displayCount}
          <span className="text-[#C8A97E]">{item.suffix}</span>
        </h3>

        {/* ✅ FIX: Label text and tracking reduced to prevent line breaks on narrow columns */}
        <p className="text-[8px] sm:text-[10px] xl:text-xs 2xl:text-sm text-[#5A5045] uppercase tracking-[0.05em] sm:tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-500 sm:group-hover:tracking-[0.25em] xl:group-hover:tracking-[0.3em] group-hover:text-[#2A2520]">
          {item.label}
        </p>

        <div className="w-0 h-[2px] bg-[#C8A97E] mt-2 sm:mt-4 xl:mt-6 transition-all duration-700 group-hover:w-6 sm:group-hover:w-8 xl:group-hover:w-12"></div>
      </div>
    </div>
  );
}

export default function AnimatedLuxuryTrustStrip() {
  const changingIcons = [Sparkles, Award, Crown, Gem, Wand2, Flower2, Droplets];
  const [iconIndex, setIconIndex] = useState(0);
  const [iconVisible, setIconVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconVisible(false); // Fade out
      
      setTimeout(() => {
        setIconIndex((prev) => (prev + 1) % changingIcons.length); // Change icon
        setIconVisible(true); // Fade in
      }, 500); 
      
    }, 3500); 

    return () => clearInterval(interval);
  }, [changingIcons.length]);

  const DynamicIcon = changingIcons[iconIndex];

  return (
    <section className="relative w-full py-12 sm:py-16 xl:py-20 bg-[#FAF7F2] overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E8DCCB] rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#F0E6D8] rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        <div className="text-center mb-8 sm:mb-10 xl:mb-14">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 xl:mb-4">
            <span className="w-6 sm:w-8 xl:w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="text-[#C8A97E] uppercase tracking-[0.15em] sm:tracking-[0.2em] xl:tracking-[0.3em] text-[9px] sm:text-[10px] xl:text-xs font-semibold">
              Glam Professionals By Shivani
            </span>
            <span className="w-6 sm:w-8 xl:w-12 h-[1px] bg-[#C8A97E]"></span>
          </div>
          
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-[#2A2520] font-medium tracking-tight flex items-center justify-center gap-2 md:gap-3 xl:gap-4 flex-wrap">
            Best Makeup Artist in <i className="text-[#C8A97E]">Agra</i>
            <DynamicIcon 
              className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 text-[#C8A97E] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                iconVisible 
                  ? "opacity-100 scale-100 rotate-0 drop-shadow-[0_0_12px_rgba(200,169,126,0.5)]" 
                  : "opacity-0 scale-50 rotate-90 drop-shadow-none"
              }`} 
              strokeWidth={1.2} 
            />
          </h2>
        </div>

        {/* ✅ FIX: grid-cols-2 applied directly so mobile shows 2 columns. Added smaller gap-3 for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-8">
          {stats.map((item, index) => (
            <HoverStatCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}