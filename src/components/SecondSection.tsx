import React from 'react';
import { ArrowUpRight, BarChart3, Users, Vote } from 'lucide-react';
import { NavCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SecondSectionProps {
  onSelectCategory: (cat: NavCategory) => void;
  onOpenJoinModal: () => void;
}

export const SecondSection: React.FC<SecondSectionProps> = ({
  onSelectCategory,
  onOpenJoinModal
}) => {
  const { t } = useLanguage();

  return (
    <section id="mission-section" className="w-full bg-[#f6eddc] text-black py-12 sm:py-16 lg:py-24 landscape:py-12 border-t border-[#ebdcc0]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-[820px] mx-auto text-center mb-10 sm:mb-16">
          <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#b72429] block mb-2 sm:mb-3">
            {t('second.eyebrow')}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-3 sm:mb-5">
            {t('second.headline')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-[680px] mx-auto font-normal">
            {t('second.subtext')}
          </p>
        </div>

        {/* 3 Core Pillars in Clean Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Pillar 1: Civic Participation / Иргэний оролцоо */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 landscape:p-5 border border-[#ebdcc0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold mb-6">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {t('second.p1_title')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t('second.p1_desc')}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#E6EAF0]">
              <button
                onClick={() => onSelectCategory('attendance')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline"
              >
                <span>{t('second.p1_link')}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillar 2: Evidence-Based Policy / Баримтад суурилсан бодлого */}
          <div className="bg-white rounded-2xl p-8 border border-[#ebdcc0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold mb-6">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {t('second.p2_title')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t('second.p2_desc')}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#E6EAF0]">
              <button
                onClick={() => onSelectCategory('demographics')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline"
              >
                <span>{t('second.p2_link')}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillar 3: Direct Dialogue & Polls / Шууд хэлэлцүүлэг & Санал хураалт */}
          <div className="bg-white rounded-2xl p-8 border border-[#ebdcc0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold mb-6">
                <Vote size={22} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {t('second.p3_title')}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t('second.p3_desc')}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#E6EAF0]">
              <button
                onClick={() => onSelectCategory('polls')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline"
              >
                <span>{t('second.p3_link')}</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* Institutional Call-to-Action Strip */}
        <div className="bg-black text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('second.banner_title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('second.banner_desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="px-6 py-3 rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white font-semibold text-sm transition-colors shadow-md flex items-center gap-2 font-btn"
            >
              <span>{t('second.banner_btn1')}</span>
              <ArrowUpRight size={15} />
            </button>
            <button
              onClick={() => onSelectCategory('about')}
              className="px-6 py-3 rounded-[6px] bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/20 font-btn"
            >
              <span>{t('second.banner_btn2')}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
