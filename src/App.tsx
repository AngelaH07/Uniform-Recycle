/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectInfo } from './components/ProjectInfo';
import { EcoImpactCalculator } from './components/EcoImpactCalculator';
import { StoreCatalog } from './components/StoreCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { DonationModal } from './components/DonationModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SavedModal } from './components/SavedModal';
import { ResearchMissionSection } from './components/ResearchMissionSection';
import { AboutUsSection } from './components/AboutUsSection';

import { UniformItem, CartItem, Order, DonationSubmission } from './types';
import { INITIAL_UNIFORM_ITEMS, CAMPUS_SURFACE_IMAGE } from './data/mockData';
import { CheckCircle2, ShoppingBag, Sparkles } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('about-us');
  const [itemsCatalog] = useState<UniformItem[]>(INITIAL_UNIFORM_ITEMS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('greenthread_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [savedItemIds, setSavedItemIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('greenthread_saved');
      return saved ? JSON.parse(saved) : ['item-1', 'item-3'];
    } catch {
      return ['item-1', 'item-3'];
    }
  });

  // Pre-stored demo orders for tracker lookup
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'UNIFORM-8492',
      customerName: 'Sarah Miller',
      email: 'sarah.m@example.com',
      phone: '(555) 019-2834',
      items: [
        { item: INITIAL_UNIFORM_ITEMS[0], quantity: 1 },
        { item: INITIAL_UNIFORM_ITEMS[5], quantity: 1 }
      ],
      subtotal: 15.00,
      discount: 0,
      deliveryFee: 0,
      total: 15.00,
      deliveryMethod: 'school_pickup',
      pickupSchoolId: 'school-st-judes',
      paymentMethod: 'pay_on_pickup',
      status: 'Ready for Pickup',
      createdAt: '2026-08-11',
      estimatedDeliveryOrPickupDate: 'Available Today (St. Jude Reception Desk)',
    },
    {
      id: 'UNIFORM-5120',
      customerName: 'David Chen',
      email: 'd.chen@example.com',
      phone: '(555) 012-9876',
      items: [
        { item: INITIAL_UNIFORM_ITEMS[1], quantity: 1 },
        { item: INITIAL_UNIFORM_ITEMS[6], quantity: 1 }
      ],
      subtotal: 18.00,
      discount: 1.80,
      deliveryFee: 2.99,
      total: 19.19,
      deliveryMethod: 'home_delivery',
      deliveryAddress: { street: '14 Oakridge Way', city: 'West Valley', postalCode: '90210' },
      paymentMethod: 'card',
      status: 'Shipped',
      createdAt: '2026-08-10',
      estimatedDeliveryOrPickupDate: '2026-08-14 via Eco Postal',
    }
  ]);

  // Modal visibility states
  const [selectedProduct, setSelectedProduct] = useState<UniformItem | null>(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Search filter propagation
  const [searchFilter, setSearchFilter] = useState('');

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('greenthread_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('greenthread_saved', JSON.stringify(savedItemIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedItemIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (item: UniformItem, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + qty } : ci
        );
      }
      return [...prev, { item, quantity: qty }];
    });
    showToast(`Added "${item.title}" to your basket!`);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleSave = (itemId: string) => {
    setSavedItemIds((prev) => {
      const exists = prev.includes(itemId);
      if (exists) {
        showToast('Removed item from wishlist');
        return prev.filter((id) => id !== itemId);
      } else {
        showToast('Saved item to your wishlist!');
        return [...prev, itemId];
      }
    });
  };

  // Bundle helper
  const handleAddBundleToCart = (schoolId: string) => {
    const schoolItems = itemsCatalog.filter(i => i.schoolId === schoolId || i.schoolId === 'school-all');
    if (schoolItems.length > 0) {
      // Pick up to 3 complementary items
      const selectedBundle = schoolItems.slice(0, 3);
      selectedBundle.forEach(item => {
        handleAddToCart(item, 1);
      });
      setIsCartOpen(true);
      showToast('Starter uniform bundle added to basket with 15% discount!');
    }
  };

  const handleCompleteOrder = (order: Order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const handleDonationSubmit = (donation: DonationSubmission) => {
    showToast(`Donation pass #${donation.id} generated!`);
  };

  const scrollToStore = () => {
    setActiveTab('store');
    const el = document.getElementById('store');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const savedItemsObjects = itemsCatalog.filter((i) => savedItemIds.includes(i.id));

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#DCFCE7] selection:text-[#166534]">
      
      <div className="relative z-10 space-y-6 pb-12">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-emerald-950 text-white px-5 py-3 rounded-2xl shadow-2xl border border-emerald-500 flex items-center gap-3 animate-in slide-in-from-bottom duration-200 text-xs font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.reduce((sum, c) => sum + c.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
        openDonationModal={() => setIsDonationModalOpen(true)}
        openOrderTracker={() => setIsOrderTrackerOpen(true)}
        savedCount={savedItemIds.length}
        openSavedModal={() => setIsSavedModalOpen(true)}
      />

      {/* Single Page View Switching based on activeTab */}
      <main className="min-h-[70vh]">
        {activeTab === 'about' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <Hero
              onSearch={(term) => {
                setSearchFilter(term);
                setActiveTab('store');
              }}
              openDonationModal={() => setIsDonationModalOpen(true)}
              scrollToStore={() => setActiveTab('store')}
            />

            <ProjectInfo
              openDonationModal={() => setIsDonationModalOpen(true)}
              scrollToStore={() => setActiveTab('store')}
              scrollToSurvey={() => setActiveTab('survey')}
              scrollToAboutUs={() => setActiveTab('about-us')}
            />
          </div>
        )}

        {activeTab === 'about-us' && (
          <div className="animate-in fade-in duration-300">
            <AboutUsSection
              scrollToStore={() => setActiveTab('store')}
              openDonationModal={() => setIsDonationModalOpen(true)}
            />
          </div>
        )}

        {activeTab === 'survey' && (
          <div className="animate-in fade-in duration-300">
            <ResearchMissionSection
              scrollToStore={() => scrollToSection('store')}
              openDonationModal={() => setIsDonationModalOpen(true)}
              openCalculator={() => scrollToSection('calculator')}
            />
          </div>
        )}

        {activeTab === 'store' && (
          <div className="animate-in fade-in duration-300">
            <StoreCatalog
              items={itemsCatalog}
              onSelectItem={(item) => setSelectedProduct(item)}
              onAddToCart={(item) => handleAddToCart(item, 1)}
              savedItemIds={savedItemIds}
              onToggleSave={handleToggleSave}
              searchQueryFilter={searchFilter}
              setSearchQueryFilter={setSearchFilter}
              onAddBundleToCart={handleAddBundleToCart}
            />
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="animate-in fade-in duration-300">
            <EcoImpactCalculator />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <ContactSection
              openDonationModal={() => setIsDonationModalOpen(true)}
              onSelectSchool={(schoolId) => {
                setSearchFilter('');
                setActiveTab('store');
              }}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        scrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        openDonationModal={() => setIsDonationModalOpen(true)}
        scrollToSection={scrollToSection}
      />

      {/* Modals & Slide-overs */}
      {selectedProduct && (
        <ProductDetailModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(item, qty) => handleAddToCart(item, qty)}
          isSaved={savedItemIds.includes(selectedProduct.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        onSubmitDonation={handleDonationSubmit}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCompleteOrder={handleCompleteOrder}
      />

      <OrderTrackerModal
        isOpen={isOrderTrackerOpen}
        onClose={() => setIsOrderTrackerOpen(false)}
        ordersList={orders}
      />

      <SavedModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedItems={savedItemsObjects}
        onRemoveSave={handleToggleSave}
        onAddToCart={(item) => handleAddToCart(item, 1)}
      />

      </div>

      {/* Universal Page Bottom Developer Credit in Bright Yellow */}
      <footer 
        className="w-full bg-[#090D16] py-3.5 px-4 border-t border-slate-800 text-center text-xs font-bold tracking-wide relative z-20" 
        style={{ color: '#FFE600' }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-6">
          <span>{language === 'zh' ? '网页开发者:骆弈帆' : 'Web Designer: Raven Luo'}</span>
          <span className="opacity-40">•</span>
          <a
            href="mailto:ravenluo0705@gmail.com"
            className="hover:underline transition-all hover:brightness-125"
            style={{ color: '#FFE600' }}
          >
            Email:ravenluo0705@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
