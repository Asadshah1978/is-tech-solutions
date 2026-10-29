import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Logo from './Logo'; // <-- Import karein

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      className="fixed inset-0 bg-brandDark flex flex-col items-center justify-center z-[999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        {/* LOGO ADD KIYA GAYA HAI */}
        <Logo className="w-24 h-24 mb-6 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">
          <span className="text-brandCyan">IS</span> Tech Solutions
        </h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
          className="text-brandCyan tracking-widest uppercase text-sm mt-4 font-semibold"
        >
          Innovative Solutions
        </motion.p>
      </motion.div>
    </motion.div>
  );
}