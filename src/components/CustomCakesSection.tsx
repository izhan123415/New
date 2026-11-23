import {
  IG_BLACK_GOLD_CAKE,
  IG_BURGUNDY_BOW_CAKE,
  IG_MEDOVIK_CANDLE_ROSES,
  IG_NAVY_PEARL_CAKE,
} from '../data/catalog';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { WhatsAppOriginalVector } from './Icons';
import { SafeImage } from './SafeImage';

interface CustomCakesSectionProps {
  whatsappNumber: string;
  onRequestCustomCake: () => void;
}

const REQUEST_DETAILS = [
  'Desired date',
  'Approximate number of portions',
  'Flavour',
  'Design or theme preferences',
  'An inspiration photo (sent directly on WhatsApp)',
];

export function CustomCakesSection({
  whatsappNumber,
  onRequestCustomCake,
}: CustomCakesSectionProps) {
  const directCustomHref = buildWhatsAppUrl(
    whatsappNumber,
    'Hi Daryna, I would like to request a custom cake quote. Here are my event details:',
  );

  return (
    <section
      id="custom-cakes"
      className="scroll-mt-20 border-t border-[#E9D8CE] bg-[#FCF8F4] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Couture Bespoke Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#2B1C16] leading-[1.06]">
                Custom Cakes{' '}
                <span className="italic font-medium text-[#9E5360]">for special moments</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#5E453B] leading-relaxed">
                Every custom celebration cake is crafted individually and priced by bespoke
                quotation depending on size, flavours, and decoration.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2B1C16] mb-3">
                What to include in your request
              </h3>
              <ul className="divide-y divide-[#E6D4C8] border-t border-b border-[#E6D4C8]">
                {REQUEST_DETAILS.map((point, index) => (
                  <li
                    key={point}
                    className="py-3.5 flex items-baseline gap-4 text-base text-[#4D342B]"
                  >
                    <span className="font-display italic text-2xl font-medium text-[#C49A5C] tabular-nums">
                      0{index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onRequestCustomCake}
                className="inline-flex min-h-[52px] items-center gap-3 rounded-xl bg-[#2B1C16] px-6 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] transition-colors cursor-pointer"
              >
                <WhatsAppOriginalVector className="w-5 h-5 text-[#7AE5A8]" />
                <span>Request a Custom Cake</span>
              </button>

              <a
                href={directCustomHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-6 py-2.5 text-base font-medium text-[#2B1C16] hover:bg-[#FAF0F1] transition-colors"
              >
                Send Photo on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Large 4-Photo Editorial Bespoke Grid */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-7 overflow-hidden rounded-t-[180px] rounded-b-[26px] border border-[#DFC9BE] bg-[#FFFDF9] p-2 shadow-[0_24px_48px_-24px_rgba(43,28,22,0.2)]">
              <div className="overflow-hidden rounded-t-[170px] rounded-b-[18px]">
                <SafeImage
                  src={IG_BURGUNDY_BOW_CAKE}
                  alt="Custom celebration cake finished with burgundy satin bows"
                  aspectClassName="aspect-[4/5]"
                />
              </div>
            </div>

            <div className="col-span-5 grid grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-[22px] border border-[#DFC9BE] bg-[#FFFDF9] p-2">
                <div className="overflow-hidden rounded-[14px] h-full">
                  <SafeImage
                    src={IG_BLACK_GOLD_CAKE}
                    alt="Modern black and gold brushed birthday cake"
                    aspectClassName="aspect-[4/3] h-full"
                    className="h-full"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-[22px] border border-[#DFC9BE] bg-[#FFFDF9] p-2">
                <div className="overflow-hidden rounded-[14px] h-full">
                  <SafeImage
                    src={IG_MEDOVIK_CANDLE_ROSES}
                    alt="Tall layered cake garnished with raspberries and fresh tulips"
                    aspectClassName="aspect-[4/3] h-full"
                    className="h-full"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[22px] border border-[#DFC9BE] bg-[#FFFDF9] p-2">
                <div className="overflow-hidden rounded-[14px]">
                  <SafeImage
                    src={IG_NAVY_PEARL_CAKE}
                    alt="Bespoke navy buttercream celebration cake with pearl border"
                    aspectClassName="aspect-[16/10]"
                  />
                </div>
              </div>
              <div className="rounded-[22px] border border-[#E5CCD0] bg-[#FAF0F1] p-6 flex flex-col justify-between text-[#2B1C16]">
                <p className="font-display text-2xl sm:text-3xl font-semibold leading-tight text-[#2B1C16]">
                  Crafted individually{' '}
                  <span className="italic font-medium text-[#9E5360]">for your celebration</span>
                </p>
                <p className="text-base text-[#5E453B] leading-relaxed">
                  Birthdays, bridal showers, anniversaries, baby milestones, and dinner parties in
                  London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
