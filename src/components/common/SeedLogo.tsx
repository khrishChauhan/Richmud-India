import React from 'react';
import richmudLogo from '../../assets/richmud-crest-logo.png';

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
    sm: 'h-10 sm:h-11',
    md: 'h-11 sm:h-12 md:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-32',
  };

  const alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClasses} justify-center group select-none ${className}`}>
      {/* 3D Embossed Golden RICHMUD Farmer & Bull Crest Logo Mark */}
      <img
        src={richmudLogo}
        alt="richmud"
        className={`${logoHeights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.2)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]`}
        loading="eager"
      />
    </div>
  );
};
