import React, { useState } from 'react';
import { FileText, ThumbsUp, Calendar, MapPin, CheckCircle, Plus } from 'lucide-react';
import { YOUTH_PROPOSALS } from '../data/mockData';
import { YouthProposal } from '../types';

export const ProposalsSection: React.FC = () => {
  const [proposals, setProposals] = useState<YouthProposal[]>(YOUTH_PROPOSALS);
  const [supportedMap, setSupportedMap] = useState<Record<string, boolean>>({});

  const handleSupport = (id: string) => {
    if (supportedMap[id]) return;
    setProposals(prev =>
      prev.map(p => p.id === id ? { ...p, supporters: p.supporters + 1 } : p)
    );
    setSupportedMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="pb-6 mb-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <span>Эхлэл</span>
              <span>›</span>
              <span className="text-[#0b2d5d]">Хууль тогтоомж</span>
              <span>›</span>
              <span className="text-[#ff5938] font-bold">Хуулийн хувийн хэрэг</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              ЗАЛУУЧУУДЫН БОДЛОГЫН САНАЛ & САНААЧИЛГУУД
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
              Залуусын төлөөллөөс УИХ-ын гишүүд болон Байнгын хороодод өргөн барьсан хуулийн төслийн санал ба хэлэлцүүлгийн явц
            </p>
          </div>

          <button
            onClick={() => alert('Шинэ хуулийн төслийн санал өргөн барих системд нэвтрэх')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff5938] hover:bg-[#e64c2d] text-white text-xs font-bold transition-all shadow-md self-start sm:self-auto"
          >
            <Plus size={16} />
            <span>Шинэ санал өргөн барих</span>
          </button>
        </div>

        {/* Proposals List */}
        <div className="space-y-5">
          {proposals.map((item) => {
            const isSupported = Boolean(supportedMap[item.id]);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0b2d5d]">
                      {item.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                      item.status === 'Хэрэгжиж буй'
                        ? 'bg-emerald-50 text-emerald-800'
                        : item.status === 'Дэмжигдсэн'
                        ? 'bg-blue-50 text-blue-800'
                        : 'bg-orange-50 text-orange-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {item.region}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {item.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-100 gap-3">
                  <span className="text-xs text-gray-500">
                    Санаачлагч: <strong className="text-gray-800">{item.author}</strong>
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-gray-700">
                      {item.supporters.toLocaleString()} дэмжигч
                    </span>
                    <button
                      onClick={() => handleSupport(item.id)}
                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isSupported
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-[#0b2d5d] hover:bg-[#ff5938] text-white shadow-sm'
                      }`}
                    >
                      <ThumbsUp size={13} />
                      <span>{isSupported ? 'Дэмжсэн' : 'Дэмжих'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
