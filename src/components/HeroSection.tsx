import React, { useState, useEffect } from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { LIVE_ATTENDANCE_MEMBERS, AGE_COHORTS } from '../data/mockData';
import { NavCategory } from '../types';

interface HeroSectionProps {
  onSelectCategory: (cat: NavCategory) => void;
  onOpenFeedback: () => void;
  onOpenLiveSession: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCategory,
  onOpenFeedback,
  onOpenLiveSession
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeChartTab, setActiveChartTab] = useState<'age' | 'gender' | 'region'>('age');
  const [livePulse, setLivePulse] = useState(true);

  // Auto-pulse live indicator
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePulse(prev => !prev);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: 'ҮНДЭСНИЙ ЗАЛУУСЫН ДУУ ХООЛОЙ: БҮСЧИЛСЭН ХӨГЖИЛ БА ЗАЛУУЧУУДЫН ОРОЛЦООГ ДЭМЖИХ ҮНДЭСНИЙ АЯНЫ ҮР ДҮНТЭЙ ТАНИЛЦЛАА',
      summary: 'Монгол Улсын 21 аймаг, 9 дүүргийн залуусын дуу хоолой, санал санаачилгыг нэгтгэн ИРГЭДИЙН ОРОЛЦООГ САЙЖРУУЛАХ, бүсчилсэн хөгжлийн бодлогод тусгах ажлын хэсгийн уулзалт амжилттай боллоо...',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1400&q=85',
      badge: 'ОНЦЛОХ МЭДЭЭ',
      date: '2026.10.11'
    },
    {
      title: '21 АЙМГИЙН ЗАЛУУ МАНЛАЙЛАГЧДЫН ЧУУЛГА УУЛЗАЛТ: ОРОН НУТАГ ДАХЬ АЖЛЫН БАЙР БА ИННОВАЦИ',
      summary: 'Хангай, Баруун, Төв, Зүүн бүсийн залуусын төлөөлөл орон нутгийн эдийн засгийг төрөлжүүлэх, залуусын суурьшилтыг дэмжих бодлогын 12 багц саналыг баталлаа...',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85',
      badge: 'БҮСИЙН ЧУУЛГАН',
      date: '2026.10.09'
    },
    {
      title: 'МОНГОЛЫН ЗАЛУУЧУУДЫН НИЙГЭМ, СЭТГЭЛ ЗҮЙ, ЭДИЙН ЗАСГИЙН СУДАЛГААНЫ 2026 ОНЫ ТАЙЛАНГ НИЙТЭЛЛЭЭ',
      summary: 'Нийт 18,400 залууг хамарсан түүвэр судалгааны үр дүнгээр боловсролын чанар, цахим ур чадвар, анхны орон сууцны асуудал нэн тэргүүний сорилт хэвээр байгааг онцлов...',
      image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=85',
      badge: 'СУДАЛГАА, ТАЙЛАН',
      date: '2026.10.05'
    }
  ];

  // Distribute member list into 3 columns matching reference screenshot
  const col1Members = LIVE_ATTENDANCE_MEMBERS.slice(0, 8);
  const col2Members = LIVE_ATTENDANCE_MEMBERS.slice(8, 16);
  const col3Members = [
    'Бямбасүрэн.Ш',
    'Бямбацогт.С',
    'Ганбат.Д',
    'Ганзориг.П',
    'Гантөмөр.Л',
    'Даваасүрэн.Ц',
    'Дамдинням.Г',
    'Доржханд.Т'
  ];

  return (
    <section className="relative w-full bg-[#111111] pt-6 pb-20 lg:pb-24 text-white overflow-hidden">
      {/* Container */}
      <div className="relative max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid: Left featured card (65%) + Right widgets (35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6 items-start">
          
          {/* LEFT: Large Photographic Feature Hero Card (7 of 12 columns / approx 65%) */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 aspect-[16/10] sm:aspect-[16/9.5] lg:aspect-[16/9.6] group">
              
              {/* Background Photo */}
              <img
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* Text content inside the card at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-end">
                {/* Badge & Date */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold bg-[#b72429] text-white tracking-wider uppercase">
                    {heroSlides[activeSlide].badge}
                  </span>
                  <span className="text-[12px] font-medium text-gray-300">
                    {heroSlides[activeSlide].date}
                  </span>
                </div>

                {/* Big bold white heading */}
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[23px] xl:text-[25px] font-extrabold text-white leading-tight tracking-tight max-w-3xl mb-2.5">
                  {heroSlides[activeSlide].title}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm text-gray-200/90 font-normal leading-relaxed line-clamp-2 max-w-2xl mb-4">
                  {heroSlides[activeSlide].summary}
                </p>

                {/* Carousel Pagination indicator */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${
                          activeSlide === idx
                            ? 'w-7 bg-white'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectCategory('news')}
                    className="text-xs font-semibold text-white/90 hover:text-[#f6eddc] flex items-center gap-1 group/btn"
                  >
                    <span>Дэлгэрэнгүй үзэх</span>
                    <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: Two Stacked Widgets (4 of 12 columns / approx 35%) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Top Widget: Live Session / Delegate Attendance widget */}
            <div className="bg-[#181818] rounded-2xl p-4 border border-white/10 shadow-xl relative overflow-hidden">
              {/* Header with red live badge */}
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#b72429] text-white tracking-wide shadow-xs">
                    <span className={`w-2 h-2 rounded-full bg-white transition-opacity ${livePulse ? 'opacity-100' : 'opacity-40'}`} />
                    ШУУД
                  </span>
                  <span className="text-[12px] font-semibold text-gray-200">
                    Залуусын чуулганы ирц
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 font-mono">10:15:32</span>
              </div>

              {/* 3-column Member Attendance list */}
              <div className="grid grid-cols-3 gap-1.5 text-[10.5px] leading-tight font-medium text-gray-200 py-1">
                {/* Column 1 */}
                <div className="space-y-1">
                  {col1Members.map((m, idx) => (
                    <div key={idx} className="truncate text-gray-300 hover:text-white transition-colors">
                      <span className="text-gray-400 font-mono text-[9.5px] mr-1">{m.time}</span>
                      <span>{m.name}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-1">
                  {col2Members.map((m, idx) => (
                    <div key={idx} className="truncate text-gray-300 hover:text-white transition-colors">
                      <span className="text-gray-400 font-mono text-[9.5px] mr-1">{m.time}</span>
                      <span>{m.name}</span>
                    </div>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-1">
                  {col3Members.map((name, idx) => (
                    <div key={idx} className="truncate text-gray-400 hover:text-white transition-colors">
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget Footer */}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-gray-300">
                  <span>ИРЦЭД ОРООГҮЙ - </span>
                  <span className="text-[#b72429] font-mono font-bold">14</span>
                </div>
                <button
                  onClick={onOpenLiveSession}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-white hover:text-[#f6eddc] tracking-wider uppercase transition-colors"
                >
                  <span>БҮРЭН ЭХЭЭР ҮЗЭХ</span>
                  <ChevronRight size={13} className="stroke-[2.5]" />
                </button>
              </div>

            </div>

            {/* Bottom Widget: Demographic Bar Chart Card */}
            <div className="bg-white text-black rounded-2xl p-4 shadow-xl border border-[#E6EAF0] relative">
              
              {/* Header with Title & Chart Tabs */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] font-extrabold text-black uppercase tracking-wider">
                  {activeChartTab === 'age' ? 'НАСНЫ БҮЛЭГ' : activeChartTab === 'gender' ? 'ХҮЙСИЙН ХАРЬЦАА' : 'БҮСЧИЛСЭН БҮТЭЦ'}
                </span>
                
                {/* Dots toggle */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveChartTab('age')}
                    className={`w-2 h-2 rounded-full transition-all ${activeChartTab === 'age' ? 'bg-[#b72429] w-3' : 'bg-gray-300'}`}
                    title="Насны бүлэг"
                  />
                  <button
                    onClick={() => setActiveChartTab('gender')}
                    className={`w-2 h-2 rounded-full transition-all ${activeChartTab === 'gender' ? 'bg-[#b72429] w-3' : 'bg-gray-300'}`}
                    title="Хүйсийн харьцаа"
                  />
                  <button
                    onClick={() => setActiveChartTab('region')}
                    className={`w-2 h-2 rounded-full transition-all ${activeChartTab === 'region' ? 'bg-[#b72429] w-3' : 'bg-gray-300'}`}
                    title="Бүс нутаг"
                  />
                </div>
              </div>

              {/* Bar Chart matching Parliament reference exact layout */}
              {activeChartTab === 'age' && (
                <div className="pt-2 pb-1">
                  <div className="flex items-end justify-between gap-1.5 h-28 px-1">
                    {AGE_COHORTS.map((cohort, idx) => {
                      const heightPercent = Math.max((cohort.count / 45) * 100, 6);
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                          <span className="text-[10px] font-bold text-gray-700 font-mono">
                            {cohort.count}
                          </span>
                          
                          <div className="w-full bg-gray-100 rounded-t-sm flex items-end justify-center h-20">
                            <div
                              className="w-full bg-[#111111] group-hover:bg-[#b72429] transition-all rounded-t-sm"
                              style={{ height: `${heightPercent}%` }}
                            />
                          </div>

                          <span className="text-[9.5px] font-semibold text-gray-500 mt-0.5 truncate max-w-full">
                            {cohort.range}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-right mt-1.5">
                    <button
                      onClick={() => onSelectCategory('demographics')}
                      className="text-[10px] font-bold text-[#b72429] hover:underline uppercase tracking-wider"
                    >
                      Дэлгэрэнгүй өгөгдөл ›
                    </button>
                  </div>
                </div>
              )}

              {activeChartTab === 'gender' && (
                <div className="py-3 px-2">
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span className="text-black">Эрэгтэй (50.6%)</span>
                    <span className="text-[#b72429]">Эмэгтэй (49.4%)</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden flex shadow-inner">
                    <div className="h-full bg-black" style={{ width: '50.6%' }} />
                    <div className="h-full bg-[#b72429]" style={{ width: '49.4%' }} />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-3 text-center">
                    Монгол Улсын 15-34 насны залуусын хүйсийн тэнцвэрт харьцаа
                  </p>
                </div>
              )}

              {activeChartTab === 'region' && (
                <div className="space-y-1.5 py-1">
                  {[
                    { name: 'Улаанбаатар', pct: 48.2, color: 'bg-black' },
                    { name: 'Хангайн бүс', pct: 18.4, color: 'bg-[#b72429]' },
                    { name: 'Төвийн бүс', pct: 14.6, color: 'bg-neutral-700' },
                    { name: 'Баруун бүс', pct: 11.2, color: 'bg-[#b72429]' },
                    { name: 'Зүүн бүс', pct: 7.6, color: 'bg-neutral-500' },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-gray-700 w-24 truncate">{r.name}</span>
                      <div className="flex-1 mx-2 bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="font-mono font-bold text-gray-800 text-[10px] w-10 text-right">{r.pct}%</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom message banner: 💬 NYV таныг сонсож байна */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <button
                  onClick={onOpenFeedback}
                  className="w-full py-2 px-3 rounded-lg bg-[#f6eddc] hover:bg-[#ebdcc0] text-black hover:text-[#b72429] font-bold text-[12.5px] flex items-center justify-center gap-2 transition-all border border-[#ebdcc0]/60"
                >
                  <MessageSquare size={15} className="text-[#b72429]" />
                  <span>NYV таныг сонсож байна</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
