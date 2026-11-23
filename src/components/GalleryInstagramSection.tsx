import {
  IG_BERRY_DRIP_CAKE,
  IG_CHRISTMAS_BOX,
  IG_FLORAL_MUM_CAKE,
  IG_GIFT_BOXES,
  IG_HEART_BOWS,
  IG_KYIV_CHOCOLATE,
  IG_RASPBERRY_MOUSSE,
  IG_RED_VELVET_PAIR,
} from '../data/catalog';
import type { GalleryItem, StudioSettings } from '../types/bakery';
import { ArrowUpRightVector, InstagramQrCode, InstagramVector } from './Icons';
import { SafeImage } from './SafeImage';

interface GalleryInstagramSectionProps {
  gallery: GalleryItem[];
  settings: StudioSettings;
}

const MOSAIC_SPAN_CLASSES = [
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-4',
  'md:col-span-5',
];

const COLLAGE_PHOTOS = [
  IG_BERRY_DRIP_CAKE,
  IG_CHRISTMAS_BOX,
  IG_HEART_BOWS,
  IG_GIFT_BOXES,
  IG_FLORAL_MUM_CAKE,
  IG_RASPBERRY_MOUSSE,
  IG_RED_VELVET_PAIR,
  IG_KYIV_CHOCOLATE,
];

export function GalleryInstagramSection({
  gallery,
  settings,
}: GalleryInstagramSectionProps) {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 border-t border-[#E9D8CE] bg-[#FAF0F1] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between pb-8 border-b border-[#E5CCD0]">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#2B1C16]">
              Gallery{' '}
              <span className="italic font-medium text-[#9E5360]">&amp; Instagram</span>
            </h2>
            <p className="mt-3 text-base text-[#5E453B] max-w-2xl">
              Recent cakes, bento boxes, floral celebrations, and seasonal desserts from our
              London kitchen.
            </p>
          </div>

          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-5 py-1.5 text-base font-medium text-[#2B1C16] hover:bg-[#FCF8F4] self-start sm:self-auto whitespace-nowrap transition-colors"
          >
            <InstagramVector className="w-4 h-4 text-[#9E5360]" />
            <span>{settings.instagramHandle}</span>
            <ArrowUpRightVector className="w-4 h-4" />
          </a>
        </div>

        {/* Large Asymmetric Lookbook Showcase */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5">
          {gallery.map((item, idx) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden rounded-[24px] border border-[#DFC9BE] bg-[#FFFDF9] p-2 shadow-[0_22px_44px_-26px_rgba(43,28,22,0.2)] ${
                MOSAIC_SPAN_CLASSES[idx % MOSAIC_SPAN_CLASSES.length]
              }`}
            >
              <div className="overflow-hidden rounded-[18px]">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  aspectClassName="aspect-[4/3] md:h-[340px] md:aspect-auto"
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="px-3 pt-3 pb-1.5 flex items-baseline justify-between gap-3">
                <span className="font-display text-xl font-semibold text-[#2B1C16] leading-snug">
                  {item.title}
                </span>
                <span className="font-display italic text-base text-[#9E5360] shrink-0">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Showstopping Full-Width Collage Backdrop + Elevated Ivory Instagram QR Card */}
      <div className="relative mt-14 overflow-hidden border-y border-[#E5CCD0] bg-[#2B1C16]">
        <div
          aria-hidden="true"
          className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 opacity-80"
        >
          {COLLAGE_PHOTOS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-44 sm:h-60 w-full object-cover"
              loading="eager"
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[#20130E]/32 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-3xl rounded-[28px] border border-[#DFC9BE] bg-[#FCF8F4]/98 px-6 py-8 sm:px-12 sm:py-10 shadow-[0_32px_68px_-24px_rgba(32,19,14,0.65)] text-center flex flex-col items-center gap-5">
            <h3 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#2B1C16] leading-tight">
              Follow{' '}
              <span className="italic font-medium text-[#9E5360]">Sweet Craft</span>
            </h3>

            <p className="text-base sm:text-lg text-[#5E453B] max-w-xl">
              See the newest birthday cakes, bento box illustrations, and behind-the-scenes bakes on{' '}
              <strong className="font-semibold text-[#2B1C16]">
                {settings.instagramHandle}
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-1">
              <InstagramQrCode url={settings.instagramUrl} size={116} />

              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-3 rounded-xl bg-[#2B1C16] px-6 py-2.5 text-base font-medium text-[#FCF8F4] hover:bg-[#9E5360] transition-colors"
              >
                <InstagramVector className="w-4 h-4 text-[#F3D2D8]" />
                <span>Open Instagram Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
