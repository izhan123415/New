import type { ProductItem } from '../types/bakery';
import { formatPriceLabel } from '../utils/whatsapp';
import { ArrowRightVector, BagVector } from './Icons';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  item: ProductItem;
  variant?: 'overlay' | 'editorial' | 'wide';
  buttonLabel?: string;
  onOrderProduct: (item: ProductItem) => void;
}

export function ProductCard({
  item,
  variant = 'editorial',
  buttonLabel = 'Order',
  onOrderProduct,
}: ProductCardProps) {
  const priceLabel = formatPriceLabel(item);

  if (variant === 'overlay') {
    return (
      <article className="group relative overflow-hidden rounded-[26px] border border-[#DEC9BB] bg-[#241611] shadow-[0_26px_54px_-26px_rgba(43,28,22,0.34)]">
        <SafeImage
          src={item.image}
          alt={item.name}
          aspectClassName="aspect-[4/5]"
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {item.seasonal && (
          <span className="absolute top-4 left-4 rounded-xl border border-white/30 bg-[#20130E]/75 backdrop-blur-md px-3.5 py-1 text-base font-medium text-[#FCF8F4]">
            Seasonal
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#190F0B]/95 via-[#190F0B]/75 to-transparent p-6 pt-28 text-[#FCF8F4] flex flex-col justify-end">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-[30px] sm:text-[32px] font-semibold tracking-tight text-[#FCF8F4] leading-tight">
              {item.name}
            </h3>
            <span className="font-display italic text-[28px] font-semibold text-[#F4D6DC] tabular-nums shrink-0 whitespace-nowrap">
              {priceLabel}
            </span>
          </div>

          <p className="mt-2 text-base text-[#EAE0DA] leading-relaxed">
            {item.description}
          </p>

          <div className="mt-4 pt-3.5 border-t border-white/15 flex items-center justify-between gap-3">
            <span className="text-base text-[#DECBC0]">Approx. {item.servings}</span>

            <button
              type="button"
              onClick={() => onOrderProduct(item)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FCF8F4] px-5 py-2 text-base font-medium text-[#2B1C16] hover:bg-[#F5DDE1] transition-colors cursor-pointer whitespace-nowrap"
            >
              <BagVector className="w-4 h-4 text-[#9E5360]" />
              <span>{buttonLabel}</span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col">
      {/* Unboxed Edge-to-Edge Luxury Cake Photography */}
      <div className="relative overflow-hidden rounded-[22px] border border-[#E5D3C8] bg-[#FAF0F1] shadow-[0_18px_40px_-26px_rgba(43,28,22,0.2)]">
        <SafeImage
          src={item.image}
          alt={item.name}
          aspectClassName={variant === 'wide' ? 'aspect-[16/10]' : 'aspect-[4/4.2]'}
          className="transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {item.seasonal && (
          <span className="absolute top-3.5 left-3.5 rounded-xl border border-[#DFC6C9] bg-[#FFFDF9]/95 px-3.5 py-1 text-base font-medium text-[#9E5360] shadow-sm">
            Seasonal
          </span>
        )}
      </div>

      {/* Editorial Patisserie Copy Sitting Directly on Canvas */}
      <div className="flex flex-1 flex-col justify-between pt-4 px-1">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-[26px] sm:text-[28px] font-semibold tracking-tight text-[#2B1C16] leading-tight">
              {item.name}
            </h3>
            <span className="font-display italic text-[24px] font-semibold text-[#9E5360] tabular-nums shrink-0 whitespace-nowrap">
              {priceLabel}
            </span>
          </div>

          <p className="mt-2 text-base leading-relaxed text-[#5E453B]">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3.5 border-t border-[#E6D4C8] flex items-center justify-between gap-3">
          <span className="text-base text-[#6E5045]">Approx. {item.servings}</span>

          <button
            type="button"
            onClick={() => onOrderProduct(item)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-5 py-1.5 text-base font-medium text-[#2B1C16] hover:bg-[#2B1C16] hover:text-[#FCF8F4] hover:border-[#2B1C16] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>{buttonLabel}</span>
            <ArrowRightVector className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
