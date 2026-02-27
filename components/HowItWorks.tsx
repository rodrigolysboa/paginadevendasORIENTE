'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useState } from 'react';

const carouselImages = [
  "https://orientetattoo.app/wp-content/uploads/2026/02/12.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/1.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/logos-tattoos-20-2.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/13.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/2.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/3.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/4.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/8.png"
];

export default function HowItWorks() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-12 lg:py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl mb-2"
          >
            ⬇️
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold mb-4"
          >
            Veja na prática como funciona:
          </motion.h2>
        </div>

        {/* Video Placeholder / Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 relative group w-full"
        >
          <div className="aspect-video rounded-2xl lg:rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 relative shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/so4wcTd31iM" 
              title="OrienteTattooApp Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="max-w-7xl mx-auto mb-16 w-full">
          <h3 className="text-xl lg:text-2xl font-bold text-center mb-6">Arraste para ver a diferença:</h3>
          <div 
            className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                setSliderPos(Math.min(Math.max(x, 0), 100));
              }
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.targetTouches[0];
              const x = ((touch.clientX - rect.left) / rect.width) * 100;
              setSliderPos(Math.min(Math.max(x, 0), 100));
            }}
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <Image
                src="https://orientetattoo.app/wp-content/uploads/2026/02/decalque-12.png"
                alt="Depois"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] lg:text-xs font-bold uppercase tracking-widest">Depois</div>
            </div>
            
            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src="https://orientetattoo.app/wp-content/uploads/2026/02/Daenerys-Targaryen.jpg"
                alt="Antes"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] lg:text-xs font-bold uppercase tracking-widest">Antes</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="flex gap-1">
                  <div className="w-0.5 lg:w-1 h-3 lg:h-4 bg-zinc-300 rounded-full" />
                  <div className="w-0.5 lg:w-1 h-3 lg:h-4 bg-zinc-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative overflow-hidden py-6">
          <div className="flex gap-4 lg:gap-6 animate-marquee whitespace-nowrap">
            {[...carouselImages, ...carouselImages].map((img, index) => (
              <div key={index} className="relative w-56 h-56 lg:w-64 lg:h-64 shrink-0 rounded-xl lg:rounded-2xl overflow-hidden border border-white/5">
                <Image
                  src={img}
                  alt={`Exemplo ${index}`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        </div>
        
        <p className="text-center mt-6 text-zinc-400 font-medium text-sm lg:text-base">
          Com apenas <span className="text-white font-bold">1 clique</span>, sem digitar nenhum comando! 🚀
        </p>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
