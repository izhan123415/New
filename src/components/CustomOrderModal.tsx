import { useEffect, useState } from 'react';
import type { CustomInquiryInput } from '../types/bakery';
import {
  buildCustomInquiryMessage,
  buildWhatsAppUrl,
  validateCustomInquiry,
} from '../utils/whatsapp';
import {
  ArrowUpRightVector,
  CloseVector,
  WhatsAppOriginalVector,
} from './Icons';

interface CustomOrderModalProps {
  isOpen: boolean;
  initialType: CustomInquiryInput['cakeType'];
  whatsappNumber: string;
  onClose: () => void;
}

export function CustomOrderModal({
  isOpen,
  initialType,
  whatsappNumber,
  onClose,
}: CustomOrderModalProps) {
  const [form, setForm] = useState<CustomInquiryInput>({
    cakeType: initialType,
    customerName: '',
    desiredDate: '',
    portions: '',
    flavour: '',
    themeOrInscription: '',
    notes: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof CustomInquiryInput, string>>
  >({});
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, cakeType: initialType }));
      setErrors({});
      setPreparedMessage(null);
      setCopied(false);
    }
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  const directWaUrl = buildWhatsAppUrl(
    whatsappNumber,
    `Hi Daryna, I would like to enquire about a ${form.cakeType} from Sweet Craft.`,
  );

  const preparedWaUrl = preparedMessage
    ? buildWhatsAppUrl(whatsappNumber, preparedMessage)
    : directWaUrl;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validateCustomInquiry(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setPreparedMessage(null);
      return;
    }
    setErrors({});
    setPreparedMessage(buildCustomInquiryMessage(form));
    setCopied(false);
  }

  async function handleCopy() {
    if (!preparedMessage) return;
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#36241C]/50 p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="custom-order-modal-title"
    >
      <div className="w-full max-w-xl rounded-2xl border border-[#DFCFC2] bg-[#FCF8F4] p-6 sm:p-8 shadow-xl my-auto max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 border-b border-[#E9DCD1] pb-4">
          <div>
            <h2
              id="custom-order-modal-title"
              className="font-display text-3xl font-semibold text-[#36241C]"
            >
              {form.cakeType}
            </h2>
            <p className="mt-1 text-base text-[#5B4136]">
              Fill in your celebration details to generate a ready-to-send WhatsApp message for
              Daryna.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close request modal"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5D5CB] bg-[#FFFDF9] text-[#5B4136] hover:bg-[#F2E7DC] hover:text-[#36241C] shrink-0 cursor-pointer"
          >
            <CloseVector className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="inquiry-cake-type"
                className="block text-base font-medium text-[#36241C]"
              >
                Request type
              </label>
              <select
                id="inquiry-cake-type"
                value={form.cakeType}
                onChange={(e) =>
                  setForm({
                    ...form,
                    cakeType: e.target.value as CustomInquiryInput['cakeType'],
                  })
                }
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] focus:border-[#B86B77] focus:outline-none"
              >
                <option value="Custom Celebration Cake">Custom Celebration Cake</option>
                <option value="Custom Bento Cake">Custom Bento Cake</option>
                <option value="General Order">General Order</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="inquiry-name"
                className="block text-base font-medium text-[#36241C]"
              >
                Your name
              </label>
              <input
                id="inquiry-name"
                type="text"
                value={form.customerName}
                onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                placeholder="e.g. Charlotte"
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] placeholder:text-[#8A6D60] focus:border-[#B86B77] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="inquiry-date"
                className="block text-base font-medium text-[#36241C]"
              >
                Desired date *
              </label>
              <input
                id="inquiry-date"
                type="date"
                value={form.desiredDate}
                onChange={(e) => setForm({ ...form, desiredDate: e.target.value })}
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] focus:border-[#B86B77] focus:outline-none"
              />
              {errors.desiredDate && (
                <p className="mt-1 text-base font-medium text-[#A33645]">
                  {errors.desiredDate}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-portions"
                className="block text-base font-medium text-[#36241C]"
              >
                Number of portions *
              </label>
              <input
                id="inquiry-portions"
                type="text"
                value={form.portions}
                onChange={(e) => setForm({ ...form, portions: e.target.value })}
                placeholder="e.g. 12–15 portions"
                className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] placeholder:text-[#8A6D60] focus:border-[#B86B77] focus:outline-none"
              />
              {errors.portions && (
                <p className="mt-1 text-base font-medium text-[#A33645]">{errors.portions}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiry-flavour"
              className="block text-base font-medium text-[#36241C]"
            >
              Preferred flavour *
            </label>
            <input
              id="inquiry-flavour"
              type="text"
              value={form.flavour}
              onChange={(e) => setForm({ ...form, flavour: e.target.value })}
              placeholder="e.g. Medovik, Vanilla & Strawberry, Red Velvet"
              className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] placeholder:text-[#8A6D60] focus:border-[#B86B77] focus:outline-none"
            />
            {errors.flavour && (
              <p className="mt-1 text-base font-medium text-[#A33645]">{errors.flavour}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="inquiry-theme"
              className="block text-base font-medium text-[#36241C]"
            >
              Design, theme, or inscription *
            </label>
            <input
              id="inquiry-theme"
              type="text"
              value={form.themeOrInscription}
              onChange={(e) =>
                setForm({ ...form, themeOrInscription: e.target.value })
              }
              placeholder="e.g. Dusty pink vintage piping with 'Happy 30th'"
              className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] placeholder:text-[#8A6D60] focus:border-[#B86B77] focus:outline-none"
            />
            {errors.themeOrInscription && (
              <p className="mt-1 text-base font-medium text-[#A33645]">
                {errors.themeOrInscription}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="inquiry-notes"
              className="block text-base font-medium text-[#36241C]"
            >
              Inspiration notes or allergies (optional)
            </label>
            <textarea
              id="inquiry-notes"
              rows={2}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="You can also attach your inspiration photo directly inside WhatsApp."
              className="mt-1.5 w-full rounded-lg border border-[#E2D2C6] bg-[#FFFDF9] px-3.5 py-2 text-base text-[#36241C] placeholder:text-[#8A6D60] focus:border-[#B86B77] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex min-h-[46px] items-center rounded-lg bg-[#4A3326] px-6 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#36241C] cursor-pointer"
            >
              Prepare WhatsApp Message
            </button>

            <a
              href={directWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-[#DFC6C9] bg-[#F8EBEC] px-5 py-2.5 text-base font-medium text-[#36241C] hover:bg-[#F0D9DC]"
            >
              <WhatsAppOriginalVector className="w-5 h-5 text-[#257A4B]" />
              <span>Chat directly</span>
            </a>
          </div>
        </form>

        {preparedMessage && (
          <div className="mt-6 rounded-xl border border-[#DFC6C9] bg-[#F8EBEC] p-5">
            <p className="font-display text-2xl font-semibold text-[#36241C]">
              Your WhatsApp message is ready
            </p>
            <pre className="mt-2 whitespace-pre-wrap font-sans text-base leading-relaxed text-[#5B4136]">
              {preparedMessage}
            </pre>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={preparedWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-lg bg-[#4A3326] px-5 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#36241C]"
              >
                <WhatsAppOriginalVector className="w-5 h-5 text-[#7AE5A8]" />
                <span>Send on WhatsApp</span>
                <ArrowUpRightVector className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[46px] items-center rounded-lg border border-[#DFC6C9] bg-[#FFFDF9] px-5 py-2.5 text-base font-medium text-[#36241C] hover:bg-[#F2E7DC] cursor-pointer"
              >
                {copied ? 'Copied' : 'Copy text'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
