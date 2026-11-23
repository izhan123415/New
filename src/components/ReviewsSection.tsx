import {
  IG_MEDOVIK_SLICE_BERRY,
  IG_NAPOLEON_RASPBERRY,
  IG_RED_HEART_CAKE,
} from '../data/catalog';
import type { ReviewItem } from '../types/bakery';
import { StarVector } from './Icons';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
}

const REVIEW_AVATARS = [
  IG_MEDOVIK_SLICE_BERRY,
  IG_RED_HEART_CAKE,
  IG_NAPOLEON_RASPBERRY,
];

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-[#FCF8F4] py-16 sm:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-[#E6D4C8]">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#2B1C16]">
              Customer{' '}
              <span className="italic font-medium text-[#9E5360]">Reviews</span>
            </h2>
            <p className="mt-3 text-base text-[#5E453B]">
              Kind words from London clients celebrating birthdays, dinner parties, and special
              family moments.
            </p>
          </div>

          <p className="font-display italic text-xl text-[#9E5360] whitespace-nowrap">
            5.0 / 5 · London Client Feedback
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {reviews.map((review, index) => {
            const avatarSrc = REVIEW_AVATARS[index % REVIEW_AVATARS.length];
            const isHighlightedCenter = index === 1;

            return (
              <blockquote
                key={review.id}
                className={`flex flex-col justify-between rounded-[24px] p-7 sm:p-8 ${
                  isHighlightedCenter
                    ? 'bg-[#2B1C16] text-[#FCF8F4] shadow-[0_26px_54px_-24px_rgba(43,28,22,0.4)]'
                    : 'border border-[#E6D4C8] bg-[#FFFDF9] text-[#2B1C16] shadow-[0_18px_40px_-26px_rgba(43,28,22,0.14)]'
                }`}
              >
                <div>
                  <div
                    className={`flex items-center gap-1 ${
                      isHighlightedCenter ? 'text-[#F3D2D8]' : 'text-[#C49A5C]'
                    }`}
                    aria-label="5 out of 5 stars"
                  >
                    {[0, 1, 2, 3, 4].map((starIdx) => (
                      <StarVector key={starIdx} className="w-5 h-5" />
                    ))}
                  </div>

                  <p
                    className={`mt-5 font-display italic text-[22px] leading-relaxed ${
                      isHighlightedCenter ? 'text-[#FAF0EC]' : 'text-[#3C2820]'
                    }`}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <footer
                  className={`mt-7 pt-5 border-t flex items-center gap-3.5 ${
                    isHighlightedCenter ? 'border-white/15' : 'border-[#E6D4C8]'
                  }`}
                >
                  <img
                    src={avatarSrc}
                    alt={review.orderedItem}
                    className="h-14 w-14 rounded-full object-cover shrink-0 border border-[#DFC9BE]"
                    loading="eager"
                  />
                  <div className="min-w-0">
                    <p
                      className={`font-display text-xl font-semibold truncate ${
                        isHighlightedCenter ? 'text-[#FCF8F4]' : 'text-[#2B1C16]'
                      }`}
                    >
                      {review.customerName}
                    </p>
                    <p
                      className={`text-base leading-snug ${
                        isHighlightedCenter ? 'text-[#DFC9BE]' : 'text-[#6E5045]'
                      }`}
                    >
                      {review.orderedItem} · {review.location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
