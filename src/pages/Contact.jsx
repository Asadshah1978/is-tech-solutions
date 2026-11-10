import { useState } from 'react';
import { FiMail, FiSend, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [reviewData, setReviewData] = useState({ name: '', rating: 5, text: '' });
  const [reviews, setReviews] = useState([
    { name: "Sarah Khan", role: "CEO, Bloom Boutique", text: "IS Tech completely transformed our online store. Sales increased by 40% in the first month!", rating: 5 },
    { name: "Ali Raza", role: "Founder, TechNova", text: "The custom dashboard they built saves us hours of manual work every single day. Highly recommended.", rating: 5 }
  ]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to istechsolutions017@gmail.com!`);
    setContactData({ name: '', email: '', message: '' });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([{ name: reviewData.name, role: "Client", text: reviewData.text, rating: reviewData.rating }, ...reviews]);
    setReviewData({ name: '', rating: 5, text: '' });
  };

  return (
    <div className="min-h-screen bg-brandDark text-white font-sans">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* About Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-brandCyan">IS Tech Solutions</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">IS Tech Solutions (Innovative Solutions) is a Karachi-based digital agency specializing in modern web design, e-commerce development, and custom software solutions.</p>
          <a href="mailto:istechsolutions017@gmail.com" className="inline-flex items-center gap-3 text-xl font-semibold text-white hover:text-brandCyan"><FiMail className="text-brandCyan" /> istechsolutions017@gmail.com</a>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Send Us a <span className="text-brandCyan">Message</span></h3>
            <form onSubmit={handleContactSubmit} className="space-y-4 bg-[#112240] p-8 rounded-2xl border border-gray-800">
              <input type="text" placeholder="Your Name" required value={contactData.name} onChange={(e) => setContactData({...contactData, name: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-4 text-white focus:border-brandCyan outline-none" />
              <input type="email" placeholder="Your Email" required value={contactData.email} onChange={(e) => setContactData({...contactData, email: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-4 text-white focus:border-brandCyan outline-none" />
              <textarea placeholder="Your Message" required rows="4" value={contactData.message} onChange={(e) => setContactData({...contactData, message: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-4 text-white focus:border-brandCyan outline-none resize-none"></textarea>
              <button type="submit" className="w-full bg-brandCyan text-brandDark font-bold py-4 rounded-lg hover:bg-cyan-400 flex items-center justify-center gap-2"><FiSend /> Send Message</button>
            </form>
            <div className="mt-6 flex justify-center">
               <a href="https://wa.me/923312694879" target="_blank" className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white transition-colors"><FaWhatsapp size={20} /> Chat on WhatsApp</a>
            </div>
          </div>

          {/* Reviews Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Client <span className="text-brandCyan">Reviews</span></h3>
            <div className="bg-[#112240] p-8 rounded-2xl border border-gray-800 mb-6">
              <h4 className="font-bold mb-4">Leave a Review</h4>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" required value={reviewData.name} onChange={(e) => setReviewData({...reviewData, name: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none" />
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button key={star} type="button" onClick={() => setReviewData({...reviewData, rating: star})} className={`text-2xl ${reviewData.rating >= star ? 'text-yellow-400' : 'text-gray-600'}`}><FiStar fill={reviewData.rating >= star ? "currentColor" : "none"} /></button>
                  ))}
                </div>
                <textarea placeholder="Write your review..." required rows="3" value={reviewData.text} onChange={(e) => setReviewData({...reviewData, text: e.target.value})} className="w-full bg-brandDark border border-gray-600 rounded-lg p-3 text-white focus:border-brandCyan outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-white text-brandDark font-bold py-2 rounded-lg hover:bg-gray-200">Submit Review</button>
              </form>
            </div>
            
            <div className="space-y-4">
              {reviews.map((r, i) => (
                <div key={i} className="bg-[#0d1b30] p-6 rounded-xl border border-gray-800">
                  <div className="flex text-yellow-400 mb-2">{[...Array(r.rating)].map((_, j) => <FiStar key={j} fill="currentColor" size={14} />)}</div>
                  <p className="text-gray-300 text-sm italic mb-3">"{r.text}"</p>
                  <div className="font-bold text-brandCyan text-sm">{r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}