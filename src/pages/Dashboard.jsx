import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { FiFolder, FiFileText, FiLifeBuoy, FiLogOut, FiArrowRight, FiUser } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate('/');
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans">
      
      {/* Dashboard Navbar */}
      <nav className="border-b border-gray-800 bg-brandDark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold tracking-tighter text-white">
            <span className="text-brandCyan">IS</span> Tech Solutions
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-brandCyan transition-colors flex items-center gap-2">
              Back to Website <FiArrowRight />
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-2 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm font-semibold">
              <FiLogOut /> Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#112240] to-[#0A192F] border border-gray-800 rounded-2xl p-8 mb-10 flex items-center gap-6">
          <div className="bg-brandCyan/10 p-4 rounded-full border border-brandCyan/20 hidden md:block">
            <FiUser size={40} className="text-brandCyan" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">
              Welcome back, <span className="text-brandCyan">{currentUser?.displayName || 'Client'}</span>
            </h1>
            <p className="text-gray-400">Here is an overview of your projects and account.</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800 hover:border-brandCyan/50 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-brandDark p-3 rounded-xl border border-gray-700 text-brandCyan group-hover:scale-110 transition-transform">
                <FiFolder size={28} />
              </div>
              <span className="text-xs font-bold bg-brandCyan/10 text-brandCyan px-3 py-1 rounded-full">0 Active</span>
            </div>
            <h2 className="text-xl font-bold mb-2">My Projects</h2>
            <p className="text-gray-400 text-sm mb-6">You have no active projects right now. Start a new one to get going.</p>
            <Link to="/" className="text-brandCyan text-sm font-semibold hover:underline flex items-center gap-2">
              Start a Project <FiArrowRight />
            </Link>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800 hover:border-brandCyan/50 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-brandDark p-3 rounded-xl border border-gray-700 text-brandCyan group-hover:scale-110 transition-transform">
                <FiFileText size={28} />
              </div>
              <span className="text-xs font-bold bg-green-500/10 text-green-400 px-3 py-1 rounded-full">Paid</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Invoices</h2>
            <p className="text-gray-400 text-sm mb-6">No pending invoices. All your payments are up to date.</p>
            <button className="text-brandCyan text-sm font-semibold hover:underline flex items-center gap-2">
              View History <FiArrowRight />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800 hover:border-brandCyan/50 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-brandDark p-3 rounded-xl border border-gray-700 text-brandCyan group-hover:scale-110 transition-transform">
                <FiLifeBuoy size={28} />
              </div>
              <span className="text-xs font-bold bg-gray-500/10 text-gray-400 px-3 py-1 rounded-full">0 Open</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Support Tickets</h2>
            <p className="text-gray-400 text-sm mb-6">No open tickets. If you need help, create a new support ticket.</p>
            <button className="text-brandCyan text-sm font-semibold hover:underline flex items-center gap-2">
              Create Ticket <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-10 bg-[#112240] border border-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <h3 className="text-xl font-bold mb-2 relative z-10">Need a custom feature?</h3>
          <p className="text-gray-400 mb-6 relative z-10">We can build anything you need. Let's discuss your next big idea.</p>
          <a href="https://wa.me/923312694879" target="_blank" rel="noreferrer" className="relative z-10 inline-block bg-brandCyan text-brandDark font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors">
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}