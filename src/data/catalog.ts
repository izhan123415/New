import type {
  GalleryItem,
  ProductItem,
  ReviewItem,
  StudioSettings,
} from '../types/bakery';

/* Brand Logos uploaded by client — displayed naturally without clipping shapes */
export const LOGO_LANDSCAPE = '/assets/aistudio/WhatsApp_Image_2026-11-23_at_5.38.52_PM_efadb0ba.jpeg';
export const LOGO_CIRCLE = '/assets/aistudio/WhatsApp_Image_2026-11-23_at_5.38.51_PM_08f32b0b.jpeg';

/* Real Sweet Craft Instagram photographs uploaded by user (@sweetcraft_daryna) */
export const IG_GIFT_BOXES = '/assets/aistudio/1_e0b7d420.png';
export const IG_BENTO_SHEEP = '/assets/aistudio/2_1dd43998.png';
export const IG_BERRY_DRIP_CAKE = '/assets/aistudio/3_b4d4113f.png';
export const IG_RASPBERRY_LAMBETH = '/assets/aistudio/4_2fbb09b8.png';
export const IG_BENTO_PUMPKIN = '/assets/aistudio/5_093d034a.png';
export const IG_BLACK_GOLD_CAKE = '/assets/aistudio/6_3f419d22.png';
export const IG_FLORAL_MUM_CAKE = '/assets/aistudio/7_14563143.png';
export const IG_MEDOVIK_RIBBON = '/assets/aistudio/8_3a82a8ab.png';
export const IG_BENTO_COUPLE = '/assets/aistudio/9_1ddc4e74.png';
export const IG_BENTO_GIRAFFE = '/assets/aistudio/10_7617c45c.png';
export const IG_HEART_BOWS = '/assets/aistudio/11_f0f28d88.png';
export const IG_HEART_TWENTY_ONE = '/assets/aistudio/12_e71c5ec9.png';
export const IG_RASPBERRY_STAND = '/assets/aistudio/13_70d04a76.png';
export const IG_KYIV_CHOCOLATE = '/assets/aistudio/14_4ec229c7.png';
export const IG_NAVY_PEARL_CAKE = '/assets/aistudio/15_eaf69f0d.png';
export const IG_MINECRAFT_CAKE = '/assets/aistudio/16_e2de285a.png';
export const IG_OVAL_FLORAL_CAKE = '/assets/aistudio/17_30a394d8.png';
export const IG_RED_HEART_CAKE = '/assets/aistudio/18_8a756649.png';
export const IG_MEDOVIK_BERRY_GOLD = '/assets/aistudio/19_d507eaf9.png';
export const IG_RASPBERRY_SLAB = '/assets/aistudio/20_2d4c52a1.png';
export const IG_RASPBERRY_MOUSSE = '/assets/aistudio/21_8aef5e90.png';
export const IG_RED_VELVET_PAIR = '/assets/aistudio/22_16780c34.png';
export const IG_BRIDE_BOW_CAKE = '/assets/aistudio/23_da3da1ae.png';
export const IG_BURGUNDY_BOW_CAKE = '/assets/aistudio/24_635a7217.png';
export const IG_PISTACHIO_CHOC_DRIP = '/assets/aistudio/25_1f6bb799.png';
export const IG_CHOC_STRAWBERRY_LAYER = '/assets/aistudio/26_d3f7fb9b.png';
export const IG_RED_VELVET_SOLO = '/assets/aistudio/27_f203e862.png';
export const IG_NAPOLEON_RASPBERRY = '/assets/aistudio/28_a74acd09.png';
export const IG_SPARTAK_GLAZE = '/assets/aistudio/29_0eaba486.png';
export const IG_MEDOVIK_SLICE_BERRY = '/assets/aistudio/30_9e4fe715.png';
export const IG_MEDOVIK_RIBBON_ACETATE = '/assets/aistudio/31_e2e06fc8.png';
export const IG_CARAMEL_WALNUT_TART = '/assets/aistudio/32_cf3fd1dc.png';
export const IG_MEDOVIK_CANDLE_ROSES = '/assets/aistudio/33_c94382f5.png';
export const IG_BAKER_DARYNA = '/assets/aistudio/34_d768e4cd.png';
export const IG_CHRISTMAS_BOX = '/assets/aistudio/35_ecbfee02.png';

/* Supplemental studio pastry shots only where Daryna did not upload a specific item */
export const IMG_MOUSSE_TRIO = '/src/assets/images/mousse_entremet_cake_1795443096331.jpg';
export const IMG_MOUSSE_MANGO = '/src/assets/images/mousse_mango_passionfruit_1795443862690.jpg';
export const IMG_MOUSSE_STRAWBERRY = '/src/assets/images/mousse_strawberry_blush_1795443863351.jpg';
export const IMG_CAKE_TIRAMISU = '/src/assets/images/cake_tiramisu_mascarpone_1795443862664.jpg';
export const IMG_CAKE_DRUNKEN_CHERRY = '/src/assets/images/cake_drunken_cherry_1795443863137.jpg';
export const IMG_DESSERTS_ROLLS = '/src/assets/images/desserts_rolls_pastry_1795443095016.jpg';
export const IMG_PUMPKIN_CRUMBLE = '/src/assets/images/dessert_pumpkin_crumble_1795443863867.jpg';
export const IMG_TRES_LECHES = '/src/assets/images/dessert_tres_leches_poppy_1795443863290.jpg';
export const IMG_BAKED_CHEESECAKE = '/src/assets/images/baked_cheesecake_berries_1795447112803.jpg';

export const DEFAULT_SETTINGS: StudioSettings = {
  whatsappNumber: '447700900123',
  whatsappDisplay: '+44 7700 900123',
  instagramHandle: '@sweetcraft_daryna',
  instagramUrl: 'https://www.instagram.com/sweetcraft_daryna/',
  location: 'London, UK',
};

export const INITIAL_PRODUCTS: ProductItem[] = [
  // Classic Cakes — 12 visible items covering every single brief classic + seasonal cake
  {
    id: 'classic-medovik',
    name: 'Medovik / Honey Cake',
    category: 'classic',
    description:
      'Gossamer caramelised wildflower honey biscuit layers steeped in velvety lightly whipped sour cream.',
    priceFrom: 35,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_MEDOVIK_SLICE_BERRY,
  },
  {
    id: 'classic-spartak',
    name: 'Spartak / Chocolate Honey',
    category: 'classic',
    description:
      'Delicate dark cocoa-honey sponge layers folded with mascarpone cream and finished in mirror ganache.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_SPARTAK_GLAZE,
  },
  {
    id: 'classic-napoleon',
    name: 'Napoleon',
    category: 'classic',
    description:
      'Hand-laminated golden puff pastry leaves layered with vanilla bean custard cream and fresh berries.',
    priceFrom: 40,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_NAPOLEON_RASPBERRY,
  },
  {
    id: 'classic-kyiv',
    name: 'Kyiv Cake',
    category: 'classic',
    description:
      'Crisp roasted hazelnut meringue discs paired with cognac-kissed chocolate buttercream and piped roses.',
    priceFrom: 42,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_KYIV_CHOCOLATE,
  },
  {
    id: 'classic-victoria-sponge',
    name: 'Victoria Sponge',
    category: 'classic',
    description:
      'Light Madagascar vanilla butter sponge filled with summer berry compote, whipped cream, and raspberries.',
    priceFrom: 35,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_RASPBERRY_LAMBETH,
  },
  {
    id: 'classic-red-velvet',
    name: 'Red Velvet',
    category: 'classic',
    description:
      'Plush crimson buttermilk cocoa sponge dressed in smooth mascarpone cream cheese frosting and satin bows.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_RED_VELVET_SOLO,
  },
  {
    id: 'classic-prague',
    name: 'Prague Chocolate Cake',
    category: 'classic',
    description:
      'Rich artisanal chocolate sponge layered with apricot glaze, silk buttercream, ganache drip, and pistachios.',
    priceFrom: 40,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_PISTACHIO_CHOC_DRIP,
  },
  {
    id: 'classic-drunken-cherry',
    name: 'Drunken Cherry Cake',
    category: 'classic',
    description:
      'Deep dark chocolate sponge filled with kirsch-macerated sour cherries, chantilly cream, and berry shavings.',
    priceFrom: 42,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_CHOC_STRAWBERRY_LAYER,
  },
  {
    id: 'classic-sour-cream',
    name: 'Sour Cream Cake',
    category: 'classic',
    description:
      'Tender vanilla and honey crumb steeped overnight in traditional lightly sweetened cultured sour cream.',
    priceFrom: 35,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_MEDOVIK_RIBBON_ACETATE,
  },
  {
    id: 'classic-tiramisu',
    name: 'Tiramisu Cake',
    category: 'classic',
    description:
      'Espresso-brushed sponge layers crowned with featherlight Italian mascarpone cream and cocoa veil.',
    priceFrom: 40,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_BERRY_DRIP_CAKE,
  },
  {
    id: 'classic-skazka',
    name: 'Signature Skazka Cake',
    category: 'classic',
    description:
      'Beloved patisserie sponge delicately brushed with syrup, French buttercream rosettes, and fresh berries.',
    priceFrom: 42,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_RASPBERRY_STAND,
  },
  {
    id: 'classic-seasonal',
    name: 'Other Seasonal Cakes',
    category: 'classic',
    description:
      'Limited seasonal fruit, caramelised walnut, spiced honey, and floral garden editions crafted to the harvest.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IG_MEDOVIK_BERRY_GOLD,
    seasonal: true,
  },

  // Bento Cakes & Bento Heart Cakes — 4 distinct styles from Daryna's studio
  {
    id: 'bento-classic-round',
    name: 'Classic Round Bento Cake',
    category: 'bento',
    description:
      'Petite 4-inch cake nestled in an eco presentation box with smooth cream finish and bespoke script.',
    priceFrom: 24,
    priceType: 'starting',
    servings: '2–3 portions',
    image: IG_BENTO_COUPLE,
  },
  {
    id: 'bento-heart-cake',
    name: 'Bento Heart Cake',
    category: 'bento',
    description:
      'Romantic sculpted heart cake piped with delicate vintage ruffles and personalised romantic inscription.',
    priceFrom: 28,
    priceType: 'starting',
    servings: '2–3 portions',
    image: IG_RED_HEART_CAKE,
  },
  {
    id: 'bento-coquette-heart',
    name: 'Coquette Ribbon Heart Cake',
    category: 'bento',
    description:
      'Ivory pearl-piped heart silhouette finished with couture black satin bows and celebratory calligraphy.',
    priceFrom: 32,
    priceType: 'starting',
    servings: '2–4 portions',
    image: IG_HEART_BOWS,
  },
  {
    id: 'bento-illustrated',
    name: 'Illustrated Bento Cake',
    category: 'bento',
    description:
      'Whimsical hand-painted buttercream illustrations framed in floral greaseproof parchment.',
    priceFrom: 30,
    priceType: 'starting',
    servings: '2–3 portions',
    image: IG_BENTO_SHEEP,
  },

  // Mousse Cakes — ALL 8 individual flavours listed in client brief
  {
    id: 'mousse-chocolate',
    name: 'Chocolate Mousse Cake',
    category: 'mousse',
    description:
      'Silk dark and milk Belgian chocolate mousse layers crowned with tempered chocolate curls.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8 portions',
    image: IMG_MOUSSE_TRIO,
  },
  {
    id: 'mousse-strawberry',
    name: 'Strawberry Mousse Cake',
    category: 'mousse',
    description:
      'Airy Madagascar vanilla bavarois wrapped around ripe berry confit and glossy raspberry mirror glaze.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8 portions',
    image: IG_RASPBERRY_MOUSSE,
  },
  {
    id: 'mousse-mango',
    name: 'Mango Mousse Cake',
    category: 'mousse',
    description:
      'Velvety Alphonso mango mousse layered over light almond jaconde sponge and tropical mango insert.',
    priceFrom: 40,
    priceType: 'starting',
    servings: '8 portions',
    image: IMG_MOUSSE_MANGO,
  },
  {
    id: 'mousse-passion-fruit',
    name: 'Passion Fruit Mousse Cake',
    category: 'mousse',
    description:
      'Bright tangy passion fruit cremeux suspended in delicate cream mousse for an aromatic finish.',
    priceFrom: 40,
    priceType: 'starting',
    servings: '8 portions',
    image: IG_RASPBERRY_SLAB,
  },
  {
    id: 'mousse-coconut',
    name: 'Coconut Mousse Cake',
    category: 'mousse',
    description:
      'Featherlight whipped coconut cream mousse resting on tender white chocolate almond biscuit.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8 portions',
    image: IG_OVAL_FLORAL_CAKE,
  },
  {
    id: 'mousse-banana',
    name: 'Banana Mousse Cake',
    category: 'mousse',
    description:
      'Silky milk chocolate and browned-butter caramelised banana mousse over soft vanilla sponge.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8 portions',
    image: IG_MEDOVIK_RIBBON,
  },
  {
    id: 'mousse-orange',
    name: 'Orange Mousse Cake',
    category: 'mousse',
    description:
      'Fragrant blood orange compote balanced with airy dark chocolate and sweet citrus patisserie cream.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8 portions',
    image: IG_CARAMEL_WALNUT_TART,
  },
  {
    id: 'mousse-seasonal',
    name: 'Seasonal Flavour Mousse',
    category: 'mousse',
    description:
      'Rotating seasonal patisserie editions featuring British berries, orchard stone fruits, and florals.',
    priceFrom: 38,
    priceType: 'starting',
    servings: '8 portions',
    image: IMG_MOUSSE_STRAWBERRY,
    seasonal: true,
  },

  // Desserts & Pastries — ALL 8 individual items listed in client brief
  {
    id: 'dessert-meringue-roll',
    name: 'Meringue Roll',
    category: 'dessert',
    description:
      'Crisp-shelled marshmallow meringue roulade filled with mascarpone cream and jewel raspberries.',
    priceFrom: 28,
    priceType: 'starting',
    servings: '6–8 slices',
    image: IMG_DESSERTS_ROLLS,
  },
  {
    id: 'dessert-poppy-roll',
    name: 'Poppy Seed Roll',
    category: 'dessert',
    description:
      'Tender butter-enriched brioche dough spiralled generously with fragrant sweetened poppy seed filling.',
    priceFrom: 24,
    priceType: 'fixed',
    servings: '6–8 slices',
    image: IMG_TRES_LECHES,
  },
  {
    id: 'dessert-cinnamon-rolls',
    name: 'Cinnamon Rolls (Box of 6)',
    category: 'dessert',
    description:
      'Cloud-soft handmade brioche buns swirled with Ceylon cinnamon butter and warm vanilla bean glaze.',
    priceFrom: 22,
    priceType: 'fixed',
    servings: '6 rolls',
    image: IG_GIFT_BOXES,
  },
  {
    id: 'dessert-cheesecake',
    name: 'Baked Cheesecake',
    category: 'dessert',
    description:
      'Velvety slow-baked cream cheese custard on a crisp biscuit base crowned with berries or caramel.',
    priceFrom: 34,
    priceType: 'starting',
    servings: '8–10 portions',
    image: IMG_BAKED_CHEESECAKE,
  },
  {
    id: 'dessert-apple-crumble',
    name: 'Apple Crumble',
    category: 'dessert',
    description:
      'Warm spiced Bramley apples baked beneath a golden browned-butter oat and almond streusel.',
    priceFrom: 26,
    priceType: 'fixed',
    servings: '6–8 portions',
    image: IMG_PUMPKIN_CRUMBLE,
  },
  {
    id: 'dessert-pumpkin-pie',
    name: 'Pumpkin Pie',
    category: 'dessert',
    description:
      'Spiced roasted pumpkin custard baked in delicate shortcrust pastry with whipped vanilla cream.',
    priceFrom: 28,
    priceType: 'fixed',
    servings: '8 portions',
    image: IG_BENTO_PUMPKIN,
  },
  {
    id: 'dessert-tres-leches',
    name: 'Milk Cake / Tres Leches',
    category: 'dessert',
    description:
      'Featherlight sponge bathed in three sweet milks and finished with soft vanilla chantilly.',
    priceFrom: 30,
    priceType: 'starting',
    servings: '6–8 portions',
    image: IG_MEDOVIK_CANDLE_ROSES,
  },
  {
    id: 'dessert-seasonal-box',
    name: 'Seasonal Patisserie Box',
    category: 'dessert',
    description:
      'Curated seasonal gift box uniting slices of honey cake, rolls, and handmade sweet treats for gifting.',
    priceFrom: 32,
    priceType: 'starting',
    servings: '6–8 pieces',
    image: IG_CHRISTMAS_BOX,
    seasonal: true,
  },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Medovik with Satin Bow Ribbon',
    category: 'Cakes',
    image: IG_MEDOVIK_RIBBON_ACETATE,
  },
  {
    id: 'gal-2',
    title: 'Ivory Coquette Heart Cake with Bows',
    category: 'Bento & Heart Cakes',
    image: IG_HEART_BOWS,
  },
  {
    id: 'gal-3',
    title: 'Floral Birthday Square Cake',
    category: 'Decorated Cakes',
    image: IG_FLORAL_MUM_CAKE,
  },
  {
    id: 'gal-4',
    title: 'Hand-Drawn Giraffe Bento Box',
    category: 'Bento Cakes',
    image: IG_BENTO_GIRAFFE,
  },
  {
    id: 'gal-5',
    title: 'Raspberry Mousse Entremet',
    category: 'Desserts',
    image: IG_RASPBERRY_MOUSSE,
  },
  {
    id: 'gal-6',
    title: 'Burgundy Ribbon Celebration Cake',
    category: 'Seasonal & Custom',
    image: IG_BURGUNDY_BOW_CAKE,
  },
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    customerName: 'Sophie Harrison',
    location: 'Kensington, London',
    orderedItem: 'Medovik Honey Cake',
    quote:
      'The most delicate Medovik I have ever tasted in London. Every layer melted in the mouth and the sweetness was so balanced. All of our dinner guests asked where it came from.',
  },
  {
    id: 'rev-2',
    customerName: 'Olivia Bennett',
    location: 'Greenwich, London',
    orderedItem: 'Custom Bento Heart Cake',
    quote:
      'Daryna created the prettiest vintage bento heart cake for my sister’s birthday. Ordering over WhatsApp was effortless and the sponge inside was genuinely homemade and fresh.',
  },
  {
    id: 'rev-3',
    customerName: 'Anastasia Kovalenko',
    location: 'Richmond, London',
    orderedItem: 'Napoleon & Meringue Roll',
    quote:
      'Authentic flaky Napoleon and a cloud-soft raspberry dessert that reminded us of home. Thoughtfully boxed, punctual, and clearly baked with real care.',
  },
];
