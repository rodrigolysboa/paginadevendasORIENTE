'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell } from 'lucide-react';

const names = [
  "Kaique Silva", "Jeferson Santos", "Vinicius Oliveira", "Gustavo Mello",
  "Wesley Almeida", "Matheus Rocha", "Jardel Godoy", "Leonardo Souza",
  "João Victor", "Felipe Andrade", "Thiago Ribeiro", "Henrique Filho",
  "Eduardo Dallastra", "Júlia Azevedo", "Bianca Menezes", "Camila Furtado",
  "Jhony Brandão", "Hanna Barbosa"
];

export default function SaleNotification() {
  const [currentName, setCurrentName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setIsVisible(true);
      
      // Play sound if possible (browsers might block)
      const audio = new Audio('https://orientetattoo.app/wp-content/uploads/2026/02/hector-bell.mp3');
      audio.play().catch(() => {});

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showNotification, 10000);
    
    // Interval for subsequent notifications
    const interval = setInterval(showNotification, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-[100] bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
            <Bell className="w-5 h-5 text-white animate-bounce" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">
              {currentName}
            </p>
            <p className="text-xs text-zinc-400">
              Acabou de adquirir o acesso! 🔔
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
