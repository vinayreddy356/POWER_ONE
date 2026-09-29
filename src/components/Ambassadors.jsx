import { Award, Zap, Trophy, ExternalLink } from 'lucide-react';
import { AMBASSADORS } from '../data/products';

export default function Ambassadors() {
  return (
    <section id="ambassadors" className="py-20 lg:py-28 relative bg-[#06070a] border-t border-white/5 overflow-hidden">
      
      {/* Background Lifestyle Backdrop Banner with dark gradient overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
        <img 
          src="/assets/lifestyle_hero.jpg" 
          alt="Power One Athletes" 
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-[#06070a]/90 to-[#06070a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
            <Trophy className="w-3.5 h-3.5" />
            TEAM POWER ONE
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white">
            POWERED BY WORLD-CLASS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
              ATHLETES, GAMERS & MINDS.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From Formula Drift racetracks and esports arena championships to neurobiology research labs, the highest performers fuel their grind with POWER ONE.
          </p>
        </div>

        {/* Ambassadors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMBASSADORS.map((athlete, idx) => (
            <div 
              key={idx}
              className="relative p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <img 
                    src={athlete.avatar} 
                    alt={athlete.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-white/20 shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h3 className="font-heading font-black text-white text-base">
                      {athlete.name}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium">
                      {athlete.team}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Role & Discipline
                  </span>
                  <p className="text-xs text-slate-300 font-medium">
                    {athlete.role}
                  </p>
                </div>

                <blockquote className="text-xs text-slate-400 italic leading-relaxed mb-6 border-l-2 border-purple-500/50 pl-3">
                  "{athlete.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Favorite Can:</span>
                <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded-full">
                  {athlete.flavor}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship Apply Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-emerald-950/40 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-black text-xl text-white">
              ARE YOU A PRO ATHLETE, CREATOR OR GAMER?
            </h4>
            <p className="text-slate-400 text-sm mt-1">
              Apply for the 2026 Power ONE Creator & Athlete Collective. Free monthly cases, gear, and event sponsorships.
            </p>
          </div>
          <button 
            onClick={() => alert("Athlete Sponsorship application portal opened! Send your portfolio and media kit to sponsors@poweroneenergy.com")}
            className="px-6 py-3 rounded-xl bg-white text-black font-heading font-bold text-sm tracking-wide hover:bg-slate-200 transition-colors whitespace-nowrap cursor-pointer shadow-lg hover:scale-105"
          >
            APPLY FOR SPONSORSHIP
          </button>
        </div>

      </div>
    </section>
  );
}
