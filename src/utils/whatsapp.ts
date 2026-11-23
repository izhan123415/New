import type {
  CustomInquiryInput,
  ProductCategory,
  ProductItem,
  ReviewItem,
} from '../types/bakery';

export function sanitizePhoneNumber(rawPhone: string): string {
  return rawPhone.replace(/[^\d]/g, '');
}

export function formatPriceLabel(item: Pick<ProductItem, 'priceFrom' | 'priceType'>): string {
  if (item.priceType === 'custom' || item.priceFrom === null || Number.isNaN(item.priceFrom)) {
    return 'Quote on request';
  }
  const formatted = Number.isInteger(item.priceFrom)
    ? `£${item.priceFrom}`
    : `£${item.priceFrom.toFixed(2)}`;
  return item.priceType === 'starting' ? `from ${formatted}` : formatted;
}

export function buildProductWhatsAppMessage(productName: string): string {
  return `Hi Daryna, I would like to order a ${productName}. Could you please let me know the available dates?`;
}

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const digits = sanitizePhoneNumber(phoneNumber);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}

export function buildProductWhatsAppUrl(phoneNumber: string, productName: string): string {
  return buildWhatsAppUrl(phoneNumber, buildProductWhatsAppMessage(productName));
}

export function buildCustomInquiryMessage(input: CustomInquiryInput): string {
  const lines: string[] = [
    `Hi Daryna, I would like to request a ${input.cakeType}.`,
  ];

  if (input.customerName.trim()) {
    lines.push(`Name: ${input.customerName.trim()}`);
  }
  if (input.desiredDate.trim()) {
    lines.push(`Desired date: ${input.desiredDate.trim()}`);
  }
  if (input.portions.trim()) {
    lines.push(`Number of portions: ${input.portions.trim()}`);
  }
  if (input.flavour.trim()) {
    lines.push(`Flavour: ${input.flavour.trim()}`);
  }
  if (input.themeOrInscription.trim()) {
    lines.push(`Design / theme / inscription: ${input.themeOrInscription.trim()}`);
  }
  if (input.notes.trim()) {
    lines.push(`Extra details / inspiration: ${input.notes.trim()}`);
  }

  lines.push('Could you please let me know availability and a quote?');
  return lines.join('\n');
}

export interface CustomInquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof CustomInquiryInput, string>>;
}

export function validateCustomInquiry(input: CustomInquiryInput): CustomInquiryValidationResult {
  const errors: Partial<Record<keyof CustomInquiryInput, string>> = {};

  if (!input.desiredDate.trim()) {
    errors.desiredDate = 'Please choose your desired date.';
  }
  if (!input.portions.trim()) {
    errors.portions = 'Please specify the approximate number of portions.';
  }
  if (!input.flavour.trim()) {
    errors.flavour = 'Please enter a preferred flavour or ask for recommendations.';
  }
  if (!input.themeOrInscription.trim()) {
    errors.themeOrInscription = 'Please describe the design, theme, or inscription.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function filterProductsByCategoryAndQuery(
  products: ProductItem[],
  category: ProductCategory | 'all',
  query = '',
): ProductItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  return products.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function validateNewProductInput(draft: {
  name: string;
  description: string;
  servings: string;
  priceInput: string;
  priceType: 'starting' | 'fixed' | 'custom';
}): { valid: boolean; error?: string; parsedPrice: number | null } {
  if (!draft.name.trim()) {
    return { valid: false, error: 'Please enter a cake or dessert name.', parsedPrice: null };
  }
  if (!draft.description.trim()) {
    return { valid: false, error: 'Please enter a short description.', parsedPrice: null };
  }
  if (!draft.servings.trim()) {
    return { valid: false, error: 'Please enter an approximate serving size.', parsedPrice: null };
  }

  if (draft.priceType === 'custom') {
    return { valid: true, parsedPrice: null };
  }

  const parsed = Number(draft.priceInput);
  if (!draft.priceInput.trim() || Number.isNaN(parsed) || parsed <= 0) {
    return { valid: false, error: 'Please enter a valid price in GBP.', parsedPrice: null };
  }

  return { valid: true, parsedPrice: Math.round(parsed * 100) / 100 };
}

export function validateNewReviewInput(draft: Omit<ReviewItem, 'id'>): {
  valid: boolean;
  error?: string;
} {
  if (!draft.customerName.trim()) {
    return { valid: false, error: 'Please enter the customer name.' };
  }
  if (!draft.orderedItem.trim()) {
    return { valid: false, error: 'Please enter the cake or dessert ordered.' };
  }
  if (!draft.quote.trim()) {
    return { valid: false, error: 'Please enter the testimonial quote.' };
  }
  return { valid: true };
}
