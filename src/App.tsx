/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 19 minutes = 19 * 60 * 1000 = 1,140,000 ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1140000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center py-8 px-0 md:px-4">
      {/* Header Section */}
      <header className="w-full max-w-[360px] md:max-w-none text-center mb-8 space-y-2 md:space-y-4 mx-auto px-4 md:px-0">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-5xl lg:text-6xl font-bold leading-tight px-2 md:px-4"
        >
          ¡El Cántico Angelical que Liberó a MILES Está a Su Alcance!
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-4xl lg:text-5xl font-bold text-yellow-400 px-2 md:px-4"
        >
          (Escuche lo que su Ángel quiere revelarle HOY)
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-red-600 text-[10px] md:text-xl lg:text-2xl italic font-medium px-2 md:px-4"
        >
          *¡Escuche este mensagem de los Ángeles destinado a USTED! Antes de que la página sea retirada del aire.*
        </motion.p>
      </header>

      {/* Video Section */}
      <main className="w-full md:max-w-md flex flex-col items-center space-y-6">
        <div className="relative w-full aspect-[9/16] bg-zinc-900 md:rounded-lg overflow-hidden shadow-2xl md:border md:border-zinc-800">
          {/* Main Video Placeholder */}
          <img 
            src="https://picsum.photos/seed/angel/1080/1920" 
            alt="Angelical Message" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {/* Play Button Icon */}
            <div className="mb-8 p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Play className="w-12 h-12 fill-white text-white" />
            </div>
          </div>

          {/* Video Progress Bar (Visual only) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
            <div className="h-full bg-blue-500 w-1/3"></div>
          </div>
        </div>

        {/* CTA Button Below Video */}
        <div className="w-full px-4 md:px-0 min-h-[80px]">
          <AnimatePresence>
            {isVisible && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00b33c] hover:bg-[#00cc44] text-white font-bold py-5 px-4 rounded-xl text-xl md:text-2xl shadow-[0_10px_20px_rgba(0,179,60,0.3)] transition-all duration-200 uppercase tracking-tight"
              >
                ¡Yo quiero el Codificador Angelical!
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </main>


    </div>
  );
}
