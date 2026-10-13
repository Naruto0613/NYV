import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NyvLogo } from './NyvLogo';
import { NavCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onSelectCategory: (cat: NavCategory) => void;
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenFeedback }) => {
  const { language, t } = useLanguage();
  const isMn = language === 'mn';

  return (
    <footer className="w-full bg-[#111111] text-white pt-12 pb-8 border-t border-white/10 mt-12">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white p-3 rounded-xl shadow-xs">
              <NyvLogo variant="full" size="navbar" />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {isMn 
                ? 'Үндэсний Залуусын Дуу Хоолой (National Youth Voice) нь Монгол Улсын залуу үеийн бие даасан эрх ашиг, бүсчилсэн хөгжил, нийгмийн оролцоог хангах үндэсний нэгдсэн систем юм.'
                : 'National Youth Voice (NYV) is an independent civic platform dedicated to empowering over 1,000,000 young citizens across Mongolia in shaping public policy.'}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={onOpenFeedback}
                className="px-4 py-2 rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white text-xs font-medium transition-colors shadow-xs font-btn"
              >
                {isMn ? 'Санал бодлоо илгээх' : 'Submit Voice & Feedback'}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isMn ? 'Үндсэн хэсгүүд' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onSelectCategory('home')} className="hover:text-[#f6eddc] transition-colors">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('about')} className="hover:text-[#f6eddc] transition-colors">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('demographics')} className="hover:text-[#f6eddc] transition-colors">
                  {t('nav.demographics')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('polls')} className="hover:text-[#f6eddc] transition-colors">
                  {t('nav.polls')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('attendance')} className="hover:text-[#f6eddc] transition-colors">
                  {t('nav.attendance')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Data */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isMn ? 'Судалгаа & Тайлан' : 'Research & Data'}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => onSelectCategory('demographics')} className="hover:text-[#f6eddc] transition-colors">
                  {isMn ? 'Хүн ам зүйн статистик' : 'Regional Demographics'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('news')} className="hover:text-[#f6eddc] transition-colors">
                  {isMn ? 'Сүүлийн үеийн мэдээ' : 'News & Announcements'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('proposals')} className="hover:text-[#f6eddc] transition-colors">
                  {isMn ? 'Хуулийн санал, хувийн хэрэг' : 'Policy Proposals'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('records')} className="hover:text-[#f6eddc] transition-colors">
                  {isMn ? 'Хуралдааны тэмдэглэл' : 'Meeting Minutes'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isMn ? 'Холбоо барих' : 'Contact Us'}
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#b72429] mt-0.5 flex-shrink-0" />
                <span>{isMn ? 'Улаанбаатар хот, Сүхбаатар дүүрэг, NYV Төв байр' : 'Ulaanbaatar, Sukhbaatar District, NYV Central HQ'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#b72429] flex-shrink-0" />
                <span>contact@youthvoice.mn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#b72429] flex-shrink-0" />
                <span>+976 7711-2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <p>© 2026 National Youth Voice (NYV) — {isMn ? 'Бүх эрх хуулиар хамгаалагдсан.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-300">{isMn ? 'Нууцлалын бодлого' : 'Privacy Policy'}</span>
            <span>·</span>
            <span className="hover:text-gray-300">{isMn ? 'Нээлттэй өгөгдлийн стандарт' : 'Open Data Standards'}</span>
            <span>·</span>
            <span>{isMn ? 'Монгол Улс' : 'Mongolia'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
