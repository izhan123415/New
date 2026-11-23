import { useState } from 'react';
import { CakeWhiskVector } from './Icons';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  priority = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`${aspectClassName} w-full bg-[#F5ECE2] flex flex-col items-center justify-center gap-2 px-4 text-center text-[#634B42] ${className}`}
        role="img"
        aria-label={alt}
      >
        <CakeWhiskVector className="w-7 h-7 text-[#9C7A68]" />
        <span className="text-base font-medium">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`${aspectClassName} w-full overflow-hidden bg-[#F5ECE2] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="eager"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover scale-[1.05]"
      />
    </div>
  );
}
