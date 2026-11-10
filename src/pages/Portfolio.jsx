import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolio = [
    { id: 1, title: "Nexus E-Commerce", category: "Shopify Store", link: "/project/nexus", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A full-fledged e-commerce store built for a clothing brand." },
    { id: 2, title: "Aura Tech Landing", category: "Web Design", link: "/project/aura", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A high-converting SaaS landing page built with Next.js." },
    { id: 3, title: "FinDash Dashboard", category: "App Dev", link: "/project/findash", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A custom financial dashboard built for a fintech startup." }
  ];

  const filteredPortfolio = filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">Recent Work</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Our <span className="text-brandCyan">Portfolio</span></h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Web Design', 'Shopify Store', 'App Dev'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${filter === f ? 'bg-brandCyan text-brandDark' : 'bg-[#112240] text-gray-300 border border-gray-700 hover:border-brandCyan'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, i) => (
            <motion.div key={i} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setSelectedProject(item)} className="group relative rounded-2xl overflow-hidden border border-gray-800 cursor-pointer bg-[#112240]">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brandCyan/90 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center text-brandDark font-bold">View Details</div>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <span className="text-brandCyan text-xs font-bold uppercase mb-2 block">{item.category}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-[#112240] border border-brandCyan/30 rounded-2xl max-w-3xl w-full overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-brandCyan hover:text-brandDark z-10"><FiX size={24} /></button>
              <img src={selectedProject.img} className="w-full h-72 object-cover" />
              <div className="p-8">
                <span className="text-brandCyan font-bold uppercase text-sm block mb-2">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-8">{selectedProject.desc}</p>
                <Link to={selectedProject.link} className="bg-white text-brandDark font-bold px-6 py-3 rounded-lg hover:bg-gray-200 inline-flex items-center gap-2">View Live Project <FiArrowRight /></Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}