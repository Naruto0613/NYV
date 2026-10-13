import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { NyvLogo } from './NyvLogo';
import { NavCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  currentCategory: NavCategory;
  onSelectCategory: (cat: NavCategory) => void;
  onOpenJoinModal: () => void;
  onToggleFigmaSpec?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  onOpenJoinModal
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect scroll position to transition from transparent to solid white navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Close dropdown or mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Left side navigation items
  const leftNavItems = [
    {
      id: 'about',
      label: t('nav.about'),
      category: 'about' as NavCategory,
      hasDropdown: true,
      subItems: [
        { title: t('nav.our_mission'), desc: t('nav.our_mission_desc'), category: 'about' as NavCategory },
        { title: t('nav.organization'), desc: t('nav.organization_desc'), category: 'about' as NavCategory },
        { title: t('nav.leadership'), desc: t('nav.leadership_desc'), category: 'attendance' as NavCategory },
        { title: t('nav.contact'), desc: t('nav.contact_desc'), category: 'inquiries' as NavCategory }
      ]
    },
    {
      id: 'work',
      label: t('nav.work'),
      category: 'demographics' as NavCategory,
      hasDropdown: true,
      subItems: [
        { title: t('nav.participation'), desc: t('nav.participation_desc'), category: 'home' as NavCategory },
        { title: t('nav.policy'), desc: t('nav.policy_desc'), category: 'proposals' as NavCategory },
        { title: t('nav.programs'), desc: t('nav.programs_desc'), category: 'hearings' as NavCategory },
        { title: t('nav.calendar'), desc: t('nav.calendar_desc'), category: 'schedule' as NavCategory }
      ]
    }
  ];

  // Right side navigation items
  const rightNavItems = [
    {
      id: 'news',
      label: t('nav.news'),
      category: 'news' as NavCategory,
      hasDropdown: false
    },
    {
      id: 'resources',
      label: t('nav.resources'),
      category: 'demographics' as NavCategory,
      hasDropdown: true,
      subItems: [
        { title: t('nav.research'), desc: t('nav.research_desc'), category: 'records' as NavCategory },
        { title: t('nav.demographics'), desc: t('nav.demographics_desc'), category: 'demographics' as NavCategory },
        { title: t('nav.polls'), desc: t('nav.polls_desc'), category: 'polls' as NavCategory },
        { title: t('nav.records'), desc: t('nav.records_desc'), category: 'records' as NavCategory }
      ]
    }
  ];

  // Is transparent mode active? Transparent when at top of homepage!
  const isTransparent = !isScrolled && currentCategory === 'home';

  const isLeftActive = (item: typeof leftNavItems[0]) => {
    if (currentCategory === item.category) return true;
    return item.subItems?.some(s => s.category === currentCategory) || false;
  };

  const isRightActive = (item: typeof rightNavItems[0]) => {
    if (currentCategory === item.category) return true;
    if ('subItems' in item && item.subItems) {
      return item.subItems.some(s => s.category === currentCategory);
    }
    return false;
  };

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent border-b border-white/10' 
          : 'bg-white/95 backdrop-blur-md border-b border-[#E6EAF0] shadow-xs'
      }`}
    >
      {/* Responsive single-line container with adaptive height */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 h-14 sm:h-16 lg:h-20">
        
        {/* Three visually balanced zones with guaranteed mathematical center */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-full w-full">
          
          {/* ZONE 1: LEFT NAVIGATION */}
          <div className="flex items-center justify-start min-w-0">
            
            {/* Mobile menu trigger */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 -ml-2 rounded-md transition-colors ${
                  isTransparent 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-black hover:bg-[#f6eddc]'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Desktop Left Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8 font-nav">
              {leftNavItems.map((item) => {
                const active = isLeftActive(item);
                const open = activeDropdown === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => onSelectCategory(item.category)}
                      className={`group relative inline-flex items-center gap-1.5 py-2 text-[14px] font-medium tracking-normal transition-colors duration-150 select-none cursor-pointer ${
                        isTransparent
                          ? active
                            ? 'text-white font-semibold'
                            : 'text-white/90 hover:text-white'
                          : active
                            ? 'text-[#b72429] font-semibold'
                            : 'text-gray-900 hover:text-[#b72429]'
                      }`}
                      aria-haspopup={item.hasDropdown ? 'true' : undefined}
                      aria-expanded={open ? 'true' : 'false'}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            open 
                              ? 'rotate-180 text-[#b72429]' 
                              : isTransparent 
                                ? 'text-white/70 group-hover:text-white' 
                                : 'text-gray-500 group-hover:text-[#b72429]'
                          }`}
                        />
                      )}

                      {/* Active indicator underline in Primary Red #b72429 */}
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b72429] rounded-full" />
                      )}
                    </button>

                    {/* Minimal Institutional Dropdown */}
                    {item.hasDropdown && open && (
                      <div
                        className="absolute top-full left-0 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-xl border border-[#E6EAF0] shadow-xl p-2 bg-gradient-to-b from-white to-[#FDFCFB]">
                          <div className="space-y-1">
                            {item.subItems.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  onSelectCategory(sub.category);
                                  setActiveDropdown(null);
                                }}
                                className="w-full text-left p-2.5 rounded-lg hover:bg-[#f6eddc] transition-colors group/item block cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[13.5px] font-semibold text-black group-hover/item:text-[#b72429] transition-colors">
                                    {sub.title}
                                  </span>
                                  <span className="text-[11px] text-[#b72429] opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    →
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-[#667085] mt-0.5 leading-snug">
                                  {sub.desc}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

          </div>

          {/* ZONE 2: CENTER ZONE (True 50% Horizontal Viewport Alignment) */}
          <div className="flex items-center justify-center px-2 sm:px-4">
            <NyvLogo
              variant={isTransparent ? 'white' : 'compact'}
              size="navbar"
              onClick={() => {
                onSelectCategory('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* ZONE 3: RIGHT NAVIGATION & PRIMARY CTA */}
          <div className="flex items-center justify-end gap-2 sm:gap-4 lg:gap-5 xl:gap-7 min-w-0">
            
            {/* Desktop Right Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 font-nav">
              {rightNavItems.map((item) => {
                const active = isRightActive(item);
                const open = activeDropdown === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => onSelectCategory(item.category)}
                      className={`group relative inline-flex items-center gap-1.5 py-2 text-[14px] font-medium tracking-normal transition-colors duration-150 select-none cursor-pointer ${
                        isTransparent
                          ? active
                            ? 'text-white font-semibold'
                            : 'text-white/90 hover:text-white'
                          : active
                            ? 'text-[#b72429] font-semibold'
                            : 'text-gray-900 hover:text-[#b72429]'
                      }`}
                      aria-haspopup={item.hasDropdown ? 'true' : undefined}
                      aria-expanded={open ? 'true' : 'false'}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            open 
                              ? 'rotate-180 text-[#b72429]' 
                              : isTransparent 
                                ? 'text-white/70 group-hover:text-white' 
                                : 'text-gray-500 group-hover:text-[#b72429]'
                          }`}
                        />
                      )}

                      {/* Active indicator */}
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b72429] rounded-full" />
                      )}
                    </button>

                    {/* Resources Dropdown */}
                    {item.hasDropdown && open && 'subItems' in item && item.subItems && (
                      <div
                        className="absolute top-full right-0 pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150 z-50"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-xl border border-[#E6EAF0] shadow-xl p-2 bg-gradient-to-b from-white to-[#FDFCFB]">
                          <div className="space-y-1">
                            {item.subItems.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  onSelectCategory(sub.category);
                                  setActiveDropdown(null);
                                }}
                                className="w-full text-left p-2.5 rounded-lg hover:bg-[#f6eddc] transition-colors group/item block cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[13.5px] font-semibold text-black group-hover/item:text-[#b72429] transition-colors">
                                    {sub.title}
                                  </span>
                                  <span className="text-[11px] text-[#b72429] opacity-0 group-hover/item:opacity-100 transition-opacity">
                                    →
                                  </span>
                                </div>
                                <p className="text-[11.5px] text-[#667085] mt-0.5 leading-snug">
                                  {sub.desc}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* BILINGUAL LANGUAGE SWITCHER: MN / EN */}
            <div className="flex items-center shrink-0">
              <div 
                className={`inline-flex items-center p-0.5 rounded-full text-xs font-semibold tracking-wider transition-colors border ${
                  isTransparent 
                    ? 'bg-black/35 border-white/20 text-white backdrop-blur-sm' 
                    : 'bg-gray-100 border-gray-200 text-gray-700'
                }`}
                title="Switch language / Хэл солих"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('mn')}
                  className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all cursor-pointer ${
                    language === 'mn'
                      ? isTransparent
                        ? 'bg-white text-black shadow-xs font-bold'
                        : 'bg-[#b72429] text-white shadow-xs font-bold'
                      : isTransparent
                        ? 'text-white/80 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                  }`}
                  aria-label="Монгол хэл"
                >
                  MN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all cursor-pointer ${
                    language === 'en'
                      ? isTransparent
                        ? 'bg-white text-black shadow-xs font-bold'
                        : 'bg-[#b72429] text-white shadow-xs font-bold'
                      : isTransparent
                        ? 'text-white/80 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>
            </div>

            {/* PRIMARY CALL-TO-ACTION: "Нэгдэх ↗" / "Join NYV ↗" */}
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 h-8 sm:h-9 lg:h-10 px-2.5 sm:px-4 lg:px-[18px] rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white text-[12.5px] sm:text-[13.5px] lg:text-[14px] font-medium tracking-normal transition-all duration-150 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#b72429]/40 active:scale-[0.98] select-none font-btn whitespace-nowrap cursor-pointer shrink-0"
              aria-label="Join National Youth Voice"
            >
              <span>{t('nav.join_nyv')}</span>
              <ArrowUpRight size={13} className="stroke-[2.2] hidden xs:inline" />
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE EXPANDED MENU DRAWER (Optimized for both portrait and rotated landscape) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 lg:top-20 bg-white border-b border-[#E6EAF0] shadow-2xl p-4 sm:p-6 landscape:p-4 z-50 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100svh-3.5rem)] sm:max-h-[calc(100svh-4rem)] overflow-y-auto">
          <div className="space-y-4 landscape:space-y-3 max-w-2xl mx-auto">
            
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {t('nav.lang_toggle')}
              </span>
              <div className="inline-flex items-center p-0.5 rounded-full text-xs bg-gray-100 border border-gray-200">
                <button
                  onClick={() => setLanguage('mn')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    language === 'mn' ? 'bg-[#b72429] text-white shadow-xs' : 'text-gray-600'
                  }`}
                >
                  Монгол (MN)
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    language === 'en' ? 'bg-[#b72429] text-white shadow-xs' : 'text-gray-600'
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>

            {/* Primary Navigation - 2-columns in landscape mode! */}
            <div>
              <p className="text-[11px] font-bold text-[#667085] uppercase tracking-wider mb-2">
                {language === 'mn' ? 'Цэс' : 'Navigation'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-2 gap-1.5 landscape:gap-1.5">
                {[
                  { label: t('nav.about'), cat: 'about' as NavCategory },
                  { label: t('nav.work'), cat: 'demographics' as NavCategory },
                  { label: t('nav.news'), cat: 'news' as NavCategory },
                  { label: t('nav.research'), cat: 'records' as NavCategory },
                  { label: t('nav.demographics'), cat: 'demographics' as NavCategory },
                  { label: t('nav.polls'), cat: 'polls' as NavCategory },
                  { label: t('nav.attendance'), cat: 'attendance' as NavCategory },
                  { label: t('nav.policy'), cat: 'proposals' as NavCategory }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelectCategory(item.cat);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      currentCategory === item.cat
                        ? 'bg-[#f6eddc] text-[#b72429]'
                        : 'text-black hover:bg-[#f6eddc]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-[#667085]">›</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-2 border-t border-[#E6EAF0]">
              <button
                onClick={() => {
                  onOpenJoinModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 h-10 sm:h-11 rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white font-medium text-sm transition-colors shadow-sm font-btn cursor-pointer"
              >
                <span>{t('nav.join_nyv')}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
