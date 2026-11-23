import { useState } from 'react';
import type { ProductItem } from '../types/bakery';
import { buildWhatsAppUrl, formatPriceLabel } from '../utils/whatsapp';
import {
  ArrowRightVector,
  BagVector,
  CloseVector,
  MinusVector,
  PlusVector,
  TrashVector,
  WhatsAppOriginalVector,
} from './Icons';

export interface BagLineItem {
  product: ProductItem;
  quantity: number;
}

interface OrderBagDrawerProps {
  isOpen: boolean;
  items: BagLineItem[];
  whatsappNumber: string;
  onClose: () => void;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCustomOrder: () => void;
}

export function OrderBagDrawer({
  isOpen,
  items,
  whatsappNumber,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCustomOrder,
}: OrderBagDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const estimatedTotal = items.reduce(
    (sum, entry) => sum + (entry.product.priceFrom ?? 0) * entry.quantity,
    0,
  );

  const summaryLines = items.map((entry) => {
    const unit = formatPriceLabel(entry.product);
    return `• ${entry.quantity}× ${entry.product.name} (${unit})`;
  });

  const fullMessage = [
    'Hi Daryna, I would like to place a Sweet Craft order:',
    '',
    ...(summaryLines.length > 0 ? summaryLines : ['• General cake enquiry']),
    ...(estimatedTotal > 0 ? [`Estimated total: £${estimatedTotal}`] : []),
    ...(customerName.trim() ? [`Name: ${customerName.trim()}`] : []),
    ...(eventDate.trim() ? [`Desired date: ${eventDate.trim()}`] : []),
    ...(notes.trim() ? [`Notes / flavour details: ${notes.trim()}`] : []),
  ].join('\n');

  const whatsappCheckoutHref = buildWhatsAppUrl(whatsappNumber, fullMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#20130E]/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Your Sweet Craft Order Bag"
    >
      <div className="flex h-full w-full max-w-lg flex-col bg-[#FCF8F4] text-[#2B1C16] shadow-2xl border-l border-[#DFC9BE]">
        <div className="flex items-center justify-between border-b border-[#E6D4C8] px-6 py-5 bg-[#FFFDF9]">
          <div className="flex items-center gap-3">
            <BagVector className="w-6 h-6 text-[#9E5360]" />
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2B1C16]">
              Your Order Bag
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close order bag"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#DFC9BE] bg-[#FCF8F4] text-[#2B1C16] hover:bg-[#FAF0F1] cursor-pointer"
          >
            <CloseVector className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="rounded-[24px] border border-[#E6D4C8] bg-[#FFFDF9] p-8 text-center space-y-4">
              <p className="font-display text-2xl font-semibold text-[#2B1C16]">
                Your Order Bag Is Empty
              </p>
              <p className="text-base text-[#5E453B] leading-relaxed">
                Select any classic cake, bento cake, mousse cake, or dessert to prepare your order,
                or request a bespoke celebration cake.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#2B1C16] px-6 py-2 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] cursor-pointer"
                >
                  Browse Cakes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCustomOrder();
                  }}
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#DFC6C9] bg-[#FAF0F1] px-6 py-2 text-base font-medium text-[#2B1C16] hover:bg-[#F5DDE1] cursor-pointer"
                >
                  Custom Cake Request
                </button>
              </div>
            </div>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="flex gap-4 rounded-[20px] border border-[#E6D4C8] bg-[#FFFDF9] p-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-24 rounded-2xl object-cover shrink-0 border border-[#EDE0D7]"
                    />
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-[#2B1C16] leading-tight">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-base text-[#6E5045]">{product.servings}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(product.id)}
                          aria-label={`Remove ${product.name}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6E5045] hover:bg-[#FAF0F1] hover:text-[#2B1C16] cursor-pointer"
                        >
                          <TrashVector className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <span className="font-display italic text-2xl font-semibold text-[#9E5360] tabular-nums">
                          {formatPriceLabel(product)}
                        </span>

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#E2D2C6] bg-[#FCF8F4] px-2 py-1">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, -1)}
                            aria-label={`Decrease quantity for ${product.name}`}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFDF9] text-[#2B1C16] hover:bg-[#FAF0F1] cursor-pointer"
                          >
                            <MinusVector className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-base font-semibold tabular-nums">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, 1)}
                            aria-label={`Increase quantity for ${product.name}`}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FFFDF9] text-[#2B1C16] hover:bg-[#FAF0F1] cursor-pointer"
                          >
                            <PlusVector className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-[20px] border border-[#E6D4C8] bg-[#FFFDF9] p-5 space-y-4">
                <h3 className="font-display text-2xl font-semibold text-[#2B1C16]">
                  Collection &amp; Cake Notes
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="bag-name" className="block text-base font-medium text-[#4B342C] mb-1">
                      Your Name
                    </label>
                    <input
                      id="bag-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Sophie"
                      className="w-full min-h-[44px] rounded-xl border border-[#E2D2C6] bg-[#FCF8F4] px-3.5 py-2 text-base text-[#2B1C16] focus:border-[#9E5360] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="bag-date" className="block text-base font-medium text-[#4B342C] mb-1">
                      Desired Date
                    </label>
                    <input
                      id="bag-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full min-h-[44px] rounded-xl border border-[#E2D2C6] bg-[#FCF8F4] px-3.5 py-2 text-base text-[#2B1C16] focus:border-[#9E5360] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bag-notes" className="block text-base font-medium text-[#4B342C] mb-1">
                    Inscriptions, colours, or allergies
                  </label>
                  <textarea
                    id="bag-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional birthday wording or flavour preferences"
                    className="w-full rounded-xl border border-[#E2D2C6] bg-[#FCF8F4] px-3.5 py-2 text-base text-[#2B1C16] focus:border-[#9E5360] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="border-t border-[#E6D4C8] bg-[#FFFDF9] px-6 py-5 space-y-3">
          {estimatedTotal > 0 && (
            <div className="flex items-baseline justify-between">
              <span className="text-base font-medium text-[#5E453B]">Estimated Starting Total</span>
              <span className="font-display italic text-3xl font-semibold text-[#2B1C16] tabular-nums">
                £{estimatedTotal}
              </span>
            </div>
          )}

          <a
            href={whatsappCheckoutHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#2B1C16] px-6 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] transition-colors"
          >
            <WhatsAppOriginalVector className="w-5 h-5 text-[#7AE5A8]" />
            <span>Send Order on WhatsApp</span>
            <ArrowRightVector className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
