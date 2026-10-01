import React from 'react';
import richmudLogo from '../../assets/richmud-logo.png';

interface SeedLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  align?: 'left' | 'center';
}

export const SeedLogo: React.FC<SeedLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
  align = 'left',
}) => {
  const logoHeights = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  const taglineSizes = {
    sm: 'text-[7.5px]',
    md: 'text-[8.5px] sm:text-[9.5px]',
    lg: 'text-[11px] sm:text-xs',
    xl: 'text-xs sm:text-sm',
  };

  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClasses} justify-center group select-none ${className}`}>
      {/* 3D Embossed Golden RICHMUD Logo Mark */}
      <img
        src={richmudLogo}
        alt="RICHMUD — Good Seed • Good Life"
        className={`${logoHeights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]`}
        loading="eager"
      />

      {/* Luxury Botanical Tagline */}
      {showTagline && (
        <span
          className={`font-sans uppercase tracking-[0.24em] font-bold flex items-center gap-1.5 whitespace-nowrap mt-0.5 ${
            align === 'center' ? 'justify-center' : 'pl-0.5'
          } ${
            variant === 'dark' ? 'text-emerald-400' : 'text-[#14532D]'
          } ${taglineSizes[size]}`}
        >
          <span>Good seed</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] inline-block shadow-sm" />
          <span>good life</span>
        </span>
      )}
    </div>
  );
};
