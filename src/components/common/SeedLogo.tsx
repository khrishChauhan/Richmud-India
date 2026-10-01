import React from 'react';

interface SeedLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const SeedLogo: React.FC<SeedLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl sm:text-[22px]',
    lg: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[8.5px]',
    md: 'text-[9.5px] sm:text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Luxury Seed Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBA5A" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="emeraldSeedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E6B56" />
              <stop offset="50%" stopColor="#1B4D3E" />
              <stop offset="100%" stopColor="#0E3328" />
            </linearGradient>
            <linearGradient id="goldSeedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF3DE" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#946B08" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#1B4D3E" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Outer Hairline Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#goldRingGrad)"
            strokeWidth="2.5"
            strokeDasharray="90 10"
            className="opacity-90"
          />

          {/* Inner Botanical Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#1B4D3E"
            strokeWidth="1.2"
            strokeDasharray="12 4"
            className="opacity-60"
          />

          {/* Golden & Emerald Dual-Tone Sprouting Seed */}
          <path
            d="M50 18 C66 33 72 58 50 82 C28 58 34 33 50 18 Z"
            fill="url(#goldSeedGrad)"
            filter="url(#goldGlow)"
          />

          {/* Botanical Emerald Germination Leaf Wing */}
          <path
            d="M50 22 C61 36 63 56 50 74 C50 60 52 40 50 22 Z"
            fill="url(#emeraldSeedGrad)"
            opacity="0.85"
          />

          {/* Inner Germination Line */}
          <path
            d="M50 26 C54 40 54 58 50 72"
            stroke="#FAF9F6"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            className="opacity-95"
          />

          {/* Central Vitality Sprout */}
          <circle cx="50" cy="50" r="3" fill="#D4AF37" stroke="#FAF9F6" strokeWidth="1" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center text-left">
        <span
          className={`font-serif tracking-widest font-bold leading-none ${titleSizes[size]} ${
            variant === 'dark'
              ? 'text-white'
              : 'text-charcoal-900 group-hover:text-gold-700 transition-colors'
          }`}
        >
          PAN <span className="text-gold-gradient">SEEDS</span>
        </span>
        {showTagline && (
          <span
            className={`font-sans uppercase tracking-[0.24em] font-semibold text-botanical-800 mt-1 flex items-center gap-1.5 whitespace-nowrap ${taglineSizes[size]}`}
          >
            <span>Good seed</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 inline-block shadow-sm" />
            <span>good life</span>
          </span>
        )}
      </div>
    </div>
  );
};
