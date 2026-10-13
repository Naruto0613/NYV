import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  FileText, 
  Download, 
  ChevronDown, 
  ChevronRight, 
  Users
} from 'lucide-react';
import { NavCategory } from '../types';

interface CouncilSectionsProps {
  category: NavCategory;
  onSelectCategory: (cat: NavCategory) => void;
  onOpenFeedback: () => void;
}

export const CouncilSections: React.FC<CouncilSectionsProps> = ({
  category,
  onSelectCategory,
  onOpenFeedback
}) => {
  // Accordion for FAQ in inquiries
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 1. ХУРАЛДААНЫ ТОВ (Schedule)
  if (category === 'schedule') {
    const schedules = [
      {
        id: '1',
        title: 'Үндэсний Залуусын Зөвлөлийн 2026 оны Намрын нэгдсэн чуулган',
        date: '2026.10.24',
        time: '10:00 - 16:30',
        location: 'Төрийн ордон, Их танхим & Цахим танхим',
        agenda: [
          '21 аймгийн залуусын хөдөлмөр эрхлэлтийн тайлан хэлэлцэх',
          'Орон сууцны хөнгөлөлттэй зээлийн урьдчилгаа батлан даалтын төсөл',
          'NYV 2026-2027 оны үйл ажиллагааны төлөвлөгөө батлах'
        ],
        status: 'ТОВЛОГДСОН',
        statusColor: 'bg-emerald-50 text-emerald-700'
      },
      {
        id: '2',
        title: 'Хангай ба Баруун бүсийн залуу манлайлагчдын зөвлөгөөн',
        date: '2026.10.30',
        time: '14:00 - 18:00',
        location: 'Орхон аймаг, Баян-Өндөр соёлын төв',
        agenda: [
          'Орон нутгийн залуусын гарааны бизнесийг дэмжих сангийн хуваарилалт',
          'Хөдөө аж ахуйн технологийн инкубатор төвийн нээлт'
        ],
        status: 'БҮРТГЭЖ БУЙ',
        statusColor: 'bg-blue-50 text-blue-700'
      },
      {
        id: '3',
        title: 'Төвийн бүсийн залуусын цахим хэлэлцүүлэг: Боловсрол ба Дижитал ур чадвар',
        date: '2026.11.08',
        time: '11:00 - 13:00',
        location: 'Цахим (Zoom & NYV Live)',
        agenda: [
          'МСҮТ, политехник коллежийн залуусын тэтгэлэгт хөтөлбөр',
          'Хиймэл оюун ухааны үнэ төлбөргүй сертификат сургалтууд'
        ],
        status: 'БЭЛТГЭГДЭЖ БУЙ',
        statusColor: 'bg-orange-50 text-orange-700'
      }
    ];

    return (
      <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <span>Эхлэл</span>
              <span>›</span>
              <span className="text-[#0b2d5d]">Залуусын Зөвлөл</span>
              <span>›</span>
              <span className="text-[#ff5938] font-bold">Хуралдааны тов</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              ХУРАЛДААНЫ ТОВ & АРГА ХЭМЖЭЭНИЙ ХУВААРЬ
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
              21 аймаг, нийслэлийн залуусын төлөөллийн зөвлөлийн хуралдаан, олон нийтийн хэлэлцүүлгийн батлагдсан тов
            </p>
          </div>

          <div className="space-y-4">
            {schedules.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${s.statusColor} self-start`}>
                    {s.status}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1 font-semibold text-gray-800">
                      <Calendar size={13} className="text-[#ff5938]" /> {s.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {s.time}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                
                <p className="text-xs text-gray-600 flex items-center gap-1.5 mb-4">
                  <MapPin size={13} className="text-[#0b2d5d]" />
                  <span>{s.location}</span>
                </p>

                <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                    Хэлэлцэх асуудлууд:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {s.agenda.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0b2d5d]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button 
                    onClick={onOpenFeedback}
                    className="text-xs font-semibold text-[#0b2d5d] hover:text-[#ff5938]"
                  >
                    Хэлэлцүүлэгт санал илгээх ›
                  </button>
                  <button
                    onClick={() => onSelectCategory('attendance')}
                    className="px-4 py-1.5 rounded-full bg-[#0b2d5d] text-white text-xs font-bold hover:bg-[#ff5938] transition-colors"
                  >
                    Ирц ба гишүүд үзэх
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // 2. ХУРАЛДААНЫ ТЭМДЭГЛЭЛ (Records)
  if (category === 'records') {
    const records = [
      {
        id: 'rec-1',
        title: 'Үндэсний Залуусын Зөвлөлийн 2026/04 тоот тогтоол',
        desc: 'Монгол Улсын 2027 оны төсвийн төсөлд залуучуудын гарааны бизнесийн дэмжлэгийг 2 дахин нэмэгдүүлэх тухай санал, дүгнэлт',
        date: '2026.09.28',
        fileSize: 'PDF · 2.4 MB',
        status: 'БАТЛАГДСАН'
      },
      {
        id: 'rec-2',
        title: 'Орон сууцны урьдчилгаа төлбөрийн батлан даалтын ажлын хэсгийн хуралдааны тэмдэглэл',
        desc: 'Сангийн яам, БХБЯ, Монголбанкны төлөөлөлтэй хийсэн хамтарсан уулзалтын протокол',
        date: '2026.09.15',
        fileSize: 'PDF · 1.8 MB',
        status: 'ТАЙЛАН'
      },
      {
        id: 'rec-3',
        title: '21 аймгийн залуусын чуулганы нэгдсэн тунхаглал ба зөвлөмж',
        desc: 'Бүсчилсэн хөгжлийн бодлогод орон нутгийн залуусын суурьшилтыг хангах 15 заалт бүхий уриалга',
        date: '2026.08.30',
        fileSize: 'PDF · 3.1 MB',
        status: 'НИЙТЛЭГДСЭН'
      }
    ];

    return (
      <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <span>Эхлэл</span>
              <span>›</span>
              <span className="text-[#0b2d5d]">Мэдээллийн сан</span>
              <span>›</span>
              <span className="text-[#ff5938] font-bold">Хуралдааны тэмдэглэл</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              ХУРАЛДААНЫ ТЭМДЭГЛЭЛ & АЛБАН ЁСНЫ ШИЙДВЭРҮҮД
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
              NYV зөвлөл, бүсийн чуулгануудаас батлагдсан протокол, тогтоол, албан ёсны шийдвэрийн нээлттэй архив
            </p>
          </div>

          <div className="space-y-4">
            {records.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0b2d5d]">
                      {r.status}
                    </span>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">{r.title}</h3>
                  <p className="text-xs text-gray-600 max-w-2xl">{r.desc}</p>
                </div>

                <button
                  onClick={() => alert(`Баримт бичиг (${r.fileSize}) татахад бэлтгэгдэж байна.`)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-[#0b2d5d] text-gray-700 hover:text-white text-xs font-bold transition-all shadow-sm flex-shrink-0"
                >
                  <Download size={14} />
                  <span>{r.fileSize}</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // 3. АСУУЛГА (Inquiries & FAQ)
  if (category === 'inquiries') {
    const faqs = [
      {
        q: 'Үндэсний Залуусын Дуу Хоолой (NYV)-д хэрхэн нэгдэх эсвэл санал илгээх вэ?',
        a: 'Та 15-34 насны Монгол Улсын иргэн бол манай цахим хуудасны "Санал бодлоо илэрхийлэх" хэсгээр дамжуулан хууль, бодлого, төслийн саналаа чөлөөтэй илгээж болно. Мөн 21 аймаг дахь NYV салбар зөвлөлд бүртгүүлэн сайн дурын ажилтан, төлөөлөгчөөр ажиллах боломжтой.'
      },
      {
        q: 'Илгээсэн санал, хүсэлт хэрхэн шийдвэрлэх түвшинд хүрдэг вэ?',
        a: 'Ирсэн бүх саналыг NYV Бодлого, судалгааны ажлын алба ангилан судалж, сар бүрийн УИХ, холбогдох байнгын хороод болон яамдад хүргүүлэх "Залуусын бодлогын зөвлөмж"-д албан ёсоор тусгадаг.'
      },
      {
        q: 'Бүсчилсэн дашбордын өгөгдлийг судалгаа, диплом, нийтлэлдээ ашиглаж болох уу?',
        a: 'Болно. NYV нь нээлттэй өгөгдлийн зарчмыг баримталдаг бөгөөд бүх өгөгдөл Үндэсний Статистикийн Хороо болон бидний түүвэр судалгааны эх сурвалжтай тул эх сурвалжаа дурдан үнэ төлбөргүй ашиглах эрхтэй.'
      },
      {
        q: 'Цахим санал асуулгад өгсөн саналын нууцлал хэрхэн хангагддаг вэ?',
        a: 'Санал асуулга нь бүрэн нууцлагдсан (нэр хаяг шаардахгүй) байдлаар нэгтгэгддэг. Систем нь зөвхөн бүс нутгийн статистик дүн шинжилгээнд ашиглагддаг.'
      }
    ];

    return (
      <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="pb-6 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
              <span>Эхлэл</span>
              <span>›</span>
              <span className="text-[#0b2d5d]">Тусламж & Дэмжлэг</span>
              <span>›</span>
              <span className="text-[#ff5938] font-bold">Асуулт, хариулт</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              АСУУЛТ, ХАРИУЛТ & ТҮГЭЭМЭЛ АСУУЛТУУД (FAQ)
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
              Залуусын оролцоо, төсөл, санал асуулга, тэтгэлэгтэй холбоотой түгээмэл асуултуудын хариулт
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/70 transition-colors"
                >
                  <span className="text-sm font-bold text-gray-900">{faq.q}</span>
                  {openFaq === idx ? <ChevronDown size={18} className="text-[#ff5938]" /> : <ChevronRight size={18} className="text-gray-400" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0b2d5d] text-white rounded-2xl p-6 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold">Хариултаа олсонгүй юу?</h4>
              <p className="text-xs text-blue-100/80 mt-0.5">Бидэнд шууд асуулт эсвэл саналаа илгээнэ үү.</p>
            </div>
            <button
              onClick={onOpenFeedback}
              className="px-5 py-2.5 rounded-full bg-[#ff5938] hover:bg-[#e64c2d] text-white text-xs font-bold transition-colors shadow-sm"
            >
              Асуулт илгээх
            </button>
          </div>

        </div>
      </div>
    );
  }

  // 4. СОНСГОЛ (Hearings)
  return (
    <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span>Эхлэл</span>
            <span>›</span>
            <span className="text-[#0b2d5d]">Иргэний хяналт</span>
            <span>›</span>
            <span className="text-[#ff5938] font-bold">Нээлттэй сонсгол</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            ЗАЛУУЧУУДЫН БОДЛОГЫН НЭЭЛТТЭЙ СОНСГОЛ & ХЭЛЭЛЦҮҮЛЭГ
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            Залуусын эрх ашиг, нийгмийн чухал асуудлаар төрийн байгууллага, шийдвэр гаргагчдыг оролцуулсан нээлттэй сонсголын танхим
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-600 uppercase mb-2 inline-block">
                🔴 БОЛЖ ӨНГӨРСӨН СОНСГОЛ
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                "Залуусын орон сууц ба хүртээмжтэй зээлийн бодлого"
              </h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                УИХ-ын Төсвийн байнгын хороо, Монголбанк, БХБЯ-ны төлөөлөлтэй хамтран 35 хүртэлх насны 300 гаруй залуусын шууд асуултад хариулсан нээлттэй сонсгол.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400">2026.09.20</span>
              <button 
                onClick={() => onSelectCategory('records')}
                className="font-bold text-[#0b2d5d] hover:text-[#ff5938]"
              >
                Сонсголын тэмдэглэл үзэх ›
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0b2d5d] uppercase mb-2 inline-block">
                ТОВЛОГДСОН СОНСГОЛ
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                "Их, дээд сургуулийн төгсөгчдийн анхны ажлын байр ба дадлагажих цалин"
              </h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                ХНХЯ, Ажил олгогч эздийн нэгдсэн холбоо, Их дээд сургуулиудын консорциумын төлөөлөл оролцох нээлттэй хэлэлцүүлэг.
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400">2026.11.12</span>
              <button 
                onClick={onOpenFeedback}
                className="font-bold text-[#ff5938] hover:text-black"
              >
                Асуулт урьдчилан илгээх ›
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
