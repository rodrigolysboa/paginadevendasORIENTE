'use client';

import { motion } from 'motion/react';
import { Check, Rocket, Zap, Crown } from 'lucide-react';

const plans = [
  {
    id: 'monthly',
    name: "Plano Mensal",
    duration: "30 Dias",
    oldPrice: "59,90",
    price: "49,90",
    period: "Mês",
    desc: "Com apenas uma tatuagem minimalista você já paga a ferramenta!",
    features: [
      "Geração de imagens ilimitadas",
      "Vídeo Aula Inclusos",
      "Suporte pelo Whatsapp",
      "Acesso Imediato"
    ],
    icon: Zap,
    link: "https://orientetattoo.app/checkout/?add-to-cart=16586"
  },
  {
    id: 'quarterly',
    name: "Plano Trimestral",
    duration: "90 Dias",
    oldPrice: "167,90",
    price: "139,90",
    period: "Trimestre",
    desc: "Três meses de uso com 1 bônus incluso! 🎁",
    features: [
      "Geração de imagens ilimitadas",
      "Vídeo Aula Inclusos",
      "Suporte pelo Whatsapp",
      "Acesso Imediato",
      "Bônus 1: Pack com 200 Tatuagens prontas"
    ],
    icon: Rocket,
    popular: true,
    link: "https://orientetattoo.app/checkout/?add-to-cart=17006"
  },
  {
    id: 'annual',
    name: "Plano Anual",
    duration: "365 Dias",
    oldPrice: "659,90",
    price: "549,90",
    period: "Ano",
    desc: "1 ano inteiro de uso com 2 bônus inclusos! 🎁",
    features: [
      "Geração de imagens ilimitadas",
      "Vídeo Aula Inclusos",
      "Suporte pelo Whatsapp",
      "Acesso Imediato",
      "Bônus 1: Pack com 200 Tatuagens prontas",
      "Bônus 2: Planilha profissional de gerenciamento"
    ],
    icon: Crown,
    link: "https://orientetattoo.app/checkout/?add-to-cart=16966"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 lg:py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-[#F10023]/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Rocket className="w-8 h-8 text-[#F10023]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Qual plano ficaria melhor para você?
          </motion.h2>
          <p className="text-zinc-400">Temos 3 planos disponíveis para o seu estúdio: ⬇️</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-500 flex flex-col ${
                plan.popular 
                ? 'bg-zinc-900 border-[#F10023] shadow-[0_0_40px_rgba(241,0,35,0.15)] scale-105 z-10' 
                : 'bg-zinc-900/50 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F10023] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-[#F10023]' : 'text-zinc-400'}`} />
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-zinc-500 text-sm mb-6">{plan.duration}</p>
                
                <div className="flex flex-col">
                  <span className="text-zinc-500 line-through text-sm">De R${plan.oldPrice}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold">R$</span>
                    <span className="text-5xl font-black">{plan.price.split(',')[0]}</span>
                    <span className="text-xl font-bold">,{plan.price.split(',')[1]}</span>
                    <span className="text-zinc-500 text-sm ml-1">/ {plan.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 text-sm mb-8 leading-relaxed italic">
                &quot;{plan.desc}&quot;
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-zinc-400">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular
                  ? 'bg-[#F10023] hover:bg-[#d1001e] text-white shadow-lg shadow-[#F10023]/20'
                  : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                Adquirir Agora!
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-zinc-900/50 border border-white/5"
        >
          <p className="text-zinc-400 text-sm">
            <span className="text-white font-bold">🔔 Planos sem renovação automática:</span> Após o término, o acesso não renova sozinho. Fique tranquilo: você receberá um lembrete por e-mail e WhatsApp antes do vencimento. 📩💬
          </p>
        </motion.div>
      </div>
    </section>
  );
}
