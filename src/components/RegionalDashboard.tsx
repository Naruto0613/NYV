import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  MapPin, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Activity, 
  RefreshCw, 
  Download, 
  SlidersHorizontal,
  Flame,
  ArrowUpRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { MONGOLIA_REGIONS, YOUTH_AGE_DISTRIBUTION } from '../data/mockData';
import { DemographicRegion } from '../types';

export const RegionalDashboard: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('ub');
  const [isLiveActive, setIsLiveActive] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>('Саяхан');
  const [liveEvents, setLiveEvents] = useState<string[]>([
    'Улаанбаатар хот: +18 залуу цахим санал асуулгад нэгдлээ',
    'Орхон (Эрдэнэт): Залуу судлаачдын форумд 42 төлөөлөгч бүртгүүлэв',
    'Дархан-Уул: "Voice Pitch" төслийн 3 дахь баг саналаа илгээлээ'
  ]);

  // Selected Region
  const currentRegion = MONGOLIA_REGIONS.find(r => r.id === selectedRegionId) || MONGOLIA_REGIONS[0];

  // Live simulation for real-time dashboard updates
  useEffect(() => {
    if (!isLiveActive) return;

    const interval = setInterval(() => {
      const cities = ['Архангай', 'Ховд', 'Сэлэнгэ', 'Дорнод', 'Баян-Өлгий', 'Өмнөговь', 'Улаанбаатар'];
      const actions = [
        'орон сууцны хөнгөлөлттэй зээлийн саналд дэмжлэг илгээв',
        'бүсийн тэтгэлэгт хамрагдах хүсэлт илгээв',
        'хөдөлмөр эрхлэлтийн судалгаанд хариуллаа',
        'залуу малчдын ухаалаг төхөөрөмжийн төсөлд санал өглөө'
      ];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const newEvent = `${randomCity}: +${Math.floor(Math.random() * 8) + 1} залуу ${randomAction}`;

      setLiveEvents(prev => [newEvent, ...prev.slice(0, 4)]);
      setLastUpdated(new Date().toLocaleTimeString('mn-MN'));
    }, 4000);

    return () => clearInterval(interval);
  }, [isLiveActive]);

  const totalYouthAll = MONGOLIA_REGIONS.reduce((acc, r) => acc + r.youthPopulation, 0);

  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const handleExport = () => {
    setExportNotice('Бүсчилсэн өгөгдлийн нэгдсэн тайлан (CSV / PDF) татаж авах холбоос бэлтгэгдэж байна.');
    setTimeout(() => setExportNotice(null), 3000);
  };

  return (
    <div className="w-full bg-[#f4f7fb] py-6 sm:py-10 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Export Notification Toast */}
        {exportNotice && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center justify-between animate-in fade-in">
            <span>{exportNotice}</span>
            <button onClick={() => setExportNotice(null)} className="text-emerald-600 hover:text-emerald-900 ml-2">✕</button>
          </div>
        )}

        {/* Top Header & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-gray-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <span>Эхлэл</span>
              <span>›</span>
              <span className="text-[#0b2d5d]">Бүсчилсэн дашборд</span>
              <span>›</span>
              <span className="text-[#ff5938] font-bold">Хүн ам зүй & Судалгаа</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              МОНГОЛЫН ЗАЛУУЧУУДЫН БҮСЧИЛСЭН ХҮН АМ ЗҮЙН ДАШБОРД
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
              Монгол Улсын 21 аймаг, нийслэлийн 15-34 насны залуу үеийн хүн ам зүй, боловсрол, хөдөлмөр эрхлэлтийн өгөгдлийн нэгдсэн систем
            </p>
          </div>

          {/* Right Status & Controls */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Live Indicator Switch */}
            <button
              onClick={() => setIsLiveActive(!isLiveActive)}
              className={`flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                isLiveActive
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-sm'
                  : 'bg-gray-100 text-gray-500 border-gray-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isLiveActive ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
              <span>{isLiveActive ? 'LIVE СУВАГ ИДЭВХТЭЙ' : 'ТҮР ЗОГССОН'}</span>
            </button>

            {/* Export Button */}
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#111827] hover:bg-black text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
            >
              <Download size={14} />
              <span>Тайлан татах</span>
            </button>
          </div>
        </div>

        {/* 5 Macro Regions Selector Bar */}
        <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-gray-200/80 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {MONGOLIA_REGIONS.map((region) => {
              const isSelected = selectedRegionId === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`flex-1 min-w-[190px] py-3 px-4 rounded-xl text-left transition-all relative ${
                    isSelected
                      ? 'bg-[#0b2d5d] text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wide">
                      {region.name}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#ff5938]" />
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`text-base font-black ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {region.youthPopulation.toLocaleString()}
                    </span>
                    <span className={`text-[10px] ${isSelected ? 'text-blue-200' : 'text-gray-400'}`}>
                      ({region.youthPercentage}%)
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Key Metrics Cards (Focused, Clean, Non-cluttered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          
          {/* Card 1: Нийт залуучууд */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  {currentRegion.name} Залуус (15-34 нас)
                </span>
                <Users size={17} className="text-[#0b2d5d]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {currentRegion.youthPopulation.toLocaleString()}
              </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
              <span className="text-gray-500">Нийт хүн амд эзлэх хувь:</span>
              <span className="font-bold text-[#0b2d5d]">{currentRegion.youthPercentage}%</span>
            </div>
          </div>

          {/* Card 2: Хөдөлмөр эрхлэлт */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Хөдөлмөр эрхлэлтийн түвшин
                </span>
                <Briefcase size={17} className="text-[#ff5938]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {currentRegion.employmentRate}%
              </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
              <span className="text-gray-500">Улсын дундаж:</span>
              <span className="font-bold text-gray-700">55.8%</span>
            </div>
          </div>

          {/* Card 3: Дээд боловсрол */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Дээд боловсролын түвшин
                </span>
                <GraduationCap size={17} className="text-[#0b2d5d]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {currentRegion.higherEducationRate}%
              </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
              <span className="text-gray-500">Мэргэжлийн боловсрол:</span>
              <span className="font-bold text-gray-700">24.2%</span>
            </div>
          </div>

          {/* Card 4: Цахим оролцоо */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Цахим идэвх & Оролцоо
                </span>
                <Activity size={17} className="text-emerald-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {currentRegion.digitalCivicEngagement} <span className="text-sm font-semibold text-gray-500">/ 100</span>
              </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
              <span className="text-gray-500">NYV санаачилга:</span>
              <span className="font-bold text-emerald-700">{currentRegion.activeInitiatives} төсөл</span>
            </div>
          </div>

        </div>

        {/* Detailed Two-Column Section: Regional Deep Dive + Live Stream Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT: Regional Aimags & Demographics details (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm space-y-6">
            
            {/* Region Title & Included Aimags */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-black text-[#0b2d5d] uppercase tracking-wide flex items-center gap-2">
                  <MapPin size={18} className="text-[#ff5938]" />
                  <span>{currentRegion.name} — Хамрагдах аймаг, дүүргүүд</span>
                </h2>
                <span className="text-xs font-semibold text-gray-500">
                  {currentRegion.aimags.length} нэгж
                </span>
              </div>
              
              {/* Aimags tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentRegion.aimags.map((aimag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#f0f4f9] hover:bg-[#e2eaf4] text-xs font-semibold text-[#0b2d5d] border border-blue-100/80 transition-colors"
                  >
                    {aimag}
                  </span>
                ))}
              </div>
            </div>

            {/* National Youth Cohort Breakdown */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">
                Монгол Улсын залуу үеийн насны ангилал (Нийт: {totalYouthAll.toLocaleString()})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {YOUTH_AGE_DISTRIBUTION.map((item, idx) => {
                  const pct = Math.round((item.count / totalYouthAll) * 100);
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="text-[11px] font-bold text-gray-500 block">{item.range}</span>
                      <p className="text-lg font-black text-gray-900 mt-0.5">{item.count.toLocaleString()}</p>
                      <div className="flex items-center justify-between text-[10px] text-gray-400 mt-1">
                        <span>{item.label}</span>
                        <span className="font-bold text-[#0b2d5d]">{pct}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top Concerns in this Region */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">
                {currentRegion.name} дахь залуусын нэн тэргүүний тулгамдсан асуудлууд (NYV судалгаа)
              </h3>
              <div className="space-y-2">
                {currentRegion.topConcerns.map((concern, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-orange-50/40 border border-orange-100/60 flex items-center justify-between text-xs font-semibold text-gray-800"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#ff5938] text-white flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span>{concern}</span>
                    </div>
                    <span className="text-[11px] text-[#ff5938] font-bold">Тэргүүлэх чиглэл</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Live High-Frequency Event Stream + Security Endpoints status (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Live Feed Card */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-[#ff5938]" />
                  <span className="text-xs font-black uppercase text-gray-900 tracking-wider">
                    Бодит цагийн үйл явдал
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">{lastUpdated}</span>
              </div>

              <div className="space-y-2.5">
                {liveEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[11px] leading-relaxed text-gray-700 animate-in fade-in"
                  >
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5938] mt-1.5 flex-shrink-0" />
                      <span>{evt}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-gray-400 mt-4 text-center">
                Төв серверээс 4 секунд тутам автоматаар синк хийгдэж байна
              </p>
            </div>

            {/* Security & API Endpoints Card */}
            <div className="bg-[#0b2d5d] text-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={18} className="text-[#ff5938]" />
                <h4 className="text-xs font-black uppercase tracking-wider">
                  Нээлттэй өгөгдлийн API
                </h4>
              </div>
              <p className="text-[11px] text-blue-100/80 leading-relaxed mb-3">
                Судлаачид, хэвлэл мэдээлэл, бодлого боловсруулагчдад зориулсан найдвартай өгөгдлийн сувгууд:
              </p>
              
              <div className="space-y-1.5 font-mono text-[10.5px]">
                <div className="bg-white/10 p-2 rounded-lg flex items-center justify-between">
                  <span>GET /api/demographics/regions</span>
                  <span className="text-emerald-400 text-[10px]">200 OK</span>
                </div>
                <div className="bg-white/10 p-2 rounded-lg flex items-center justify-between">
                  <span>GET /api/demographics/cohorts</span>
                  <span className="text-emerald-400 text-[10px]">200 OK</span>
                </div>
                <div className="bg-white/10 p-2 rounded-lg flex items-center justify-between">
                  <span>POST /api/polls/:id/vote</span>
                  <span className="text-emerald-400 text-[10px]">AUTH</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
