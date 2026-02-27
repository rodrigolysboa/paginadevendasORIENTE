'use client';

import { motion } from 'motion/react';
import { CheckCircle, Zap, ShieldCheck, Smartphone, MousePointer2, Layers } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    title: "Economiza horas de trabalho",
    desc: "Elimina a necessidade de redesenhar tatuagens manualmente ou ajustar imagens no Photoshop.",
    icon: Zap
  },
  {
    title: "Ideal para fotos ruins",
    desc: "Funciona mesmo com imagens desfocadas, mal iluminadas ou com ângulo ruim.",
    icon: Smartphone
  },
  {
    title: "Corrige deformações",
    desc: "Remove curvaturas causadas pelo corpo, transformando a tatuagem em um desenho plano.",
    icon: MousePointer2
  },
  {
    title: "Reconstrói partes escondidas",
    desc: "Completa áreas cortadas ou fora do enquadramento de forma fiel ao original.",
    icon: Layers
  }
];

export default function Solution() {
  return (
    <section className="py-12 lg:py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F10023] font-bold mb-2 uppercase tracking-widest"
          >
            OrienteTattoo.App
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold mb-4"
          >
            É A SUA SOLUÇÃO ✅
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base lg:text-lg max-w-2xl mx-auto"
          >
            Uma ferramenta feita <span className="text-white font-semibold">de tatuadores para tatuadores</span>. Mais agilidade, profissionalismo e tempo para tatuar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 group w-full"
          >
            <Image
              src="https://orientetattoo.app/wp-content/uploads/2026/02/Design-sem-nome-1.png"
              alt="OrienteTattoo App em uso"
              width={960}
              height={640}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#F10023]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F10023]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#F10023]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white text-black hover:bg-zinc-200 rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Quero conhecer os planos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
