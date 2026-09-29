import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Check, ShoppingBag, Zap, Award } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function EnergyQuiz({ products, onAddToCart }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    arena: null,
    flavorPreference: null,
    duration: null,
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      step: 1,
      title: 'What is your primary battleground?',
      subtitle: 'Select the arena where you need peak cognitive or physical stamina.',
      options: [
        { id: 'esports', label: 'Competitive Gaming & Streaming', desc: 'Sub-second reaction times, zero hand tremor, tunnel focus', icon: '🎮', flavorHint: 'cyber-berry' },
        { id: 'gym', label: 'High-Output Athletics & Gym', desc: 'Cellular pump, electrolyte hydration, explosive endurance', icon: '⚡', flavorHint: 'solar-flare' },
        { id: 'dev', label: 'Software Dev & Deep Work', desc: 'Prolonged cognitive flow state, no caffeine jitter or crash', icon: '💻', flavorHint: 'original-volt' },
        { id: 'shift', label: 'Night Shift & High-Stress Demands', desc: 'Crisp instant alertness, zero sugar, easy on stomach', icon: '🌙', flavorHint: 'arctic-zero' },
      ]
    },
    {
      step: 2,
      title: 'What flavor sensation hits best?',
      subtitle: 'Every Power One formula uses real fruit botanical essences.',
      options: [
        { id: 'citrus', label: 'Crisp Lime & Zesty Citrus', desc: 'Electric spark, sharp bite, ultra-refreshing', icon: '🍋', flavorHint: 'original-volt' },
        { id: 'berry', label: 'Wild Blackberry & Blue Raz', desc: 'Crushed dark fruit notes, rich tart finish', icon: '🍇', flavorHint: 'cyber-berry' },
        { id: 'tropical', label: 'Juicy Mango & Blood Orange', desc: 'Sun-drenched citrus wave, tropical hydration', icon: '🥭', flavorHint: 'solar-flare' },
        { id: 'ice', label: 'Sub-Zero Glacier Frost', desc: 'Freezing cold clean mint-citrus, 0 calories', icon: '❄️', flavorHint: 'arctic-zero' },
      ]
    },
    {
      step: 3,
      title: 'What is your target energy duration?',
      subtitle: 'Our Suntheanine® L-Theanine buffer provides clean linear burn.',
      options: [
        { id: 'short', label: '3-4 Hours High-Intensity Sprint', desc: 'Quick session, easy wind-down for evening sleep', icon: '⚡' },
        { id: 'medium', label: '6-8 Hours Sustained Cognitive Flow', desc: 'All-day productivity without the 3 PM wall', icon: '🔋' },
        { id: 'long', label: '10+ Hours Maximum Voltage Grind', desc: 'Tournament final, double shift, or long-distance trek', icon: '🔥' },
      ]
    }
  ];

  const handleSelectOption = (qIdx, option) => {
    sound.playZap();
    const updatedAnswers = { ...answers };
    if (qIdx === 0) updatedAnswers.arena = option;
    if (qIdx === 1) updatedAnswers.flavorPreference = option;
    if (qIdx === 2) updatedAnswers.duration = option;
    setAnswers(updatedAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate matched product
      calculateMatch(updatedAnswers);
    }
  };

  const calculateMatch = (finalAnswers) => {
    // Determine product based on flavor preference or arena
    const preferredId = finalAnswers.flavorPreference?.flavorHint || finalAnswers.arena?.flavorHint || 'original-volt';
    const matched = products.find(p => p.id === preferredId) || products[0];
    setResult(matched);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({ arena: null, flavorPreference: null, duration: null });
    setResult(null);
  };

  const handleAddMatchedToCart = () => {
    if (!result) return;
    onAddToCart(result, '12-pack', 1);
    sound.playCanPop();
  };

  return (
    <section id="quiz" className="py-20 lg:py-28 relative bg-[#07080d] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            AI ENERGY MATCHER
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white">
            FIND YOUR PERFECT VOLTAGE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Take the 30-second formula diagnostic to match your daily output requirements with our targeted nootropic blends.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {!result ? (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                  STEP {step} OF 3
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((num) => (
                    <div 
                      key={num}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        step === num 
                          ? 'w-10 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                          : step > num 
                            ? 'w-4 bg-emerald-700' 
                            : 'w-4 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Question */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  {questions[step - 1].title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {questions[step - 1].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {questions[step - 1].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(step - 1, option)}
                    className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/50 transition-all text-left group flex items-start gap-4 cursor-pointer hover:scale-[1.01]"
                  >
                    <span className="text-2xl p-2.5 rounded-xl bg-black/40 border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {option.icon}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-base text-white group-hover:text-emerald-400 transition-colors">
                        {option.label}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {option.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Result Screen */
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                  <Award className="w-4 h-4" />
                  <span>DIAGNOSTIC COMPLETE • 99.4% COMPATIBILITY MATCH</span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Quiz
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                    <img 
                      src={result.image} 
                      alt={result.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div 
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{ backgroundColor: result.accentColor }}
                    />
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <span 
                    className="text-xs font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 inline-block"
                    style={{ color: result.accentColor }}
                  >
                    RECOMMENDED VOLTAGE MATCH
                  </span>

                  <h3 className="font-heading text-3xl sm:text-4xl font-black text-white">
                    {result.name} ({result.subtitle})
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Based on your profile for <strong className="text-white">{answers.arena?.label}</strong>, 
                    this formula gives you the ideal ratio of {result.caffeine} botanical caffeine and cellular electrolytes for prolonged endurance.
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      ⚡ QUIZ BONUS UNLOCKED: 15% OFF YOUR 12-PACK CASE
                    </div>
                    <div className="text-xs text-slate-400">
                      Use code <strong className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">QUIZ15</strong> at checkout or claim now directly into your cart.
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={handleAddMatchedToCart}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-heading font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 text-black cursor-pointer hover:scale-105 transition-all shadow-xl"
                      style={{
                        backgroundColor: result.accentColor,
                        boxShadow: `0 0 25px ${result.accentGlow}`
                      }}
                    >
                      <ShoppingBag className="w-4 h-4 fill-current" />
                      <span>ADD 12-PACK CASE • $29.99</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono font-semibold"
                    >
                      Try Different Answers
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
