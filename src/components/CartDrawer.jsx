import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [promoInput, setPromoInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = items.reduce((sum, item) => {
    const unitPrice = item.product.pricing[item.packSize].price;
    return sum + (unitPrice * item.quantity);
  }, 0);

  const freeShippingThreshold = 45.00;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingCost = isFreeShipping || subtotal === 0 ? 0.00 : 5.99;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal).toFixed(2);

  // Discount calculation
  let discountAmount = 0;
  if (appliedDiscount) {
    discountAmount = (subtotal * appliedDiscount.rate);
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost).toFixed(2);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (code === 'POWER20' || code === 'VOLTAGE20') {
      setAppliedDiscount({ code, rate: 0.20, label: '20% OFF' });
      setPromoError('');
      sound.playCartChime();
    } else if (code === 'QUIZ15') {
      setAppliedDiscount({ code, rate: 0.15, label: '15% OFF' });
      setPromoError('');
      sound.playCartChime();
    } else if (code === 'VOLTAGE10') {
      setAppliedDiscount({ code, rate: 0.10, label: '10% OFF' });
      setPromoError('');
      sound.playCartChime();
    } else {
      setPromoError('Invalid code. Try POWER20 or QUIZ15');
    }
  };

  const handleSimulatedCheckout = () => {
    setIsCheckingOut(true);

    setTimeout(() => {
      setIsCheckingOut(false);
      const orderNum = 'PO-' + Math.floor(100000 + Math.random() * 900000);
      setOrderSuccess({
        orderNumber: orderNum,
        total: finalTotal,
        itemsCount: items.reduce((acc, i) => acc + i.quantity, 0)
      });

      // Blast celebratory confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#38bdf8', '#a855f7', '#f97316', '#ffffff']
      });

      sound.playCartChime();
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#080a0f] border-l border-white/10 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h2 className="font-heading font-black text-xl text-white">YOUR FUEL CART</h2>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs font-mono font-bold text-slate-300">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {orderSuccess ? (
            /* Order Success State */
            <div className="p-8 text-center my-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl text-white">
                  VOLTAGE CONFIRMED!
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Order #{orderSuccess.orderNumber} is being prepared at our cold-storage facility.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-left text-xs space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Charged:</span>
                  <span className="text-emerald-400 font-bold">${orderSuccess.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Delivery:</span>
                  <span className="text-white font-bold">2-3 Business Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Carrier:</span>
                  <span className="text-white">Priority Cold-Track Express</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setOrderSuccess(null);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-black text-sm tracking-wide transition-all shadow-lg"
              >
                CONTINUE EXPLORING
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Meter */}
              <div className="px-6 py-3.5 bg-slate-900/80 border-b border-white/5 space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">
                    {isFreeShipping ? (
                      <strong className="text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> FREE EXPEDITED SHIPPING UNLOCKED!
                      </strong>
                    ) : (
                      <>Add <strong className="text-white">${amountToFreeShipping}</strong> for Free Shipping</>
                    )}
                  </span>
                  <span className="text-slate-400">{Math.round(progressPercent)}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-white/5">
                {items.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-white">Your Cart Is Empty</h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                        Add an Electric Volt, Cyber Berry, Solar Flare or Arctic Zero pack to charge your performance.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold"
                    >
                      BROWSE FLAVORS
                    </button>
                  </div>
                ) : (
                  items.map((item) => {
                    const price = item.product.pricing[item.packSize].price;
                    return (
                      <div key={`${item.product.id}-${item.packSize}`} className="pt-4 first:pt-0 flex gap-4 items-center">
                        <div className="w-16 h-20 rounded-xl bg-black/60 border border-white/10 overflow-hidden flex-shrink-0 p-1">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading font-black text-white text-sm truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400 block capitalize">
                            {item.packSize.replace('-', ' ')}
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-400 mt-0.5 block">
                            ${(price * item.quantity).toFixed(2)}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center rounded-lg bg-black/60 border border-white/10 p-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.packSize, item.quantity - 1)}
                                className="p-1 text-slate-400 hover:text-white"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-7 text-center font-mono text-xs text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.packSize, item.quantity + 1)}
                                className="p-1 text-slate-400 hover:text-white"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.product.id, item.packSize)}
                              className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {items.length > 0 && (
                <div className="p-6 bg-slate-950/90 border-t border-white/10 space-y-4">
                  
                  {/* Promo Code Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Discount code (try POWER20)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-slate-500 outline-none focus:border-emerald-500 uppercase"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold"
                    >
                      Apply
                    </button>
                  </form>

                  {appliedDiscount && (
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                      <span>Code {appliedDiscount.code} applied ({appliedDiscount.label})</span>
                      <button 
                        onClick={() => setAppliedDiscount(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {promoError && (
                    <div className="text-[11px] font-mono text-rose-400">
                      {promoError}
                    </div>
                  )}

                  {/* Financial Breakdown */}
                  <div className="space-y-1.5 text-xs font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Subtotal:</span>
                      <span className="text-white">${subtotal.toFixed(2)}</span>
                    </div>

                    {appliedDiscount && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount ({appliedDiscount.label}):</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-slate-400">Expedited Shipping:</span>
                      <span className="text-white">
                        {shippingCost === 0 ? <strong className="text-emerald-400">FREE</strong> : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                      <span>Total:</span>
                      <span className="text-emerald-400">${finalTotal}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    disabled={isCheckingOut}
                    onClick={handleSimulatedCheckout}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:opacity-95 text-black font-heading font-black text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/25 cursor-pointer disabled:opacity-50"
                  >
                    {isCheckingOut ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        PROCESSING VOLTAGE ORDER...
                      </span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>EXPRESS CHECKOUT • ${finalTotal}</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-slate-500 pt-1">
                    <span>🔒 256-Bit SSL Encrypted</span>
                    <span>•</span>
                    <span>30-Day Taste Guarantee</span>
                  </div>

                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
