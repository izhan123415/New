import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildCustomInquiryMessage,
  buildProductWhatsAppMessage,
  buildProductWhatsAppUrl,
  filterProductsByCategoryAndQuery,
  formatPriceLabel,
  sanitizePhoneNumber,
  validateCustomInquiry,
  validateNewProductInput,
} from './whatsapp';
import type { ProductItem } from '../types/bakery';

test('sanitizes UK phone numbers for wa.me links', () => {
  assert.equal(sanitizePhoneNumber('+44 7700 900123'), '447700900123');
  assert.equal(sanitizePhoneNumber('44-7700-900-123'), '447700900123');
});

test('formats GBP starting, fixed, and custom prices properly', () => {
  assert.equal(formatPriceLabel({ priceFrom: 35, priceType: 'starting' }), 'from £35');
  assert.equal(formatPriceLabel({ priceFrom: 28, priceType: 'fixed' }), '£28');
  assert.equal(formatPriceLabel({ priceFrom: null, priceType: 'custom' }), 'Quote on request');
});

test('builds exact pre-written WhatsApp message and URL for Medovik', () => {
  const msg = buildProductWhatsAppMessage('Medovik / Honey Cake');
  assert.equal(
    msg,
    'Hi Daryna, I would like to order a Medovik / Honey Cake. Could you please let me know the available dates?',
  );
  const url = buildProductWhatsAppUrl('+44 7700 900123', 'Medovik / Honey Cake');
  assert.ok(url.startsWith('https://wa.me/447700900123?text='));
  assert.ok(url.includes(encodeURIComponent('Medovik / Honey Cake')));
});

test('validates custom cake inquiry required fields', () => {
  const emptyResult = validateCustomInquiry({
    cakeType: 'Custom Celebration Cake',
    customerName: '',
    desiredDate: '',
    portions: '',
    flavour: '',
    themeOrInscription: '',
    notes: '',
  });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.desiredDate);
  assert.ok(emptyResult.errors.portions);
  assert.ok(emptyResult.errors.flavour);
  assert.ok(emptyResult.errors.themeOrInscription);

  const validResult = validateCustomInquiry({
    cakeType: 'Custom Bento Cake',
    customerName: 'Emma',
    desiredDate: '2026-12-05',
    portions: '2-3 portions',
    flavour: 'Vanilla & Raspberry',
    themeOrInscription: 'Pastel pink heart with "Happy 25th"',
    notes: 'Collection in South Kensington',
  });
  assert.equal(validResult.valid, true);
  const msg = buildCustomInquiryMessage({
    cakeType: 'Custom Bento Cake',
    customerName: 'Emma',
    desiredDate: '2026-12-05',
    portions: '2-3 portions',
    flavour: 'Vanilla & Raspberry',
    themeOrInscription: 'Pastel pink heart with "Happy 25th"',
    notes: '',
  });
  assert.ok(msg.includes('Custom Bento Cake'));
  assert.ok(msg.includes('2026-12-05'));
  assert.ok(msg.includes('Vanilla & Raspberry'));
});

test('filters products by category and search query', () => {
  const sample: ProductItem[] = [
    {
      id: '1',
      name: 'Medovik / Honey Cake',
      category: 'classic',
      description: 'Delicate honey sponge layers with sour cream',
      priceFrom: 35,
      priceType: 'starting',
      servings: '8–10 portions',
      image: '/img/1.jpg',
    },
    {
      id: '2',
      name: 'Mango Mousse Cake',
      category: 'mousse',
      description: 'Silky tropical mango mousse',
      priceFrom: 40,
      priceType: 'starting',
      servings: '8 portions',
      image: '/img/2.jpg',
    },
  ];
  assert.equal(filterProductsByCategoryAndQuery(sample, 'classic').length, 1);
  assert.equal(filterProductsByCategoryAndQuery(sample, 'all', 'mango').length, 1);
  assert.equal(filterProductsByCategoryAndQuery(sample, 'classic', 'mango').length, 0);
});

test('validates new product creation inputs', () => {
  assert.equal(
    validateNewProductInput({
      name: 'Seasonal Pear Tart',
      description: 'Poached pear almond frangipane',
      servings: '8 slices',
      priceInput: '32',
      priceType: 'starting',
    }).valid,
    true,
  );
  assert.equal(
    validateNewProductInput({
      name: 'Broken Price',
      description: 'Test',
      servings: '8 slices',
      priceInput: '-5',
      priceType: 'starting',
    }).valid,
    false,
  );
});
