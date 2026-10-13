import React from 'react';
import { Target, Users, Shield, Award, Heart, CheckCircle2, MapPin } from 'lucide-react';
import { NyvLogo } from './NyvLogo';

export const AboutSection: React.FC = () => {
  return (
    <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span>Эхлэл</span>
            <span>›</span>
            <span className="text-[#0b2d5d]">Байгууллагын тухай</span>
            <span>›</span>
            <span className="text-[#ff5938] font-bold">Танилцуулга</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            ҮНДЭСНИЙ ЗАЛУУСЫН ДУУ ХООЛОЙ (NATIONAL YOUTH VOICE)
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            Монголын залуу үеийн бие даасан дуу хоолой, төлөөлөл, бодлогын нөлөөллийн үндэсний байгууллага
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center py-4">
            <NyvLogo size="lg" />
          </div>

          <div className="w-full md:w-2/3 space-y-4 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-xl font-black text-[#0b2d5d] uppercase">
              Бид хэн бэ?
            </h2>
            <p>
              <strong>Үндэсний Залуусын Дуу Хоолой (NYV)</strong> нь Монгол Улсын 21 аймаг, нийслэлийн 9 дүүрэгт амьдран суугаа 15-34 насны нэг сая гаруй залуучуудын өмнө тулгамдаж буй нийгэм, эдийн засаг, боловсрол, байгаль орчны асуудлыг нэгтгэн, төрийн бодлогод бодит шийдэл болгон тусгуулахаар ажилладаг залуусын нэгдэл юм.
            </p>
            <p>
              Бид улс төрийн аливаа намын харьяалалгүй, бие даасан, судалгаа ба өгөгдөлд суурилсан бодлогын хяналт, иргэний нийгмийн оролцоог хангадаг.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0b2d5d] flex items-center justify-center font-bold mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Эрхэм Зорилго</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Залуу хүн бүр эх орондоо чанартай боловсрол эзэмших, зохистой хөдөлмөр эрхлэх, шийдвэр гаргах түвшинд эрх тэгш оролцох эрхийг баталгаажуулах.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff5938] flex items-center justify-center font-bold mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Үнэт Зүйлс</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Ил тод байдал, өгөгдөлд суурилсан хандлага, бүсчилсэн тэгш оролцоо, бие даасан байдал, бүтээлч шийдэл.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Бүсийн Сүлжээ</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Монгол орны 5 бүс, 21 аймгийн салбар зөвлөлүүдээр дамжуулан анхан шатны залуусын дуу хоолойг шууд төв системд холбодог.
            </p>
          </div>
        </div>

        {/* 21 Aimags Presence */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
          <h3 className="text-base font-black text-[#0b2d5d] uppercase mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-[#ff5938]" />
            <span>21 Аймаг дахь NYV Салбар Зөвлөлүүд</span>
          </h3>
          <p className="text-xs text-gray-600 mb-6">
            Та өөрийн аймаг, сумын NYV залуусын төлөөлөлтэй холбогдох, орон нутгийн төсөлд саналаа нэгтгэх боломжтой.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center text-xs">
            {[
              'Архангай', 'Баян-Өлгий', 'Баянхонгор', 'Булган', 'Говь-Алтай', 'Говьсүмбэр', 'Дархан-Уул',
              'Дорноговь', 'Дорнод', 'Дундговь', 'Завхан', 'Орхон', 'Өвөрхангай', 'Өмнөговь',
              'Сүхбаатар', 'Сэлэнгэ', 'Төв', 'Увс', 'Ховд', 'Хөвсгөл', 'Хэнтий'
            ].map((aimag) => (
              <div
                key={aimag}
                className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50/60 border border-gray-200/70 font-semibold text-gray-800 transition-colors"
              >
                {aimag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
