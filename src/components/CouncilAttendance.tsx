import React, { useState } from 'react';
import { Users, CheckCircle, Clock, Mic, CheckCircle2, Search, Filter } from 'lucide-react';
import { LIVE_ATTENDANCE_MEMBERS } from '../data/mockData';

export const CouncilAttendance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filtered = LIVE_ATTENDANCE_MEMBERS.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) || m.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || m.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span>Эхлэл</span>
            <span>›</span>
            <span className="text-[#0b2d5d]">Залуусын төлөөлөл</span>
            <span>›</span>
            <span className="text-[#ff5938] font-bold">Хуралдааны ирц</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            ЗАЛУУЧУУДЫН ЗӨВЛӨЛИЙН ШУУД ХУРАЛДААН БА ИРЦИЙН БҮРТГЭЛ
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            21 аймаг, нийслэлийн залуусын төлөөллийн чуулганы бодит цагийн ирц, оролцооны нээлттэй мэдээлэл
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold text-gray-400 uppercase">Нийт төлөөлөгч</span>
            <p className="text-2xl font-black text-gray-900 mt-1">76</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold text-gray-400 uppercase">Ирцэд орсон</span>
            <p className="text-2xl font-black text-[#0b2d5d] mt-1">62 (81.5%)</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold text-gray-400 uppercase">Үг хэлж буй / Санал өгсөн</span>
            <p className="text-2xl font-black text-[#ff5938] mt-1">19</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm">
            <span className="text-[11px] font-bold text-gray-400 uppercase">Чөлөөтэй / Эзгүй</span>
            <p className="text-2xl font-black text-gray-400 mt-1">14</p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm mb-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Нэр эсвэл аймгаар хайх..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:ring-2 focus:ring-[#0b2d5d]/20 focus:outline-none"
            />
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {['all', 'present', 'speaking', 'voted'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  filterStatus === status
                    ? 'bg-[#0b2d5d] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? 'Бүгд' : status === 'present' ? 'Ирсэн' : status === 'speaking' ? 'Үг хэлж буй' : 'Санал өгсөн'}
              </button>
            ))}
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[560px]">
            <thead className="bg-[#f8fafc] border-b border-gray-200 text-gray-500 uppercase tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-5">Цаг</th>
                <th className="py-3.5 px-5">Төлөөлөгчийн нэр</th>
                <th className="py-3.5 px-5">Харьяалах Аймаг / Нийслэл</th>
                <th className="py-3.5 px-5">Төлөв</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium">
              {filtered.map((m, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-3 px-5 font-mono text-gray-400">{m.time}</td>
                  <td className="py-3 px-5 font-bold text-gray-900">{m.name}</td>
                  <td className="py-3 px-5 text-gray-600">{m.region}</td>
                  <td className="py-3 px-5">
                    {m.status === 'speaking' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                        <Mic size={11} /> Үг хэлж байна
                      </span>
                    ) : m.status === 'voted' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                        <CheckCircle2 size={11} /> Санал өгсөн
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0b2d5d] font-bold text-[10px]">
                        <CheckCircle size={11} /> Ирцэд орсон
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
