'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 bg-black text-zinc-500 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="relative w-32 h-32 mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src="https://orientetattoo.app/wp-content/uploads/2026/01/Copia-de-OrienteTattoo.App-8-1.png"
              alt="OrienteTattoo.App Logo Footer"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-sm leading-relaxed mb-8">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="/elementor-template.json" download="orientetattoo-elementor.json" className="text-[#F10023] hover:underline transition-colors">Baixar JSON Elementor</a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 w-full text-[10px] uppercase tracking-tighter">
            © {new Date().getFullYear()} OrienteTattoo.App - Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
