import { useState } from 'react';
import { Zap, ShoppingBag, Volume2, VolumeX, Menu, X, BatteryCharging, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Navbar({ cartCount, onOpenCart, activeColor, onRechargeBattery, batteryLevel }) {
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
  };

  const navLinks = [
    { name: 'Flavors', href: '#flavors' },
    { name: 'The Formula', href: '#formula' },
    { name: 'Energy Matcher', href: '#quiz' },
    { name: 'Ambassadors', href: '#ambassadors' },
    { name: 'Find Stores', href: '#stores' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#06070a]/85 border-b border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-inner group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-emerald-400 fill-emerald-400 group-hover:text-emerald-300 transition-colors animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-emerald-500/20 blur-md -z-10 group-hover:bg-emerald-500/40 transition-colors"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-black tracking-wider text-white flex items-center gap-1.5">
                POWER<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">ONE</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 -mt-1 font-semibold">
                Clean Voltage™
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Interactive Voltage Battery Gauge */}
            <button
              onClick={() => {
                onRechargeBattery();
                sound.playZap();
              }}
              title="Click to Boost Energy Voltage!"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 hover:border-emerald-400 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <BatteryCharging className="w-4 h-4 animate-bounce text-emerald-400" />
              <span className="font-bold">{batteryLevel}% VOLT</span>
              <span className="text-[10px] text-slate-400 hover:text-white underline decoration-emerald-500">Boost</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-xl border transition-all ${
                !isMuted 
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)]' 
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
              title={isMuted ? 'Turn Sound FX ON' : 'Mute Sound FX'}
              aria-label="Toggle Sound Effects"
            >
              {!isMuted ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-heading font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">CART</span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-emerald-400 text-xs font-mono font-black">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 border-t border-white/10 space-y-2 bg-[#06070a]/95 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  onRechargeBattery();
                  sound.playZap();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-emerald-500/40 text-emerald-400 text-sm font-mono font-bold"
              >
                <BatteryCharging className="w-4 h-4" />
                RECHARGE VOLTAGE: {batteryLevel}%
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
