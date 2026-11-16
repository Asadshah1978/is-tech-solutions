import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDollarSign, FiPieChart, FiActivity, FiSettings, FiLogOut, FiTrendingUp, FiCreditCard, FiSearch, FiBell, FiDownload, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

export default function FinDash() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex font-sans text-slate-800">
      
      {/* Sidebar */}
      <div className="w-20 lg:w-64 bg-[#0F172A] text-white flex flex-col py-6 px-4 fixed h-full z-20 transition-all">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">F</div>
          <h1 className="text-2xl font-bold tracking-tight hidden lg:block text-white">FinDash.</h1>
        </div>
        
        <div className="flex-1 space-y-2">
          <Link to="/" className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-xl hover:bg-slate-800 transition-colors mb-6">
            <FiArrowLeft size={20} /> <span className="hidden lg:block font-medium">Back to Agency</span>
          </Link>
          
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2 hidden lg:block">Menu</p>
          
          <button className="flex items-center gap-3 bg-emerald-500/10 text-emerald-400 w-full p-3 rounded-xl font-medium border border-emerald-500/20">
            <FiActivity size={20} /> <span className="hidden lg:block">Dashboard</span>
          </button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-xl hover:bg-slate-800 transition-colors">
            <FiPieChart size={20} /> <span className="hidden lg:block">Analytics</span>
          </button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-xl hover:bg-slate-800 transition-colors">
            <FiCreditCard size={20} /> <span className="hidden lg:block">Transactions</span>
          </button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-xl hover:bg-slate-800 transition-colors">
            <FiSettings size={20} /> <span className="hidden lg:block">Settings</span>
          </button>
        </div>
        
        <button className="flex items-center gap-3 text-slate-400 hover:text-red-400 w-full p-3 rounded-xl hover:bg-slate-800 transition-colors mt-auto">
          <FiLogOut size={20} /> <span className="hidden lg:block">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 lg:ml-64 p-6 lg:p-10">
        
        {/* Top Navbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            <p className="text-slate-500 text-sm mt-1">Welcome back, Asad. Here is your financial summary.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <FiSearch className="absolute left-3 top-3 text-slate-400" />
              <input type="text" placeholder="Search transactions..." className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 shadow-sm" />
            </div>
            <button className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 shadow-sm relative">
              <FiBell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md cursor-pointer">
              AS
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <FiDollarSign size={24} />
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <FiArrowUpRight size={14} /> +12.5%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Total Balance</p>
            <h3 className="text-3xl font-bold text-slate-900">$124,563.00</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <FiTrendingUp size={24} />
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <FiArrowUpRight size={14} /> +5.2%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Total Income</p>
            <h3 className="text-3xl font-bold text-slate-900">$45,200.00</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                <FiCreditCard size={24} />
              </div>
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                <FiArrowDownRight size={14} /> -2.1%
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium mb-1">Total Expenses</p>
            <h3 className="text-3xl font-bold text-slate-900">$18,400.00</h3>
          </div>
        </div>

        {/* Main Grid: Chart & Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Chart Area (Placeholder for Chart) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900">Cash Flow</h3>
              <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2 outline-none">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            
            {/* Fake Bar Chart using CSS */}
            <div className="h-64 flex items-end gap-3 md:gap-6 pt-4">
              {[45, 60, 40, 80, 55, 90, 70, 85, 50, 95, 75, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-slate-100 rounded-t-md relative h-full flex items-end">
                    <div 
                      className="w-full bg-emerald-500 rounded-t-md group-hover:bg-emerald-600 transition-colors" 
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
              <button className="text-emerald-600 text-sm font-semibold hover:text-emerald-700">View All</button>
            </div>
            
            <div className="space-y-5">
              {[
                { name: "Client Payment", type: "Web Design", amount: "+$2,500.00", date: "Today, 10:45 AM", icon: <FiArrowUpRight className="text-emerald-500" />, positive: true },
                { name: "AWS Hosting", type: "Subscription", amount: "-$120.00", date: "Yesterday, 14:20", icon: <FiArrowDownRight className="text-red-500" />, positive: false },
                { name: "Client Payment", type: "E-Commerce", amount: "+$850.00", date: "Oct 24, 09:15 AM", icon: <FiArrowUpRight className="text-emerald-500" />, positive: true },
                { name: "Figma Pro", type: "Software", amount: "-$45.00", date: "Oct 23, 11:00 AM", icon: <FiArrowDownRight className="text-red-500" />, positive: false },
                { name: "Client Payment", type: "SEO Setup", amount: "+$1,200.00", date: "Oct 22, 16:30", icon: <FiArrowUpRight className="text-emerald-500" />, positive: true },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-50`}>
                      {tx.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{tx.name}</p>
                      <p className="text-xs text-slate-500">{tx.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-sm ${tx.positive ? 'text-emerald-600' : 'text-slate-800'}`}>{tx.amount}</p>
                    <p className="text-xs text-slate-400">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
              <FiDownload /> Download Statement
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}