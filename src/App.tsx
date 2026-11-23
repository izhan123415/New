import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BentoCakesSection } from './components/BentoCakesSection';
import { ClassicCakesSection } from './components/ClassicCakesSection';
import { ContactFooter } from './components/ContactFooter';
import { CustomCakesSection } from './components/CustomCakesSection';
import { CustomOrderModal } from './components/CustomOrderModal';
import { DessertsSection } from './components/DessertsSection';
import { GalleryInstagramSection } from './components/GalleryInstagramSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { type BagLineItem, OrderBagDrawer } from './components/OrderBagDrawer';
import { ReviewsSection } from './components/ReviewsSection';
import { StudioManagerModal } from './components/StudioManagerModal';
import {
  DEFAULT_SETTINGS,
  INITIAL_GALLERY,
  INITIAL_PRODUCTS,
  INITIAL_REVIEWS,
} from './data/catalog';
import type {
  CustomInquiryInput,
  ProductItem,
  ReviewItem,
  StudioSettings,
} from './types/bakery';

const STORAGE_PRODUCTS_KEY = 'sweetcraft_products_v6';
const STORAGE_REVIEWS_KEY = 'sweetcraft_reviews_v3';
const STORAGE_SETTINGS_KEY = 'sweetcraft_settings_v3';

function loadStored<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [products, setProducts] = useState<ProductItem[]>(() =>
    loadStored(STORAGE_PRODUCTS_KEY, INITIAL_PRODUCTS),
  );
  const [reviews, setReviews] = useState<ReviewItem[]>(() =>
    loadStored(STORAGE_REVIEWS_KEY, INITIAL_REVIEWS),
  );
  const [settings, setSettings] = useState<StudioSettings>(() =>
    loadStored(STORAGE_SETTINGS_KEY, DEFAULT_SETTINGS),
  );

  const [bagItems, setBagItems] = useState<BagLineItem[]>([]);
  const [bagOpen, setBagOpen] = useState(false);

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderModalType, setOrderModalType] =
    useState<CustomInquiryInput['cakeType']>('Custom Celebration Cake');
  const [managerOpen, setManagerOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(products));
    } catch {
      // Ignore storage quota errors
    }
  }, [products]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_REVIEWS_KEY, JSON.stringify(reviews));
    } catch {
      // Ignore storage quota errors
    }
  }, [reviews]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(settings));
    } catch {
      // Ignore storage quota errors
    }
  }, [settings]);

  const totalBagCount = bagItems.reduce((sum, entry) => sum + entry.quantity, 0);

  function openCustomModal(type: CustomInquiryInput['cakeType']) {
    setOrderModalType(type);
    setOrderModalOpen(true);
  }

  function handleOrderProduct(product: ProductItem) {
    setBagItems((prev) => {
      const existing = prev.find((entry) => entry.product.id === product.id);
      if (existing) {
        return prev.map((entry) =>
          entry.product.id === product.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setBagOpen(true);
  }

  function handleUpdateBagQuantity(productId: string, delta: number) {
    setBagItems((prev) =>
      prev
        .map((entry) =>
          entry.product.id === productId
            ? { ...entry, quantity: entry.quantity + delta }
            : entry,
        )
        .filter((entry) => entry.quantity > 0),
    );
  }

  function handleRemoveBagItem(productId: string) {
    setBagItems((prev) => prev.filter((entry) => entry.product.id !== productId));
  }

  function handleUpdateProductPrice(id: string, price: number | null) {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, priceFrom: price } : item)),
    );
  }

  function handleAddProduct(newItem: ProductItem) {
    setProducts((prev) => [newItem, ...prev]);
  }

  function handleDeleteProduct(id: string) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }

  function handleAddReview(newReview: ReviewItem) {
    setReviews((prev) => [newReview, ...prev]);
  }

  function handleDeleteReview(id: string) {
    setReviews((prev) => prev.filter((item) => item.id !== id));
  }

  function handleResetDefaults() {
    setProducts(INITIAL_PRODUCTS);
    setReviews(INITIAL_REVIEWS);
    setSettings(DEFAULT_SETTINGS);
  }

  return (
    <div className="min-h-screen bg-[#FCF8F4] text-[#2B1C16]">
      <Header
        bagCount={totalBagCount}
        onOpenBag={() => setBagOpen(true)}
      />

      <main>
        <HeroSection whatsappNumber={settings.whatsappNumber} />

        <ClassicCakesSection
          products={products}
          onOrderProduct={handleOrderProduct}
        />

        <BentoCakesSection
          products={products}
          onOrderProduct={handleOrderProduct}
          onRequestCustomBento={() => openCustomModal('Custom Bento Cake')}
        />

        <DessertsSection
          products={products}
          onOrderProduct={handleOrderProduct}
        />

        <CustomCakesSection
          whatsappNumber={settings.whatsappNumber}
          onRequestCustomCake={() => openCustomModal('Custom Celebration Cake')}
        />

        <HowToOrderSection />

        <AboutSection whatsappNumber={settings.whatsappNumber} />

        <GalleryInstagramSection
          gallery={INITIAL_GALLERY}
          settings={settings}
        />

        <ReviewsSection reviews={reviews} />
      </main>

      <ContactFooter
        settings={settings}
        bagCount={totalBagCount}
        onOpenBag={() => setBagOpen(true)}
        onOpenStudioManager={() => setManagerOpen(true)}
        onOpenCustomOrder={() => openCustomModal('Custom Celebration Cake')}
      />

      <OrderBagDrawer
        isOpen={bagOpen}
        items={bagItems}
        whatsappNumber={settings.whatsappNumber}
        onClose={() => setBagOpen(false)}
        onUpdateQuantity={handleUpdateBagQuantity}
        onRemoveItem={handleRemoveBagItem}
        onOpenCustomOrder={() => openCustomModal('Custom Celebration Cake')}
      />

      <CustomOrderModal
        isOpen={orderModalOpen}
        initialType={orderModalType}
        whatsappNumber={settings.whatsappNumber}
        onClose={() => setOrderModalOpen(false)}
      />

      <StudioManagerModal
        isOpen={managerOpen}
        products={products}
        reviews={reviews}
        settings={settings}
        onUpdateProductPrice={handleUpdateProductPrice}
        onAddProduct={handleAddProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddReview={handleAddReview}
        onDeleteReview={handleDeleteReview}
        onUpdateSettings={setSettings}
        onResetDefaults={handleResetDefaults}
        onClose={() => setManagerOpen(false)}
      />
    </div>
  );
}
