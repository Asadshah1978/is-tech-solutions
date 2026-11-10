import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Pricing() {
  const pricing = [
    { name: "Starter", price: "$299", features: ["1-3 Page Website", "Mobile Responsive", "Basic SEO", "3 Days Delivery"], popular: false },
    { name: "Business", price: "$599", features: ["Up to 7 Pages", "E-commerce / CMS Setup", "Advanced SEO", "1 Week Delivery", "1 Month Support"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Custom Web App", "Advanced Integrations", "Priority Support", "Dedicated Manager"], popular: false },
  ];

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brandCyan font-semibold tracking-widest uppercase text-sm mb-2 block">Pricing Plans</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Simple & Transparent <span className="text-brandCyan">Pricing</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-3xl border ${plan.popular ? 'border-brandCyan bg-[#112240] shadow-[0_0_30px_rgba(0,229,255,0.15)] md:-translate-y-4' : 'border-gray-800 bg-[#0d1b30]'}`}>
              {plan.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brandCyan text-brandDark text-xs font-bold px-4 py-1.5 rounded-full uppercase">Most Popular</span>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-5xl font-extrabold mb-8">{plan.price}<span className="text-lg text-gray-400 font-normal">/project</span></div>
              <ul className="space-y-4 mb-8">{plan.features.map((f, j) => (<li key={j} className="flex items-start gap-3 text-sm text-gray-300"><FiCheckCircle className="text-brandCyan shrink-0" size={18} /> {f}</li>))}</ul>
              <Link to="/contact" className={`block text-center w-full py-4 rounded-xl font-bold ${plan.popular ? 'bg-brandCyan text-brandDark hover:bg-cyan-400' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}