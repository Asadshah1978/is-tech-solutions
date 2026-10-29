import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (!isOpen) return null;

  // Handle Email/Password Login & Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful!");
        onClose();
      } else {
        if (password !== confirmPassword) throw new Error("Passwords do not match");
        if (password.length < 6) throw new Error("Password must be at least 6 characters");
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        toast.success("Account created successfully!");
        onClose();
      }
    } catch (error) {
      toast.error(error.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      onClose();
    } catch (error) {
      toast.error(error.message.replace("Firebase: ", ""));
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) return toast.error("Please enter your email first.");
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to your email!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[300] p-4 backdrop-blur-sm">
      <div className="bg-[#112240] border border-brandCyan/30 rounded-xl p-6 w-full max-w-md relative shadow-[0_0_30px_rgba(0,229,255,0.1)]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><FiX size={20}/></button>
        
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Field (Sirf Signup mein dikhega) */}
          {!isLogin && (
            <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
          )}
          
          <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
          
          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-gray-400">
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Confirm Password (Sirf Signup mein dikhega) */}
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
          )}

          {isLogin && (
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-gray-400"><input type="checkbox" className="mr-2" /> Remember Me</label>
              <button type="button" onClick={handleForgotPassword} className="text-brandCyan hover:underline">Forgot Password?</button>
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full bg-brandCyan text-brandDark font-bold py-3 rounded-lg hover:bg-cyan-400 transition flex justify-center">
            {loading ? <span className="animate-spin h-5 w-5 border-2 border-brandDark border-t-transparent rounded-full"></span> : (isLogin ? 'Login' : 'Create Account')}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Google Login Button */}
        <button 
          onClick={handleGoogleLogin} 
          disabled={googleLoading}
          className="w-full bg-white text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-3"
        >
          {googleLoading ? (
            <span className="animate-spin h-5 w-5 border-2 border-gray-800 border-t-transparent rounded-full"></span>
          ) : (
            <>
              <FcGoogle size={24} /> Continue with Google
            </>
          )}
        </button>

        {/* Toggle Button (Login <-> Signup) */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-brandCyan font-semibold hover:underline ml-1"
          >
            {isLogin ? 'Create Account' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}