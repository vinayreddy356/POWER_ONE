import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorShowcase from './components/FlavorShowcase';
import FormulaScience from './components/FormulaScience';
import EnergyQuiz from './components/EnergyQuiz';
import Ambassadors from './components/Ambassadors';
import ReviewsSection from './components/ReviewsSection';
import StoreLocator from './components/StoreLocator';
import CartDrawer from './components/CartDrawer';
import NutritionModal from './components/NutritionModal';
import Footer from './components/Footer';

import { PRODUCTS } from './data/products';
import { sound } from './utils/soundEffects';

export default function App() {
  const [products] = useState(PRODUCTS);
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);
  const [cartItems, setCartItems] = useState([
    // Start with 1 item in cart so user can immediately experience the cart features
    { product: PRODUCTS[0], packSize: '12-pack', quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [nutritionProduct, setNutritionProduct] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [toast, setToast] = useState(null);

  // Cart total count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add to cart handler
  const handleAddToCart = (product, packSize = '12-pack', quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.packSize === packSize
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, packSize, quantity }];
      }
    });

    // Show temporary toast notification
    const packLabel = packSize.replace('-', ' ');
    setToast(`${quantity}x ${product.name} (${packLabel}) added to your crate!`);
    setTimeout(() => setToast(null), 3500);

    // Boost voltage slightly on order
    setBatteryLevel(prev => Math.min(100, prev + 5));
  };

  // Quantity modification
  const handleUpdateQuantity = (productId, packSize, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId, packSize);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.packSize === packSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Remove item
  const handleRemoveItem = (productId, packSize) => {
    setCartItems(prev =>
      prev.filter(item => !(item.product.id === productId && item.packSize === packSize))
    );
  };

  // Clear cart on checkout
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Recharge battery clicker
  const handleRechargeBattery = () => {
    setBatteryLevel(100);
    setToast('⚡ VOLTAGE AT MAXIMUM 100%! SYSTEM READY.');
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-slate-900 border border-emerald-500/50 text-white text-xs font-mono font-bold shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>{toast}</span>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-emerald-400 hover:text-emerald-300 underline uppercase"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeColor={activeProduct.accentColor}
        batteryLevel={batteryLevel}
        onRechargeBattery={handleRechargeBattery}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          products={products}
          activeProduct={activeProduct}
          onSelectProduct={setActiveProduct}
          onAddToCart={handleAddToCart}
        />

        {/* Flavor Showcase */}
        <FlavorShowcase
          products={products}
          onAddToCart={handleAddToCart}
          onOpenNutrition={setNutritionProduct}
        />

        {/* Clean Science & Formula Comparison */}
        <FormulaScience />

        {/* Interactive Energy Matcher Quiz */}
        <EnergyQuiz
          products={products}
          onAddToCart={handleAddToCart}
        />

        {/* Athletes & Ambassadors */}
        <Ambassadors />

        {/* Customer Reviews & Verification */}
        <ReviewsSection
          products={products}
        />

        {/* Store Locator */}
        <StoreLocator />

      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Nutrition Facts Modal */}
      <NutritionModal
        product={nutritionProduct}
        onClose={() => setNutritionProduct(null)}
      />

    </div>
  );
}
