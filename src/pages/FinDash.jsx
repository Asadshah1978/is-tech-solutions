import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDollarSign, FiPieChart, FiActivity, FiSettings, FiLogOut } from 'react-icons/fi';

export default function FinDash() {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      <div className="w-20 md:w-64 bg-[#0f172a] text-white flex flex-col items-center md:items-start py-8 px-4 transition-all">
        <h1 className="text-2xl font-bold mb-12 hidden md:block text-emerald-400">FinDash.</h1>
        <Link to="/" className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-lg hover:bg-slate-800 transition-colors mb-2">
          <FiArrowLeft size={20} /> <span className="hidden md:block font-medium">Back to Agency</span>
        </Link>
        <div className="flex-1 w-full space-y-2 mt-8">
          <button className="flex items-center gap-3 bg-emerald-500 text-white w-full p-3 rounded-lg font-medium"><FiActivity size={20} /> <span className="hidden md:block">Overview</span></button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-lg hover:bg-slate-800 transition-colors"><FiPieChart size={20} /> <span className="hidden md:block">Analytics</span></button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-lg hover:bg-slate-800 transition-colors"><FiDollarSign size={20} /> <span className="hidden md:block">Transactions</span></button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white w-full p-3 rounded-lg hover:bg-slate-800 transition-colors"><FiSettings size={20} /> <span className="hidden md:block">Settings</span></button>
        </div>
        <button className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full p-3 rounded-lg hover:bg-slate-800 transition-colors mt-auto"><FiLogOut size={20} /> <span className="hidden md:block">Logout</span></button>
      </div>

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">AS</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm font-semibold mb-1">Total Balance</p>
            <h3 className="text-3xl font-bold text-gray-800">$124,563.00</h3>
            <p className="text-emerald-500 text-sm mt-2 font-medium">+12.5% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm font-semibold mb-1">Total Income</p>
            <h3 className="text-3xl font-bold text-gray-800">$45,200.00</h3>
            <p className="text-emerald-500 text-sm mt-2 font-medium">+5.2% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm font-semibold mb-1">Total Expenses</p>
            <h3 className="text-3xl font-bold text-gray-800">$18,400.00</h3>
            <p className="text-red-500 text-sm mt-2 font-medium">+2.1% from last month</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"><FiDollarSign /></div>
                  <div>
                    <p className="font-semibold text-gray-800">Client Payment</p>
                    <p className="text-xs text-gray-500">Today, 10:45 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600">+$2,500.00</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}