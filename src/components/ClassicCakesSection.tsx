import { useState } from 'react';
import type { ProductItem } from '../types/bakery';
import { filterProductsByCategoryAndQuery } from '../utils/whatsapp';
import { SearchVector } from './Icons';
import { ProductCard } from './ProductCard';

interface ClassicCakesSectionProps {
  products: ProductItem[];
  onOrderProduct: (item: ProductItem) => void;
}

const FLAGSHIP_IDS = new Set([
  'classic-medovik',
  'classic-spartak',
  'classic-napoleon',
]);

export function ClassicCakesSection({
  products,
  onOrderProduct,
}: ClassicCakesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const classicCakes = filterProductsByCategoryAndQuery(
    products,
    'classic',
    searchQuery,
  );

  const hasSearch = searchQuery.trim().length > 0;
  const signatureFlagships = hasSearch
    ? []
    : classicCakes.filter((item) => FLAGSHIP_IDS.has(item.id));
  const collectionCakes = hasSearch
    ? classicCakes
    : classicCakes.filter((item) => !FLAGSHIP_IDS.has(item.id));

  return (
    <section
      id="cakes"
      className="scroll-mt-20 bg-[#FCF8F4] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between pb-8 border-b border-[#E6D4C8]">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight text-[#2B1C16]">
              Classic{' '}
              <span className="italic font-medium text-[#9E5360]">Cakes</span>
            </h2>
            <p className="mt-3 text-base text-[#5E453B] max-w-2xl leading-relaxed">
              Homemade layered classics and seasonal bakes crafted with delicate sponges, balanced
              creams, and fresh seasonal berries. Starting prices are shown below.
            </p>
          </div>

          <div className="w-full sm:w-80 shrink-0">
            <label htmlFor="classic-cake-search" className="sr-only">
              Search classic cakes
            </label>
            <div className="relative">
              <SearchVector className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A6D60]" />
              <input
                id="classic-cake-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cake or flavour..."
                className="w-full min-h-[48px] rounded-xl border border-[#DEC9BB] bg-[#FFFDF9] pl-11 pr-4 py-2 text-base text-[#2B1C16] placeholder:text-[#8A6D60] focus:border-[#9E5360] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {classicCakes.length === 0 ? (
          <div className="mt-10 rounded-[24px] border border-[#E6D4C8] bg-[#FFFDF9] p-10 text-center">
            <p className="text-base text-[#5E453B]">
              No classic cakes matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 inline-flex min-h-[46px] items-center rounded-xl bg-[#2B1C16] px-6 py-2 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] cursor-pointer"
            >
              Show all classic cakes
            </button>
          </div>
        ) : (
          <div className="mt-10 space-y-12">
            {/* Signature House Flagships — Full-Bleed Dramatic Overlay Trio */}
            {signatureFlagships.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {signatureFlagships.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    variant="overlay"
                    buttonLabel="Add to Bag"
                    onOrderProduct={onOrderProduct}
                  />
                ))}
              </div>
            )}

            {/* 9 Remaining Classic & Seasonal Cakes — Spacious Borderless-Image Editorial Grid */}
            {collectionCakes.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {collectionCakes.map((item) => (
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
