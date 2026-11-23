import { IG_BAKER_DARYNA, IG_GIFT_BOXES } from '../data/catalog';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppOriginalVector } from './Icons';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  whatsappNumber: string;
}

export function AboutSection({ whatsappNumber }: AboutSectionProps) {
  const contactHref = buildWhatsAppUrl(
    whatsappNumber,
    'Hi Daryna, I would love to enquire about ordering a cake from Sweet Craft.',
  );

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-[#E9D8CE] bg-[#FCF8F4] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Asymmetric Baker Story Block */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.06] tracking-tight text-[#2B1C16]">
              About{' '}
              <span className="italic font-medium text-[#9E5360]">Sweet Craft</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4D342B] leading-relaxed max-w-xl">
              Sweet Craft is a small London-based cake studio creating handcrafted cakes and desserts
              for birthdays, celebrations and special moments.
            </p>

            <p className="text-base sm:text-lg text-[#4D342B] leading-relaxed max-w-xl">
              Every cake is made to order with attention to detail, using carefully selected
              ingredients and homemade recipes.
            </p>

            <div className="pt-2">
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#2B1C16] px-6 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] transition-colors"
              >
                <WhatsAppOriginalVector className="w-5 h-5 text-[#7AE5A8]" />
                <span>Message Daryna on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Editorial Baker Portrait & Fresh Roses Gift Boxes */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-end">
            <div className="col-span-7 overflow-hidden rounded-t-[190px] rounded-b-[28px] border border-[#DFC9BE] bg-[#FFFDF9] p-2 shadow-[0_26px_54px_-24px_rgba(43,28,22,0.22)]">
              <div className="overflow-hidden rounded-t-[180px] rounded-b-[20px]">
                <SafeImage
                  src={IG_BAKER_DARYNA}
                  alt="Daryna, home patisserie baker at Sweet Craft in London"
                  aspectClassName="aspect-[3/4]"
                />
              </div>
            </div>
            <div className="col-span-5 overflow-hidden rounded-[24px] border border-[#DFC9BE] bg-[#FFFDF9] p-2 shadow-[0_22px_44px_-22px_rgba(43,28,22,0.18)]">
              <div className="overflow-hidden rounded-[16px]">
                <SafeImage
                  src={IG_GIFT_BOXES}
                  alt="Sweet Craft cake gift boxes dressed with fresh pink roses in London"
                  aspectClassName="aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
