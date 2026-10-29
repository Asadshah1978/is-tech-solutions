import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMonitor, FiShoppingCart, FiCode, FiTool, FiInstagram, FiTwitter, FiLinkedin, FiArrowRight, FiCheckCircle, FiStar, FiX, FiMail, FiSend, FiChevronDown, FiChevronUp, FiMenu } from 'react-icons/fi';
import { FaWhatsapp, FaReact, FaWordpress, FaShopify, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import AuthModal from '../components/AuthModal';
import Logo from '../components/Logo';

export default function Home() {
  const { currentUser } = useAuth();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Modals State
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Form States
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [reviewData, setReviewData] = useState({ name: '', rating: 5, text: '' });
  const [reviews, setReviews] = useState([
    { name: "Sarah Khan", role: "CEO, Bloom Boutique", text: "IS Tech completely transformed our online store. Sales increased by 40% in the first month!", rating: 5 },
    { name: "Ali Raza", role: "Founder, TechNova", text: "The custom dashboard they built saves us hours of manual work every single day. Highly recommended.", rating: 5 },
    { name: "David Smith", role: "Marketing Head, GlobalCo", text: "Professional, fast, and highly creative. The best agency we've worked with in Karachi.", rating: 5 }
  ]);

  // Custom Cursor & Scroll Logic
  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false); // Mobile menu band karne ke liye
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to istechsolutions017@gmail.com!\n\nFrom: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`);
    setIsContactOpen(false);
    setContactData({ name: '', email: '', message: '' });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([{ name: reviewData.name, role: "Verified Client", text: reviewData.text, rating: reviewData.rating }, ...reviews]);
    setIsReviewOpen(false);
    setReviewData({ name: '', rating: 5, text: '' });
  };

  const services = [
    { icon: <FiMonitor size={28}/>, title: 'Website Design', desc: 'We design modern, mobile-friendly websites that look great and convert visitors into customers.' },
    { icon: <FiShoppingCart size={28}/>, title: 'E-commerce Stores', desc: 'Shopify and custom online stores built to sell — from product pages to secure checkout.' },
    { icon: <FiCode size={28}/>, title: 'Custom Development', desc: 'React, Next.js, WordPress, and custom-built solutions tailored to your business needs.' },
    { icon: <FiTool size={28}/>, title: 'Maintenance & Support', desc: 'Updates, security patches, backups, and ongoing support to keep your website running smoothly.' },
  ];

  const portfolio = [
    { id: 1, title: "Nexus E-Commerce", category: "Shopify Store", img: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A full-fledged e-commerce store built for a clothing brand. Features include custom checkout, inventory management, and a mobile-first design." },
    { id: 2, title: "Aura Tech Landing", category: "Next.js Website", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A high-converting SaaS landing page built with Next.js. Optimized for speed with a 95+ Lighthouse score and seamless animations." },
    { id: 3, title: "FinDash Dashboard", category: "React App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", desc: "A custom financial dashboard built for a fintech startup. Includes real-time data visualization, dark mode, and user authentication." }
  ];

  const pricing = [
    { name: "Starter", price: "$299", features: ["1-3 Page Website", "Mobile Responsive", "Basic SEO", "3 Days Delivery"], popular: false },
    { name: "Business", price: "$599", features: ["Up to 7 Pages", "E-commerce / CMS Setup", "Advanced SEO", "1 Week Delivery", "1 Month Support"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Custom Web App", "Advanced Integrations", "Priority Support", "Dedicated Manager"], popular: false },
  ];

  const faqs = [
    { q: "How long does it take to build a website?", a: "A standard business website takes 1-2 weeks. Complex e-commerce stores or custom web apps can take 3-6 weeks depending on the features." },
    { q: "Do you provide maintenance after launch?", a: "Yes! We provide 1 month of free support with all our plans. After that, you can choose a monthly maintenance package." },
    { q: "What is your payment structure?", a: "We require 50% advance to start the project, and the remaining 50% upon completion and approval before the final launch." },
  ];

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans selection:bg-brandCyan selection:text-brandDark overflow-x-hidden relative">
      
      {/* Custom Cursor */}
      <motion.div className="fixed top-0 left-0 w-4 h-4 bg-brandCyan rounded-full pointer-events-none z-[100] hidden md:block mix-blend-screen" animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }} transition={{ type: "spring", stiffness: 800, damping: 30, mass: 0.1 }} />
      <motion.div className="fixed top-0 left-0 w-8 h-8 border border-brandCyan/50 rounded-full pointer-events-none z-[100] hidden md:block" animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }} transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }} />

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-40 bg-brandDark/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity z-50">
            <Logo className="w-10 h-10" />
            <span><span className="text-brandCyan">IS</span> Tech Solutions</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <button onClick={() => scrollTo('home')} className="hover:text-brandCyan transition-colors">Home</button>
            <button onClick={() => scrollTo('services')} className="hover:text-brandCyan transition-colors">Services</button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-brandCyan transition-colors">Portfolio</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-brandCyan transition-colors">Pricing</button>
          </div>

          <div className="hidden md:block">
            {currentUser ? (
              <Link to="/dashboard" className="bg-brandCyan/10 border border-brandCyan text-brandCyan px-6 py-2 rounded-full text-sm font-semibold hover:bg-brandCyan hover:text-brandDark transition-all">Dashboard</Link>
            ) : (
              <button onClick={() => setIsAuthOpen(true)} className="bg-white text-brandDark px-6 py-2 rounded-full text-sm font-bold hover:bg-brandCyan transition-all">Client Login</button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl text-white z-50">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#112240] border-b border-gray-800 absolute w-full left-0 top-full">
              <div className="flex flex-col p-6 space-y-4">
                <button onClick={() => scrollTo('home')} className="text-left text-gray-300 hover:text-brandCyan">Home</button>
                <button onClick={() => scrollTo('services')} className="text-left text-gray-300 hover:text-brandCyan">Services</button>
                <button onClick={() => scrollTo('portfolio')} className="text-left text-gray-300 hover:text-brandCyan">Portfolio</button>
                <button onClick={() => scrollTo('pricing')} className="text-left text-gray-300 hover:text-brandCyan">Pricing</button>
                {currentUser ? (
                  <Link to="/dashboard" className="bg-brandCyan text-brandDark px-6 py-3 rounded-lg text-center font-bold">Dashboard</Link>
                ) : (
                  <button onClick={() => { setIsMobileMenuOpen(false); setIsAuthOpen(true); }} className="bg-brandCyan text-brandDark px-6 py-3 rounded-lg font-bold">Client Login</button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brandCyan/15 via-brandDark to-brandDark -z-10"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-brandCyan/10 border border-brandCyan/30 text-brandCyan text-xs font-semibold tracking-widest uppercase mb-6">Innovative Solutions Agency in Karachi</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandCyan to-blue-500">Digital Experiences</span> That Perform.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">IS Tech Solutions specializes in modern web design, e-commerce, and custom software development. We turn your ideas into scalable reality.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={() => scrollTo('portfolio')} className="w-full sm:w-auto bg-brandCyan text-brandDark font-bold px-8 py-4 rounded-lg hover:bg-cyan-400 transition-transform hover:scale-105 flex items-center justify-center gap-2">View Our Work <FiArrowRight /></button>
            <button onClick={() => setIsContactOpen(true)} className="w-full sm:w-auto bg-transparent border border-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:border-brandCyan hover:text-brandCyan transition-colors">Start a Project</button>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Technologies We Master</p>
            <div className="flex flex-wrap justify-center gap-8 text-4xl text-gray-600">
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

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-brandCyan">Services</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-[#112240] p-8 rounded-2xl border border-gray-800 hover:border-brandCyan/50 hover:bg-[#152a4a] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandCyan/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="text-brandCyan mb-6 bg-brandDark w-14 h-14 rounded-xl flex items-center justify-center border border-gray-800 group-hover:border-brandCyan/50 group-hover:scale-110 transition-all">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-[#0d1b30] border-y border-gray-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">Recent Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-brandCyan">Portfolio</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onClick={() => setSelectedProject(item)} className="group relative rounded-2xl overflow-hidden border border-gray-800 cursor-pointer shadow-lg hover:shadow-brandCyan/20 transition-all duration-300">
                <div className="absolute inset-0 bg-brandCyan/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-brandDark">
                  <span className="font-bold text-xl mb-3">{item.title}</span>
                  <span className="text-sm border-2 border-brandDark px-4 py-2 rounded-full font-bold">View Details</span>
                </div>
                <img src={item.img} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="p-6 bg-[#112240]"><span className="text-brandCyan text-xs font-bold tracking-wider uppercase mb-2 block">{item.category}</span><h3 className="text-xl font-bold text-white">{item.title}</h3></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brandCyan/5 blur-[120px] -z-10 rounded-full"></div>
        <div className="text-center mb-16">
          <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">Pricing Plans</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple & Transparent <span className="text-brandCyan">Pricing</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <div key={i} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-brandCyan bg-[#112240] shadow-[0_0_30px_rgba(0,229,255,0.15)] md:-translate-y-4' : 'border-gray-800 bg-[#0d1b30] hover:border-gray-600'} transition-all duration-300`}>
              {plan.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brandCyan text-brandDark text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">Most Popular</span>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-5xl font-extrabold mb-6">{plan.price}<span className="text-lg text-gray-400 font-normal">/project</span></div>
              <ul className="space-y-4 mb-8">{plan.features.map((f, j) => (<li key={j} className="flex items-start gap-3 text-sm text-gray-300"><FiCheckCircle className="text-brandCyan shrink-0 mt-0.5" size={18} /> {f}</li>))}</ul>
              <button onClick={() => setIsContactOpen(true)} className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brandCyan text-brandDark hover:bg-cyan-400 hover:scale-105' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="py-24 px-6 bg-[#0d1b30] border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our <span className="text-brandCyan">Clients Say</span></h2>
            <button onClick={() => setIsReviewOpen(true)} className="mt-4 bg-brandCyan/10 border border-brandCyan text-brandCyan px-6 py-2 rounded-full font-semibold hover:bg-brandCyan hover:text-brandDark transition-all flex items-center gap-2"><FiStar /> Leave a Review</button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((t, i) => (
              <div key={i} className="bg-[#112240] p-8 rounded-2xl border border-gray-800 relative group hover:border-brandCyan/30 transition-colors">
                <div className="absolute top-6 right-6 text-6xl text-brandCyan/10 font-serif leading-none">"</div>
                <div className="flex gap-1 text-yellow-400 mb-6">{[...Array(t.rating)].map((_, j) => <FiStar key={j} fill="currentColor" size={18} />)}</div>
                <p className="text-gray-300 mb-8 italic relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brandCyan/20 rounded-full flex items-center justify-center text-brandCyan font-bold text-xl">{t.name.charAt(0)}</div>
                  <div><h4 className="font-bold text-white">{t.name}</h4><p className="text-sm text-brandCyan">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">Got Questions?</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-brandCyan">Questions</span></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-[#112240] border border-gray-800 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-brandCyan/30 transition-colors">
              <summary className="flex items-center justify-between font-bold text-lg">
                {faq.q}
                <span className="transition group-open:rotate-180"><FiChevronDown size={20} /></span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-brandCyan">IS Tech Solutions</span></h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">IS Tech Solutions (Innovative Solutions) is a Karachi-based digital agency specializing in modern web design, e-commerce development, and custom software solutions. With a background in IoT and embedded systems, we bring a technical edge to every project — ensuring your website is not just beautiful, but built to perform.</p>
        <div className="flex flex-col items-center gap-6">
          <a href="mailto:istechsolutions017@gmail.com" className="flex items-center gap-3 text-xl font-semibold text-white hover:text-brandCyan transition-colors"><FiMail className="text-brandCyan" /> istechsolutions017@gmail.com</a>
          <button onClick={() => setIsContactOpen(true)} className="bg-brandCyan text-brandDark font-bold px-8 py-4 rounded-lg hover:bg-cyan-400 transition-transform hover:scale-105 flex items-center gap-2"><FiSend /> Message Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-800 text-gray-500">
        <div className="flex justify-center space-x-6 mb-6 text-2xl">
          <a href="#" className="hover:text-brandCyan transition-colors"><FiInstagram/></a>
          <a href="#" className="hover:text-brandCyan transition-colors"><FiTwitter/></a>
          <a href="#" className="hover:text-brandCyan transition-colors"><FiLinkedin/></a>
        </div>
        <p className="text-sm">© 2026 IS Tech Solutions. All rights reserved. Built with ❤️ in Pakistan.</p>
      </footer>

      {/* Floating Buttons: WhatsApp & Message & Scroll To Top */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-brandCyan hover:text-brandDark transition-all flex items-center justify-center" title="Back to Top">
              <FiChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        <button onClick={() => setIsContactOpen(true)} className="bg-brandCyan text-brandDark p-4 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-110 transition-all flex items-center justify-center" title="Message Us">
          <FiMail size={28} />
        </button>
        <a href="https://wa.me/923312694879" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all flex items-center justify-center" title="WhatsApp Us">
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* --- MODALS (POPUPS) --- */}

      {/* 1. Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#112240] border border-brandCyan/30 rounded-2xl max-w-3xl w-full overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-brandCyan hover:text-brandDark transition-colors z-10"><FiX size={24} /></button>
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-72 object-cover" />
              <div className="p-8">
                <span className="text-brandCyan text-sm font-bold tracking-wider uppercase mb-2 block">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.desc}</p>
                <button onClick={() => { setSelectedProject(null); setIsContactOpen(true); }} className="inline-block bg-brandCyan text-brandDark font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors">Build Something Like This</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Contact Form Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsContactOpen(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#112240] border border-brandCyan/30 rounded-2xl max-w-md w-full overflow-hidden relative p-8" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><FiX size={24} /></button>
              <h3 className="text-2xl font-bold mb-2 text-center">Send Us a Message</h3>
              <p className="text-gray-400 text-sm text-center mb-6">We will reply within 24 hours.</p>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" required value={contactData.name} onChange={(e) => setContactData({...contactData, name: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
                <input type="email" placeholder="Your Email" required value={contactData.email} onChange={(e) => setContactData({...contactData, email: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
                <textarea placeholder="Your Message" required rows="4" value={contactData.message} onChange={(e) => setContactData({...contactData, message: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-brandCyan text-brandDark font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"><FiSend /> Send Message</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Leave a Review Modal */}
      <AnimatePresence>
        {isReviewOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsReviewOpen(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#112240] border border-brandCyan/30 rounded-2xl max-w-md w-full overflow-hidden relative p-8" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsReviewOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><FiX size={24} /></button>
              <h3 className="text-2xl font-bold mb-2 text-center">Leave a Review</h3>
              <p className="text-gray-400 text-sm text-center mb-6">Your feedback helps us improve!</p>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" required value={reviewData.name} onChange={(e) => setReviewData({...reviewData, name: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm text-gray-400 mr-2">Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setReviewData({...reviewData, rating: star})} className={`text-2xl transition-colors ${reviewData.rating >= star ? 'text-yellow-400' : 'text-gray-600'}`}><FiStar fill={reviewData.rating >= star ? "currentColor" : "none"} /></button>
                  ))}
                </div>
                <textarea placeholder="Write your review..." required rows="3" value={reviewData.text} onChange={(e) => setReviewData({...reviewData, text: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-brandCyan text-brandDark font-bold py-3 rounded-lg hover:bg-cyan-400 transition-colors">Submit Review</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}