import { Link } from 'react-router-dom';
import { FiArrowLeft, FiTrendingUp, FiShield, FiZap, FiCheckCircle, FiArrowRight, FiActivity, FiPieChart, FiDatabase, FiCpu, FiStar } from 'react-icons/fi';

export default function AuraLanding() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 border-b border-slate-800/50 bg-[#0B0F19]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white font-medium transition-colors">
            <FiArrowLeft /> Back to Agency
          </Link>
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center gap-2">
            <FiCpu className="text-blue-400" /> AURA AI
          </div>
          <button className="bg-white text-black hover:bg-slate-200 px-5 py-2 rounded-lg font-bold transition-colors text-sm">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-cyan-400 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <FiZap size={14} /> Aura Engine v3.0 is now live
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            The AI engine for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
              modern data teams.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing. Aura connects to your database, analyzes millions of rows in seconds, and gives you actionable insights before your competition even wakes up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Start Free Trial <FiArrowRight />
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Logos (Badi Company ka feel dene ke liye) */}
      <section className="border-y border-slate-800/50 bg-[#0f1423] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Trusted by data teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale">
            <span className="text-xl font-bold flex items-center gap-2"><FiDatabase /> Acme Corp</span>
            <span className="text-xl font-bold flex items-center gap-2"><FiActivity /> GlobalTech</span>
            <span className="text-xl font-bold flex items-center gap-2"><FiPieChart /> FinScale</span>
            <span className="text-xl font-bold flex items-center gap-2"><FiTrendingUp /> Nexus</span>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Mockup */}
      <section className="px-6 py-20 max-w-6xl mx-auto relative perspective-1000">
        <div className="bg-[#111827] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden relative z-20">
          
          {/* Fake Window Header */}
          <div className="h-12 bg-[#0B0F19] flex items-center px-4 gap-2 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 bg-[#111827] text-xs text-slate-500 px-3 py-1 rounded-md border border-slate-800">app.aura.ai/dashboard</div>
          </div>
          
          {/* Fake Dashboard Content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1F2937] p-6 rounded-xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Total Revenue</p>
              <h3 className="text-3xl font-bold text-white">$2,847,300</h3>
              <p className="text-green-400 text-sm mt-2 flex items-center gap-1"><FiTrendingUp /> +24.5% this month</p>
            </div>
            <div className="bg-[#1F2937] p-6 rounded-xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">AI Queries Processed</p>
              <h3 className="text-3xl font-bold text-white">14.2M</h3>
              <p className="text-cyan-400 text-sm mt-2">99.99% uptime</p>
            </div>
            <div className="bg-[#1F2937] p-6 rounded-xl border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Active Data Sources</p>
              <h3 className="text-3xl font-bold text-white">42</h3>
              <p className="text-blue-400 text-sm mt-2">Synced 2 min ago</p>
            </div>
            
            {/* Fake Chart Area */}
            <div className="col-span-1 md:col-span-3 bg-[#1F2937] p-6 rounded-xl border border-slate-700 h-64 flex flex-col justify-end">
              <div className="flex items-end gap-2 h-full pb-4">
                {[40, 70, 45, 90, 65, 85, 100, 75, 50, 95, 80, 60].map((height, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your entire data stack, <br/>supercharged by AI.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We built Aura because traditional BI tools are too slow for the modern web. Get real-time answers instantly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FiZap />, title: "Instant Sync", desc: "Connects to Postgres, MySQL, and MongoDB in under 60 seconds. No ETL required." },
              { icon: <FiCpu />, title: "Generative AI", desc: "Ask questions in plain English. Aura writes the SQL queries and explains the results." },
              { icon: <FiShield />, title: "Bank-Level Security", desc: "SOC2 Type II, end-to-end encryption, and full data residency controls." },
              { icon: <FiTrendingUp />, title: "Predictive Forecasting", desc: "Predict next quarter's revenue with our proprietary time-series forecasting models." },
              { icon: <FiDatabase />, title: "Unlimited Scale", desc: "Whether you have 10,000 rows or 10 billion, Aura processes it in milliseconds." },
              { icon: <FiActivity />, title: "Anomaly Detection", desc: "Aura constantly monitors your data and alerts you before small issues become big problems." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-blue-400 text-xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 border-t border-slate-800 bg-[#0f1423]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Loved by data nerds worldwide.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah J.", role: "Head of Data, Acme", text: "Aura replaced 3 different tools for us. Our team now gets answers in seconds instead of waiting days for a data analyst." },
              { name: "Michael C.", role: "CTO, FinScale", text: "The AI query generation is scary good. It wrote a complex join query perfectly on the first try. Incredible product." },
              { name: "David R.", role: "Founder, GlobalTech", text: "We scaled from 1M to 100M rows and Aura didn't even flinch. The performance is absolutely unmatched." }
            ].map((review, i) => (
              <div key={i} className="bg-[#1F2937] p-8 rounded-2xl border border-slate-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <FiStar key={j} fill="currentColor" size={16} />)}
                </div>
                <p className="text-slate-300 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">{review.name[0]}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    <p className="text-slate-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full -z-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to supercharge your data?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of companies making faster, smarter decisions with Aura AI.</p>
        <button className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">Start Your Free Trial</button>
        <p className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} Aura AI. A demo project by IS Tech Solutions.</p>
      </section>
    </div>
  );
}