"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Star,
  Award,
  Crown,
  ChevronRight,
  Check,
  MousePointer2 
} from "lucide-react";

const features = [
  "Top-Rated Makeup Artist in Agra",
  "Airbrush & Bridal Specialists",
  "Professional Makeup Classes",
  "Complete Hair & Skincare Services",
];

const stats = [
  { icon: Crown, value: "390+", label: "Happy Reviews" },
  { icon: Sparkles, value: "20+", label: "Premium Services" },
  { icon: Star, value: "4.6", label: "Google Rating" },
];

const images = [
  "/images/about/about-1.jpg", 
  "/images/about/about-2.jpg", 
  "/images/about/about-3.jpg", 
];

const typingWords = [
  "Bridal Elegance",
  "Flawless Airbrush",
  "Signature Makeovers",
  "Agra's Finest Glow"
];

export default function AnimatedLuxuryAbout() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth Typing Logic
  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    // ✅ FIX: Slightly faster typing speed makes it feel much smoother and fluid
    const typingSpeed = isDeleting ? 40 : 80;
    const delayBeforeDelete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
        setText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // --- 3D SHUFFLE SLIDER STATE ---
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringImg, setIsHoveringImg] = useState(false);

  // Exact Cycle: Right -> Center, Center -> Left, Left -> Right
  useEffect(() => {
    let interval;
    if (isHoveringImg) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }, 1500); 
    }
    return () => clearInterval(interval);
  }, [isHoveringImg]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24 2xl:py-32 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>

      {/* Aesthetic Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FAF7F2] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8DCCB]/30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Scaled Side Paddings */}
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 lg:px-12 xl:px-16">
        
        {/* Scaled Grid Gap */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 2xl:gap-24 items-center">
          
          {/* ================= UPDATED 3D SHUFFLE DECK ================= */}
          <div 
            className="relative flex justify-center lg:justify-start lg:pl-10 xl:pl-16 h-[480px] sm:h-[500px] lg:h-[450px] xl:h-[550px] 2xl:h-[600px] w-full cursor-pointer group"
            onMouseEnter={() => setIsHoveringImg(true)}
            onMouseLeave={() => setIsHoveringImg(false)}
          >
            <div className="absolute inset-0 w-[70%] sm:w-[65%] md:w-[60%] lg:w-[65%] h-full border border-[#C8A97E]/30 rounded-t-full rounded-b-[2rem] translate-x-3 md:translate-x-5 translate-y-5 z-0 pointer-events-none"></div>

            {/* Indicator Badge */}
            <div className={`absolute top-5 right-0 md:right-10 lg:right-5 xl:right-10 z-50 bg-white/90 backdrop-blur-md px-3 py-1.5 xl:px-4 xl:py-2 rounded-full border border-white/50 shadow-lg flex items-center gap-2 transition-opacity duration-500 ${isHoveringImg ? 'opacity-0' : 'opacity-100'}`}>
              <MousePointer2 className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#C8A97E] animate-bounce" />
              <span className="text-[9px] xl:text-[10px] uppercase tracking-widest text-[#2A2520] font-semibold">Hover to Shuffle</span>
            </div>

            <div className="relative w-[70%] sm:w-[65%] md:w-[60%] lg:w-[65%] h-full">
              {images.map((src, index) => {
                const diff = (index - activeIndex + images.length) % images.length;
                
                let positionClasses = "";
                if (diff === 0) {
                  positionClasses = "z-30 translate-x-0 rotate-0 scale-100 opacity-100 shadow-[0_25px_50px_rgba(42,37,32,0.3)]";
                } else if (diff === 1) {
                  positionClasses = "z-10 translate-x-12 sm:translate-x-20 md:translate-x-32 lg:translate-x-24 xl:translate-x-32 rotate-6 scale-90 opacity-60 shadow-lg";
                } else if (diff === 2) {
                  positionClasses = "z-10 -translate-x-12 sm:-translate-x-20 md:-translate-x-32 lg:-translate-x-24 xl:-translate-x-32 -rotate-6 scale-90 opacity-60 shadow-lg";
                }

                return (
                  <div 
                    key={index} 
                    /* ✅ FIX: Added will-change-transform and will-change-opacity for buttery smooth GPU accelerated shuffling */
                    className={`absolute inset-0 w-full h-full rounded-t-full rounded-b-[2rem] overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform will-change-opacity ${positionClasses}`}
                  >
                    <div className={`absolute inset-0 bg-[#2A2520]/20 transition-opacity duration-[1200ms] ${diff === 0 ? 'opacity-0' : 'opacity-100 z-10'}`}></div>
                    
                    <img 
                      src={src} 
                      alt="Portfolio" 
                      className={`w-full h-full object-cover transition-transform duration-[2000ms] ${diff === 0 ? 'scale-105' : 'scale-100'}`} 
                    />
                  </div>
                );
              })}
            </div>

            {/* Floating Glass Experience Card */}
            <div className="absolute -bottom-4 -left-2 md:-left-6 lg:-left-2 xl:-left-8 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] px-4 py-3 xl:px-6 xl:py-5 z-40 flex items-center gap-3 xl:gap-4 animate-float">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A97E] transition-colors duration-500">
                <Star className="w-5 h-5 xl:w-6 xl:h-6 text-[#C8A97E] group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl xl:text-3xl font-medium text-[#2A2520] leading-none mb-1">
                  4<span className="text-[#C8A97E]">.6</span>
                </h3>
                <p className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] text-[#5A5045] font-medium">Google Rating</p>
              </div>
            </div>
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="flex items-center gap-3 mb-4 xl:mb-6 group cursor-default">
              <span className="w-6 xl:w-8 h-[1px] bg-[#C8A97E] transition-all duration-500 group-hover:w-12 xl:group-hover:w-16"></span>
              <span className="text-[#C8A97E] uppercase tracking-[0.2em] xl:tracking-[0.3em] text-[10px] xl:text-xs font-semibold">Behind The Brush</span>
              <span className="w-6 h-[1px] bg-[#C8A97E] lg:hidden"></span>
            </div>

            {/* Scaled Animated Typing Heading */}
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#2A2520] font-normal leading-[1.1] tracking-tight mb-4 xl:mb-6 h-[100px] md:h-[120px] lg:h-[110px] xl:h-[140px] 2xl:h-[180px]">
              Bringing Out Your <br />
              {/* ✅ FIX: Removed the blinking cursor span and simplified the text rendering */}
              <span className="italic text-[#C8A97E] font-light">
                {text}
              </span>
            </h2>

            <p className="text-[#5A5045] text-xs md:text-sm 2xl:text-base leading-relaxed max-w-xl mb-8 xl:mb-10 font-light tracking-wide transition-all duration-500 hover:text-[#2A2520]">
              Welcome to Glam Professionals By Shivani, Agra's premier makeup studio. We specialize in luxurious bridal makeovers, flawless airbrushing, and personalized beauty services meticulously crafted to enhance your inner confidence and natural glow.
            </p>

            <div className="w-full max-w-xl grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 xl:mb-10">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-center gap-3 p-1.5 xl:p-2 rounded-lg hover:bg-[#FAF7F2] transition-colors duration-300 cursor-default">
                  <div className="flex items-center justify-center w-5 h-5 xl:w-6 xl:h-6 rounded-full border border-[#C8A97E]/40 group-hover:bg-[#C8A97E] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Check className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#C8A97E] group-hover:text-white transition-colors duration-300 stroke-[2.5]" />
                  </div>
                  <p className="text-[#2A2520] text-xs xl:text-sm font-medium tracking-wide group-hover:text-[#C8A97E] group-hover:translate-x-1 transition-all duration-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-[#C8A97E]/30 via-[#C8A97E]/30 to-transparent mb-6 xl:mb-8"></div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 xl:gap-12 mb-8 xl:mb-12">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 xl:gap-4 group cursor-default">
                    <Icon className="w-6 h-6 xl:w-8 xl:h-8 text-[#C8A97E]/50 group-hover:text-[#C8A97E] group-hover:-translate-y-1 transition-all duration-300 stroke-[1.5]" />
                    <div className="text-left">
                      <h4 className="font-playfair text-xl xl:text-2xl font-medium text-[#2A2520] leading-none mb-1 group-hover:scale-105 origin-left transition-transform duration-300">
                        {item.value}
                      </h4>
                      <p className="text-[9px] xl:text-[10px] uppercase tracking-[0.15em] text-[#5A5045] group-hover:text-[#C8A97E] transition-colors duration-300">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-6 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-[#2A2520] text-white px-6 py-3 xl:px-9 xl:py-4 overflow-hidden transition-all duration-500 rounded-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"></span>
                <span className="relative z-10 text-[10px] xl:text-xs uppercase tracking-[0.2em] font-semibold group-hover:text-[#2A2520] transition-colors duration-500">
                  Book Appointment
                </span>
                <Sparkles className="relative z-10 w-3.5 h-3.5 xl:w-4 xl:h-4 text-white group-hover:text-[#2A2520] transition-colors duration-500" />
              </Link>

              <Link
                href="/about"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-3 xl:px-6 xl:py-4 bg-transparent text-[#2A2520] transition-all duration-300 relative"
              >
                <span className="text-[10px] xl:text-xs uppercase tracking-[0.2em] font-semibold">Explore My Journey</span>
                <ChevronRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#C8A97E] group-hover:translate-x-2 transition-transform duration-300" />
                <span className="absolute bottom-1 xl:bottom-2 left-4 xl:left-6 right-8 xl:right-10 h-[1px] bg-[#C8A97E]/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}