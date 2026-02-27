'use client';

import { motion } from 'motion/react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    q: "Funciona em qualquer dispositivo?",
    a: "Sim, funciona para celular, tablet, ipad e computador. Independente se for IOS ou Android."
  },
  {
    q: "Onde baixo o app?",
    a: "O App funciona via navegador, ensinamos a criar um atalho para funcionar como um aplicativo na tela inicial do seu celular e desktop."
  },
  {
    q: "Por onde recebo o acesso?",
    a: "Você irá receber diretamente pelo Whatsapp e por e-mail."
  },
  {
    q: "Tenho suporte?",
    a: "Com certeza! Você terá suporte com 2 tatuadores! Nosso suporte é muito bem avaliado por todos nossos clientes."
  }
];

const testimonials = [
  "https://orientetattoo.app/wp-content/uploads/2026/02/Design-sem-nome-5.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/Design-sem-nome-6.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/Design-sem-nome-8.png",
  "https://orientetattoo.app/wp-content/uploads/2026/02/Design-sem-nome-7.png"
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 lg:py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12"
            >
              Dúvidas Frequentes:
            </motion.h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/30"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.q}</span>
                    {openIndex === index ? <Minus className="w-5 h-5 text-[#F10023]" /> : <Plus className="w-5 h-5 text-zinc-500" />}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6 text-zinc-400 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold mb-1">Ainda tem dúvidas?</h3>
                <p className="text-zinc-400 mb-4">Nos chame no WhatsApp e fale com um especialista.</p>
                <a 
                  href="https://wa.me/5566999191380" 
                  target="_blank" 
                  className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center lg:text-left"
            >
              Quem adquiriu aprovou! 😎
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
                >
                  <Image
                    src={img}
                    alt={`Depoimento ${index}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
