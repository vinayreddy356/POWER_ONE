import { useState } from 'react';
import { Star, Plus, Minus, ShoppingBag, FileText, CheckCircle2, Zap, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function FlavorShowcase({ products, onAddToCart, onOpenNutrition }) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedPack, setSelectedPack] = useState('12-pack');
  const [quantity, setQuantity] = useState(1);

  const packOptions = [
    { id: '4-pack', name: '4-Pack Sampler', count: 4, badge: null },
    { id: '12-pack', name: '12-Pack Case', count: 12, badge: 'MOST POPULAR' },
    { id: '24-pack', name: '24-Pack Master Box', count: 24, badge: 'BEST VALUE' },
  ];

  const handlePackChange = (packId) => {
    setSelectedPack(packId);
    sound.playZap();
  };

  const handleAddToCart = () => {
    onAddToCart(selectedProduct, selectedPack, quantity);
    sound.playCanPop();
  };

  const currentPricing = selectedProduct.pricing[selectedPack];
  const totalPrice = (currentPricing.price * quantity).toFixed(2);

  return (
    <section id="flavors" className="py-20 lg:py-28 relative bg-[#07080c] border-t border-white/5">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 rounded-full blur-[130px] opacity-20 pointer-events-none -z-10"
        style={{ backgroundColor: selectedProduct.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            <Zap className="w-3.5 h-3.5" />
            THE FLAVOR VAULT
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white">
            FOUR EXPLOSIVE FLAVORS. <br />
            <span className="text-slate-400 font-light">ZERO ARTIFICIAL DYES.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every Power One can is cold-crafted with botanical extracts, organic monk fruit, and mountain spring carbonation for crisp refreshment.
          </p>
        </div>

        {/* 4 Can Thumbnails Switcher Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {products.map((p) => {
            const isSelected = p.id === selectedProduct.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProduct(p);
                  sound.playZap();
                }}
                className={`relative p-4 rounded-2xl border transition-all text-left group overflow-hidden cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-900/90 border-2 shadow-xl scale-[1.02]' 
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
                style={{
                  borderColor: isSelected ? p.accentColor : undefined,
                  boxShadow: isSelected ? `0 0 25px ${p.accentGlow}` : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-16 rounded-lg overflow-hidden bg-black/40 flex-shrink-0 flex items-center justify-center p-1">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover rounded" />
                  </div>
                  <div className="min-w-0">
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                      style={{ color: p.accentColor }}
                    >
                      {p.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-white text-base truncate group-hover:text-emerald-400 transition-colors">
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-amber-400 mt-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-mono text-slate-300 font-semibold">{p.rating}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Flavor Deep Dive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl">
          
          {/* Can Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/60 group">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 opacity-25 pointer-events-none transition-all duration-500"
                style={{ backgroundColor: selectedProduct.accentColor }}
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-xs text-slate-200">
                <span className="font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedProduct.accentColor }} />
                  {selectedProduct.carbonation}
                </span>
                <span className="font-mono text-emerald-400 font-bold">{selectedProduct.calories} CAL • 0G SUGAR</span>
              </div>
            </div>
          </div>

          {/* Product Specifications & Order Box */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title & Tagline */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {selectedProduct.subtitle}
                </span>
                <button
                  onClick={() => onOpenNutrition(selectedProduct)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Nutrition Facts
                </button>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white mt-2">
                {selectedProduct.name}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mt-2">
                {selectedProduct.tagline}
              </p>
            </div>

            {/* Flavor Notes Intensity Meters */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Taste & Sensory Architecture
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {Object.entries(selectedProduct.flavorNotes).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono capitalize text-slate-300">
                      <span>{key}</span>
                      <span className="font-bold text-white">{value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-700" 
                        style={{ width: `${value}%`, backgroundColor: selectedProduct.accentColor }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pack Size Selection */}
            <div className="space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Select Pack Size
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {packOptions.map((pack) => {
                  const pricing = selectedProduct.pricing[pack.id];
                  const isPackSelected = selectedPack === pack.id;
                  return (
                    <button
                      key={pack.id}
                      onClick={() => handlePackChange(pack.id)}
                      className={`relative p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isPackSelected
                          ? 'bg-white/10 border-emerald-500 shadow-md'
                          : 'bg-black/30 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {pack.badge && (
                        <span className="absolute -top-2.5 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-black text-[9px] font-mono font-black uppercase tracking-wider">
                          {pack.badge}
                        </span>
                      )}
                      <div className="font-heading font-bold text-sm text-white">{pack.name}</div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-base font-black text-white font-mono">${pricing.price}</span>
                        <span className="text-[11px] text-slate-400 font-mono">(${pricing.perCan}/can)</span>
                      </div>
                      {pricing.savings && (
                        <div className="text-[10px] font-mono text-emerald-400 font-bold mt-0.5">
                          {pricing.savings}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Add To Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              
              {/* Quantity Counter */}
              <div className="flex items-center rounded-xl bg-black/50 border border-white/10 p-1 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-mono font-bold text-base text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add To Cart CTA Button */}
              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl font-heading font-extrabold text-base tracking-wide flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: selectedProduct.accentColor,
                  color: '#050709',
                  boxShadow: `0 0 25px ${selectedProduct.accentGlow}`
                }}
              >
                <ShoppingBag className="w-5 h-5 fill-current" />
                <span>ADD TO CART • ${totalPrice}</span>
              </button>
            </div>

            {/* Highlights checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
              {selectedProduct.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
