// components/about/LuxuryFAQ.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, Crown, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  { question: "How early should I book bridal makeup services?", answer: "For luxury bridal bookings at Glam Professionals, we recommend reserving your date at least 2-6 months in advance to ensure exclusivity and availability." },
  { question: "Do you provide HD and Airbrush makeup in Agra?", answer: "Yes, we specialize in premium HD and cutting-edge luxury airbrush makeup techniques, designed specifically for flawless high-resolution photography and enduring elegance." },
  { question: "Do you travel for destination weddings?", answer: "Absolutely. We provide elite bridal makeup services for destination weddings, private soirees, and premium experiences globally." },
  { question: "Which beauty products do you use?", answer: "We curate our kits with only the finest international luxury beauty brands (like Charlotte Tilbury, Tom Ford, Dior, NARS) to guarantee a flawless skin finish." },
  { question: "Do you offer makeup academy training?", answer: "Indeed. Our 4.6 rated professional beauty academy in Sikandra offers rigorous, high-end makeup training programs for aspiring artists." },
  { question: "Can I schedule a bridal makeup trial?", answer: "Yes, bespoke bridal makeup trials are exclusively available at our studio to help us architect your perfect wedding-day vision." },
];

const cinematicEase = [0.16, 1, 0.3, 1];

export default function LuxuryFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, mass: 0.5 });
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);
  const bgY2 = useTransform(smoothProgress, [0, 1], ["15%", "-15%"]);
  const bgTextX = useTransform(smoothProgress, [0, 1], ["5%", "-25%"]);

  const toggleFAQ = (index: number) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF7F2] py-28 md:py-48 text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <motion.div style={{ x: bgTextX }} className="absolute top-[10%] left-0 whitespace-nowrap text-[12rem] md:text-[22rem] font-playfair italic text-[#C8A97E]/[0.05] pointer-events-none z-0 will-change-transform">
        ADVISORY
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y: bgY1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#C8A97E]/10 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <motion.div style={{ y: bgY2 }} className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply will-change-transform" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: cinematicEase }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#C8A97E]"></span>
                <span className="uppercase tracking-[0.4em] text-[#C8A97E] text-[10px] md:text-xs font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Client Advisory
                </span>
              </div>
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-[#2A2520]">
                Everything <br className="hidden md:block" /> You Need To <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 inline-block drop-shadow-sm">Know</span>
              </h2>
              <p className="mt-8 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-md">
                Discover detailed insights regarding our luxury bridal artistry in Agra, private masterclasses, and bespoke transformation experiences. We value clarity as much as elegance.
              </p>
              <div className="mt-12 hidden lg:flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-[#C8A97E]/30 bg-[#FAF7F2] shadow-inner flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[#C8A97E]" />
                </div>
                <div>
                  <h4 className="font-playfair text-[#2A2520] font-medium text-xl">Need bespoke advice?</h4>
                  <Link href="/contact" className="text-[#C8A97E] text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#2A2520] transition-colors duration-300 flex items-center gap-2 mt-1 group">
                    Reach Out <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: 0.2, ease: cinematicEase }} className="flex flex-col border-t border-[#C8A97E]/30">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="group border-b border-[#C8A97E]/30">
                    <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between py-8 text-left transition-colors duration-300">
                      <h3 className={`font-playfair text-xl md:text-2xl transition-colors duration-500 pr-8 ${isOpen ? 'text-[#C8A97E]' : 'text-[#2A2520] group-hover:text-[#C8A97E]'}`}>{faq.question}</h3>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? '#C8A97E' : 'transparent' }} transition={{ duration: 0.5, ease: cinematicEase }} className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border shrink-0 transition-colors duration-500 ${isOpen ? 'border-[#C8A97E]' : 'border-[#C8A97E]/30 group-hover:border-[#C8A97E]'}`}>
                        {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-[#C8A97E]" />}
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: cinematicEase }} className="overflow-hidden">
                          <div className="pb-8 pr-12">
                            <p className="text-[#5A5045] font-light leading-relaxed text-sm md:text-base border-l-[1.5px] border-[#C8A97E]/50 pl-5">{faq.answer}</p>
                            <div className="mt-5 ml-5 flex items-center gap-2">
                              <Star className="w-3.5 h-3.5 text-[#C8A97E]/40 fill-[#C8A97E]/40" />
                              <Star className="w-3.5 h-3.5 text-[#C8A97E]/60 fill-[#C8A97E]/60" />
                              <Star className="w-3.5 h-3.5 text-[#C8A97E]/40 fill-[#C8A97E]/40" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, delay: 0.4, ease: cinematicEase }} className="mt-28 md:mt-40 rounded-[3rem] border border-white/80 bg-white/50 backdrop-blur-3xl px-8 py-14 md:p-16 shadow-[0_40px_100px_rgba(200,169,126,0.1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C8A97E]/5 via-transparent to-[#C8A97E]/5 pointer-events-none rounded-[3rem]" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#2A2520]">
                Still Have Inquiries? <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] inline-block mt-2">Let’s Create Your Vision</span>
              </h3>
              <p className="mt-6 text-[#5A5045] font-light leading-relaxed text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
                Connect with our elite advisory team for bespoke bridal consultations, masterclass availability, and securing your date in Agra.
              </p>
            </div>
            <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 md:px-14 py-5 md:py-6 bg-[#2A2520] border border-[#2A2520] text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(42,37,32,0.2)] transition-all duration-700 hover:shadow-[0_20px_50px_rgba(200,169,126,0.3)] hover:-translate-y-1 w-full sm:w-auto shrink-0">
              <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              <span className="relative z-10 flex items-center gap-3">
                Book Consultation <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}