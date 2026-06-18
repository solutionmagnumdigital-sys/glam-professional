"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Crown,
  HeartHandshake,
  ChevronRight,
  Send,
} from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/makeup-services" },
  { name: "Portfolio", href: "/bridal-portfolio" },
  { name: "Academy", href: "/academy" },
  { name: "Gallery", href: "/academy-gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },

];

const services = [
  "The Royal Bridal Makeup",
  "HD Editorial Glamour",
  "Flawless Airbrush Finish",
  "Elegant Party Makeup",
  "Pre-Bridal Glow Up",
  "Professional Academy",
];

const miniGallery = [
  "/images/High_Art/The-Royal-Bride.jpg",
  "/images/High_Art/Glassskin.jpg",
  "/images/High_Art/Haute_Couture.jpg",
];

export default function PremiumLuxuryFooter() {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  return (
    // CRITICAL FIX: Removed overflow-hidden from the main footer tag
    <footer className="relative bg-[#FAF7F2] font-sans text-[#2A2520] selection:bg-[#C8A97E]/30 selection:text-[#2A2520]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        .footer-shine {
          position: absolute;
          top: 0;
          left: -150%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(200, 169, 126, 0.4), transparent);
          transform: skewX(-25deg);
          animation: shine-sweep 6s infinite cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        @keyframes shine-sweep {
          0% { left: -150%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>

      {/* ================= BACKGROUND AESTHETICS (Now safely hidden inside their own absolute container) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#C8A97E]/15 blur-[150px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#E8DCCB]/40 blur-[150px] rounded-full mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      </div>

      <div className="relative z-20 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-10">
        
        {/* ================= VIP NEWSLETTER CARD (CRITICAL FIX: relative flow, negative top margin) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 mx-auto -mt-32 md:-mt-48 mb-16 md:mb-24"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-[#050505] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C8A97E]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <Crown className="w-5 h-5 text-[#C8A97E]" />
                <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold text-[#C8A97E]">
                  Join The Elite
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Unlock the Vault of <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#E8DCCB] to-[#C8A97E]">
                  Elegance
                </span>
              </h2>
              <p className="text-white/60 font-light text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Subscribe to receive exclusive masterclass updates, avant-garde bridal trends, and priority booking access before anyone else.
              </p>
            </div>

            <div className="relative z-10 w-full lg:w-[45%]">
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-2.5 backdrop-blur-xl transition-all duration-500 focus-within:border-[#C8A97E]/50 focus-within:bg-white/10 focus-within:shadow-[0_0_30px_rgba(200,169,126,0.15)]">
                <input 
                  type="email" 
                  placeholder="Enter your esteemed email..." 
                  className="w-full bg-transparent text-white placeholder-white/40 px-6 py-4 outline-none text-sm md:text-base font-light tracking-wide"
                />
                <button className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#C8A97E] to-[#B59567] hover:shadow-[0_10px_30px_rgba(200,169,126,0.4)] transition-all duration-500 shrink-0 overflow-hidden">
                  <span className="footer-shine" />
                  <Send className="w-5 h-5 md:w-6 md:h-6 text-[#2A2520] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN FOOTER CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left pr-0 lg:pr-10">
            <Link 
              href="/" 
              className="inline-block mb-8 group relative z-40"
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
            >
              <h2 className="font-playfair text-5xl md:text-6xl font-normal text-[#2A2520] tracking-tight group-hover:text-[#C8A97E] transition-colors duration-700 leading-[0.9]">
                Glam <br/>
                <span className="italic font-light text-4xl md:text-5xl">Professionals</span>
              </h2>
              
              <div className="absolute top-1/2 left-[110%] -translate-y-1/2 pointer-events-none w-32 h-40 hidden lg:block">
                {miniGallery.map((src, i) => {
                  const rotateAngles = [-15, 5, 25];
                  const translatesX = [0, 20, 40];
                  return (
                    <div 
                      key={i} 
                      className={`absolute inset-0 rounded-[1.5rem] border-2 border-white shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHoveringLogo ? 'opacity-100' : 'opacity-0'}`}
                      style={{ 
                        transform: isHoveringLogo 
                          ? `rotate(${rotateAngles[i]}deg) translateX(${translatesX[i]}px) translateY(${i * -10}px)` 
                          : 'rotate(0deg) translateX(-40px) translateY(0px)',
                        zIndex: 10 - i,
                        transitionDelay: `${i * 0.05}s`
                      }}
                    >
                      <Image src={src} alt="Gallery" fill className="object-cover" />
                    </div>
                  );
                })}
              </div>
            </Link>

            <p className="text-[#5A5045] text-sm md:text-[15px] leading-relaxed font-light mb-10 max-w-sm">
              We specialize in luxurious bridal transformations, high-definition editorials, and masterclass education meticulously crafted to enhance your inner confidence and radiate elegance.
            </p>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border border-[#C8A97E]/40 flex items-center justify-center bg-white shadow-md">
                <Sparkles className="w-6 h-6 text-[#C8A97E]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-playfair text-2xl text-[#2A2520] font-medium leading-none mb-1">1k+ Clients</h4>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A5045] font-bold">Styled to Perfection</span>
              </div>
            </div>
          </div>

          {/* EXPLORE LINKS */}
          <div className="lg:col-span-3 lg:ml-auto">
            <h3 className="font-playfair text-3xl text-[#2A2520] mb-10 relative inline-block">
              Explore
              <span className="absolute -bottom-3 left-0 w-12 h-[2px] bg-[#C8A97E]" />
            </h3>
            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="group flex items-center gap-4 text-[#5A5045] hover:text-[#C8A97E] transition-colors duration-300 w-max">
                    <span className="w-0 h-[1px] bg-[#C8A97E] transition-all duration-500 ease-out group-hover:w-6" />
                    <span className="text-sm md:text-base font-light tracking-wide transition-transform duration-500 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EXPERIENCES */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="font-playfair text-3xl text-[#2A2520] mb-10 relative inline-block">
              Experiences
              <span className="absolute -bottom-3 left-0 w-12 h-[2px] bg-[#C8A97E]" />
            </h3>
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li key={index} className="group flex items-start gap-4 cursor-default">
                  <div className="w-6 h-6 rounded-full border border-[#C8A97E]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] transition-all duration-300 shadow-sm">
                    <ChevronRight className="w-3.5 h-3.5 text-[#C8A97E] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-[#5A5045] text-sm md:text-base font-light group-hover:text-[#2A2520] group-hover:translate-x-1 transition-all duration-500">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT STUDIO */}
          <div className="lg:col-span-3 lg:ml-auto w-full">
            <h3 className="font-playfair text-3xl text-[#2A2520] mb-10 relative inline-block">
              Contact Studio
              <span className="absolute -bottom-3 left-0 w-12 h-[2px] bg-[#C8A97E]" />
            </h3>
            
            <div className="space-y-4">
              <a href="tel:+919639211114" className="group flex items-start gap-5 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white hover:border-[#C8A97E]/30 hover:shadow-[0_15px_30px_rgba(200,169,126,0.1)] transition-all duration-500">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/20 group-hover:bg-[#C8A97E] transition-all duration-500 shrink-0">
                  <Phone className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5045] mb-1">Direct Line</p>
                  <p className="font-playfair text-[#2A2520] text-lg font-medium group-hover:text-[#C8A97E] transition-colors">+91 96392 11114</p>
                </div>
              </a>

              <a href="mailto:info@glamprofessional.com" className="group flex items-start gap-5 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white hover:border-[#C8A97E]/30 hover:shadow-[0_15px_30px_rgba(200,169,126,0.1)] transition-all duration-500">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/20 group-hover:bg-[#C8A97E] transition-all duration-500 shrink-0">
                  <Mail className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5045] mb-1">Email Inquiry</p>
                  <p className="font-sans text-[#2A2520] text-sm font-medium group-hover:text-[#C8A97E] transition-colors">info@glamprofessional.com</p>
                </div>
              </a>

              <a
  href="https://share.google/CRSbcFtKrJ0LCUPW3"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-start gap-5 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white hover:border-[#C8A97E]/30 hover:shadow-[0_15px_30px_rgba(200,169,126,0.1)] transition-all duration-500"
>
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/20 group-hover:bg-[#C8A97E] transition-all duration-500 shrink-0">
    <MapPin
      className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors"
      strokeWidth={1.5}
    />
  </div>

  <div className="flex flex-col justify-center">
    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5045] mb-1">
      Studio Address 1
    </p>
    <p className="font-sans text-[#2A2520] text-sm font-medium leading-snug group-hover:text-[#C8A97E] transition-colors">
      2nd Floor, Sikandra-Bodla Rd, Kargil Petrol Pump, Suruchipuram Colony,
      Sikandra, Agra, Uttar Pradesh 282007
    </p>
  </div>
</a>
 <a
  href="https://share.google/zmQqTpPa5pK5Bfk1B"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-start gap-5 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white hover:border-[#C8A97E]/30 hover:shadow-[0_15px_30px_rgba(200,169,126,0.1)] transition-all duration-500"
>
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C8A97E]/20 group-hover:bg-[#C8A97E] transition-all duration-500 shrink-0">
    <MapPin
      className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors"
      strokeWidth={1.5}
    />
  </div>

  <div className="flex flex-col justify-center">
    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5045] mb-1">
      Studio Address 2
    </p>
    <p className="font-sans text-[#2A2520] text-sm font-medium leading-snug group-hover:text-[#C8A97E] transition-colors">
      54, Fatehabad Rd, Agra Cantt, Idgah Colony, Agra, Uttar Pradesh 282001
    </p>
  </div>
</a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-24 mb-10 h-px w-full bg-gradient-to-r from-transparent via-[#C8A97E]/40 to-transparent relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF7F2] px-6">
            <DiamondIcon />
          </div>
        </div>

      {/* ================= BOTTOM BAR ================= */}
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 pb-6">
  
  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
    
    {/* COPYRIGHT */}
    <p className="text-[#5A5045] text-xs font-light tracking-wide">
      &copy; {new Date().getFullYear()} Glam Professionals By Shivani.
    </p>

    {/* DOT */}
    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C8A97E]/50" />

    {/* DEVELOPED BY */}
    <a
      href="https://magnumdigitalsolutions.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center md:items-start leading-tight transition-all duration-500"
    >
      <span className="text-[10px] uppercase tracking-[0.35em] text-[#5A5045] font-semibold mb-1">
        Designed & Developed by
      </span>

      <span className="font-playfair text-lg md:text-xl text-[#8B6B45] group-hover:text-[#C8A97E] transition-colors duration-500 italic">
        Magnum Digital Solutions
      </span>
    </a>

    {/* DOT */}
    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C8A97E]/50" />

    {/* CRAFTED WITH ELEGANCE */}
    <div className="flex items-center gap-2 text-xs text-[#5A5045] font-medium tracking-widest uppercase">
      Crafted with{" "}
      <HeartHandshake className="w-4 h-4 text-[#C8A97E]" />{" "}
      Elegance
    </div>

  </div>

  {/* SOCIAL ICONS */}
  <div className="flex items-center gap-4">
    {[
      {
        Icon: FaInstagram,
        href: "https://www.instagram.com/glamby_shivani/",
        hoverColor:
          "hover:bg-gradient-to-tr hover:from-[#FFDC80] hover:via-[#F56040] hover:to-[#833AB4] hover:border-transparent hover:text-white",
      },
      {
        Icon: FaFacebook,
        href: "https://www.facebook.com/p/Glam-Professionals-by-Shivani-100063753982977/",
        hoverColor:
          "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
      },
      {
        Icon: FaYoutube,
        href: "https://www.youtube.com/@GlamprofessionalsbyShivani/shorts",
        hoverColor:
          "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white",
      },
      {
        Icon: FaWhatsapp,
        href: "https://wa.me/919639211114",
        hoverColor:
          "hover:bg-[#25D366] hover:border-[#25D366] hover:text-white",
      },
    ].map((social, idx) => (
      <a
        key={idx}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#C8A97E]/20 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg text-[#5A5045] ${social.hoverColor}`}
      >
        <social.Icon className="w-5 h-5 transition-colors duration-500" />
      </a>
    ))}
  </div>
</div>
      </div>
    </footer>
  );
}

function DiamondIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2V22" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12H22" stroke="#C8A97E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}