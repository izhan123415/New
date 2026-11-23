import { useState } from 'react';
import type { ProductItem } from '../types/bakery';
import { ProductCard } from './ProductCard';

interface DessertsSectionProps {
  products: ProductItem[];
  onOrderProduct: (item: ProductItem) => void;
}

type DessertTab = 'all' | 'mousse' | 'dessert';

export function DessertsSection({
  products,
  onOrderProduct,
}: DessertsSectionProps) {
  const [activeTab, setActiveTab] = useState<DessertTab>('all');

  const mousseItems = products.filter((item) => item.category === 'mousse');
  const dessertItems = products.filter((item) => item.category === 'dessert');

  const showMousse = activeTab === 'all' || activeTab === 'mousse';
  const showDesserts = activeTab === 'all' || activeTab === 'dessert';

  const mousseLead = mousseItems.slice(0, 2);
  const mousseRest = mousseItems.slice(2);

  const dessertLead = dessertItems.slice(0, 2);
  const dessertRest = dessertItems.slice(2);

  return (
    <section
      id="desserts"
      className="scroll-mt-20 border-t border-[#E9D8CE] bg-[#F5ECE2] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between pb-8 border-b border-[#E0CFC3]">
          <div className="lg:max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight text-[#2B1C16]">
              Mousse Cakes{' '}
              <span className="italic font-medium text-[#9E5360]">&amp; Desserts</span>
            </h2>
            <p className="mt-3 text-base text-[#5E453B] leading-relaxed">
              Silky chocolate, berry, mango, passion fruit, coconut, banana, orange, and seasonal
              mousse cakes alongside meringue rolls, poppy seed rolls, cinnamon rolls, cheesecake,
              crumble, pumpkin pie, and milk cakes.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter mousse cakes and desserts"
            className="inline-flex max-w-full overflow-x-auto sm:overflow-visible flex-nowrap shrink-0 rounded-xl border border-[#DEC9BB] bg-[#FFFDF9] p-1 gap-1 self-start lg:self-auto"
          >
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'mousse', label: 'Mousse Cakes' },
                { id: 'dessert', label: 'Desserts & Pastries' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[42px] rounded-lg px-5 py-1.5 text-base font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#2B1C16] text-[#FCF8F4]'
                    : 'text-[#5E453B] hover:text-[#2B1C16] hover:bg-[#FAF0F1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mousse Cakes — 2 Wide Hero Entremets + 6 Large 3-Column Flavours = All 8 Flavours Large */}
        {showMousse && mousseItems.length > 0 && (
          <div className="mt-12 space-y-10">
            {activeTab === 'all' && (
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#E0CFC3] pb-3.5">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#2B1C16]">
                  Mousse Cakes
                </h3>
                <span className="font-display italic text-lg text-[#9E5360]">
                  Chocolate · Strawberry · Mango · Passion Fruit · Coconut · Banana · Orange · Seasonal
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mousseLead.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  variant="wide"
                  buttonLabel="Add to Bag"
                  onOrderProduct={onOrderProduct}
                />
              ))}
            </div>

            {mousseRest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {mousseRest.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    variant="editorial"
                    buttonLabel="Add to Bag"
                    onOrderProduct={onOrderProduct}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Desserts & Pastries — 2 Wide Hero Pastries + 6 Large 3-Column Pastries = All 8 Items Large */}
        {showDesserts && dessertItems.length > 0 && (
          <div className={showMousse ? 'mt-16 space-y-10' : 'mt-12 space-y-10'}>
            {activeTab === 'all' && (
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#E0CFC3] pb-3.5">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#2B1C16]">
                  Desserts &amp; Pastries
                </h3>
                <span className="font-display italic text-lg text-[#9E5360]">
                  Rolls · Baked Cheesecake · Apple Crumble · Pumpkin Pie · Tres Leches
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dessertLead.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  variant="wide"
                  buttonLabel="Add to Bag"
                  onOrderProduct={onOrderProduct}
                />
              ))}
            </div>

            {dessertRest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {dessertRest.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    variant="editorial"
                    buttonLabel="Add to Bag"
                    onOrderProduct={onOrderProduct}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
