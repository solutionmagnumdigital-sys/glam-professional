"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Crown,
  Brush,
  Gem,
  Star,
  ArrowUpRight,
  X,
  CalendarHeart,
  Clock,
  Heart,
  CheckCircle2,
  GraduationCap,
  Scissors,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// --- FULL 32 GMB OPTIMIZED LUXURY SERVICES (NO PRICING, BRAND FOCUSED) ---
const services = [
  // 1-8 (Initially Visible)
  {
    title: "Signature Bridal Makeup",
    description: "Bespoke luxury bridal artistry by Glam Professionals By Shivani for your big day.",
    image: "/images/glam/glam1 (20).jpeg", 
    icon: Crown,
    duration: "2.5 - 4 Hours",
    idealFor: "Wedding Day, Pheras",
    details: "At Glam Professionals By Shivani, we offer a holistic luxury bridal experience. As the top makeup artist in Agra, Shivani ensures you look breathtaking using premium, long-lasting products that withstand tears, weather, and flash photography.",
    includes: ["Signature Bridal Makeup & Hairstyling", "Complimentary dupatta & jewelry draping", "Advanced contouring & highlighting", "Flawless HD base application", "Premium faux mink lashes"]
  },
  {
    title: "Airbrush Bridal Artistry",
    description: "Weightless, water-resistant airbrush makeup for an immaculate, long-lasting skin finish.",
    image: "/images/glam/glam1 (21).jpeg",
    icon: Sparkles,
    duration: "2 - 2.5 Hours",
    idealFor: "Summer Weddings, Humid Climates",
    details: "Experience the pinnacle of makeup technology at Glam Professionals By Shivani. Our luxury Airbrush makeup provides an incredibly lightweight, waterproof, and rub-proof finish that looks utterly flawless up close and in high-definition.",
    includes: ["Silicone-based Airbrush foundation", "Micro-fine mist application", "Tear & sweat resistant locking", "Custom color mixing for perfect match", "Full face glam including lips & eye make-up"]
  },
  {
    title: "Engagement & Roka Makeovers",
    description: "Soft, romantic, and glowing glam looks beautifully crafted for your ring ceremony.",
    image: "/images/glam/glam1 (28).jpeg",
    icon: Gem,
    duration: "1.5 - 2 Hours",
    idealFor: "Engagements, Roka Ceremonies",
    details: "Glam Professionals By Shivani strikes the perfect balance between natural and full bridal glam for your engagement. We create a soft, youthful glow that translates beautifully in both daylight and evening settings.",
    includes: ["Radiant glowing skin prep", "Medium coverage flawless base", "Soft romantic eye makeup", "Eyelash enhancements", "Saree/Lehenga draping assistance"]
  },
  {
    title: "Haldi & Mehendi Glow",
    description: "Fresh, vibrant, and sweat-proof makeup looks designed for day-time wedding festivities.",
    image: "/images/glam/glam1 (5).jpeg",
    icon: Star,
    duration: "1.5 Hours",
    idealFor: "Haldi, Mehendi, Sangeet",
    details: "Our Haldi and Mehendi makeup by Glam Professionals By Shivani focuses on fresh, dewy aesthetics with colorful, striking eye makeup that complements vibrant daytime outfits.",
    includes: ["Dewy, sweat-proof base", "Floral jewelry styling assistance", "Vibrant eye makeup or soft pastels", "Long-wear waterproof techniques", "Intricate daytime hairstyling"]
  },
  {
    title: "Reception & Cocktail Glam",
    description: "Bold, sophisticated, and high-shine makeup for evening receptions and cocktail parties.",
    image: "/images/glam/glam1 (6).jpeg",
    icon: Crown,
    duration: "2 Hours",
    idealFor: "Receptions, Cocktail Nights",
    details: "Turn heads at your evening events. Glam Professionals By Shivani specializes in modern, bold reception looks featuring smokey eyes, glitter cut-creases, and flawless glass-skin bases.",
    includes: ["High-shine glass skin prep", "Bold smokey or glitter eye artistry", "Flawless HD long-wear foundation", "Sharp contouring & strobing", "Glamorous evening hair updos or waves"]
  },
  {
    title: "Special Occasion Party Makeup",
    description: "Sophisticated makeovers tailored for bridesmaids, family, and festive celebrations.",
    image: "/images/glam/glam1 (22).jpeg",
    icon: Sparkles,
    duration: "1 - 1.5 Hours",
    idealFor: "Birthday Parties, Galas, Guests",
    details: "Perfect for the bride's squad or special guests. We provide a refined, elegant look that is photogenic and long-lasting, using High-Definition products that look completely natural.",
    includes: ["Customized skin care preparation", "HD foundation application", "Choice of soft or dramatic eyes", "Blush and subtle contouring", "Basic elegant hairstyling"]
  },
  {
    title: "Clean Beauty & Subtle Glam",
    description: "Minimalist clean makeup looks for a breathable, 'no-makeup' aesthetic.",
    image: "/images/glam/glam1 (9).jpeg",
    icon: Star,
    duration: "1 Hour",
    idealFor: "Day Events, Professional Meets",
    details: "Embrace the elegant 'no-makeup' look with Glam Professionals By Shivani. This provides a sophisticated, breathable look tailored to your skin type, paired with subtle eye artistry to make your features pop naturally.",
    includes: ["Hydrating minimalist skin care", "Even-tone clean makeup base", "Subtle eyebrow shaping & tinting", "Permanent lip makeup effect consultation", "Natural strobing & highlighting"]
  },
  {
    title: "Photography & Fashion Makeup",
    description: "High-definition makeup perfect for fashion shows, 4K photography, television, and stage.",
    image: "/images/glam/glam1 (24).jpeg",
    icon: Brush,
    duration: "2 - 3 Hours",
    idealFor: "Photoshoots, Fashion Shows, TV",
    details: "Designed specifically for the lens by Glam Professionals By Shivani. This service covers television make-up, fashion show makeup, and performance make-up, rendering imperfections invisible to high-resolution cameras.",
    includes: ["Photography makeup base & primer", "Performance make-up for stage & TV", "Theatre and costume make-up (on request)", "Bold editorial eyes & face painting", "Setting spray for extended studio wear"]
  },

  // 9-32 (Hidden initially, shown on View More)
  {
    title: "Master Hair Styling",
    description: "Intricate hair artistry, from classic bridal buns to modern Hollywood waves.",
    image: "/images/glam/glam1 (12).jpeg",
    icon: Scissors,
    duration: "1 - 1.5 Hours",
    idealFor: "Bridal Hair, Receptions, Parties",
    details: "Your hair is your ultimate accessory. The hairstyling experts at Glam Professionals By Shivani ensure your hair looks spectacular and stays perfectly in place through hours of dancing.",
    includes: ["Hair texturizing & volume boosting", "Intricate bridal braiding & updos", "Hollywood waves or defined curls", "Professional hair extensions placement", "Frizz-control & hold finishing"]
  },
  {
    title: "Advanced Keratin & Hair Treatments",
    description: "Keratin, deep conditioning, and spas to rejuvenate and restore your hair's health.",
    image: "/images/glam/glam1 (13).jpeg",
    icon: Brush,
    duration: "1 - 3 Hours",
    idealFor: "Damaged Hair, Frizz Control, Routine Care",
    details: "Transform your tresses at Glam Professionals By Shivani. From advanced Keratin treatments to deep conditioning spas and styling, we ensure your hair looks spectacularly healthy and bouncy.",
    includes: ["Keratin smoothing treatments", "Deep conditioning hair spas", "Scalp care & exfoliation", "Hair smoothening procedures", "Routine hair maintenance"]
  },
  {
    title: "Haircut, Coloring & Highlighting",
    description: "Professional hair cutting, trendy coloring, and dimension-adding highlights.",
    image: "/images/glam/glam1 (3).jpeg",
    icon: Scissors,
    duration: "1 - 3 Hours",
    idealFor: "Makeovers, Routine Styling",
    details: "Update your look with our expert hair colorists and stylists. We provide precision haircuts and use premium organic colors to give your hair beautiful highlights without damage.",
    includes: ["Precision layered haircuts", "Global hair coloring", "Balayage and professional highlighting", "Root touch-ups", "Post-color hydration treatments"]
  },
  {
    title: "Pre-Bridal Skincare & Spa",
    description: "Luxury facials, exfoliation, and relaxing spa treatments for the ultimate glowing canvas.",
    image: "/images/glam/glam1 (14).jpeg",
    icon: Gem,
    duration: "1 - 2.5 Hours",
    idealFor: "Brides-to-be, Relaxation",
    details: "Great makeup starts with great skin. Experience the finest Spa in Agra with Glam Professionals By Shivani. Our pre-bridal treatments include deep exfoliation and relaxing massages for a naturally radiant canvas.",
    includes: ["Advanced skin care & luxury facials", "Deep exfoliation & skin polishing", "Relaxing facial massages", "Customized dermatological skin prep", "De-tanning treatments"]
  },
  {
    title: "Organic Full Body Waxing",
    description: "Smooth, painless organic waxing and precise hair removal for the entire body.",
    image: "/images/glam/glam1 (2).jpeg",
    icon: Sparkles,
    duration: "1 - 2 Hours",
    idealFor: "Full Body Grooming, Hygiene",
    details: "Glam Professionals By Shivani offers completely hygienic, organic waxing services. Our techniques ensure a painless and smooth experience for arms, legs, back, and stomach.",
    includes: ["Full arm & leg hair removal", "Back & stomach hair removal", "Organic strip waxing", "Soothing post-waxing skin care", "Online waxing booking available"]
  },
  {
    title: "Brazilian & Bikini Waxing",
    description: "Hygienic and gentle intimate area hair removal using premium organic hard wax.",
    image: "/images/glam/glam1 (7).jpeg",
    icon: Heart,
    duration: "30 - 45 Mins",
    idealFor: "Personal Hygiene, Bridal Prep",
    details: "We prioritize your comfort and hygiene. Our professional staff provides gentle and discreet Brazilian and bikini waxing services using high-quality wax to prevent skin irritation.",
    includes: ["Brazilian waxing", "Bikini line waxing", "Intimate area hair waxing", "Pre-wax skin prep", "Post-wax cooling gel application"]
  },
  {
    title: "Luxury Nail Art & Extensions",
    description: "Bespoke nail designs, acrylic extensions, and beautiful 3D nail art.",
    image: "/images/glam/glam1 (1).jpeg",
    icon: Star,
    duration: "1 - 2 Hours",
    idealFor: "Bridal Details, Hand Care",
    details: "Your hands deserve the best. Indulge in luxury nail services at Glam Professionals By Shivani. We specialize in intricate nail designs, extensions, and glamorous embellishments.",
    includes: ["Acrylic & Gel nail extensions", "Custom nail art & 3D designs", "Nail painting & polish changes", "Nail filing & cuticular care", "Safe synthetic nail removal"]
  },
  {
    title: "Gel Manicures & Pedicures",
    description: "Relaxing spa manicures and pedicures with long-lasting gel polish.",
    image: "/images/glam/glam1 (8).jpeg",
    icon: Sparkles,
    duration: "1 - 1.5 Hours",
    idealFor: "Hand & Foot Care, Pampering",
    details: "Unwind at our Tajganj Salon with our rejuvenating manicures and pedicures. We remove dead skin, pamper your hands and feet, and finish with a flawless, long-lasting gel polish.",
    includes: ["Luxury spa pedicure & manicure", "Foot hair removal & exfoliation", "Deep massage for hands & feet", "Long-lasting gel manicures", "Callus treatment"]
  },
  {
    title: "Eyelash Extensions & Enhancements",
    description: "Premium eyelash extensions and lifts to make your eyes pop effortlessly.",
    image: "/images/glam/glam1 (11).jpeg",
    icon: Gem,
    duration: "1 - 2 Hours",
    idealFor: "Eye Enhancement, Daily Glam",
    details: "Enhance your gaze with Glam Professionals By Shivani. We provide luxurious semi-permanent eyelash extensions and lash lifting treatments that eliminate the need for daily mascara.",
    includes: ["Classic, Hybrid, & Volume lash extensions", "Eyelash lifting & curling", "Safe eyelash glue application", "Lash removal & refills", "Aftercare consultation"]
  },
  {
    title: "Eyebrow Threading, Waxing & Shaping",
    description: "Precision eyebrow shaping using threading and organic waxing techniques.",
    image: "/images/glam/glam1 (10).jpeg",
    icon: Scissors,
    duration: "15 - 30 Mins",
    idealFor: "Facial Symmetry, Routine Grooming",
    details: "Perfect brows frame your face beautifully. Our experts carefully analyze your facial structure to provide precise eyebrow shaping, threading, and waxing.",
    includes: ["Eyebrow threading & precision shaping", "Eyebrow waxing", "Eyebrow hair removal", "Soothing aloe vera application", "Brow mapping"]
  },
  {
    title: "Professional Makeup Classes",
    description: "Master the art of makeup with certified courses and professional training.",
    image: "/images/glam/glam1 (15).jpeg",
    icon: GraduationCap,
    duration: "Multiple Sessions",
    idealFor: "Aspiring Artists, Career Building",
    details: "Learn directly from Shivani, Agra's top makeup artist. Glam Professionals offers comprehensive professional makeup classes to help you build your career in the beauty industry.",
    includes: ["Professional bridal makeup courses", "Product knowledge & theory", "Hands-on practice sessions", "Skin analysis training", "Certification upon completion"]
  },
  {
    title: "Personalized Beauty Consultations",
    description: "One-on-one expert consultations to map out your perfect bridal or daily routine.",
    image: "/images/glam/glam1 (31).jpeg",
    icon: Heart,
    duration: "45 - 60 Mins",
    idealFor: "Brides-to-be, Skincare Beginners",
    details: "Not sure what suits you best? Book a personalized consultation at Glam Professionals By Shivani. We analyze your skin type and facial features to curate the perfect makeup regimen.",
    includes: ["In-depth skin and feature analysis", "Makeup Consultations & Looks planning", "Product recommendations", "Allergy checks", "Pre-wedding timeline planning"]
  },
  {
    title: "Self-Grooming Masterclasses",
    description: "Learn how to do your own daily, party, and professional makeup flawlessly.",
    image: "/images/glam/glam1 (16).jpeg",
    icon: GraduationCap,
    duration: "1-2 Days",
    idealFor: "Personal Grooming, Beginners",
    details: "Want to look salon-ready every day? Our self-grooming masterclasses teach you the fundamentals of clean makeup, contouring, and hairstyling tailored specifically for your own face.",
    includes: ["Daily clean makeup techniques", "Self-party makeup tutorials", "Basic hairstyling lessons", "Personal vanity kit building", "Skin care routine establishment"]
  },
  {
    title: "Television & Clinical Makeup",
    description: "Specialized clinical and television makeup for specific on-screen requirements.",
    image: "/images/glam/glam1 (17).jpeg",
    icon: Star,
    duration: "Varies",
    idealFor: "TV Anchors, Actors, Clinical Needs",
    details: "Glam Professionals provides expert clinical make-up and television make-up services designed to withstand harsh studio lighting while maintaining a completely natural appearance.",
    includes: ["Clinical make-up applications", "Television anchor makeovers", "Sweat-proof studio base", "Color correction for harsh lights", "Continuous touch-up services (on-set)"]
  },
  {
    title: "Face Painting & Body Art",
    description: "Creative face painting and body art for theatre, festivals, and costumes.",
    image: "/images/glam/glam1 (18).jpeg",
    icon: Brush,
    duration: "Varies",
    idealFor: "Theatre, Festivals, Theme Parties",
    details: "Unleash your creativity with our professional body art and face painting services. Perfect for costume parties, theatre productions, and artistic photoshoots.",
    includes: ["Creative Face painting", "Intricate Body art designs", "Theatre and costume make-up", "Skin-safe color applications", "Prosthetic makeup (on request)"]
  },
  {
    title: "Hair Extensions & Curly Hair Care",
    description: "Expert curly hair management and premium human hair extensions installation.",
    image: "/images/glam/glam1 (19).jpeg",
    icon: Scissors,
    duration: "1 - 3 Hours",
    idealFor: "Adding Volume, Curly Hair Maintenance",
    details: "We understand that every hair type is unique. We offer specialized services for maintaining and styling curly hair, alongside seamless hair extension installations for instant length and volume.",
    includes: ["Curly hair deep conditioning", "Curly hair specific styling", "Clip-in & permanent hair extensions", "Extension blending and cutting", "Volume boosting techniques"]
  },
  {
    title: "Hair Straightening & Rebonding",
    description: "Permanent and semi-permanent hair straightening for sleek, frizz-free hair.",
    image: "/images/glam/glam1 (23).jpeg",
    icon: Brush,
    duration: "3 - 4 Hours",
    idealFor: "Frizzy Hair, Sleek Makeovers",
    details: "Achieve the sleek, straight hair of your dreams. Our Salon in Tajganj uses top-tier products to chemically straighten or rebond your hair while minimizing heat damage.",
    includes: ["Permanent Hair straightening", "Hair rebonding", "Post-straightening hair spa", "Frizz elimination treatments", "Safe chemical application"]
  },
  {
    title: "Facial Hair Removal",
    description: "Gentle and precise removal of facial hair using wax or threading.",
    image: "/images/glam/glam1 (25).jpeg",
    icon: Sparkles,
    duration: "15 - 30 Mins",
    idealFor: "Routine Grooming, Smooth Canvas",
    details: "Ensure a flawless makeup application by removing unwanted facial peach fuzz. We provide gentle lip, chin, and neck hair removal tailored for sensitive facial skin.",
    includes: ["Lip hair removal", "Chin waxing & threading", "Neck hair removal", "Ear hair removal", "Soothing face gel massage"]
  },
  {
    title: "Stomach, Chest & Arm Waxing",
    description: "Comprehensive upper body hair removal for a completely smooth feel.",
    image: "/images/glam/glam1 (26).jpeg",
    icon: Heart,
    duration: "45 - 60 Mins",
    idealFor: "Full Body Care, Pre-Vacation",
    details: "Get ready for any outfit with our upper body waxing services. Glam Professionals ensures quick and efficient hair removal for your arms, chest, and stomach using skin-friendly wax.",
    includes: ["Arm hair removal", "Stomach hair removal", "Chest hair removal", "Underarm hair removal", "Skin exfoliation prior to waxing"]
  },
  {
    title: "Men's Makeup & Grooming",
    description: "Subtle, undetectable makeup and grooming services specifically for men.",
    image: "/images/glam/glam1 (27).jpeg",
    icon: Star,
    duration: "45 Mins",
    idealFor: "Grooms, Photoshoots, Events",
    details: "Grooming isn't just for brides! We offer specialized Men's makeup that focuses on skin evening, blemish concealment, and anti-shine prepping for grooms and models.",
    includes: ["Men's makeup application", "Blemish & dark circle concealment", "Anti-shine & matte finishing", "Eyebrow grooming for men", "Light facial hair neatening"]
  },
  {
    title: "Spray Tanning & Body Polish",
    description: "Achieve a sun-kissed glow or a polished, brightened skin tone.",
    image: "/images/glam/glam1 (29).jpeg",
    icon: Sparkles,
    duration: "1 Hour",
    idealFor: "Vacations, Pre-Bridal Glow",
    details: "Looking for that perfect summer glow or want to remove a harsh tan? We offer safe spray tanning and rigorous body polishing to give your skin a uniform, radiant complexion.",
    includes: ["Spray tanning services", "Full body exfoliation", "Skin brightening body polish", "Deep moisturizing body wrap", "Even-tone glow treatments"]
  },
  {
    title: "Nail Repair & Polish Changes",
    description: "Quick fixes for broken nails and rapid polish change services.",
    image: "/images/glam/glam1 (30).jpeg",
    icon: Gem,
    duration: "20 - 30 Mins",
    idealFor: "Maintenance, Quick Fixes",
    details: "Broke an acrylic nail right before an event? Don't worry. Glam Professionals By Shivani offers quick nail repair services and rapid nail polish changes to keep your hands looking perfect.",
    includes: ["Acrylic & Gel Nail repair", "Nail polish changes", "Polish removal", "Cuticle oil application", "Nail buffing and shining"]
  },
  {
    title: "Complete Beauty Makeovers",
    description: "A head-to-toe transformation including hair, makeup, and draping.",
    image: "/images/glam/glam1 (32).jpeg",
    icon: Crown,
    duration: "3 - 5 Hours",
    idealFor: "Total Transformations, Special Events",
    details: "Experience the ultimate pampering. Our Complete Beauty Makeovers cover everything from a fresh haircut and color to a full-face glamorous makeup application and outfit styling.",
    includes: ["Complete Beauty makeovers", "Hair styling & coloring", "Full face Glam makeup", "Outfit & jewelry draping", "Pre-event Spa in Agra Cantt"]
  }
];

export default function UltraPremiumServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [typedTitle, setTypedTitle] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  // Typewriter Effect Logic for Modal
  useEffect(() => {
    if (selectedService) {
      setTypedTitle("");
      let i = 0;
      const title = selectedService.title;
      
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setTypedTitle(title.substring(0, i + 1));
          i++;
          if (i >= title.length) clearInterval(interval);
        }, 60); 
        
        return () => clearInterval(interval);
      }, 400); 

      return () => clearTimeout(timeout);
    }
  }, [selectedService]);

  // Determine how many services to show
  const displayedServices = showAllServices ? services : services.slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] dark:bg-[#050505] py-16 sm:py-24 md:py-32 font-sans transition-colors duration-500 min-h-screen">
      {/* --- INJECT PREMIUM FONTS & ADVANCED ANIMATIONS --- */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(200,169,126,0.3) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-25deg);
          animation: shine 4s infinite;
        }
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }

        /* Smooth Staggered Modal Animations */
        @keyframes overlayFade {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(12px); } 
        }
        @keyframes modalEntrance {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes contentFadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-overlay {
          animation: overlayFade 0.4s ease-out forwards;
        }
        .animate-modal {
          animation: modalEntrance 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .stagger-1 { animation: contentFadeUp 0.5s ease-out 0.1s forwards; opacity: 0; }
        .stagger-2 { animation: contentFadeUp 0.5s ease-out 0.2s forwards; opacity: 0; }
        .stagger-3 { animation: contentFadeUp 0.5s ease-out 0.3s forwards; opacity: 0; }
        .stagger-4 { animation: contentFadeUp 0.5s ease-out 0.4s forwards; opacity: 0; }

        /* Custom Scrollbar for Modal Wrapper */
        .modal-scroll::-webkit-scrollbar { width: 4px; }
        @media (min-width: 768px) { .modal-scroll::-webkit-scrollbar { width: 6px; } }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: #C8A97E; border-radius: 10px; }
      `}</style>

      {/* Aesthetic Background Glows */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#C8A97E]/10 dark:bg-[#C8A97E]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#E8DCCB]/20 dark:bg-[#C8A97E]/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-24 flex flex-col items-center">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group cursor-default">
            <span className="w-8 sm:w-10 md:w-16 h-[1px] bg-[#C8A97E] transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"></span>
            <span className="text-[#C8A97E] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[8px] sm:text-[9px] md:text-xs font-semibold flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              Glam Professionals By Shivani
            </span>
            <span className="w-8 sm:w-10 md:w-16 h-[1px] bg-[#C8A97E] transition-all duration-500 group-hover:w-16 sm:group-hover:w-24"></span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-[#2A2520] dark:text-white leading-[1.2] sm:leading-[1.15] tracking-tight">
            Curated Beauty & <br className="hidden sm:block" />
            <span className="italic text-[#C8A97E] font-light relative inline-block mt-1 sm:mt-2">
              Signature Experiences
              <span className="absolute -bottom-1 md:bottom-1 left-0 w-full h-[1px] bg-[#C8A97E]/30"></span>
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 md:mt-8 text-[11px] sm:text-xs md:text-[15px] leading-relaxed text-[#5A5045] dark:text-gray-400 font-light tracking-wide max-w-2xl px-2">
            Step into a world of bespoke artistry in Agra. From luxury spa treatments to immaculate bridal makeup, every service at Glam Professionals By Shivani is meticulously crafted to enhance your authentic elegance.
          </p>
        </div>

        {/* ================= FIXED MOBILE 2-COLUMN GRID ================= */}
        {/* Strictly grid-cols-2 for mobile, adjusting padding and text sizes so it looks clean */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 transition-all duration-700">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white dark:bg-[#0c0c0c] border border-[#C8A97E]/15 dark:border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.12)] transition-all duration-700 hover:-translate-y-2 flex flex-col cursor-pointer animate-[contentFadeUp_0.5s_ease-out_forwards]"
              >
                {/* --- Image Section --- */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2] dark:bg-[#111]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover object-top transition-transform duration-[2500ms] group-hover:scale-110 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  />

                  {/* Aesthetic Overlays */}
                  <div className="absolute inset-0 bg-black/10 sm:bg-black/5 group-hover:bg-black/0 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-90 sm:opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Floating Icon (Hidden on very small screens to save space) */}
                  <div className="hidden sm:flex absolute top-4 left-4 sm:top-5 sm:left-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center shadow-lg group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] transition-all duration-500">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white relative z-10" strokeWidth={1.5} />
                  </div>
                </div>

                {/* --- Content Section --- */}
                <div className="p-3 sm:p-5 lg:p-7 flex flex-col flex-grow relative z-10 bg-white dark:bg-[#0c0c0c]">
                  <h3 className="font-playfair text-[12px] sm:text-lg md:text-xl lg:text-2xl font-medium text-[#2A2520] dark:text-white mb-1 sm:mb-2 md:mb-3 group-hover:text-[#C8A97E] transition-colors duration-300 leading-snug line-clamp-2">
                    {service.title}
                  </h3>

                  <p className="text-[#5A5045] dark:text-gray-400 text-[9px] sm:text-[11px] md:text-[13px] leading-relaxed font-light mb-3 sm:mb-5 md:mb-6 flex-grow line-clamp-2 md:line-clamp-3">
                    {service.description}
                  </p>

                  {/* Minimal View Link */}
                  <div className="pt-2.5 sm:pt-4 border-t border-[#C8A97E]/10 dark:border-white/5 mt-auto flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 sm:gap-2 text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C8A97E] transition-colors duration-300 relative group-hover:text-[#2A2520] dark:group-hover:text-white">
                      Discover
                      <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[#C8A97E]" strokeWidth={2} />
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-transparent group-hover:border-[#C8A97E]/30 pointer-events-none transition-colors duration-700 z-20" />
              </div>
            );
          })}
        </div>

        {/* ================= VIEW MORE / SHOW LESS BUTTON ================= */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex justify-center">
          <button
            onClick={() => setShowAllServices(!showAllServices)}
            className="group flex items-center gap-2 sm:gap-3 text-[#2A2520] dark:text-white hover:text-[#C8A97E] dark:hover:text-[#C8A97E] transition-colors duration-300 font-semibold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em]"
          >
            {showAllServices ? "View Less Services" : "View All Services"}
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-[#C8A97E]/50 flex items-center justify-center group-hover:bg-[#C8A97E] group-hover:border-[#C8A97E] transition-all duration-300">
              {showAllServices ? (
                <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              ) : (
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-[#C8A97E] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
              )}
            </div>
          </button>
        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="mt-12 sm:mt-16 md:mt-24 flex justify-center border-t border-[#C8A97E]/10 dark:border-white/5 pt-12 sm:pt-16">
          <Link
            href="/contact"
            className="group relative flex items-center justify-center gap-2.5 sm:gap-3 md:gap-4 bg-transparent border border-[#C8A97E]/50 px-6 sm:px-8 py-3.5 sm:py-4 md:px-12 md:py-5 overflow-hidden transition-all duration-500 rounded-none hover:border-[#C8A97E] shadow-[0_10px_30px_rgba(200,169,126,0.05)] w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-0 bg-[#C8A97E] transition-all duration-500 ease-out group-hover:w-full"></span>
            <div className="shine-effect"></div>
            <span className="relative z-10 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#2A2520] dark:text-white group-hover:text-[#2A2520] transition-colors duration-500">
              Book A Consultation
            </span>
            <CalendarHeart className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8A97E] group-hover:text-[#2A2520] transition-colors duration-500" strokeWidth={1.5} />
          </Link>
        </div>
        
      </div>

      {/* ================= FIXED RICH LUXURY MODAL (FIXED DESKTOP SCROLL & FULL MOBILE IMAGE) ================= */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
          
          {/* Overlay Background */}
          <div 
            className="absolute inset-0 bg-black/80 dark:bg-black/90 animate-overlay cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal Container: Height fixed to 90vh on Desktop, Full screen on Mobile */}
          <div className="animate-modal w-full md:w-[96vw] max-w-[1600px] h-[100dvh] md:h-[90vh] bg-white dark:bg-[#0c0c0c] rounded-none md:rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row">
            
            {/* FIXED Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute z-[110] top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-black/50 md:bg-gray-100/90 dark:bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#C8A97E] hover:text-white transition-all duration-300 group shadow-lg border border-white/20"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white md:text-[#2A2520] dark:text-white group-hover:text-white transition-colors" strokeWidth={1.5} />
            </button>

            {/* Mobile: Scrollable Parent Wrapper | Desktop: Hidden Overflow Flex Container */}
            <div className="w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden modal-scroll relative">
              
              {/* Left Image Section */}
              {/* Mobile: Takes full 100vh height | Desktop: Stays fixed full height of 90vh container */}
              <div className="relative w-full h-[100dvh] md:h-full md:w-[45%] lg:w-[40%] shrink-0 bg-[#FAF7F2] dark:bg-[#111]">
                <Image 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  fill 
                  className="object-cover object-top"
                />
                
                {/* Mobile Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:hidden" />
                
                {/* Minimal Desktop Fade to merge with content */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white dark:to-[#0c0c0c]" />
                
                {/* Mobile overlay text */}
                <div className="absolute bottom-16 left-6 md:hidden z-10 w-[85%] pr-4">
                  <h2 className="font-playfair text-3xl text-white font-medium drop-shadow-lg leading-tight">
                    {selectedService.title}
                  </h2>
                </div>

                {/* Mobile Scroll Indicator (Tells user to scroll down) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden animate-bounce z-10 flex flex-col items-center">
                   <ChevronDown className="w-6 h-6 text-white/70" strokeWidth={2} />
                </div>
              </div>

              {/* Right Content Section */}
              {/* Desktop: Independently Scrollable Area */}
              <div className="w-full md:w-[55%] lg:w-[60%] h-auto md:h-full md:overflow-y-auto modal-scroll p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col bg-white dark:bg-[#0c0c0c]">
                
                {/* Desktop Header with Typewriter Effect */}
                <div className="hidden md:block stagger-1">
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <selectedService.icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#C8A97E]" strokeWidth={1.5} />
                      <span className="text-[#C8A97E] uppercase tracking-[0.2em] text-[10px] lg:text-xs font-semibold">Glam Professionals</span>
                    </div>
                  </div>
                  
                  {/* Typewriter Heading */}
                  <h2 className="font-playfair text-3xl lg:text-4xl xl:text-5xl font-medium text-[#2A2520] dark:text-white mb-4 lg:mb-6 leading-[1.1] min-h-[1.2em]">
                    {typedTitle}
                    <span className="inline-block w-[2px] h-[0.9em] bg-[#C8A97E] ml-1 md:ml-2 animate-pulse align-middle"></span>
                  </h2>
                  
                  <div className="w-12 lg:w-16 h-[2px] bg-[#C8A97E] mb-8 lg:mb-10"></div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 md:mb-10 lg:mb-12 stagger-2 mt-2 md:mt-0">
                  <div className="flex items-start gap-3 md:gap-4 bg-[#FAF7F2] dark:bg-[#111] p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-[#C8A97E]/10 shadow-sm">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#C8A97E] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#5A5045] dark:text-gray-500 font-semibold mb-1">Time Required</p>
                      <p className="text-xs sm:text-sm lg:text-base text-[#2A2520] dark:text-white font-medium">{selectedService.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4 bg-[#FAF7F2] dark:bg-[#111] p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-[#C8A97E]/10 shadow-sm">
                    <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#C8A97E] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#5A5045] dark:text-gray-500 font-semibold mb-1">Ideal For</p>
                      <p className="text-xs sm:text-sm lg:text-base text-[#2A2520] dark:text-white font-medium">{selectedService.idealFor}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#5A5045] dark:text-gray-400 text-xs sm:text-sm md:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed font-light mb-8 md:mb-10 lg:mb-12 stagger-3">
                  {selectedService.details}
                </p>

                {/* What's Included */}
                <div className="mb-8 md:mb-10 stagger-4">
                  <h4 className="font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#2A2520] dark:text-white mb-4 sm:mb-5 lg:mb-6 italic">The Experience Includes:</h4>
                  <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                    {selectedService.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C8A97E] shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5A5045] dark:text-gray-300 tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-auto pt-6 sm:pt-8 border-t border-[#C8A97E]/10 dark:border-white/5 pb-8 md:pb-0">
                  <Link
                    href="/contact"
                    className="group relative flex items-center justify-center gap-3 sm:gap-4 w-full md:w-max bg-[#2A2520] dark:bg-white text-white dark:text-black px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 overflow-hidden transition-all duration-500 rounded-lg stagger-4 shadow-lg hover:shadow-[#C8A97E]/20"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#C8A97E] to-[#D4B58A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"></span>
                    <span className="relative z-10 text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.2em] font-semibold group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                      Reserve This Service
                    </span>
                    <CalendarHeart className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C8A97E] dark:text-black group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}