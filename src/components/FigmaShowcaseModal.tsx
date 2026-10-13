import React, { useState } from 'react';
import { X, Layers, ArrowUpRight, Copy, Check, Type, Sparkles } from 'lucide-react';
import { NyvLogo } from './NyvLogo';

interface FigmaShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FigmaShowcaseModal: React.FC<FigmaShowcaseModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'components' | 'colors' | 'typography'>('components');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, token: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorTokens = [
    { name: 'Primary Red', hex: '#b72429', role: 'Official brand color, active highlights, CTA button' },
    { name: 'Warm Cream', hex: '#f6eddc', role: 'Hover surfaces, dropdown backgrounds, secondary accents' },
    { name: 'Black', hex: '#000000', role: 'Primary typography, wordmark, institutional contrast' },
    { name: 'White', hex: '#ffffff', role: 'Main canvas, navbar surface, high-contrast readability' },
    { name: 'Secondary Text', hex: '#667085', role: 'Descriptions, micro-copy, caret icons' },
    { name: 'Border Gray', hex: '#E6EAF0', role: '1px hairline dividers and subtle card strokes' }
  ];

  const cyrillicAlphabet = [
    'Аа', 'Бб', 'Вв', 'Гг', 'Дд', 'Ее', 'Ёё', 'Жж', 'Зз', 'Ии', 'Йй',
    'Кк', 'Лл', 'Мм', 'Нн', 'Оо', 'Өө', 'Пп', 'Рр', 'Сс', 'Тт', 'Уу',
    'Үү', 'Фф', 'Хх', 'Цц', 'Чч', 'Шш', 'Щщ', 'Ъъ', 'Ыы', 'Ьь', 'Ээ',
    'Юю', 'Яя'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-[#E6EAF0] overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 landscape:py-2.5 border-b border-[#E6EAF0] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 bg-white flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#b72429] text-white flex items-center justify-center font-bold shrink-0">
              <Layers size={16} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-black leading-tight">
                Design System & Typography — NYV
              </h2>
              <p className="text-[11px] sm:text-xs text-[#667085] hidden xs:block">
                Centered-Logo Navigation · Inter & Noto Sans · Mongolian Cyrillic
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tabs */}
            <div className="flex bg-[#f6eddc] p-0.5 sm:p-1 rounded-lg text-xs overflow-x-auto hide-scrollbar">
              <button
                onClick={() => setActiveTab('components')}
                className={`px-2 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'components' ? 'bg-white text-black shadow-xs font-bold' : 'text-[#667085] hover:text-black'
                }`}
              >
                Components
              </button>
              <button
                onClick={() => setActiveTab('typography')}
                className={`px-2 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  activeTab === 'typography' ? 'bg-white text-black shadow-xs font-bold' : 'text-[#667085] hover:text-black'
                }`}
              >
                <Type size={11} />
                <span>Cyrillic (Ө, Ү, Ё)</span>
              </button>
              <button
                onClick={() => setActiveTab('colors')}
                className={`px-2 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'colors' ? 'bg-white text-black shadow-xs font-bold' : 'text-[#667085] hover:text-black'
                }`}
              >
                Colors
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-[#667085] hover:text-black transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 landscape:p-4 overflow-y-auto space-y-6 sm:space-y-8 flex-1 bg-[#FAFAFA]">
          
          {/* TAB 1: 13 FIGMA COMPONENTS */}
          {activeTab === 'components' && (
            <div className="space-y-8">
              
              {/* SECTION A: DESKTOP NAVBAR VARIANTS */}
              <div>
                <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider mb-4">
                  1. Desktop Header Variants (Height: 80px · Max-Width: 1360px · Centered: 50%)
                </h3>
                
                {/* 1. Navbar / Desktop / Default */}
                <div className="bg-white rounded-xl border border-[#E6EAF0] p-4 mb-4 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#b72429]">1. Navbar / Desktop / Default</span>
                    <span className="text-[11px] text-[#667085]">1440 × 80px</span>
                  </div>
                  <div className="border border-[#E6EAF0] rounded-lg p-3 bg-white grid grid-cols-[1fr_auto_1fr] items-center">
                    <div className="flex items-center gap-6 text-[14px] font-medium text-black">
                      <span>Бидний тухай</span>
                      <span>Үйл ажиллагаа</span>
                    </div>
                    <div>
                      <NyvLogo variant="compact" size="navbar" />
                    </div>
                    <div className="flex items-center justify-end gap-5">
                      <span className="text-[14px] font-medium text-black">Мэдээ</span>
                      <span className="text-[14px] font-medium text-black">Мэдээллийн сан</span>
                      <div className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-700">MN | EN</div>
                      <button className="h-9 px-4 rounded-[6px] bg-[#b72429] text-white text-[13.5px] font-medium flex items-center gap-1 font-btn">
                        <span>Нэгдэх</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Navbar / Desktop / Hover */}
                <div className="bg-white rounded-xl border border-[#E6EAF0] p-4 mb-4 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#b72429]">2. Navbar / Desktop / Hover</span>
                    <span className="text-[11px] text-[#667085]">"Бидний тухай" hovered (#b72429 + Warm Cream surface)</span>
                  </div>
                  <div className="border border-[#E6EAF0] rounded-lg p-3 bg-white grid grid-cols-[1fr_auto_1fr] items-center">
                    <div className="flex items-center gap-6 text-[14px] font-medium">
                      <span className="text-[#b72429] bg-[#f6eddc] px-2.5 py-1 rounded-md">Бидний тухай</span>
                      <span className="text-black">Үйл ажиллагаа</span>
                    </div>
                    <div>
                      <NyvLogo variant="compact" size="navbar" />
                    </div>
                    <div className="flex items-center justify-end gap-5">
                      <span className="text-[14px] font-medium text-black">Мэдээ</span>
                      <span className="text-[14px] font-medium text-black">Мэдээллийн сан</span>
                      <button className="h-9 px-4 rounded-[6px] bg-[#b72429] text-white text-[13.5px] font-medium flex items-center gap-1 font-btn">
                        <span>Нэгдэх</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Navbar / Desktop / Dropdown Open */}
                <div className="bg-white rounded-xl border border-[#E6EAF0] p-4 mb-4 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#b72429]">3. Navbar / Desktop / Dropdown Open</span>
                    <span className="text-[11px] text-[#667085]">Menu flyout with 4 institutional options</span>
                  </div>
                  <div className="border border-[#E6EAF0] rounded-lg p-3 bg-white">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center pb-3 border-b border-[#E6EAF0]">
                      <div className="flex items-center gap-6 text-[14px] font-semibold text-[#b72429]">
                        <span>Бидний тухай ▴</span>
                        <span className="text-black font-normal">Үйл ажиллагаа ▾</span>
                      </div>
                      <div>
                        <NyvLogo variant="compact" size="navbar" />
                      </div>
                      <div className="flex items-center justify-end gap-6 text-[14px]">
                        <span className="text-black">Мэдээ</span>
                        <span className="text-black">Мэдээллийн сан ▾</span>
                      </div>
                    </div>
                    <div className="mt-3 max-w-xs bg-white rounded-xl border border-[#E6EAF0] p-3 shadow-lg space-y-1">
                      <div className="p-2 rounded-lg bg-[#f6eddc]">
                        <span className="font-bold text-xs text-[#b72429] block">Бидний зорилго →</span>
                        <span className="text-[10.5px] text-[#667085]">Үнэт зүйл, эрхэм зорилго ба үзэл баримтлал</span>
                      </div>
                      <div className="p-2 rounded-lg hover:bg-gray-50">
                        <span className="font-bold text-xs text-black block">Бүтэц зохион байгуулалт</span>
                        <span className="text-[10.5px] text-[#667085]">21 аймаг, 9 дүүрэг дэх салбар зөвлөл</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Navbar / Desktop / Transparent */}
                <div className="bg-black rounded-xl border border-white/20 p-4 mb-4 shadow-xs text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#f6eddc]">4. Navbar / Desktop / Transparent</span>
                    <span className="text-[11px] text-white/60">Overlay on full-bleed photographic hero</span>
                  </div>
                  <div className="border border-white/10 rounded-lg p-3 bg-black/40 grid grid-cols-[1fr_auto_1fr] items-center">
                    <div className="flex items-center gap-6 text-[14px] font-medium text-white/90">
                      <span>Бидний тухай</span>
                      <span>Үйл ажиллагаа</span>
                    </div>
                    <div>
                      <NyvLogo variant="white" size="navbar" />
                    </div>
                    <div className="flex items-center justify-end gap-5">
                      <span className="text-[14px] font-medium text-white/90">Мэдээ</span>
                      <span className="text-[14px] font-medium text-white/90">Мэдээллийн сан</span>
                      <div className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white">MN | EN</div>
                      <button className="h-9 px-4 rounded-[6px] bg-[#b72429] text-white text-[13.5px] font-medium flex items-center gap-1 font-btn">
                        <span>Нэгдэх</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* SECTION B: BUTTON & LOGO VARIANTS */}
              <div>
                <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider mb-4">
                  2. Micro-Components & Atoms (Buttons, Links, Mark)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Primary CTA Button */}
                  <div className="bg-white rounded-xl border border-[#E6EAF0] p-4 space-y-3">
                    <span className="text-xs font-bold text-[#667085] block">Primary Button States</span>
                    <div className="space-y-2">
                      <div>
                        <span className="text-[10px] text-[#667085] block mb-1">Default (#b72429)</span>
                        <button className="h-10 px-4 rounded-[6px] bg-[#b72429] text-white text-[14px] font-medium inline-flex items-center gap-1 shadow-xs font-btn">
                          <span>Нэгдэх</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#667085] block mb-1">Hover (#961c20)</span>
                        <button className="h-10 px-4 rounded-[6px] bg-[#961c20] text-white text-[14px] font-medium inline-flex items-center gap-1 shadow-sm font-btn">
                          <span>Нэгдэх</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Logo / NYV / Primary */}
                  <div className="bg-white rounded-xl border border-[#E6EAF0] p-4 space-y-3">
                    <span className="text-xs font-bold text-[#667085] block">Official NYV Logo</span>
                    <div className="p-3 border border-dashed border-[#E6EAF0] rounded-lg flex flex-col items-center justify-center">
                      <NyvLogo variant="full" size="navbar" />
                      <span className="text-[10px] text-[#667085] mt-2">Official SVG Mark & Wordmark</span>
                    </div>
                  </div>

                  {/* Language Toggle Pill */}
                  <div className="bg-white rounded-xl border border-[#E6EAF0] p-4 space-y-3">
                    <span className="text-xs font-bold text-[#667085] block">Language Switcher Pill</span>
                    <div className="p-4 border border-dashed border-[#E6EAF0] rounded-lg flex flex-col items-center justify-center gap-2">
                      <div className="inline-flex items-center p-0.5 rounded-full text-xs bg-gray-100 border border-gray-200">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#b72429] text-white shadow-xs">MN</span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-gray-600">EN</span>
                      </div>
                      <span className="text-[10px] text-[#667085]">Bilingual Toggle (MN / EN)</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* TAB 2: TYPOGRAPHY & CYRILLIC VERIFICATION */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              
              {/* Cyrillic Glyphs Banner */}
              <div className="bg-white rounded-xl border border-[#E6EAF0] p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#f6eddc] text-[#b72429]">
                      Inter & Noto Sans
                    </span>
                    <h3 className="text-sm font-bold text-black">
                      Verified Mongolian Cyrillic Glyphs (Бүрэн Монгол Кирилл)
                    </h3>
                  </div>
                  <span className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <Check size={14} /> 100% Glyphs Verified
                  </span>
                </div>

                <p className="text-xs text-[#667085] mb-4 leading-relaxed">
                  All 35 Mongolian Cyrillic characters are rendered with full native font coverage, including strict correct rendering of the special letters <strong>Ө, ө, Ү, ү, Ё, ё</strong> across light, regular, medium, bold, and black weights:
                </p>

                {/* Glyphs Grid */}
                <div className="grid grid-cols-7 sm:grid-cols-12 gap-2 text-center">
                  {cyrillicAlphabet.map((char, idx) => {
                    const isSpecial = ['Өө', 'Үү', 'Ёё'].includes(char);
                    return (
                      <div
                        key={idx}
                        className={`p-2 rounded-lg border text-sm font-semibold transition-all ${
                          isSpecial 
                            ? 'bg-[#f6eddc] border-[#b72429] text-[#b72429] ring-2 ring-[#b72429]/20 font-black scale-105' 
                            : 'bg-[#FAFAFA] border-gray-200 text-gray-900'
                        }`}
                      >
                        <span>{char}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Typographic Scale */}
              <div className="bg-white rounded-xl border border-[#E6EAF0] p-6 shadow-xs space-y-6">
                <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider">
                  Typographic Hierarchy & Reading Rhythm
                </h3>

                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#b72429] uppercase font-bold block mb-1">
                        Hero Display (76px / 82px) · Black 900
                      </span>
                      <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                        ТАНЫ ДУУ ХООЛОЙ. ТАНЫ <span className="text-[#b72429]">ИРЭЭДҮЙ.</span>
                      </p>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#b72429] uppercase font-bold block mb-1">
                        Section Headline (36px / 44px) · Black 900
                      </span>
                      <p className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                        Дуу хоолойгоо сонсгох эрхтэй шинэ үеийнхэн.
                      </p>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#b72429] uppercase font-bold block mb-1">
                        Subhead & Lead Paragraph (18px / 28px) · Regular 400
                      </span>
                      <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-2xl">
                        Монгол Улсын залуу үеийн бие даасан эрх ашиг, бүсчилсэн хөгжил, нийгмийн оролцоог хангах нээлттэй тогтолцоо.
                      </p>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-[#b72429] uppercase font-bold block mb-1">
                        Navigation Labels (14.5px) · Medium 500
                      </span>
                      <div className="flex gap-4 text-[14.5px] font-medium text-black">
                        <span className="text-[#b72429]">Бидний тухай</span>
                        <span>Үйл ажиллагаа</span>
                        <span>Мэдээ</span>
                        <span>Мэдээллийн сан</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-[#b72429] uppercase font-bold block mb-1">
                      Body & Micro-Copy (12px - 14px) · Regular 400
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-xl">
                      21 аймаг, 9 дүүргийн 15-34 насны залуусын хүн ам зүй, ажил эрхлэлт, өгөгдөлд суурилсан судалгааны систем.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: COLORS */}
          {activeTab === 'colors' && (
            <div className="space-y-4">
              <p className="text-xs text-[#667085]">
                Official and exclusive core brand palette for National Youth Voice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {colorTokens.map((c, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-[#E6EAF0] p-4 space-y-3 shadow-xs">
                    <div
                      className="w-full h-16 rounded-lg border border-black/5 shadow-inner"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-black">{c.name}</span>
                        <button
                          onClick={() => copyToClipboard(c.hex, c.name)}
                          className="text-xs font-mono font-semibold text-[#b72429] hover:underline flex items-center gap-1"
                        >
                          <span>{c.hex}</span>
                          {copiedToken === c.name ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>
                      <p className="text-xs text-[#667085] mt-1">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#E6EAF0] bg-white flex items-center justify-between text-xs text-[#667085]">
          <span>National Youth Voice — Design System Spec 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
