import { X, ShieldCheck, Check } from 'lucide-react';

export default function NutritionModal({ product, onClose }) {
  if (!product) return null;

  const n = product.nutrition;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#090b10] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-14 rounded-lg bg-black/60 border border-white/10 overflow-hidden flex-shrink-0">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
              Official Supplement & Nutrition Facts
            </span>
            <h3 className="font-heading text-2xl font-black text-white">
              {product.name} ({product.subtitle})
            </h3>
          </div>
        </div>

        {/* FDA Styled Box */}
        <div className="border-4 border-white p-4 bg-black text-white rounded-xl font-sans text-xs">
          <h4 className="font-black text-2xl tracking-tighter border-b-8 border-white pb-1 font-sans">
            Nutrition Facts
          </h4>
          <div className="flex justify-between border-b border-white/30 py-1 text-xs">
            <span>Serving Size</span>
            <span className="font-bold">{n.servingSize}</span>
          </div>
          <div className="flex justify-between border-b-4 border-white py-1 text-xs">
            <span>Servings Per Container</span>
            <span className="font-bold">{n.servingsPerContainer}</span>
          </div>

          <div className="flex justify-between items-baseline border-b-4 border-white py-1">
            <div>
              <span className="text-[10px] uppercase font-bold block">Amount Per Serving</span>
              <span className="font-black text-2xl">Calories</span>
            </div>
            <span className="font-black text-3xl font-mono">{n.calories}</span>
          </div>

          <div className="text-right text-[10px] font-bold border-b border-white/30 py-1">
            % Daily Value*
          </div>

          <div className="divide-y divide-white/20 text-xs">
            <div className="flex justify-between py-1">
              <span><strong>Total Fat</strong> {n.totalFat}</span>
              <span className="font-bold">0%</span>
            </div>
            <div className="flex justify-between py-1">
              <span><strong>Sodium</strong> {n.sodium}</span>
              <span className="font-bold">5%</span>
            </div>
            <div className="flex justify-between py-1">
              <span><strong>Total Carbohydrate</strong> {n.totalCarb}</span>
              <span className="font-bold">1%</span>
            </div>
            <div className="flex justify-between py-1 pl-4">
              <span>Total Sugars {n.totalSugars}</span>
              <span>-</span>
            </div>
            <div className="flex justify-between py-1 pl-6 text-slate-300">
              <span>Includes 0g Added Sugars</span>
              <span className="font-bold text-white">0%</span>
            </div>
            <div className="flex justify-between py-1">
              <span><strong>Protein</strong> {n.protein}</span>
              <span>0%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Potassium {n.potassium}</span>
              <span className="font-bold">4%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Magnesium {n.magnesium}</span>
              <span className="font-bold">10%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Niacin (Vit. B3) {n.niacin}</span>
              <span className="font-bold">125%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Vitamin B6 {n.vitaminB6}</span>
              <span className="font-bold">150%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Vitamin B12 {n.vitaminB12}</span>
              <span className="font-bold">250%</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Pantothenic Acid (Vit. B5) {n.pantothenicAcid}</span>
              <span className="font-bold">100%</span>
            </div>
          </div>

          {/* Active Bio-Voltage Complex */}
          <div className="border-t-4 border-white mt-3 pt-2">
            <div className="flex justify-between text-[11px] font-black uppercase tracking-wider mb-2 text-emerald-400">
              <span>Bio-Voltage Nootropic Complex</span>
              <span>Amount</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              {n.activeComplex.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-white/10 pb-1">
                  <div>
                    <span className="font-bold text-white">{item.name}</span>
                    <span className="block text-[10px] text-slate-400">{item.purpose}</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-300">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dietary Certification footer */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
          <span className="flex items-center gap-1 text-emerald-400">
            <Check className="w-3.5 h-3.5" /> 100% Vegan
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <Check className="w-3.5 h-3.5" /> Gluten-Free
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <Check className="w-3.5 h-3.5" /> Keto-Friendly
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <Check className="w-3.5 h-3.5" /> Non-GMO
          </span>
        </div>

      </div>
    </div>
  );
}
