import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaReact, FaWordpress, FaShopify, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase } from 'react-icons/si';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-brandDark text-white font-sans relative overflow-hidden">
      <Navbar />

      <section className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brandCyan/15 via-brandDark to-brandDark -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto mt-10">
          <span className="inline-block py-1 px-3 rounded-full bg-brandCyan/10 border border-brandCyan/30 text-brandCyan text-xs font-semibold tracking-widest uppercase mb-6">Innovative Solutions Agency in Karachi</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandCyan to-blue-500">Digital Experiences</span> That Perform.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">IS Tech Solutions specializes in modern web design, e-commerce, and custom software development. We turn your ideas into scalable reality.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link to="/portfolio" className="w-full sm:w-auto bg-brandCyan text-brandDark font-bold px-8 py-4 rounded-lg hover:bg-cyan-400 transition-transform hover:scale-105 flex items-center justify-center gap-2">View Our Work <FiArrowRight /></Link>
            <Link to="/contact" className="w-full sm:w-auto bg-transparent border border-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:border-brandCyan hover:text-brandCyan transition-colors">Start a Project</Link>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">Technologies We Master</p>
            <div className="flex flex-wrap justify-center gap-10 text-5xl text-gray-600">
              <FaReact className="hover:text-[#61DBFB] transition-colors" title="React" />
              <SiNextdotjs className="hover:text-white transition-colors" title="Next.js" />
              <FaWordpress className="hover:text-[#21759b] transition-colors" title="WordPress" />
              <FaShopify className="hover:text-[#96bf48] transition-colors" title="Shopify" />
              <FaNodeJs className="hover:text-[#339933] transition-colors" title="Node.js" />
              <SiFirebase className="hover:text-[#FFCA28] transition-colors" title="Firebase" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}