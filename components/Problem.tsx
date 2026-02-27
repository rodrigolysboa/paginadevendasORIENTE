'use client';

import { motion } from 'motion/react';
import { AlertCircle, XCircle } from 'lucide-react';
import Image from 'next/image';

const problems = [
  "Cliente manda foto ruim, torta ou com péssima qualidade",
  "Tatuagem está no braço ou perna, toda deformada",
  "Parte do desenho está cortada ou escondida",
  "Cliente manda print de internet com baixa qualidade",
  "Lettering fica torto, borrado ou ilegível",
  "Você precisa “imaginar” partes do desenho porque não dá pra ver tudo"
];

export default function Problem() {
  return (
    <section className="py-12 lg:py-20 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-2 text-[#F10023] mb-4 font-bold uppercase tracking-widest text-sm">
              <XCircle className="w-5 h-5" />
              O Problema Real
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Todo tatuador já <br />
              <span className="text-zinc-500 italic">passou por isso:</span>
            </h2>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F10023] shrink-0" />
                  <span className="text-lg">{problem}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-xl font-medium text-zinc-200">
                👉 Tudo isso consome <span className="text-[#F10023]">tempo, paciência e dinheiro.</span> 💸
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://orientetattoo.app/wp-content/uploads/2026/01/Captura-de-tela-2026-01-20-192752.png"
                alt="Problemas comuns de tatuadores"
                width={755}
                height={425}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#F10023]/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F10023]/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
