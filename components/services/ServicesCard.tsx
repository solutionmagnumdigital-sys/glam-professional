"use client";

import Link from "next/link";
import {
  Sparkles,
  Crown,
  Star,
  Gem,
  ArrowUpRight,
  CheckCircle2,
  Brush,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#050505] flex items-center pt-32 pb-24">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        
        {/* Background Image */}
        <div
          className="
            absolute inset-0
            bg-[url('/images/services/services-hero.jpg')]
            bg-cover bg-center
            opacity-20
            scale-105
          "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Luxury Glow */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-orange-500/15 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-pink-500/15 blur-[180px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Luxury Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.04]
            bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* ================= LEFT ================= */}
          <div>
            
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-3
                rounded-full
                border border-orange-400/20
                bg-white/5
                backdrop-blur-xl
                px-6 py-3
                shadow-[0_0_30px_rgba(255,115,0,0.12)]
              "
            >
              <Sparkles className="w-5 h-5 text-orange-400" />

              <span className="text-sm md:text-base font-semibold tracking-[2px] uppercase text-orange-200">
                Luxury Makeup Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.02] text-white">
              Luxury Makeup
              <span className="block mt-3 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                Designed For
              </span>

              <span className="block mt-3">
                Timeless Beauty
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Discover ultra-premium bridal makeup, HD glam transformations,
              engagement beauty looks, luxury hairstyling, and flawless beauty
              experiences crafted for modern elegant women.
            </p>

            {/* Features */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              
              {[
                "Luxury Bridal Makeup",
                "HD & Airbrush Glam",
                "Premium Hair Styling",
                "Destination Wedding Services",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-4
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    px-5 py-4
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      w-11 h-11 rounded-xl
                      bg-gradient-to-r from-orange-500 to-pink-500
                      shadow-[0_10px_30px_rgba(255,115,0,0.25)]
                    "
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>

                  <span className="text-white font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              
              {/* Primary */}
              <Link
                href="/contact"
                className="
                  group relative overflow-hidden
                  rounded-full
                  px-9 py-5
                  bg-gradient-to-r from-orange-500 to-pink-500
                  text-white font-bold text-lg
                  shadow-[0_20px_50px_rgba(255,115,0,0.35)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book Luxury Makeup
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>

              {/* Secondary */}
              <Link
                href="/bridal-portfolio"
                className="
                  flex items-center justify-center gap-3
                  rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-xl
                  px-9 py-5
                  text-white font-bold text-lg
                  hover:bg-white/[0.08]
                  transition-all duration-300
                "
              >
                View Portfolio
              </Link>
            </div>

            {/* Bottom Stats */}
            <div className="mt-14 flex flex-wrap gap-6">
              
              {[
                {
                  number: "500+",
                  label: "Luxury Brides",
                },
                {
                  number: "8+",
                  label: "Years Experience",
                },
                {
                  number: "100%",
                  label: "Premium Products",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-[28px]
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    px-7 py-5
                    min-w-[170px]
                  "
                >
                  <h3 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-gray-400 font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">
            
            {/* Main Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[42px]
                border border-white/10
                bg-white/[0.05]
                backdrop-blur-2xl
                p-8 md:p-10
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
              "
            >
              
              {/* Main Image */}
              <div
                className="
                  relative overflow-hidden
                  rounded-[36px]
                  h-[550px]
                "
              >
                <div
                  className="
                    absolute inset-0
                    bg-[url('/images/services/service-main.jpg')]
                    bg-cover bg-center
                    transition-transform duration-700
                    hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating Badge */}
                <div
                  className="
                    absolute top-6 left-6
                    flex items-center gap-3
                    rounded-full
                    bg-black/40
                    backdrop-blur-xl
                    border border-white/10
                    px-5 py-3
                  "
                >
                  <Crown className="w-5 h-5 text-orange-400" />

                  <span className="text-white font-semibold">
                    Signature Bridal Glam
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  
                  <div className="flex items-center gap-4">
                    
                    <div
                      className="
                        flex items-center justify-center
                        w-16 h-16 rounded-3xl
                        bg-gradient-to-r from-orange-500 to-pink-500
                        shadow-[0_15px_40px_rgba(255,115,0,0.35)]
                      "
                    >
                      <Brush className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-white">
                        Bridal Perfection
                      </h3>

                      <p className="mt-1 text-gray-300">
                        Luxury Beauty Transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Cards */}
              <div
                className="
                  absolute -left-10 top-20
                  hidden xl:flex
                  items-center gap-4
                  rounded-[28px]
                  border border-white/10
                  bg-black/50
                  backdrop-blur-2xl
                  px-6 py-5
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                "
              >
                <div
                  className="
                    flex items-center justify-center
                    w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-orange-500 to-pink-500
                  "
                >
                  <Gem className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    Premium Products
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Luxury International Brands
                  </p>
                </div>
              </div>

              <div
                className="
                  absolute -right-10 bottom-24
                  hidden xl:flex
                  items-center gap-4
                  rounded-[28px]
                  border border-white/10
                  bg-black/50
                  backdrop-blur-2xl
                  px-6 py-5
                  shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                "
              >
                <div
                  className="
                    flex items-center justify-center
                    w-14 h-14 rounded-2xl
                    bg-gradient-to-r from-orange-500 to-pink-500
                  "
                >
                  <Star className="w-7 h-7 text-white fill-white" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">
                    5 Star Experience
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Trusted By Luxury Brides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}