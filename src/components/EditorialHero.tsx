import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { NavCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface EditorialHeroProps {
  onExploreClick: () => void;
  onMissionClick: () => void;
  onSelectCategory: (cat: NavCategory) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onExploreClick,
  onMissionClick
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-black select-none overflow-hidden landscape:min-h-0 landscape:h-auto landscape:py-16 sm:landscape:py-20 lg:min-h-[720px] max-h-[1080px]">
      
      {/* 1. Cinematic Background Photography (Full-bleed cover) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2400&q=88"
          alt="Young adults collaborating in a contemporary public square"
          className="w-full h-full object-cover object-[center_32%] scale-100 animate-in fade-in zoom-in-105 duration-1000 ease-out"
        />
        
        {/* Controlled Editorial Dark Overlay (~35% darkening + central vignette for crisp legibility) */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-radial-at-center from-black/30 via-transparent to-black/60" />
      </div>

      {/* 2. Central Hero Composition (1440px Canvas, centered vertically & horizontally) */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-14 landscape:pt-16 landscape:pb-8 flex flex-col items-center justify-center text-center">
        
        <div className="max-w-[840px] flex flex-col items-center animate-in fade-in slide-in-from-bottom-3 duration-700">
          
          {/* Small Introductory Label */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 landscape:mb-2.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b72429]" />
            <span className="text-[11px] sm:text-[12px] landscape:text-[10.5px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#f6eddc]">
              {t('hero.badge')}
            </span>
          </div>

          {/* Main Headline (Responsive typography for portrait, tablet, desktop, and mobile landscape) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[82px] landscape:text-2xl sm:landscape:text-3xl font-black text-white leading-[1.08] tracking-tight mb-4 sm:mb-6 landscape:mb-2.5 text-shadow-sm">
            {t('hero.title_part1')}<br />
            {t('hero.title_part2')}<span className="text-[#b72429]">{t('hero.title_highlight')}</span>
          </h1>

          {/* Supporting Introduction Copy */}
          <p className="text-sm sm:text-base md:text-[18px] landscape:text-xs text-white/95 font-normal leading-relaxed max-w-[620px] mb-6 sm:mb-10 landscape:mb-4 text-shadow-xs">
            {t('hero.description')}
          </p>

          {/* Two Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row landscape:flex-row items-center justify-center gap-2.5 sm:gap-3 landscape:gap-3 w-full sm:w-auto">
            
            {/* Primary CTA: Explore NYV ↗ / Танилцах ↗ */}
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 sm:h-12 landscape:h-10 px-6 sm:px-8 landscape:px-5 rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white text-[14px] sm:text-[15px] landscape:text-[13px] font-semibold tracking-normal transition-all duration-150 shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b72429]/50 font-btn cursor-pointer"
              aria-label="Explore National Youth Voice"
            >
              <span>{t('hero.cta_explore')}</span>
              <ArrowUpRight size={16} className="stroke-[2.4]" />
            </button>

            {/* Secondary CTA: Our Mission / Бидний зорилго */}
            <button
              onClick={onMissionClick}
              className="w-full sm:w-auto inline-flex items-center justify-center h-11 sm:h-12 landscape:h-10 px-6 sm:px-8 landscape:px-5 rounded-[6px] bg-transparent hover:bg-white/10 text-white border border-white/70 hover:border-white text-[14px] sm:text-[15px] landscape:text-[13px] font-medium tracking-normal transition-all duration-150 backdrop-blur-xs active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40 font-btn cursor-pointer"
              aria-label="Read our mission"
            >
              <span>{t('hero.cta_mission')}</span>
            </button>

          </div>

        </div>

      </div>

      {/* 3. Subtle Scroll Indicator at Bottom (Hidden in mobile landscape to avoid overlap) */}
      <div 
        onClick={onExploreClick}
        className="absolute bottom-5 inset-x-0 z-10 hidden sm:flex landscape:hidden flex-col items-center justify-center gap-1.5 cursor-pointer text-[#f6eddc]/80 hover:text-white transition-colors group"
      >
        <span className="text-[10px] sm:text-[10.5px] font-medium tracking-[0.22em] uppercase">
          {t('hero.scroll')}
        </span>
        <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform stroke-[2]" />
      </div>

    </section>
  );
};
