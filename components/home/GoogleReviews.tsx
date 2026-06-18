"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

const cinematicEase = [0.16, 1, 0.3, 1];

export default function GoogleReviews() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-24 md:py-36">

      {/* Ambient Luxury Glow */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C8A97E]/15 blur-[140px]" />

      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8DCCB]/60 blur-[140px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">

        {/* Top Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: cinematicEase,
          }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A97E]/30 bg-white/70 px-6 py-3 backdrop-blur-xl shadow-[0_10px_40px_rgba(200,169,126,0.12)]">

            <Crown className="h-4 w-4 text-[#C8A97E]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#C8A97E]">
              Client Testimonials
            </span>

          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: cinematicEase,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <h2 className="font-serif text-5xl leading-tight text-[#2A2520] md:text-7xl">
            Loved By
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] via-[#D4B58A] to-[#C8A97E]">
              Beautiful Souls
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#5A5045] md:text-lg">
            Every review reflects trust, elegance, artistry and unforgettable beauty experiences crafted with passion.
          </p>

        </motion.div>

        {/* Decorative Sparkles */}
        <div className="relative mt-16">

          <Sparkles className="absolute -left-2 top-0 h-6 w-6 text-[#C8A97E]/40" />

          <Sparkles className="absolute right-0 top-10 h-5 w-5 text-[#C8A97E]/30" />

          {/* Luxury Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: cinematicEase,
            }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden rounded-[2.5rem]
              border border-white/60
              bg-white/50
              backdrop-blur-3xl
              p-6 md:p-10
              shadow-[0_30px_100px_rgba(200,169,126,0.12)]
            "
          >

            {/* Inner Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />

            {/* Rotating Luxury Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -top-[200px]
                -right-[200px]
                h-[500px]
                w-[500px]
                rounded-full
                border border-dashed border-[#C8A97E]/20
              "
            />

            {/* Google Reviews Widget */}
            <div
              className="elfsight-app-8c159a0b-603a-4b30-8345-d3d9b7c808d7 relative z-10"
              data-elfsight-app-lazy
            ></div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}