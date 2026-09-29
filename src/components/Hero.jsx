import { useState, useRef } from 'react';
import { Zap, ShieldCheck, Flame, Sparkles, Check, ArrowRight, Award } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Hero({ products, activeProduct, onSelectProduct, onAddToCart }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Interactive 3D tilt tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleSelectFlavor = (product) => {
    onSelectProduct(product);
    sound.playZap();
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Dynamic ambient background illumination based on active flavor */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] sm:h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 -z-10 opacity-35"
        style={{ backgroundColor: activeProduct.accentColor }}
      />
      <div className="absolute inset-0 cyber-grid radial-mask opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Props, and CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: activeProduct.accentColor }} />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                {activeProduct.badge} • NEXT-GEN NUTRITION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white">
              ONE CAN. <br />
              <span 
                className="text-transparent bg-clip-text transition-all duration-500"
                style={{
                  backgroundImage: `linear-gradient(135deg, #ffffff 20%, ${activeProduct.accentColor} 80%)`,
                }}
              >
                MAXIMUM VOLTAGE.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Engineered for hyper-focused minds and high-output athletes. 
              <strong className="text-white font-semibold"> 200mg clean botanical caffeine</strong> coupled with Suntheanine® L-Theanine, bio-electrolytes, and 
              <span className="text-emerald-400 font-medium"> zero sugar</span>. No jitters. Zero 3 PM crash.
            </p>

            {/* Key Specs Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-heading text-2xl font-black text-white">{activeProduct.caffeine}</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Natural Caffeine</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-heading text-2xl font-black text-emerald-400">{activeProduct.sugar}</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Zero Sugar</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-heading text-2xl font-black text-white">150mg</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">L-Theanine</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-heading text-2xl font-black text-cyan-400">4X</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Electrolytes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  onAddToCart(activeProduct, '12-pack');
                  sound.playCanPop();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: activeProduct.accentColor,
                  color: '#050709',
                  boxShadow: `0 0 30px ${activeProduct.accentGlow}`
                }}
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>ORDER 12-PACK CASE • $29.99</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="#flavors"
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-heading font-bold text-sm tracking-wide text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-center"
              >
                EXPLORE ALL 4 FLAVORS
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Informed-Choice Tested</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>100% Plant-Powered Color</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Over 14,000+ 5★ Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Can Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[380px] aspect-[3/4] flex items-center justify-center perspective-[1000px] cursor-grab active:cursor-grabbing transition-transform"
            >
              {/* Can Container with 3D tilt */}
              <div 
                className="relative w-full h-full rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-black/60 backdrop-blur-xl shadow-2xl transition-transform duration-200 ease-out flex items-center justify-center group"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
                  boxShadow: `0 25px 60px -15px ${activeProduct.accentGlow}, 0 0 35px rgba(255,255,255,0.05)`
                }}
              >
                {/* Background Can Aura */}
                <div 
                  className="absolute inset-0 opacity-40 blur-2xl transition-all duration-700 pointer-events-none"
                  style={{ backgroundColor: activeProduct.accentColor }}
                />

                {/* High-Res Product Can Image */}
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name}
                  className="relative z-10 w-full h-full object-cover object-center filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:scale-105"
                />

                {/* Floating Flavor Tag */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-white text-xs font-heading font-black tracking-wide flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProduct.accentColor }}></span>
                  {activeProduct.name.toUpperCase()}
                </div>

                {/* Click to Pop Can Sound Indicator */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playCanPop();
                  }}
                  className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black border border-white/20 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
                  title="Simulate Can Opening"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Crackle Can</span>
                </button>
              </div>
            </div>

            {/* Flavor Switcher Selector Pills */}
            <div className="mt-8 w-full max-w-[420px] bg-slate-900/80 border border-white/10 rounded-2xl p-2 backdrop-blur-xl">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-slate-400 text-center mb-2">
                SWITCH VOLTAGE FORMULA
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {products.map((p) => {
                  const isActive = p.id === activeProduct.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelectFlavor(p)}
                      className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-white/15 text-white font-bold shadow-md' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                      style={{
                        borderColor: isActive ? p.accentColor : 'transparent',
                        borderWidth: isActive ? 1 : 0
                      }}
                    >
                      <span 
                        className="w-3 h-3 rounded-full mb-1 transition-transform"
                        style={{ 
                          backgroundColor: p.accentColor,
                          boxShadow: isActive ? `0 0 10px ${p.accentColor}` : 'none',
                          transform: isActive ? 'scale(1.2)' : 'scale(1)'
                        }}
                      />
                      <span className="text-[11px] leading-tight truncate w-full font-heading">
                        {p.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Marquee Banner Strip */}
      <div className="mt-16 sm:mt-20 py-3.5 bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-emerald-950/40 border-y border-white/10 overflow-hidden select-none">
        <div className="flex items-center space-x-8 animate-[marquee_25s_linear_infinite] whitespace-nowrap text-xs font-mono font-bold tracking-widest text-slate-300">
          <span className="flex items-center gap-2 text-emerald-400">⚡ 200MG ORGANIC CAFFEINE</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-white">⚡ ZERO SUGAR CRASH</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-cyan-400">⚡ SUNTHEANINE® L-THEANINE</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-amber-400">⚡ 4X HIMALAYAN ELECTROLYTES</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-emerald-400">⚡ FREE US SHIPPING OVER $45</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-purple-400">⚡ 100% RECYCLABLE ALUMINUM</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-white">⚡ 14,800+ 5-STAR REVIEWS</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-emerald-400">⚡ 200MG ORGANIC CAFFEINE</span>
          <span>•</span>
          <span className="flex items-center gap-2 text-white">⚡ ZERO SUGAR CRASH</span>
        </div>
      </div>
    </section>
  );
}
