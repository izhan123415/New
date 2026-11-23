import { LOGO_CIRCLE } from '../data/catalog';
import type { StudioSettings } from '../types/bakery';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { BagVector, InstagramQrCode, InstagramVector, WhatsAppOriginalVector } from './Icons';

interface ContactFooterProps {
  settings: StudioSettings;
  bagCount: number;
  onOpenBag: () => void;
  onOpenStudioManager: () => void;
  onOpenCustomOrder: () => void;
}

export function ContactFooter({
  settings,
  bagCount,
  onOpenBag,
  onOpenStudioManager,
  onOpenCustomOrder,
}: ContactFooterProps) {
  const directWhatsappUrl = buildWhatsAppUrl(
    settings.whatsappNumber,
    'Hi Daryna, I would like to place an order or ask about Sweet Craft availability.',
  );

  return (
    <>
      <footer
        id="contact"
        className="scroll-mt-20 border-t border-[#E9D8CE] bg-[#FCF8F4] text-[#2B1C16]"
      >
        {/* Clean Seamless Studio Contact Band (No Floating Box Clutter) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-14 sm:py-18">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-5">
              <div className="flex items-center gap-5">
                <img
                  src={LOGO_CIRCLE}
                  alt="Sweet Craft — London Bakery"
                  className="h-24 w-auto object-contain mix-blend-multiply contrast-[1.06] brightness-[1.02]"
                />
                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#2B1C16]">
                    Sweet{' '}
                    <span className="italic font-medium text-[#9E5360]">Craft</span>
                  </h2>
                  <p className="text-base text-[#5E453B]">{settings.location}</p>
                </div>
              </div>

              <p className="text-base text-[#5E453B] max-w-lg leading-relaxed">
                Handcrafted homemade cakes, bento cakes, mousse cakes, rolls and desserts made to
                order with love in London.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-[#2B1C16] px-6 py-2 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] transition-colors"
                >
                  <WhatsAppOriginalVector className="w-5 h-5 text-[#7AE5A8]" />
                  <span>WhatsApp ({settings.whatsappDisplay})</span>
                </a>

                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-5 py-2 text-base font-medium text-[#2B1C16] hover:bg-[#FAF0F1]"
                >
                  <InstagramVector className="w-4 h-4 text-[#9E5360]" />
                  <span>{settings.instagramHandle}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-left md:text-right text-base text-[#5E453B]">
                  <p className="font-semibold text-[#2B1C16]">Instagram Studio</p>
                  <p>{settings.instagramHandle}</p>
                </div>
                <InstagramQrCode url={settings.instagramUrl} size={112} />
              </div>

              <button
                type="button"
                onClick={onOpenStudioManager}
                className="text-base font-medium text-[#5E453B] underline underline-offset-4 hover:text-[#2B1C16] cursor-pointer"
              >
                Manage Menu &amp; Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Haute Patisserie Dusty Rose Signature Footer */}
        <div className="bg-gradient-to-b from-[#9E5360] to-[#87434F] text-[#FCF8F4] pt-12 pb-24 lg:pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-display italic text-[38px] sm:text-[68px] lg:text-[98px] font-medium leading-[1.02] tracking-tight text-[#FCF8F4] hover:text-[#F6DFE3] transition-colors break-words"
            >
              {settings.instagramHandle}
            </a>

            <div className="mt-10 pt-8 border-t border-white/25 grid grid-cols-2 sm:grid-cols-4 gap-6 text-base">
              <div className="space-y-2">
                <p className="font-display text-2xl font-semibold text-[#FCF8F4]">Menu</p>
                <ul className="space-y-1.5 text-[#F6DFE3]">
                  <li>
                    <a href="#cakes" className="hover:underline">
                      Classic Cakes
                    </a>
                  </li>
                  <li>
                    <a href="#bento-cakes" className="hover:underline">
                      Bento Cakes
                    </a>
                  </li>
                  <li>
                    <a href="#desserts" className="hover:underline">
                      Mousse &amp; Desserts
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-display text-2xl font-semibold text-[#FCF8F4]">Orders</p>
                <ul className="space-y-1.5 text-[#F6DFE3]">
                  <li>
                    <button
                      type="button"
                      onClick={onOpenBag}
                      className="hover:underline cursor-pointer text-left"
                    >
                      Order Bag ({bagCount})
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={onOpenCustomOrder}
                      className="hover:underline cursor-pointer text-left"
                    >
                      Request Custom Quote
                    </button>
                  </li>
                  <li>
                    <a href="#how-to-order" className="hover:underline">
                      How to Order
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-display text-2xl font-semibold text-[#FCF8F4]">Studio</p>
                <ul className="space-y-1.5 text-[#F6DFE3]">
                  <li>
                    <a href="#about" className="hover:underline">
                      About Sweet Craft
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="hover:underline">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" className="hover:underline">
                      Client Reviews
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-display text-2xl font-semibold text-[#FCF8F4]">London UK</p>
                <p className="text-[#F6DFE3]">{settings.location}</p>
                <p className="text-[#F6DFE3] tabular-nums">{settings.whatsappDisplay}</p>
                <p className="text-[#F6DFE3]/80 pt-1">
                  &copy; {new Date().getFullYear()} Sweet Craft
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Store Bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#E6D4C8] bg-[#FCF8F4]/95 px-4 py-2.5 lg:hidden">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenBag}
            className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-4 py-2 text-base font-medium text-[#2B1C16] cursor-pointer"
          >
            <BagVector className="w-4 h-4 text-[#9E5360]" />
            <span className="tabular-nums">Bag ({bagCount})</span>
          </button>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#2B1C16] px-4 py-2 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360]"
          >
            <WhatsAppOriginalVector className="w-4 h-4 text-[#7AE5A8]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
