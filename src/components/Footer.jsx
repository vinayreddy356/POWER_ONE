import { useState } from 'react';
import { Zap, ShieldCheck, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    sound.playCanPop();
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup Banner */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400">
              JOIN THE VOLTAGE DISPATCH
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
              GET 20% OFF YOUR FIRST CRATE + VIP FLAVOR DROPS
            </h3>
            <p className="text-slate-400 text-sm max-w-lg">
              Receive secret beta releases, esports tournament passes, and limited-edition merchandise drops before the general public.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>You're in! Use code <strong className="text-white font-bold">POWER20</strong> at checkout for 20% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-black text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/25 whitespace-nowrap"
                >
                  <span>JOIN</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 border border-white/15 text-emerald-400">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider text-white">
                POWER<span className="text-emerald-400">ONE</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The next-generation clean voltage energy beverage. Engineered with zero sugar, botanical green tea caffeine, nootropics, and deep Himalayan electrolytes.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span>● Los Angeles, CA</span>
              <span>● Austin, TX</span>
              <span>● London, UK</span>
            </div>
          </div>

          {/* Col 2: Flavors */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              The Formulas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#flavors" className="hover:text-emerald-400 transition-colors">Electric Volt (Lime Citrus)</a></li>
              <li><a href="#flavors" className="hover:text-purple-400 transition-colors">Cyber Berry (Wild Blackberry)</a></li>
              <li><a href="#flavors" className="hover:text-orange-400 transition-colors">Solar Flare (Mango Blood Orange)</a></li>
              <li><a href="#flavors" className="hover:text-cyan-400 transition-colors">Arctic Zero (Sub-Zero Mint)</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Variety Discovery Pack</a></li>
            </ul>
          </div>

          {/* Col 3: Science & Brand */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              The Science
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#formula" className="hover:text-emerald-400 transition-colors">Green Tea Seed Caffeine</a></li>
              <li><a href="#formula" className="hover:text-emerald-400 transition-colors">Suntheanine® Synergy</a></li>
              <li><a href="#formula" className="hover:text-emerald-400 transition-colors">Himalayan Pink Minerals</a></li>
              <li><a href="#formula" className="hover:text-emerald-400 transition-colors">Clinical Lab Certificates</a></li>
              <li><a href="#quiz" className="hover:text-emerald-400 transition-colors">AI Energy Matcher</a></li>
            </ul>
          </div>

          {/* Col 4: Community & Retail */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Community
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#ambassadors" className="hover:text-emerald-400 transition-colors">Team Power ONE</a></li>
              <li><a href="#ambassadors" className="hover:text-emerald-400 transition-colors">Creator Sponsorships</a></li>
              <li><a href="#stores" className="hover:text-emerald-400 transition-colors">Store Locator</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Customer Reviews (14.8k)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Wholesale & Distributors</a></li>
            </ul>
          </div>

        </div>

        {/* Trust Guarantees Strip */}
        <div className="py-6 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-slate-400 font-mono">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-Day Taste Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            <span>100% Recyclable Aluminum</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Zero Sugar & 0g Net Carbs</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>Third-Party Lab Tested</span>
          </div>
        </div>

        {/* FDA Disclaimer & Copyright */}
        <div className="pt-8 text-center space-y-3 text-[11px] text-slate-500 max-w-4xl mx-auto leading-relaxed">
          <p>
            * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Not recommended for children, pregnant or nursing women, or individuals sensitive to caffeine. Consume responsibly. Maximum 2 cans per 24 hours.
          </p>
          <p>
            © {new Date().getFullYear()} POWER ONE BEVERAGE CO. ALL RIGHTS RESERVED. POWER ONE, THE VOLTAGE CORE, AND CLEAN VOLTAGE ARE REGISTERED TRADEMARKS.
          </p>
        </div>

      </div>
    </footer>
  );
}
