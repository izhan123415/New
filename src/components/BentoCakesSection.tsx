import {
  IG_BENTO_GIRAFFE,
  IG_BRIDE_BOW_CAKE,
  IG_HEART_TWENTY_ONE,
} from '../data/catalog';
import type { ProductItem } from '../types/bakery';
import { ProductCard } from './ProductCard';
import { WhatsAppOriginalVector } from './Icons';
import { SafeImage } from './SafeImage';

interface BentoCakesSectionProps {
  products: ProductItem[];
  onOrderProduct: (item: ProductItem) => void;
  onRequestCustomBento: () => void;
}

export function BentoCakesSection({
  products,
  onOrderProduct,
  onRequestCustomBento,
}: BentoCakesSectionProps) {
  const bentoCakes = products.filter((item) => item.category === 'bento');

  return (
    <section
      id="bento-cakes"
      className="scroll-mt-20 border-t border-[#E9D8CE] bg-[#FAF0F1] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pb-8 border-b border-[#E5CCD0]">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight text-[#2B1C16]">
              Bento Cakes{' '}
              <span className="italic font-medium text-[#9E5360]">&amp; Bento Heart Cakes</span>
            </h2>
            <p className="mt-3 text-base text-[#5E453B] leading-relaxed">
              Petite handcrafted cakes presented in eco gift boxes — thoughtful surprises for
              birthdays, anniversaries, and sweet celebrations across London.
            </p>
          </div>

          <p className="font-display italic text-xl text-[#9E5360] whitespace-nowrap">
            2–4 portions · Gift-boxed
          </p>
        </div>

        {/* Spacious 2×2 Large Bento & Bento Heart Showcase */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {bentoCakes.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              variant="wide"
              buttonLabel="Add to Bag"
              onOrderProduct={onOrderProduct}
            />
          ))}
        </div>

        {/* Dramatic Deep Cocoa Velvet Custom Bento Studio Showcase */}
        <div className="mt-12 overflow-hidden rounded-[28px] bg-[#2B1C16] text-[#FCF8F4] grid grid-cols-1 lg:grid-cols-12 shadow-[0_30px_60px_-26px_rgba(43,28,22,0.5)]">
          <div className="lg:col-span-6 grid grid-cols-3 gap-3 p-4 sm:p-6">
            <div className="overflow-hidden rounded-[18px]">
              <SafeImage
                src={IG_BENTO_GIRAFFE}
                alt="Hand-drawn giraffe bento cake in eco box"
                aspectClassName="aspect-[3/4]"
              />
            </div>
            <div className="overflow-hidden rounded-[18px]">
              <SafeImage
                src={IG_BRIDE_BOW_CAKE}
                alt="Vintage Bride cake piped with pink ribbons"
                aspectClassName="aspect-[3/4]"
              />
            </div>
            <div className="overflow-hidden rounded-[18px]">
              <SafeImage
                src={IG_HEART_TWENTY_ONE}
                alt="Twenty one coquette heart cake with black satin bows"
                aspectClassName="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center gap-6">
            <h3 className="font-display text-4xl sm:text-[44px] font-semibold leading-[1.06] text-[#FCF8F4]">
              Personalised designs,{' '}
              <span className="italic font-normal text-[#F3D2D8]">
                drawings &amp; inscriptions
              </span>
            </h3>

            <p className="text-base sm:text-lg text-[#EADAD0] leading-relaxed">
              For custom designs, hand-drawn illustrations, inscriptions, special colours or satin
              ribbon decorations, message me directly on WhatsApp.
            </p>

            <div>
              <button
                type="button"
                onClick={onRequestCustomBento}
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#FAF0F1] px-6 py-2.5 text-base font-medium text-[#2B1C16] hover:bg-[#FCF8F4] transition-colors cursor-pointer"
              >
                <WhatsAppOriginalVector className="w-5 h-5 text-[#257A4B]" />
                <span>Request a Custom Bento Cake</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
