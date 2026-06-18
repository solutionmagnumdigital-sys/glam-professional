// components/contact/PremiumBookingForm.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Crown,
  CalendarDays,
  Phone,
  User,
  MessageSquare,
  Gem,
  BadgeCheck,
  ArrowUpRight,
  HeartHandshake,
  MapPin,
  Mail
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const WhatsAppVectorIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

export default function PremiumBookingForm() {
  const [focused, setFocused] = useState("");

  return (
    <section
      id="booking-form"
      className="relative overflow-hidden bg-[#FAF7F2] pt-12 md:pt-20 pb-28 md:pb-44 text-[#2A2520] select-none selection:bg-[#C8A97E]/30"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[1100px] h-[1100px] bg-[#C8A97E]/[0.06] blur-[240px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[1100px] h-[1100px] bg-[#D4B58A]/[0.06] blur-[240px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#2A2520_1px,transparent_1px),linear-gradient(to_bottom,#2A2520_1px,transparent_1px)] bg-[size:135px_135px]" />
      </div>

      <div className="relative z-10 max-w-[1750px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ================= LEFT CONTENT ATELIER (INFO SIDEBAR) ================= */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: luxuryEase }}
              className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 backdrop-blur-md px-6 py-2.5 shadow-xs mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A97E] font-bold">
                Premium Bridal Booking
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.1, ease: luxuryEase }}
              className="font-playfair text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight text-[#2A2520]"
            >
              Reserve Your <br />
              <span className="inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E] mt-2 pb-2 drop-shadow-xs">
                Luxury Glam Session
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: luxuryEase }}
              className="mt-6 text-sm md:text-lg text-[#5A5045] font-light leading-relaxed max-w-xl"
            >
              Fill out your luxury bridal consultation request and our premium beauty concierge at Glam Professionals By Shivani will connect with you shortly for a bespoke glam layout blueprint.
            </motion.p>

            {/* DUAL STUDIO LOCATIONS & CONTACT INFO CARDS */}
            <div className="mt-12 space-y-4 w-full max-w-xl">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: luxuryEase }}
                className="flex items-start gap-4 rounded-[26px] border border-black/[0.04] bg-white p-5 shadow-[0_20px_40px_rgba(200,169,126,0.06)] hover:border-[#C8A97E]/40 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#C8A97E] mb-1">Studio 1: Sikandra</h4>
                  <p className="text-sm font-medium text-[#2A2520] tracking-tight leading-relaxed">
                    2nd Floor, Sikandra-Bodla Rd, Kargil Petrol Pump, Suruchipuram Colony, Sikandra, Agra 282007
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
                className="flex items-start gap-4 rounded-[26px] border border-black/[0.04] bg-white p-5 shadow-[0_20px_40px_rgba(200,169,126,0.06)] hover:border-[#C8A97E]/40 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 shrink-0">
                  <MapPin className="w-5 h-5 text-rose-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#C8A97E] mb-1">Studio 2: Fatehabad Rd</h4>
                  <p className="text-sm font-medium text-[#2A2520] tracking-tight leading-relaxed">
                    54, Fatehabad Rd, Agra Cantt, Idgah Colony, Agra 282001
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <motion.a
                  href="tel:+919639211114"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: luxuryEase }}
                  className="flex items-center gap-4 rounded-[26px] border border-black/[0.04] bg-[#FAF7F2] p-4 hover:bg-white hover:border-[#C8A97E]/40 transition-all shadow-sm"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2A2520] shrink-0">
                    <Phone className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#5A5045] mb-0.5">Direct Line</h4>
                    <p className="text-sm font-bold text-[#2A2520] truncate">+91 96392 11114</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@glamprofessional.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
                  className="flex items-center gap-4 rounded-[26px] border border-black/[0.04] bg-[#FAF7F2] p-4 hover:bg-white hover:border-[#C8A97E]/40 transition-all shadow-sm"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2A2520] shrink-0">
                    <Mail className="w-4 h-4 text-[#C8A97E]" strokeWidth={1.5} />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-[9px] uppercase tracking-[0.15em] font-bold text-[#5A5045] mb-0.5">Email Inquiry</h4>
                    <p className="text-xs font-bold text-[#2A2520] truncate">info@glamprofessional.com</p>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="mt-10 rounded-[35px] border border-[#C8A97E]/30 bg-white shadow-[0_30px_70px_rgba(200,169,126,0.06)] p-6 w-full max-w-xl">
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2A2520] shadow-md shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#C8A97E]" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="font-playfair text-2xl font-normal text-[#2A2520] tracking-tight leading-none">
                    500+ Brides in Agra
                  </h4>
                  <p className="mt-1.5 text-xs text-[#5A5045] font-light tracking-wide">
                    Trusted Luxury Bridal Identity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM CONTAINER COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: luxuryEase }}
            className="lg:col-span-6 relative w-full"
          >
            {/* Main Form Glass Card */}
            <div className="relative overflow-hidden rounded-[50px] border border-[#C8A97E]/30 bg-white p-8 sm:p-12 md:p-14 shadow-[0_45px_110px_rgba(200,169,126,0.14)] relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/[0.03] via-transparent to-pink-500/[0.01] pointer-events-none" />
              
              <div className="relative z-10 w-full">
                
                {/* Header Info Sheet */}
                <div className="flex items-start justify-between gap-5 border-b border-black/[0.05] pb-6">
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-[9px] font-bold block mb-1">// ADMISSION MATRIX</span>
                    <h3 className="font-playfair text-3xl font-normal text-[#2A2520] tracking-tight transition-colors duration-500 group-hover:text-[#25D366]">
                      Book Consultation
                    </h3>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2A2520] flex items-center justify-center shadow-md">
                    <Crown className="w-5 h-5 text-[#C8A97E]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* FORM INPUT STACK */}
                <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name Input */}
                  <div className="relative w-full">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-[#C8A97E] font-bold ml-1">
                      Full Name
                    </label>
                    <div className={`mt-2 flex items-center gap-4 rounded-[22px] border ${
                      focused === "name" ? "border-amber-500 bg-white shadow-sm" : "border-black/[0.06] bg-[#FAF7F2]"
                    } p-4.5 transition-all duration-300 w-full shadow-inner`}>
                      <User className={`w-4 h-4 transition-colors duration-300 ${focused === "name" ? "text-amber-500" : "text-[#5A5045]"}`} strokeWidth={1.5} />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        className="w-full bg-transparent outline-none font-serif text-base text-[#2A2520] placeholder:text-[#2A2520]/30 font-medium"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="relative w-full">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-[#C8A97E] font-bold ml-1">
                      Phone Number
                    </label>
                    <div className={`mt-2 flex items-center gap-4 rounded-[22px] border ${
                      focused === "phone" ? "border-emerald-500 bg-white shadow-sm" : "border-black/[0.06] bg-[#FAF7F2]"
                    } p-4.5 transition-all duration-300 w-full shadow-inner`}>
                      <Phone className={`w-4 h-4 transition-colors duration-300 ${focused === "phone" ? "text-emerald-500" : "text-[#5A5045]"}`} strokeWidth={1.5} />
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused("")}
                        className="w-full bg-transparent outline-none font-serif text-base text-[#2A2520] placeholder:text-[#2A2520]/30 font-medium"
                      />
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="relative w-full">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-[#C8A97E] font-bold ml-1">
                      Bridal Date
                    </label>
                    <div className={`mt-2 flex items-center gap-4 rounded-[22px] border ${
                      focused === "date" ? "border-cyan-500 bg-white shadow-sm" : "border-black/[0.06] bg-[#FAF7F2]"
                    } p-4.5 transition-all duration-300 w-full shadow-inner`}>
                      <CalendarDays className={`w-4 h-4 transition-colors duration-300 ${focused === "date" ? "text-cyan-500" : "text-[#5A5045]"}`} strokeWidth={1.5} />
                      <input
                        type="date"
                        onFocus={() => setFocused("date")}
                        onBlur={() => setFocused("")}
                        className="w-full bg-transparent outline-none font-serif text-base text-[#2A2520] text-black/70 font-medium cursor-text"
                      />
                    </div>
                  </div>

                  {/* Service Selector Input */}
                  <div className="relative w-full">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-[#C8A97E] font-bold ml-1">
                      Service Type
                    </label>
                    <div className={`mt-2 flex items-center gap-4 rounded-[22px] border ${
                      focused === "service" ? "border-purple-500 bg-white shadow-sm" : "border-black/[0.06] bg-[#FAF7F2]"
                    } p-4.5 transition-all duration-300 w-full shadow-inner`}>
                      <Gem className={`w-4 h-4 transition-colors duration-300 ${focused === "service" ? "text-purple-500" : "text-[#5A5045]"}`} strokeWidth={1.5} />
                      <select
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused("")}
                        className="w-full bg-transparent outline-none font-serif text-base text-[#2A2520] font-medium appearance-none cursor-pointer"
                      >
                        <option className="bg-white">Select Service Module</option>
                        <option className="bg-white">Luxury Bridal Makeup</option>
                        <option className="bg-white">HD Bridal Makeup</option>
                        <option className="bg-white">Engagement Makeup</option>
                        <option className="bg-white">Party Makeup</option>
                        <option className="bg-white">Makeup Academy</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Textarea Input */}
                  <div className="relative w-full">
                    <label className="text-[10px] uppercase tracking-[0.15em] text-[#C8A97E] font-bold ml-1">
                      Your Message
                    </label>
                    <div className={`mt-2 flex gap-4 rounded-[26px] border ${
                      focused === "message" ? "border-pink-500 bg-white shadow-sm" : "border-black/[0.06] bg-[#FAF7F2]"
                    } p-5 transition-all duration-300 w-full shadow-inner`}>
                      <MessageSquare className={`w-4 h-4 mt-1 transition-colors duration-300 ${focused === "message" ? "text-pink-500" : "text-[#5A5045]"}`} strokeWidth={1.5} />
                      <textarea
                        rows={4}
                        placeholder="Tell us about your dream bridal look..."
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        className="w-full bg-transparent outline-none resize-none font-serif text-base text-[#2A2520] placeholder:text-[#2A2520]/30 font-medium"
                      />
                    </div>
                  </div>

                  {/* Primary Luxury Submit Trigger */}
                  <button
                    type="submit"
                    className="group relative h-18 w-full mt-4 rounded-full bg-[#2A2520] border border-[#2A2520] flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(200,169,126,0.25)] shadow-xl transform hover:-translate-y-0.5 active:scale-[0.99]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="relative z-10 flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em]">
                      <span>Reserve Luxury Consultation</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C8A97E] group-hover:text-white transition-transform duration-500 group-hover:rotate-45" strokeWidth={2} />
                    </span>
                  </button>

                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}