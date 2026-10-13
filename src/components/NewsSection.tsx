import React, { useState } from 'react';
import { Newspaper, Calendar, Eye, Clock, ArrowRight, X } from 'lucide-react';
import { NEWS_LIST } from '../data/mockData';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  initialArticleId?: string | null;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ initialArticleId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Бүгд');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(
    initialArticleId ? NEWS_LIST.find(n => n.id === initialArticleId) || null : null
  );

  const categories = ['Бүгд', 'Мэдээлэл', 'Чуулган', 'Судалгаа', 'Төсөл'];

  const filteredNews = selectedCategory === 'Бүгд'
    ? NEWS_LIST
    : NEWS_LIST.filter(n => n.category === selectedCategory);

  return (
    <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span>Эхлэл</span>
            <span>›</span>
            <span className="text-[#0b2d5d]">Мэдээллийн сан</span>
            <span>›</span>
            <span className="text-[#ff5938] font-bold">Мэдээ, Нийтлэл</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            МЭДЭЭ, МЭДЭЭЛЭЛ & АРГА ХЭМЖЭЭНИЙ ТОЙМ
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            NYV-ийн үйл ажиллагаа, 21 аймгийн салбар зөвлөлүүдийн санаачилга, шийдвэрүүдийн нэгдсэн архив
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0b2d5d] text-white shadow-sm'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => setActiveArticle(news)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff5938] text-white uppercase tracking-wider">
                  {news.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {news.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {news.readTime}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Eye size={13} /> {news.views}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#0b2d5d] transition-colors line-clamp-2 leading-snug mb-2">
                    {news.title}
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-400">{news.author}</span>
                  <span className="text-xs font-bold text-[#ff5938] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Унших ›
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#ff5938] text-white uppercase">
                {activeArticle.category}
              </span>
              <span className="text-xs text-gray-400">{activeArticle.date}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight mb-4">
              {activeArticle.title}
            </h2>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 text-base">
                {activeArticle.summary}
              </p>
              {activeArticle.content?.map((p, idx) => (
                <p key={idx}>{p}</p>
              )) || (
                <p>
                  Үндэсний Залуусын Дуу Хоолой (NYV) нь залуучуудын нийгэм, улс төр, эдийн засгийн оролцоог хангах, тэдний санал санаачилгыг шийдвэр гаргах түвшинд хүргэхэд тууштай ажилласаар байна.
                </p>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400">
              <span>Эх сурвалж: {activeArticle.author}</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-full bg-[#0b2d5d] text-white font-bold hover:bg-[#ff5938] transition-colors"
              >
                Хаах
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
