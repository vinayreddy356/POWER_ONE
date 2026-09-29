import { useState } from 'react';
import { MapPin, Search, Navigation, Building2, CheckCircle2, Clock } from 'lucide-react';
import { STORES_DATA } from '../data/products';
import { sound } from '../utils/soundEffects';

export default function StoreLocator() {
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCityData = STORES_DATA[activeCityIndex];

  const handleSelectCity = (index) => {
    setActiveCityIndex(index);
    sound.playZap();
  };

  return (
    <section id="stores" className="py-20 lg:py-28 relative bg-[#06070a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            <MapPin className="w-3.5 h-3.5" />
            NATIONWIDE DISTRIBUTION
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white">
            GRAB A COLD CAN <br />
            <span className="text-slate-400 font-light">AT 3,500+ RETAILERS TODAY.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Available nationwide in refrigerated grab-and-go coolers at Target, Whole Foods, premier athletic clubs, and convenience stores.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {STORES_DATA.map((city, idx) => (
            <button
              key={city.city}
              onClick={() => handleSelectCity(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activeCityIndex === idx
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {city.city}
            </button>
          ))}
        </div>

        {/* Store Locations List Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <span className="text-xs font-mono font-bold text-slate-300 uppercase flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              Showing Locations in {currentCityData.city}
            </span>
            <span className="text-xs font-mono text-emerald-400">
              ● All coolers restocked weekly
            </span>
          </div>

          <div className="space-y-4">
            {currentCityData.locations.map((store, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-emerald-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-black text-white text-base group-hover:text-emerald-400 transition-colors">
                      {store.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300">
                      {store.distance}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    {store.address}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-xs">
                    <span className={`w-2 h-2 rounded-full ${store.status === 'green' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                    <span className={store.status === 'green' ? 'text-emerald-400 font-medium' : 'text-amber-400 font-medium'}>
                      {store.stock}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Opening Google Maps directions for ${store.name} at ${store.address}`)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold flex items-center justify-center gap-2 transition-all cursor-pointer self-start sm:self-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Get Directions</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span className="text-xs text-slate-400">
              Don't see your local gym, grocery or campus bodega?
            </span>
            <button
              onClick={() => alert("Store request form submitted to our distribution team! We will contact retailers in your area.")}
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline font-semibold"
            >
              Request POWER ONE at a local retailer →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
