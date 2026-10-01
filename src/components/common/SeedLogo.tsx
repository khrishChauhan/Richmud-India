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
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
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
            <linearGradient id="goldSeedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF3DE" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#946B08" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#D4AF37" floodOpacity="0.4" />
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

          {/* Inner Accent Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="url(#goldRingGrad)"
            strokeWidth="0.75"
            className="opacity-50"
          />

          {/* Golden Sprouting Seed Leaf */}
          <path
            d="M50 18 C66 33 72 58 50 82 C28 58 34 33 50 18 Z"
            fill="url(#goldSeedGrad)"
            filter="url(#goldGlow)"
          />

          {/* Inner Germination Line */}
          <path
            d="M50 26 C57 40 57 58 50 72"
            stroke="#FAF9F6"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            className="opacity-90"
          />

          {/* Central Vitality Sprout */}
          <circle cx="50" cy="50" r="3" fill="#FAF9F6" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
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
            className={`font-sans uppercase tracking-[0.22em] font-medium text-gold-600 mt-1 flex items-center gap-1 ${taglineSizes[size]}`}
          >
            <span>Good seed</span>
            <span className="w-1.5 h-1.5 rounded-full bg-botanical-700 inline-block" />
            <span>good life</span>
          </span>
        )}
      </div>
    </div>
  );
};
