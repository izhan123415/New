import { useState } from 'react';
import { DEFAULT_SETTINGS } from '../data/catalog';
import { BagVector, CloseVector, InstagramVector, MenuVector } from './Icons';

interface HeaderProps {
  bagCount: number;
  onOpenBag: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Cakes', href: '#cakes' },
  { label: 'Bento Cakes', href: '#bento-cakes' },
  { label: 'Desserts', href: '#desserts' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ bagCount, onOpenBag }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative lg:sticky lg:top-0 z-40 bg-[#FCF8F4]/95 backdrop-blur-md">
      {/* Subtle London Patisserie Store Announcement Bar (16px) */}
      <div className="border-b border-[#EAD9CE] bg-[#FAF0F1] px-4 py-1.5 text-center text-base text-[#5E453B]">
        Handcrafted to order in London · Collection &amp; local delivery ·{' '}
        <a
          href="#custom-cakes"
          className="font-medium text-[#9E5360] underline underline-offset-4 hover:text-[#2B1C16]"
        >
          Bespoke Celebration Cakes
        </a>
      </div>

      <div className="border-b border-[#E9D8CE]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8 py-3.5">
          {/* Refined Editorial Wordmark */}
          <a
            href="#home"
            className="flex items-baseline gap-1 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#9E5360] rounded"
            aria-label="Sweet Craft — Home"
          >
            <span className="font-display text-3xl sm:text-[36px] font-semibold tracking-tight text-[#2B1C16]">
              Sweet{' '}
              <span className="italic font-medium text-[#9E5360]">Craft</span>
            </span>
          </a>

          {/* Single-line Luxury Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8 text-base font-medium text-[#4D342B]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 py-1 hover:text-[#9E5360] transition-colors underline-offset-8 decoration-[#C49A5C] hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Boutique Store Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={DEFAULT_SETTINGS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sweet Craft on Instagram @sweetcraft_daryna"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5D3C8] bg-[#FFFDF9] text-[#4D342B] hover:border-[#C49A5C] hover:text-[#9E5360] transition-colors"
            >
              <InstagramVector className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenBag}
              className="hidden lg:inline-flex min-h-[44px] items-center gap-2.5 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-4 py-2 text-base font-medium text-[#2B1C16] hover:bg-[#2B1C16] hover:text-[#FCF8F4] hover:border-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <BagVector className="w-4 h-4 text-[#9E5360]" />
              <span className="tabular-nums">Bag ({bagCount})</span>
            </button>

            <button
              type="button"
              onClick={onOpenBag}
              aria-label={`Open Order Bag (${bagCount})`}
              className="inline-flex lg:hidden min-h-[44px] items-center gap-2 rounded-xl border border-[#C49A5C] bg-[#FFFDF9] px-3.5 py-1.5 text-base font-medium text-[#2B1C16] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <BagVector className="w-4 h-4 text-[#9E5360]" />
              <span className="tabular-nums">{bagCount}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border border-[#E2D0C5] bg-[#FFFDF9] text-[#2B1C16] cursor-pointer"
            >
              {mobileOpen ? <CloseVector className="w-5 h-5" /> : <MenuVector className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-b border-[#E9D8CE] bg-[#FCF8F4] px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[44px] flex items-center rounded-xl px-3.5 text-base font-medium text-[#2B1C16] hover:bg-[#FAF0F1] hover:text-[#9E5360]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-[#E9D8CE] flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenBag();
              }}
              className="flex-1 min-h-[46px] rounded-xl bg-[#2B1C16] px-5 py-2 text-base font-medium text-[#FCF8F4] cursor-pointer"
            >
              View Bag ({bagCount})
            </button>
            <a
              href={DEFAULT_SETTINGS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @sweetcraft_daryna"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2D0C5] bg-[#FFFDF9] text-[#2B1C16]"
            >
              <InstagramVector className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
