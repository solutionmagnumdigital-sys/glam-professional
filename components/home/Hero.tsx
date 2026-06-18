"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Sparkles, CalendarHeart } from "lucide-react";

const slides = [ 
  {
    id: 1,
    image: "/images/hero/hero.webp", 
    category: "Best Makeup Artist in Agra",
    title: "Glam",
    subtitle: "Professionals",
    description: "By Shivani. Crafting flawless bridal and special occasion looks. Trusted by over 390 happy clients with a 4.6-star rating.",
  },
  {
    id: 2,
    image: "/images/hero/hero2.jpg", 
    category: "Bridal & Airbrush",
    title: "Timeless",
    subtitle: "Makeovers",
    description: "Specializing in Airbrush makeup, elegant hairstyling, and complete bridal makeovers tailored to make your big day unforgettable.",
  },
  {
    id: 3,
    image: "/images/hero/hero3.jpg", 
    category: "Signature Services",
    title: "Flawless",
    subtitle: "Perfection",
    description: "From party makeup to advanced hair treatments. Experience luxury artistry at our premium studio in Sikandra, Agra.",
  },
];

export default function EnhancedLuxuryHero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // ✅ FIX: Removed typedText state

  // Smooth Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); 
    return () => clearInterval(timer);
  }, [current]);

  // ✅ FIX: Removed the entire typing effect logic. The full text will fade in.

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black font-sans flex flex-col justify-end">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .shine-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          transform: translateX(-200%) skewX(-25deg);
          animation: shine 4s infinite;
          will-change: transform; 
        }
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-25deg); }
          20% { transform: translateX(300%) skewX(-25deg); }
          100% { transform: translateX(300%) skewX(-25deg); }
        }
      `}</style>

      {/* --- BACKGROUND SLIDES --- */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          // (Keeping performance fixes from last turn: transition-opacity and will-change-opacity, no scaling)
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-opacity ${
            index === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/20 md:bg-black/15 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 md:via-black/15 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/45 via-black/30 md:via-black/25 to-transparent z-10 w-full lg:w-[80%]" />
          
          <img
            src={slide.image}
            alt={slide.title}
            // (Keeping performance fix: static image with no animation)
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* --- LUXURY BORDER FRAME --- */}
      <div className="absolute inset-3 sm:inset-4 md:inset-5 lg:inset-6 border-[0.5px] border-white/10 sm:border-white/20 z-20 pointer-events-none"></div>
      <div className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-7 border-[0.5px] border-[#E6C9A8]/5 sm:border-[#E6C9A8]/10 z-20 pointer-events-none hidden sm:block"></div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="relative z-30 h-max w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 2xl:pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LEFT CONTENT: Typography & Text */}
          <div className="col-span-1 lg:col-span-8 relative">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ease-out ${
                  index === current
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-12 sm:translate-y-16 pointer-events-none"
                }`}
                style={{ position: index === current ? "relative" : "absolute", bottom: 0, left: 0, width: '100%' }}
              >
                {/* Category with smooth fade-in */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6 whitespace-nowrap">
                  <Sparkles className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6C9A8] transition-opacity duration-700 ${index === current ? 'opacity-100 delay-500' : 'opacity-0'}`} strokeWidth={1.5} />
                  <span className="text-[#E6C9A8] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-xs lg:text-sm font-medium h-4 sm:h-5 flex items-center">
                    {/* ✅ FIX: Replaced {typedText} with the full {slide.category} and removed the blinking cursor | */}
                    {slide.category}
                  </span>
                  <div className={`h-[1px] bg-gradient-to-r from-[#E6C9A8]/60 to-transparent transition-all duration-1000 delay-700 ${index === current ? 'w-8 sm:w-12 md:w-16 lg:w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
                </div>

                {/* Title */}
                <div className="overflow-hidden mb-[-2px] sm:mb-[-5px] lg:mb-[-10px]">
                  <h1 className="font-playfair text-white text-[2.75rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] font-normal tracking-tight transform transition-transform duration-1000 delay-300">
                    {slide.title}
                  </h1>
                </div>
                
                {/* Subtitle */}
                <div className="overflow-hidden mb-5 sm:mb-6 lg:mb-8 ml-6 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
                  <h1 className="font-playfair text-[#E6C9A8] text-[2.75rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] italic font-normal tracking-tight transform transition-transform duration-1000 delay-500">
                    {slide.subtitle}
                  </h1>
                </div>

                {/* Description */}
                <p className={`text-gray-300 w-[95%] sm:max-w-sm lg:max-w-md text-[11px] sm:text-xs md:text-sm 2xl:text-base font-light tracking-wide leading-relaxed mb-6 sm:mb-8 lg:mb-10 border-l border-[#E6C9A8]/30 pl-3 sm:pl-4 lg:pl-6 transition-all duration-1000 delay-700 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {slide.description}
                </p>

                {/* Button */}
                <div className={`transition-all duration-1000 delay-1000 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <button className="group w-full sm:w-max relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 bg-transparent border border-[#E6C9A8]/50 px-5 py-3.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 transition-all duration-500 overflow-hidden hover:border-[#E6C9A8]">
                    <span className="absolute inset-0 w-0 bg-[#E6C9A8] transition-all duration-500 ease-out group-hover:w-full"></span>
                    <div className="shine-effect"></div>
                    
                    <CalendarHeart className="w-4 h-4 lg:w-5 lg:h-5 relative z-10 text-[#E6C9A8] group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                    <span className="relative z-10 uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] lg:text-xs font-semibold text-white group-hover:text-black transition-colors duration-500">
                      Reserve Your Date
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT: Navigation & Counters */}
          <div className="col-span-1 lg:col-span-4 flex flex-row lg:flex-col justify-between items-end lg:items-end w-full mt-4 sm:mt-6 lg:mt-0 gap-4 lg:gap-8 pb-2 lg:pb-0">
            
            <div className="flex items-end gap-1 sm:gap-2 font-playfair text-white mb-0 lg:mb-8">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-normal leading-none text-[#E6C9A8]">
                0{current + 1}
              </span>
              <span className="text-white/40 text-sm sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl pb-0.5 sm:pb-1 italic">
                / 0{slides.length}
              </span>
            </div>

            <div className="flex gap-2 sm:gap-3 lg:gap-4">
              <button
                onClick={prevSlide}
                className="group relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-[#E6C9A8]"
                aria-label="Previous slide"
              >
                <span className="absolute inset-0 bg-[#E6C9A8] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white relative z-10 group-hover:text-black transition-colors duration-500" strokeWidth={1} />
              </button>
              
              <button
                onClick={nextSlide}
                className="group relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-[#E6C9A8]"
                aria-label="Next slide"
              >
                <span className="absolute inset-0 bg-[#E6C9A8] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white relative z-10 group-hover:text-black transition-colors duration-500" strokeWidth={1} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}