import { useState } from 'react';
import {
  IG_BENTO_SHEEP,
  IG_BURGUNDY_BOW_CAKE,
  IG_CHOC_STRAWBERRY_LAYER,
  IG_FLORAL_MUM_CAKE,
  IG_GIFT_BOXES,
  IG_HEART_BOWS,
  IG_KYIV_CHOCOLATE,
  IG_MEDOVIK_SLICE_BERRY,
  IG_NAPOLEON_RASPBERRY,
  IG_RASPBERRY_LAMBETH,
  IG_RASPBERRY_MOUSSE,
  IG_RED_HEART_CAKE,
  IG_SPARTAK_GLAZE,
  IMG_DESSERTS_ROLLS,
  IMG_MOUSSE_MANGO,
  IMG_PUMPKIN_CRUMBLE,
  IMG_TRES_LECHES,
} from '../data/catalog';
import type {
  ProductCategory,
  ProductItem,
  ReviewItem,
  StudioSettings,
} from '../types/bakery';
import {
  sanitizePhoneNumber,
  validateNewProductInput,
  validateNewReviewInput,
} from '../utils/whatsapp';
import { CloseVector } from './Icons';

interface StudioManagerModalProps {
  isOpen: boolean;
  products: ProductItem[];
  reviews: ReviewItem[];
  settings: StudioSettings;
  onUpdateProductPrice: (id: string, price: number | null) => void;
  onAddProduct: (item: ProductItem) => void;
  onDeleteProduct: (id: string) => void;
  onAddReview: (review: ReviewItem) => void;
  onDeleteReview: (id: string) => void;
  onUpdateSettings: (next: StudioSettings) => void;
  onResetDefaults: () => void;
  onClose: () => void;
}

const IMAGE_PRESETS = [
  { label: 'Raspberry Vintage Lambeth Cake', value: IG_RASPBERRY_LAMBETH },
  { label: 'Medovik / Honey Cake', value: IG_MEDOVIK_SLICE_BERRY },
  { label: 'Napoleon with Raspberries', value: IG_NAPOLEON_RASPBERRY },
  { label: 'Spartak Chocolate Honey', value: IG_SPARTAK_GLAZE },
  { label: 'Kyiv Hazelnut Meringue', value: IG_KYIV_CHOCOLATE },
  { label: 'Chocolate Strawberry Layered Cake', value: IG_CHOC_STRAWBERRY_LAYER },
  { label: 'Bento Heart Cake', value: IG_RED_HEART_CAKE },
  { label: 'Coquette Ivory Heart with Bows', value: IG_HEART_BOWS },
  { label: 'Illustrated Bento Box', value: IG_BENTO_SHEEP },
  { label: 'Floral Celebration Cake', value: IG_FLORAL_MUM_CAKE },
  { label: 'Burgundy Ribbon Celebration Cake', value: IG_BURGUNDY_BOW_CAKE },
  { label: 'Raspberry Mousse Entremet', value: IG_RASPBERRY_MOUSSE },
  { label: 'Mango & Passion Fruit Mousse', value: IMG_MOUSSE_MANGO },
  { label: 'Rolls & Cinnamon Pastries', value: IMG_DESSERTS_ROLLS },
  { label: 'Apple Crumble & Pumpkin Pie', value: IMG_PUMPKIN_CRUMBLE },
  { label: 'Milk Cake / Poppy Seed Roll', value: IMG_TRES_LECHES },
  { label: 'Sweet Craft Gift Boxes', value: IG_GIFT_BOXES },
];

type ManagerTab = 'products' | 'add-product' | 'reviews' | 'settings';

export function StudioManagerModal({
  isOpen,
  products,
  reviews,
  settings,
  onUpdateProductPrice,
  onAddProduct,
  onDeleteProduct,
  onAddReview,
  onDeleteReview,
  onUpdateSettings,
  onResetDefaults,
  onClose,
}: StudioManagerModalProps) {
  const [activeTab, setActiveTab] = useState<ManagerTab>('products');

  // New Product state
  const [newName, setNewName] = useState('');
  const [newCategory, setNewCategory] = useState<ProductCategory>('classic');
  const [newDesc, setNewDesc] = useState('');
  const [newServings, setNewServings] = useState('8–10 portions');
  const [newPriceType, setNewPriceType] = useState<'starting' | 'fixed'>('starting');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState(IG_RASPBERRY_LAMBETH);
  const [productError, setProductError] = useState('');

  // New Review state
  const [revName, setRevName] = useState('');
  const [revLocation, setRevLocation] = useState('London');
  const [revItem, setRevItem] = useState('');
  const [revQuote, setRevQuote] = useState('');
  const [reviewError, setReviewError] = useState('');

  // Settings state
  const [waDisplay, setWaDisplay] = useState(settings.whatsappDisplay);
  const [igHandle, setIgHandle] = useState(settings.instagramHandle);
  const [settingsSaved, setSettingsSaved] = useState(false);

  if (!isOpen) return null;

  function handleCreateProduct(e: React.FormEvent) {
    e.preventDefault();
    const check = validateNewProductInput({
      name: newName,
      description: newDesc,
      servings: newServings,
      priceInput: newPrice,
      priceType: newPriceType,
    });
    if (!check.valid) {
      setProductError(check.error || 'Please check the product details.');
      return;
    }

    setProductError('');
    onAddProduct({
      id: `custom-${Date.now()}`,
      name: newName.trim(),
      category: newCategory,
      description: newDesc.trim(),
      priceFrom: check.parsedPrice,
      priceType: newPriceType,
      servings: newServings.trim(),
      image: newImage,
      seasonal: true,
    });
    setNewName('');
    setNewDesc('');
    setNewPrice('');
    setActiveTab('products');
  }

  function handleCreateReview(e: React.FormEvent) {
    e.preventDefault();
    const check = validateNewReviewInput({
      customerName: revName,
      location: revLocation,
      orderedItem: revItem,
      quote: revQuote,
    });
    if (!check.valid) {
      setReviewError(check.error || 'Please complete all testimonial fields.');
      return;
    }
    setReviewError('');
    onAddReview({
      id: `rev-${Date.now()}`,
      customerName: revName.trim(),
      location: revLocation.trim() || 'London',
      orderedItem: revItem.trim(),
      quote: revQuote.trim(),
    });
    setRevName('');
    setRevItem('');
    setRevQuote('');
  }

  function handleSaveSettings(e: React.FormEvent) {
    e.preventDefault();
    const digits = sanitizePhoneNumber(waDisplay);
    if (!digits) return;
    const handleClean = igHandle.trim().startsWith('@')
      ? igHandle.trim()
      : `@${igHandle.trim()}`;
    const igSlug = handleClean.replace(/^@/, '');
    onUpdateSettings({
      ...settings,
      whatsappNumber: digits,
      whatsappDisplay: waDisplay.trim(),
      instagramHandle: handleClean,
      instagramUrl: `https://www.instagram.com/${igSlug}/`,
    });
    setSettingsSaved(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#36241C]/50 p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-manager-title"
    >
      <div className="w-full max-w-3xl rounded-2xl border border-[#DFCFC2] bg-[#FCF8F4] p-6 sm:p-8 shadow-xl my-auto max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 border-b border-[#E9DCD1] pb-4">
          <div>
            <h2
              id="studio-manager-title"
              className="font-display text-3xl font-semibold text-[#36241C]"
            >
              Manage Menu &amp; Reviews
            </h2>
            <p className="mt-1 text-base text-[#5B4136]">
              Update prices, add seasonal cakes, add customer reviews, or update your WhatsApp
              number. Changes save automatically in this browser.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close studio manager"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5D5CB] bg-[#FFFDF9] text-[#5B4136] hover:bg-[#F2E7DC] hover:text-[#36241C] shrink-0 cursor-pointer"
          >
            <CloseVector className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          role="tablist"
          aria-label="Studio manager sections"
          className="mt-5 flex flex-wrap gap-1 rounded-lg border border-[#E5D5CB] bg-[#F2E7DC] p-1"
        >
          {(
            [
              { id: 'products', label: `Prices & Menu (${products.length})` },
              { id: 'add-product', label: 'Add Product' },
              { id: 'reviews', label: `Reviews (${reviews.length})` },
              { id: 'settings', label: 'Contact Details' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[40px] rounded-md px-4 py-1.5 text-base font-medium cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#4A3326] text-[#FCF8F4]'
                  : 'text-[#5B4136] hover:text-[#36241C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Edit prices & delete items */}
        {activeTab === 'products' && (
          <div className="mt-6 space-y-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-xl border border-[#EADCD2] bg-[#FFFDF9] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-base font-semibold text-[#36241C]">{item.name}</p>
                  <p className="text-base text-[#765B4F]">
                    {item.category} · {item.servings}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <label htmlFor={`price-${item.id}`} className="text-base text-[#5B4136]">
                    £
                  </label>
                  <input
                    id={`price-${item.id}`}
                    type="number"
                    min="1"
                    step="1"
                    aria-label={`Price in pounds for ${item.name}`}
                    value={item.priceFrom ?? ''}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!Number.isNaN(val) && val > 0) {
                        onUpdateProductPrice(item.id, val);
                      }
                    }}
                    className="w-24 min-h-[40px] rounded-lg border border-[#E2D2C6] bg-[#FCF8F4] px-3 py-1.5 text-base tabular-nums text-[#36241C]"
                  />

                  <button
                    type="button"
                    onClick={() => onDeleteProduct(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="min-h-[40px] rounded-lg border border-[#E2CACA] bg-[#FCF8F4] px-3.5 py-1.5 text-base text-[#8A2E25] hover:bg-[#F8EBEC] cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Add New Product */}
        {activeTab === 'add-product' && (
          <form onSubmit={handleCreateProduct} noValidate className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="new-prod-name" className="block text-base font-medium text-[#36241C]">
                  Cake or dessert name *
                </label>
                <input
                  id="new-prod-name"
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Seasonal Pear & Almond Tart"
                  className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
                />
              </div>

              <div>
                <label htmlFor="new-prod-cat" className="block text-base font-medium text-[#36241C]">
                  Section
                </label>
                <select
                  id="new-prod-cat"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as ProductCategory)}
                  className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
                >
                  <option value="classic">Classic Cakes</option>
                  <option value="bento">Bento Cakes</option>
                  <option value="mousse">Mousse Cakes</option>
                  <option value="dessert">Desserts &amp; Pastries</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="new-prod-desc" className="block text-base font-medium text-[#36241C]">
                Short description *
              </label>
              <textarea
                id="new-prod-desc"
                rows={2}
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="Describe layers, cream, and flavour notes."
                className="mt-1.5 w-full rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="new-prod-price-type" className="block text-base font-medium text-[#36241C]">
                  Pricing format
                </label>
                <select
                  id="new-prod-price-type"
                  value={newPriceType}
                  onChange={(e) => setNewPriceType(e.target.value as 'starting' | 'fixed')}
                  className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
                >
                  <option value="starting">Starting from (£)</option>
                  <option value="fixed">Fixed price (£)</option>
                </select>
              </div>

              <div>
                <label htmlFor="new-prod-price" className="block text-base font-medium text-[#36241C]">
                  Price (£) *
                </label>
                <input
                  id="new-prod-price"
                  type="number"
                  min="1"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="36"
                  className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
                />
              </div>

              <div>
                <label htmlFor="new-prod-servings" className="block text-base font-medium text-[#36241C]">
                  Serving size *
                </label>
                <input
                  id="new-prod-servings"
                  type="text"
                  value={newServings}
                  onChange={(e) => setNewServings(e.target.value)}
                  placeholder="8–10 portions"
                  className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="new-prod-img" className="block text-base font-medium text-[#36241C]">
                Photo preset
              </label>
              <select
                id="new-prod-img"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
              >
                {IMAGE_PRESETS.map((preset) => (
                  <option key={preset.label} value={preset.value}>
                    {preset.label}
                  </option>
                ))}
              </select>
            </div>

            {productError && (
              <p className="text-base text-[#A33645]">{productError}</p>
            )}

            <button
              type="submit"
              className="inline-flex min-h-[46px] items-center rounded-lg bg-[#4A3326] px-6 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#36241C] cursor-pointer"
            >
              Add to Menu
            </button>
          </form>
        )}

        {/* Tab 3: Customer Reviews */}
        {activeTab === 'reviews' && (
          <div className="mt-6 space-y-6">
            <form onSubmit={handleCreateReview} noValidate className="space-y-4 rounded-xl border border-[#EADCD2] bg-[#FFFDF9] p-5">
              <h3 className="font-display text-2xl font-semibold text-[#36241C]">
                Add Customer Review
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor="rev-name" className="block text-base font-medium text-[#36241C]">
                    Customer name *
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    value={revName}
                    onChange={(e) => setRevName(e.target.value)}
                    placeholder="e.g. Hannah Lewis"
                    className="mt-1 w-full min-h-[42px] rounded-lg border border-[#E2D2C6] bg-[#FCF8F4] px-3 py-1.5 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="rev-item" className="block text-base font-medium text-[#36241C]">
                    Cake ordered *
                  </label>
                  <input
                    id="rev-item"
                    type="text"
                    value={revItem}
                    onChange={(e) => setRevItem(e.target.value)}
                    placeholder="e.g. Victoria Sponge"
                    className="mt-1 w-full min-h-[42px] rounded-lg border border-[#E2D2C6] bg-[#FCF8F4] px-3 py-1.5 text-base"
                  />
                </div>
                <div>
                  <label htmlFor="rev-loc" className="block text-base font-medium text-[#36241C]">
                    London area
                  </label>
                  <input
                    id="rev-loc"
                    type="text"
                    value={revLocation}
                    onChange={(e) => setRevLocation(e.target.value)}
                    placeholder="Chelsea, London"
                    className="mt-1 w-full min-h-[42px] rounded-lg border border-[#E2D2C6] bg-[#FCF8F4] px-3 py-1.5 text-base"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="rev-quote" className="block text-base font-medium text-[#36241C]">
                  Review text *
                </label>
                <textarea
                  id="rev-quote"
                  rows={2}
                  value={revQuote}
                  onChange={(e) => setRevQuote(e.target.value)}
                  placeholder="Share what your customer loved."
                  className="mt-1 w-full rounded-lg border border-[#E2D2C6] bg-[#FCF8F4] px-3 py-2 text-base"
                />
              </div>
              {reviewError && <p className="text-base text-[#A33645]">{reviewError}</p>}
              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-[#4A3326] px-5 py-2 text-base font-medium text-[#FCF8F4] hover:bg-[#36241C] cursor-pointer"
              >
                Save Review
              </button>
            </form>

            <div className="space-y-3">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="flex flex-col gap-3 rounded-xl border border-[#EADCD2] bg-[#FFFDF9] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-base font-semibold text-[#36241C]">
                      {rev.customerName} — {rev.orderedItem}
                    </p>
                    <p className="mt-1 text-base text-[#5B4136]">&ldquo;{rev.quote}&rdquo;</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDeleteReview(rev.id)}
                    className="self-start sm:self-center min-h-[40px] rounded-lg border border-[#E2CACA] px-3.5 py-1.5 text-base text-[#8A2E25] hover:bg-[#F8EBEC] shrink-0 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Business Contact Settings */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} className="mt-6 space-y-5">
            <div>
              <label htmlFor="settings-wa" className="block text-base font-medium text-[#36241C]">
                WhatsApp business number (UK format)
              </label>
              <input
                id="settings-wa"
                type="text"
                value={waDisplay}
                onChange={(e) => {
                  setWaDisplay(e.target.value);
                  setSettingsSaved(false);
                }}
                placeholder="+44 7700 900123"
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
              />
            </div>

            <div>
              <label htmlFor="settings-ig" className="block text-base font-medium text-[#36241C]">
                Instagram handle
              </label>
              <input
                id="settings-ig"
                type="text"
                value={igHandle}
                onChange={(e) => {
                  setIgHandle(e.target.value);
                  setSettingsSaved(false);
                }}
                placeholder="@sweetcraft_daryna"
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E9DCD1]">
              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center rounded-lg bg-[#4A3326] px-5 py-2 text-base font-medium text-[#FCF8F4] hover:bg-[#36241C] cursor-pointer"
              >
                {settingsSaved ? 'Saved' : 'Save Contact Details'}
              </button>

              <button
                type="button"
                onClick={onResetDefaults}
                className="inline-flex min-h-[44px] items-center rounded-lg border border-[#DFC6C9] bg-[#F8EBEC] px-4 py-2 text-base text-[#5B4136] hover:text-[#36241C] cursor-pointer"
              >
                Reset menu to defaults
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
