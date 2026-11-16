import { FiMonitor, FiShoppingCart, FiCode, FiTool, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Services() {
  const services = [
    { icon: <FiMonitor size={32}/>, title: 'Website Design', desc: 'We design modern, mobile-friendly websites that look great and convert visitors into customers.' },
    { icon: <FiShoppingCart size={32}/>, title: 'E-commerce Stores', desc: 'Shopify and custom online stores built to sell — from product pages to secure checkout.' },
    { icon: <FiCode size={32}/>, title: 'Custom Development', desc: 'React, Next.js, WordPress, and custom-built solutions tailored to your business needs.' },
    { icon: <FiTool size={32}/>, title: 'Maintenance & Support', desc: 'Updates, security patches, backups, and ongoing support to keep your website running smoothly.' },
  ];

  const faqs = [
    { q: "How long does it take to build a website?", a: "A standard business website takes 1-2 weeks. Complex e-commerce stores or custom web apps can take 3-6 weeks depending on the features." },
    { q: "Do you provide maintenance after launch?", a: "Yes! We provide 1 month of free support with all our plans. After that, you can choose a monthly maintenance package." },
    { q: "What is your payment structure?", a: "We require 50% advance to start the project, and the remaining 50% upon completion and approval before the final launch." },
  ];

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our <span className="text-brandCyan">Services</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-[#112240] p-10 rounded-3xl border border-gray-800 hover:border-brandCyan/50 transition-all">
              <div className="text-brandCyan mb-6 bg-brandDark w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-800">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked <span className="text-brandCyan">Questions</span></h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#112240] border border-gray-800 rounded-2xl p-6 cursor-pointer hover:border-brandCyan/30">
                <summary className="flex items-center justify-between font-bold text-lg [&_summary::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="transition group-open:rotate-180"><FiChevronDown size={20} /></span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}