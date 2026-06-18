// components/services/LuxuryFAQServices.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Sparkles,
  Crown,
  ShieldCheck,
  Gem,
  Star,
} from "lucide-react";

const faqs = [
  {
    question: "Do you provide Airbrush Bridal Makeup in Agra?",
    answer: "Yes, we offer luxury airbrush bridal makeup at Glam Professionals for a flawless, lightweight, waterproof, and long-lasting celebrity finish.",
  },
  {
    question: "Is bridal makeup trial included in the package?",
    answer: "Absolutely. Premium bridal packages include a personalized luxury trial session at our Sikandra studio to finalize your perfect bridal look.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer: "Yes, destination wedding bookings are available across India for brides seeking luxury on-location beauty services.",
  },
  {
    question: "Which makeup brands do you use?",
    answer: "We exclusively use authentic luxury brands including MAC, Dior, Huda Beauty, NARS, Charlotte Tilbury, Chanel, and more.",
  },
  {
    question: "How long does bridal makeup last?",
    answer: "Our luxury bridal makeup is professionally set to remain flawless for long wedding events, photography, and receptions.",
  },
  {
    question: "Do you provide saree draping and hairstyling?",
    answer: "Yes, complete bridal hairstyling, dupatta setting, saree draping, and luxury finishing are included in premium packages.",
  },
  {
    question: "Is makeup suitable for sensitive skin?",
    answer: "Yes, we carefully analyze skin type and use premium skin-safe products suitable for sensitive and delicate skin.",
  },
  {
    question: "How early should bridal makeup be booked?",
    answer: "We recommend booking at least 2–3 months in advance to secure your preferred wedding date and bridal consultation.",
  },
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function LuxuryFAQServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const bgTextX = useTransform(smoothProgress, [0, 1], ["-10%", "15%"]);
  const bgY = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4, 8);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF7F2] py-32 md:py-52 text-[#2A2520] selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[12%] left-0 whitespace-nowrap text-[15rem] md:text-[25rem] font-playfair italic text-[#C8A97E]/[0.04] pointer-events-none z-0 will-change-transform"
      >
        CONQUER ELEGANCE
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#E8DCCB]/50 blur-[160px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center mb-24 md:mb-36">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
            <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Bespoke Advisory
            </span>
            <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-playfair text-5xl md:text-7xl font-normal leading-[1.05] tracking-tight text-[#2A2520]">
            Everything You Need <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">
              To Know Before Your Day
            </span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-0 items-start border-t border-[#C8A97E]/30">
          
          <div className="flex flex-col">
            {leftFaqs.map((faq, i) => {
              const globalIndex = i;
              const isOpen = activeIndex === globalIndex;
              return (
                <div key={i} className="group border-b border-[#C8A97E]/20 transition-all duration-500">
                  <button onClick={() => toggleFAQ(globalIndex)} className="w-full flex items-center justify-between py-8 text-left outline-none">
                    <h3 className={`font-playfair text-xl md:text-2xl transition-colors duration-500 pr-6 ${isOpen ? "text-[#C8A97E]" : "text-[#2A2520] group-hover:text-[#C8A97E]"}`}>
                      {faq.question}
                    </h3>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: luxuryEase }} className="w-8 h-8 rounded-full border border-[#C8A97E]/40 flex items-center justify-center text-[#C8A97E] group-hover:border-[#C8A97E] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: luxuryEase }} className="overflow-hidden">
                        <p className="text-[#5A5045] font-light text-sm md:text-base leading-relaxed pb-8 border-l border-[#C8A97E]/40 pl-5 ml-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col lg:border-t-0 border-t border-[#C8A97E]/30 lg:mt-0 mt-0">
            {rightFaqs.map((faq, i) => {
              const globalIndex = i + 4;
              const isOpen = activeIndex === globalIndex;
              return (
                <div key={i} className="group border-b border-[#C8A97E]/20 transition-all duration-500">
                  <button onClick={() => toggleFAQ(globalIndex)} className="w-full flex items-center justify-between py-8 text-left outline-none">
                    <h3 className={`font-playfair text-xl md:text-2xl transition-colors duration-500 pr-6 ${isOpen ? "text-[#C8A97E]" : "text-[#2A2520] group-hover:text-[#C8A97E]"}`}>
                      {faq.question}
                    </h3>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: luxuryEase }} className="w-8 h-8 rounded-full border border-[#C8A97E]/40 flex items-center justify-center text-[#C8A97E] group-hover:border-[#C8A97E] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: luxuryEase }} className="overflow-hidden">
                        <p className="text-[#5A5045] font-light text-sm md:text-base leading-relaxed pb-8 border-l border-[#C8A97E]/40 pl-5 ml-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: luxuryEase }}
          className="mt-28 md:mt-40 rounded-[2.5rem] border border-white/80 bg-white/50 backdrop-blur-3xl p-8 md:p-16 shadow-[0_40px_90px_rgba(200,169,126,0.06)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Crown className="w-5 h-5 text-[#C8A97E]" />
                <span className="text-[#C8A97E] uppercase tracking-[0.25em] font-bold text-[10px] md:text-xs">Luxury Bridal Assistance</span>
              </div>
              <h3 className="font-playfair text-3xl md:text-5xl font-normal text-[#2A2520] leading-tight">
                Your Bridal Beauty Journey <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-1">Deserves Complete Clarity</span>
              </h3>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-3 md:gap-4 w-full">
              {[
                { icon: ShieldCheck, text: "Luxury Products" },
                { icon: Gem, text: "Celebrity Finish" },
                { icon: Star, text: "Elite Care" }
              ].map((item, index) => {
                const MiniIcon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center p-5 rounded-2xl border border-white/70 bg-[#FAF7F2]/60 backdrop-blur-md shadow-sm group hover:bg-white transition-all duration-500">
                    <MiniIcon className="w-5 h-5 text-[#C8A97E] mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    <span className="text-[#2A2520] font-bold text-center text-[9px] md:text-[10px] uppercase tracking-wider leading-snug">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}