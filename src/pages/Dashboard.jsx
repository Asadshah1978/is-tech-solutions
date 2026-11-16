import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { FiFolder, FiFileText, FiLifeBuoy, FiLogOut, FiArrowRight, FiUser, FiMessageSquare, FiClock } from 'react-icons/fi';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Firebase se user ke messages fetch karein
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, "messages"),
      where("userId", "==", currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = [];
      snapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      // Naye messages pehle dikhayein
      msgs.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setMessages(msgs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

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
            <p className="text-gray-400">Here is an overview of your account and messages.</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-brandDark p-3 rounded-xl border border-gray-700 text-brandCyan">
                <FiFolder size={28} />
              </div>
              <span className="text-xs font-bold bg-brandCyan/10 text-brandCyan px-3 py-1 rounded-full">0 Active</span>
            </div>
            <h2 className="text-xl font-bold mb-2">My Projects</h2>
            <p className="text-gray-400 text-sm">You have no active projects right now.</p>
          </div>
          
          <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-brandDark p-3 rounded-xl border border-gray-700 text-brandCyan">
                <FiFileText size={28} />
              </div>
              <span className="text-xs font-bold bg-green-500/10 text-green-400 px-3 py-1 rounded-full">Paid</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Invoices</h2>
            <p className="text-gray-400 text-sm">No pending invoices.</p>
          </div>

          <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-brandDark p-3 rounded-xl border border-gray-700 text-brandCyan">
                <FiMessageSquare size={28} />
              </div>
              <span className="text-xs font-bold bg-brandCyan/10 text-brandCyan px-3 py-1 rounded-full">{messages.length} Total</span>
            </div>
            <h2 className="text-xl font-bold mb-2">My Messages</h2>
            <p className="text-gray-400 text-sm">You have sent {messages.length} messages to our team.</p>
          </div>
        </div>

        {/* Messages History Section */}
        <div className="bg-[#112240] border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><FiMessageSquare className="text-brandCyan" /> Your Messages & Inquiries</h2>
          
          {loading ? (
            <p className="text-gray-400 text-center py-10">Loading your messages...</p>
          ) : messages.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-400 mb-4">You haven't sent any messages yet.</p>
              <Link to="/" className="bg-brandCyan text-brandDark font-bold px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors">Go to Website & Contact Us</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-brandDark border border-gray-700 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-brandCyan/20 p-2 rounded-full text-brandCyan"><FiUser size={20} /></div>
                      <div>
                        <h4 className="font-bold text-white">{msg.userName}</h4>
                        <p className="text-xs text-gray-400">{msg.userEmail}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full flex items-center gap-1">
                      <FiClock size={12} /> {msg.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 bg-[#112240] p-4 rounded-lg">{msg.message}</p>
                  <p className="text-xs text-gray-500 text-right">
                    Sent on: {msg.createdAt ? new Date(msg.createdAt.toMillis()).toLocaleString() : 'Just now'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}