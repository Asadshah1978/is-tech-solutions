import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

export default function AuraLanding() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden">
      <nav className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors">
            <FiArrowLeft /> Back to Agency
          </Link>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">AURA AI</h1>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg font-semibold transition-colors">Get Started</button>
        </div>
      </nav>

      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full -z-10"></div>
        <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20 mb-6 inline-block">Introducing Aura v2.0</span>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">Analyze your data <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">10x faster with AI.</span></h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Aura helps businesses automate their workflows and gain deep insights from their data using advanced machine learning models.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105">Start Free Trial</button>
          <button className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-bold transition-colors">Book a Demo</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <FiZap className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-slate-400">Process millions of data points in seconds with our optimized engine.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <FiShield className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
            <p className="text-slate-400">Your data is encrypted end-to-end. We are SOC2 Type II compliant.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
            <FiTrendingUp className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
            <p className="text-slate-400">Forecast future trends and make data-driven decisions confidently.</p>
          </div>
        </div>
      </div>
    </div>
  );
}