import React from 'react';

interface NyvLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'navbar';
  onClick?: () => void;
}

export const NyvLogo: React.FC<NyvLogoProps> = ({
  className = '',
  variant = 'compact',
  size = 'navbar',
  onClick
}) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#000000';
  const subColor = isWhite ? '#F6EDDC' : '#1C1C1C';
  const accentRed = '#b72429'; // Official NYV Primary Red

  // Navbar size: precisely 110-120px wide, 36-40px high
  const isNavbar = size === 'navbar';
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const svgWidth = isNavbar ? 92 : isSm ? 76 : isLg ? 130 : 100;
  const svgHeight = isNavbar ? 38 : isSm ? 32 : isLg ? 54 : 42;

  return (
    <div 
      className={`inline-flex flex-col items-center justify-center select-none cursor-pointer group transition-opacity hover:opacity-95 ${className}`}
      onClick={onClick}
      role="banner"
      aria-label="National Youth Voice Logo"
    >
      {/* Upper Logo Mark: NYV + Youth Figure + Voice Rays */}
      <div className="relative flex items-center justify-center">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 132 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* N */}
          <path
            d="M6 54V10H19.5L34 38.5V10H44V54H30.5L16 25.5V54H6Z"
            fill={textColor}
          />

          {/* Y - Stylized Youth Person with outstretched arms & head */}
          {/* Head */}
          <circle
            cx="64"
            cy="10"
            r="6.5"
            fill={textColor}
          />
          {/* Body and Arms: V-shaped raised arms converging to a solid trunk */}
          <path
            d="M49 12L60 28V54H68V28L79 12H68.5L64 20L59.5 12H49Z"
            fill={textColor}
          />

          {/* V */}
          <path
            d="M78 12H89L98 42.5L107 12H118L104 54H92L78 12Z"
            fill={textColor}
          />

          {/* Voice / Speech Rays radiating from the V in Official Primary Red #b72429 */}
          {/* Top ray */}
          <rect
            x="116.5"
            y="5.5"
            width="14"
            height="4"
            rx="2"
            transform="rotate(-40 116.5 5.5)"
            fill={accentRed}
          />
          {/* Middle ray */}
          <rect
            x="118.5"
            y="16.5"
            width="15"
            height="4"
            rx="2"
            transform="rotate(-15 118.5 16.5)"
            fill={accentRed}
          />
          {/* Lower ray */}
          <rect
            x="118.5"
            y="27.5"
            width="13"
            height="4"
            rx="2"
            transform="rotate(10 118.5 27.5)"
            fill={accentRed}
          />
        </svg>
      </div>

      {/* Typography: National Youth Voice wordmark */}
      {variant !== 'icon' && (
        <div className="mt-0.5 flex flex-col items-center text-center leading-none">
          <span 
            className="text-[12.5px] font-extrabold tracking-tight"
            style={{ color: textColor, fontFamily: 'Inter, "Plus Jakarta Sans", sans-serif' }}
          >
            National Youth Voice
          </span>
          {variant === 'full' && (
            <span 
              className="text-[7.5px] font-semibold tracking-[0.22em] uppercase mt-[1.5px]"
              style={{ color: subColor }}
            >
              YOUTH ORGANIZATION
            </span>
          )}
        </div>
      )}
    </div>
  );
};
