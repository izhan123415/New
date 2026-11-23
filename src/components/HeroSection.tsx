import {
  IG_FLORAL_MUM_CAKE,
  IG_MEDOVIK_SLICE_BERRY,
  IG_NAPOLEON_RASPBERRY,
  IG_RASPBERRY_LAMBETH,
  LOGO_LANDSCAPE,
} from '../data/catalog';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRightVector, WhatsAppOriginalVector } from './Icons';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  whatsappNumber: string;
}

export function HeroSection({ whatsappNumber }: HeroSectionProps) {
  const orderHref = buildWhatsAppUrl(
    whatsappNumber,
    'Hi Daryna, I would like to place a cake order with Sweet Craft.',
  );

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[#FCF8F4] via-[#FAF0F1] to-[#FCF8F4]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Editorial Identity Canvas */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <img
                src={LOGO_LANDSCAPE}
                alt="Sweet Craft — Home Bakery in London"
                className="h-28 sm:h-32 w-auto object-contain mix-blend-multiply contrast-[1.06] brightness-[1.02]"
              />
            </div>

            <h1 className="font-display text-[50px] sm:text-[62px] lg:text-[72px] font-semibold leading-[1.01] tracking-[-0.02em] text-[#2B1C16]">
              Handcrafted Cakes &amp; Desserts{' '}
              <span className="italic font-medium text-[#9E5360]">in London</span>
            </h1>

            <p className="text-base sm:text-lg text-[#563C32] leading-relaxed max-w-lg">
              Beautiful homemade cakes, bento cakes, mousse cakes, rolls and desserts, made to order
              with love.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#cakes"
                className="inline-flex min-h-[54px] items-center gap-3 rounded-xl bg-[#2B1C16] px-7 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] transition-colors shadow-[0_18px_36px_-16px_rgba(43,28,22,0.45)] whitespace-nowrap"
              >
                <span>View Menu</span>
                <ArrowRightVector className="w-4 h-4" />
              </a>

              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center gap-3 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-6 py-2.5 text-base font-medium text-[#2B1C16] hover:bg-[#FAF0F1] transition-colors whitespace-nowrap"
              >
                <WhatsAppOriginalVector className="w-5 h-5 text-[#257A4B]" />
                <span>Order / Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Commanding Full-Bleed Cake Stage with Floating Gallery Plaque */}
          <div className="lg:col-span-7 relative">
            <div className="overflow-hidden rounded-[28px] border border-[#DEC9BB] shadow-[0_32px_72px_-26px_rgba(43,28,22,0.3)] bg-[#241611]">
              <SafeImage
                src={IG_FLORAL_MUM_CAKE}
                alt="Handcrafted floral birthday cake by Sweet Craft London"
                aspectClassName="aspect-[4/3] sm:aspect-[16/13]"
                priority
              />
            </div>

            {/* Overlapping Framed Signature Raspberry Lambeth Inset */}
            <a
              href="#custom-cakes"
              aria-label="Explore Bespoke Celebration Cakes"
              className="hidden md:block group absolute -top-5 -right-4 w-44 lg:w-52 overflow-hidden rounded-[22px] border-4 border-[#FCF8F4] shadow-[0_24px_48px_-14px_rgba(43,28,22,0.36)] bg-[#FFFDF9]"
            >
              <SafeImage
                src={IG_RASPBERRY_LAMBETH}
                alt="Signature Raspberry Lambeth cake piped by Sweet Craft"
                aspectClassName="aspect-square"
                className="transition-transform duration-500 group-hover:scale-[1.05]"
                priority
              />
            </a>

            {/* Overlapping Frosted Glass Medovik Quick Link */}
            <a
              href="#cakes"
              className="mt-4 sm:mt-0 sm:absolute sm:left-6 sm:bottom-6 inline-flex items-center gap-4 rounded-2xl border border-[#E5D3C8] bg-[#FCF8F4]/95 backdrop-blur-md p-2.5 pr-5 shadow-[0_20px_44px_-16px_rgba(32,19,14,0.35)] hover:border-[#C49A5C] transition-colors"
            >
              <img
                src={IG_MEDOVIK_SLICE_BERRY}
                alt="Sliced homemade Medovik cake with berries"
                className="h-16 w-16 rounded-xl object-cover shrink-0"
              />
              <div>
                <p className="font-display text-2xl font-semibold text-[#2B1C16] leading-tight">
                  Signature Medovik
                </p>
                <p className="font-display italic text-lg text-[#9E5360] leading-snug">
                  Homemade layers · from £35
                </p>
              </div>
              <ArrowRightVector className="w-4 h-4 text-[#2B1C16] shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Sculptural Magazine Editorial Statement Band */}
      <div className="border-y border-[#E9D8CE] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-9 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.03] tracking-tight text-[#2B1C16]">
              Homemade layers, natural cream &amp; fresh fruit —{' '}
              <span className="italic font-normal text-[#9E5360]">
                baked fresh in London.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#DEC9BB]">
              <SafeImage
                src={IG_NAPOLEON_RASPBERRY}
                alt="Napoleon pastry cake garnished with fresh raspberries and satin ribbon"
                aspectClassName="aspect-square"
              />
            </div>
            <p className="text-base text-[#5E453B] leading-relaxed">
              Every honey crust, flaky puff pastry sheet, berry confit, and ganache is crafted by
              hand for your celebration date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
