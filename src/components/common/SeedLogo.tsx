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
  size = 'md',
  className = '',
  align = 'left',
}) => {
  const logoHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClasses} justify-center group select-none ${className}`}>
      {/* 3D Embossed Golden RICHMUD Logo Mark (Pure wordmark without tagline) */}
      <img
        src={richmudLogo}
        alt="richmud"
        className={`${logoHeights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]`}
        loading="eager"
      />
    </div>
  );
};
