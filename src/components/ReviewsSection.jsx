import { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, ThumbsUp, Filter, X } from 'lucide-react';
import { REVIEWS_DATA } from '../data/products';
import { sound } from '../utils/soundEffects';

export default function ReviewsSection({ products }) {
  const [reviews, setReviews] = useState(REVIEWS_DATA);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New review form state
  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    title: '',
    text: '',
    flavor: products[0].name,
    category: 'Gamers'
  });

  const categories = ['All', 'Gamers', 'Athletes', 'Software Engineers & Creators', 'Night Shifters'];

  const filteredReviews = activeCategory === 'All' 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formData.author || !formData.text) return;

    const newRev = {
      id: Date.now(),
      author: formData.author,
      badge: 'Verified Buyer',
      category: formData.category,
      rating: formData.rating,
      date: 'Just now',
      title: formData.title || 'Incredible clean energy',
      text: formData.text,
      flavor: formData.flavor,
      pack: '12-Pack Case'
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setFormData({
      author: '',
      rating: 5,
      title: '',
      text: '',
      flavor: products[0].name,
      category: 'Gamers'
    });
    sound.playCanPop();
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              VERIFIED SATISFACTION
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white">
              14,800+ HUMANS <br />
              <span className="text-slate-400 font-light">OPERATING AT MAX VOLTAGE.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="font-mono text-sm">
                <strong className="text-white font-bold">4.96</strong>
                <span className="text-slate-400"> / 5.0 (14.8k)</span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer hover:scale-105"
            >
              <MessageSquarePlus className="w-4 h-4 text-emerald-400" />
              Write A Review
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id}
              className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-500">{rev.date}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-white mb-2">
                  {rev.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-bold text-xs text-white">{rev.author}</span>
                    <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 font-mono">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                    Flavor: {rev.flavor}
                  </span>
                </div>
                <div className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-400">
                  {rev.category}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#0d1117] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-2xl font-black text-white mb-1">
              SHARE YOUR VOLTAGE EXPERIENCE
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Let the community know how POWER ONE fuels your routine.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 cursor-pointer"
                    >
                      <Star className={`w-6 h-6 ${star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex M."
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:border-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Flavor Reviewed</label>
                  <select
                    value={formData.flavor}
                    onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:border-emerald-500 outline-none"
                  >
                    {products.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Review Headline</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Best clean focus I've had all year"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:border-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">Your Feedback</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Describe your focus, taste, energy duration, and workout/gaming performance..."
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:border-emerald-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-black text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/30 cursor-pointer"
              >
                SUBMIT VERIFIED REVIEW
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
