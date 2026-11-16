import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiUser, FiMail, FiClock, FiCheckCircle, FiShield } from 'react-icons/fi';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function Admin() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [allMessages, setAllMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const ADMIN_EMAIL = "istechsolutions017@gmail.com";

  // Security: Agar admin nahi hai to bahar nikal do
  useEffect(() => {
    if (currentUser && currentUser.email !== ADMIN_EMAIL) {
      toast.error("Access Denied! You are not an Admin.");
      navigate('/dashboard');
    }
  }, [currentUser, navigate]);

  // Saare messages fetch karein
  useEffect(() => {
    if (!currentUser || currentUser.email !== ADMIN_EMAIL) return;

    const q = collection(db, "messages");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = [];
      snapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      msgs.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
      setAllMessages(msgs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Status Update Function
  const updateStatus = async (id, newStatus) => {
    try {
      const msgRef = doc(db, "messages", id);
      await updateDoc(msgRef, { status: newStatus });
      toast.success(`Status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  // Agar admin nahi hai to kuch mat dikhao
  if (!currentUser || currentUser.email !== ADMIN_EMAIL) return null;

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans">
      <nav className="border-b border-gray-800 bg-brandDark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FiShield className="text-red-500" size={28} />
            <h1 className="text-xl font-bold text-white">Admin Panel <span className="text-brandCyan">IS Tech</span></h1>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-brandCyan">Back to Website</Link>
            <button onClick={handleLogout} className="flex items-center gap-2 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white"><FiLogOut /> Logout</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Client Messages</h2>
          <span className="bg-brandCyan/20 text-brandCyan px-4 py-2 rounded-full font-bold">Total: {allMessages.length}</span>
        </div>
        
        {loading ? (
          <p>Loading messages...</p>
        ) : allMessages.length === 0 ? (
          <p className="text-gray-400">No messages received yet.</p>
        ) : (
          <div className="grid gap-6">
            {allMessages.map((msg) => (
              <div key={msg.id} className="bg-[#112240] border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-brandCyan/20 text-brandCyan p-2 rounded-full"><FiUser size={16} /></span>
                    <h3 className="font-bold text-lg">{msg.userName}</h3>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><FiMail size={12} /> {msg.userEmail}</span>
                  </div>
                  <p className="text-gray-300 bg-brandDark p-4 rounded-lg mt-3">{msg.message}</p>
                  <p className="text-xs text-gray-500 mt-3 flex items-center gap-1"><FiClock size={12} /> {msg.createdAt ? new Date(msg.createdAt.toMillis()).toLocaleString() : 'Just now'}</p>
                </div>
                
                <div className="flex flex-col items-end gap-3 min-w-[200px]">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                    msg.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' : 
                    msg.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' : 
                    'bg-green-500/20 text-green-400'
                  }`}>{msg.status}</span>
                  
                  <div className="flex gap-2">
                    <button onClick={() => updateStatus(msg.id, 'In Progress')} className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md font-semibold">In Progress</button>
                    <button onClick={() => updateStatus(msg.id, 'Completed')} className="text-xs bg-green-600 hover:bg-green-500 px-3 py-2 rounded-md font-semibold flex items-center gap-1"><FiCheckCircle /> Complete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}