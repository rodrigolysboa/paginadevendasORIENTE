'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-12 lg:py-20 overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(241,0,35,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]"
          >
            Mais precisão. <br />
            <span className="text-[#F10023]">Mais rapidez.</span> <br />
            Mais Lucro.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-zinc-400 mb-6 max-w-2xl mx-auto lg:mx-0"
          >
            Transforme fotos de tatuagens em <span className="text-white font-semibold underline decoration-[#F10023]">decalques prontos</span> para imprimir em segundos com apenas 1 clique!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-[#F10023] hover:bg-[#d1001e] text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Ver Planos Disponíveis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative order-1 lg:order-2 w-full"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <span className="text-[#F10023] font-bold">🏷️ -20% OFF</span> em qualquer plano
            </motion.div>
          </div>
          <div className="relative w-full aspect-square max-w-[380px] sm:max-w-[450px] lg:max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-[#F10023] rounded-full blur-[60px] lg:blur-[80px] opacity-20 animate-pulse" />
            <Image
              src="https://orientetattoo.app/wp-content/uploads/2026/01/Copia-de-OrienteTattoo.App-9.png"
              alt="OrienteTattoo.App Logo"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(241,0,35,0.2)] lg:drop-shadow-[0_0_30px_rgba(241,0,35,0.2)]"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
