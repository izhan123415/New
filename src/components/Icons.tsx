import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export function ArrowRightVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10h12" />
      <path d="M11 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowUpRightVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 14L14 6" />
      <path d="M7.5 6H14v6.5" />
    </svg>
  );
}

export function BagVector({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h12l1 12H5L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function PlusVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 4v12" />
      <path d="M4 10h12" />
    </svg>
  );
}

export function MinusVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10h12" />
    </svg>
  );
}

export function TrashVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6h12" />
      <path d="M8 6V4h4v2" />
      <path d="M6 6l.8 10h6.4L14 6" />
    </svg>
  );
}

/* Authentic original WhatsApp logo vector */
export function WhatsAppOriginalVector({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 3.2C8.947 3.2 3.204 8.943 3.204 16c0 2.256.591 4.46 1.714 6.404L3.1 28.8l6.555-1.72a12.74 12.74 0 0 0 6.349 1.693h.005c7.055 0 12.797-5.744 12.797-12.8S23.06 3.2 16.004 3.2zm7.46 18.084c-.315.887-1.835 1.696-2.548 1.801-.65.098-1.472.14-2.376-.148-.548-.174-1.251-.407-2.151-.795-3.784-1.633-6.256-5.442-6.445-5.694-.188-.252-1.538-2.047-1.538-3.905 0-1.858.972-2.771 1.318-3.149.345-.377.755-.472 1.007-.472.252 0 .504.003.724.014.233.012.545-.088.853.652.315.755 1.071 2.613 1.166 2.802.094.188.157.409.031.66-.126.252-.189.409-.378.629-.189.22-.396.492-.567.66-.189.188-.386.393-.166.771.22.377.979 1.615 2.103 2.616 1.445 1.288 2.662 1.688 3.04 1.877.378.188.598.157.818-.095.22-.252.944-1.101 1.196-1.479.252-.377.504-.314.849-.188.346.126 2.202 1.038 2.58 1.227.378.188.629.283.723.44.095.157.095.912-.22 1.799z" />
    </svg>
  );
}

export function InstagramVector({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuVector({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseVector({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function CakeWhiskVector({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 15h16v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4z" />
      <path d="M5 15v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M4 13c1.5 1.2 3 1.2 4 0 1 1.2 2.5 1.2 4 0 1.5 1.2 3 1.2 4 0 1 1.2 2.5 1.2 4 0" />
      <path d="M12 6c0-1.5 1-2.5 1-2.5s1 1 1 2.5a1 1 0 1 1-2 0z" />
      <path d="M12 7v3" />
    </svg>
  );
}

export function SearchVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2L17 17" />
    </svg>
  );
}

export function SwirlLoopVector({ className = 'w-28 h-24' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 16c24-8 56 4 64 26 6 16-8 32-24 28-14-4-14-24 4-28 22-4 40 16 48 36" />
    </svg>
  );
}

export function StarVector({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 2.4l2.25 4.78 5.25.67-3.85 3.63.98 5.2L10 14.12l-4.63 2.56.98-5.2L2.5 7.85l5.25-.67L10 2.4z" />
    </svg>
  );
}

export function InstagramQrCode({
  url,
  size = 132,
  label = 'QR code linking to @sweetcraft_daryna on Instagram',
}: {
  url: string;
  size?: number;
  label?: string;
}) {
  const [svgMarkup, setSvgMarkup] = useState<string>('');

  useEffect(() => {
    let active = true;
    QRCode.toString(url, {
      type: 'svg',
      margin: 1,
      color: {
        dark: '#2B1C16',
        light: '#FAF4EE',
      },
    })
      .then((markup) => {
        if (active) setSvgMarkup(markup);
      })
      .catch(() => {
        if (active) setSvgMarkup('');
      });
    return () => {
      active = false;
    };
  }, [url]);

  if (!svgMarkup) {
    return (
      <div
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-xl border border-[#E5D5CB] bg-[#FFFDF9] text-[#A45D69]"
        aria-label={label}
      >
        <InstagramVector className="w-7 h-7" />
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl border border-[#E5D5CB] bg-[#FAF4EE] p-2 shrink-0 overflow-hidden"
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}
