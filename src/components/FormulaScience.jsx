import { useState } from 'react';
import { Zap, Brain, Droplets, BatteryMedium, Check, X, ShieldAlert, Sparkles, Award } from 'lucide-react';

export default function FormulaScience() {
  const [activeTab, setActiveTab] = useState('pillars');

  const pillars = [
    {
      icon: Zap,
      title: '200mg Botanical Caffeine',
      subtitle: 'Green Tea & Arabica Seed Extract',
      description: 'Unlike synthetic anhydrous caffeine that dumps into your bloodstream all at once, our plant-derived caffeine releases steadily for 6-8 hours of clean alertness.',
      stat: '6-8h',
      statLabel: 'Sustained Drive'
    },
    {
      icon: Brain,
      title: 'Cognitive Nootropic Stack',
      subtitle: 'Suntheanine® L-Theanine + Alpha-GPC',
      description: 'The golden 1:1 synergistic ratio. L-Theanine promotes calming alpha brain waves to prevent twitching, while Alpha-GPC crosses the blood-brain barrier for razor-sharp reaction time.',
      stat: '+34%',
      statLabel: 'Cognitive Recall'
    },
    {
      icon: Droplets,
      title: 'Cellular Electrolyte Matrix',
      subtitle: 'Himalayan Pink Salt + Magnesium',
      description: 'Caffeine is a mild diuretic. We replenish ionic potassium, pink salt trace minerals, and magnesium so your neurons fire with zero dehydration fatigue or cramping.',
      stat: '350mg',
      statLabel: 'Ionic Hydration'
    },
    {
      icon: BatteryMedium,
      title: 'Zero Sugar, 100% Cellular ATP',
      subtitle: 'Bioactive B-Complex (B6 & B12)',
      description: 'No sucrose, no high-fructose corn syrup. We deliver active co-enzymated B-vitamins that convert cellular glycogen into pure biological energy without a post-sugar crash.',
      stat: '0g',
      statLabel: 'Total Sugar'
    }
  ];

  const comparisonRows = [
    { feature: 'Clean Caffeine Source', powerOne: 'Natural Green Tea (200mg)', traditional: 'Synthetic Anhydrous (160-300mg)', coffee: 'Roasted Beans (95-150mg)' },
    { feature: 'Added Sugar', powerOne: '0g (Zero)', traditional: '27g - 54g (Up to 14 cubes)', coffee: '0g - 35g (with syrup)' },
    { feature: 'Post-Drink Energy Crash', powerOne: '0% (Smooth descent)', traditional: 'High (Severe 3PM slump)', coffee: 'Moderate' },
    { feature: 'Nootropics (L-Theanine & Alpha-GPC)', powerOne: 'Included (Clinical dose)', traditional: 'None', coffee: 'Trace amounts only' },
    { feature: 'Cellular Electrolytes', powerOne: 'Himalayan Pink Salt + Mg', traditional: 'Minimal or None', coffee: 'None' },
    { feature: 'Artificial Colors (Red 40, Yellow 5)', powerOne: 'Zero (Plant-derived only)', traditional: 'Frequently present', coffee: 'None' },
    { feature: 'Stomach Acidity & Discomfort', powerOne: 'Gentle, pH balanced', traditional: 'High acidity & bloat', coffee: 'High acid' }
  ];

  return (
    <section id="formula" className="py-20 lg:py-28 relative bg-[#06070a] border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            THE BIO-VOLTAGE ARCHITECTURE
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white">
            DESIGNED FOR PERFORMANCE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              BACKED BY HUMAN PHYSIOLOGY.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Traditional energy drinks rely on sugar rushes and chemical stimulants. 
            POWER ONE is precision-formulated to maximize cerebral clarity, physical stamina, and cellular hydration.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-black text-2xl text-white block">{item.stat}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">{item.statLabel}</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <span className="block text-xs font-mono text-emerald-400/90 font-medium mb-3">
                  {item.subtitle}
                </span>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Head-To-Head Comparison Matrix */}
        <div className="rounded-3xl bg-slate-900/70 border border-white/10 overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl font-black text-white">
                THE REALITY CHECK: POWER ONE VS THE REST
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                See how our clean formula stands against old-school gas station cans and coffee.
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              100% TRANSPARENT LABEL
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-slate-400 bg-black/40">
                  <th className="py-4 px-6 font-semibold">Metrics & Ingredients</th>
                  <th className="py-4 px-6 font-bold text-emerald-400 bg-emerald-500/10 border-x border-emerald-500/20">
                    POWER ONE
                  </th>
                  <th className="py-4 px-6 font-semibold">Gas Station Brands</th>
                  <th className="py-4 px-6 font-semibold">Traditional Coffee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-bold text-white bg-emerald-500/5 border-x border-emerald-500/20 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{row.powerOne}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {row.coffee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
