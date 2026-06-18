"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageLightbox({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-4">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300"
      >
        <ChevronLeft className="w-7 h-7 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300"
      >
        <ChevronRight className="w-7 h-7 text-white" />
      </button>

      {/* Main Image */}
      <div className="relative w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={images[selectedIndex]}
          alt="Gallery Preview"
          fill
          className="object-contain"
        />
      </div>

      {/* Bottom Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-xl">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  );
}