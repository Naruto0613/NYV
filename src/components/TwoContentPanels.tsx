import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Users, 
  Megaphone, 
  Send, 
  FileSpreadsheet, 
  Newspaper, 
  Download, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { NavCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface TwoContentPanelsProps {
  onSelectCategory: (cat: NavCategory) => void;
  onOpenFeedback: () => void;
}

export const TwoContentPanels: React.FC<TwoContentPanelsProps> = ({
  onSelectCategory,
  onOpenFeedback
}) => {
  const { language, t } = useLanguage();

  // Accordion state
  const [expandedLeft, setExpandedLeft] = useState<string | null>('about');
  const [expandedRight, setExpandedRight] = useState<string | null>('reports');

  // Interactive inline proposal form state inside left panel
  const [proposalSent, setProposalSent] = useState(false);
  const [proposalText, setProposalText] = useState('');
  const [proposalName, setProposalName] = useState('');

  const handleSendInlineProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalText.trim()) return;
    setProposalSent(true);
    setTimeout(() => {
      setProposalSent(false);
      setProposalText('');
      setProposalName('');
    }, 4000);
  };

  const isMn = language === 'mn';

  return (
    <section className="relative w-full z-20 pb-8 sm:pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Two large white content panels side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-start">
          
          {/* LEFT PANEL: ЗАЛУУСЫН ОРОЛЦОО / YOUTH PARTICIPATION */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg border border-[#E6EAF0] flex flex-col transition-all">
            
            {/* Header Banner */}
            <div className="relative w-full bg-[#111111] text-white rounded-xl p-5 sm:p-6 mb-5 overflow-hidden shadow-md">
              {/* Monogram Watermark on right */}
              <div className="absolute -right-4 -bottom-6 text-white/5 font-black text-8xl select-none pointer-events-none">
                NYV
              </div>

              <div className="relative z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] text-[10px] font-extrabold bg-[#b72429] text-white tracking-widest uppercase mb-2">
                  {isMn ? 'ИДЭВХЖҮҮЛЭЛТ & ЗАСАГЛАЛ' : 'ENGAGEMENT & GOVERNANCE'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                  {isMn ? 'ЗАЛУУСЫН ОРОЛЦОО' : 'YOUTH PARTICIPATION'}
                </h2>
                <p className="text-xs text-gray-300 mt-1 max-w-md">
                  {isMn 
                    ? 'Монгол орны ирээдүйг тодорхойлогч залуусын эрх, боломж, дуу хоолойг бодлогын түвшинд төлөөлөх талбар'
                    : 'A national platform representing youth rights, opportunities, and democratic participation in decision-making'}
                </p>
              </div>
            </div>

            {/* Interactive text options (Accordion Rows) */}
            <div className="space-y-3">
              
              {/* Option 1: Бидний тухай / About Us */}
              <div className="rounded-xl border border-[#E6EAF0] overflow-hidden transition-all bg-[#FAFAFA]">
                <button
                  onClick={() => setExpandedLeft(expandedLeft === 'about' ? null : 'about')}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-left hover:bg-[#f6eddc] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold">
                      <Users size={16} />
                    </div>
                    <span className="text-sm font-bold text-black tracking-tight">
                      {isMn ? 'Бидний тухай' : 'About Our Mission'}
                    </span>
                  </div>
                  {expandedLeft === 'about' ? (
                    <ChevronDown size={17} className="text-[#b72429]" />
                  ) : (
                    <ChevronRight size={17} className="text-gray-400" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedLeft === 'about' && (
                  <div className="p-4 pt-1 border-t border-[#E6EAF0] bg-white text-xs text-gray-600 space-y-3 animate-in fade-in">
                    <p className="leading-relaxed">
                      {isMn ? (
                        <>
                          <strong>Үндэсний Залуусын Дуу Хоолой (NYV)</strong> нь Монгол Улсын 21 аймаг, нийслэлийн 9 дүүрэг дэх 15-34 насны залуу үеийн үзэл бодол, нийгмийн оролцоог идэвхжүүлэх, тэдний өмнө тулгамдаж буй асуудлыг шийдвэрлэхэд чиглэсэн бие даасан нэгдэл юм.
                        </>
                      ) : (
                        <>
                          <strong>National Youth Voice (NYV)</strong> connects young citizens aged 15–34 across Mongolia’s 21 provinces and 9 districts to directly influence democratic institutions and national policies.
                        </>
                      )}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="p-2.5 rounded-lg bg-[#f6eddc]/60 border border-[#f6eddc]">
                        <span className="block text-[11px] font-bold text-black">{isMn ? '21 Аймаг' : '21 Provinces'}</span>
                        <span className="text-[10px] text-gray-600">{isMn ? 'Салбар зөвлөл ажиллаж байна' : 'Active local regional councils'}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#f6eddc]/60 border border-[#f6eddc]">
                        <span className="block text-[11px] font-bold text-[#b72429]">{isMn ? '45,000+ Залуус' : '45,000+ Youth'}</span>
                        <span className="text-[10px] text-gray-600">{isMn ? 'Санал асуулгад хамрагдсан' : 'Participated in civic polls'}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <button
                        onClick={() => onSelectCategory('about')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline transition-colors"
                      >
                        <span>{isMn ? 'Бүрэн танилцуулга унших' : 'Read Full Overview'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 2: Залуусын дуу хоолой / Youth Voice */}
              <div className="rounded-xl border border-[#E6EAF0] overflow-hidden transition-all bg-[#FAFAFA]">
                <button
                  onClick={() => setExpandedLeft(expandedLeft === 'voice' ? null : 'voice')}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-left hover:bg-[#f6eddc] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold">
                      <Megaphone size={16} />
                    </div>
                    <span className="text-sm font-bold text-black tracking-tight">
                      {isMn ? 'Залуусын дуу хоолой' : 'Youth Voice Advocacy'}
                    </span>
                  </div>
                  {expandedLeft === 'voice' ? (
                    <ChevronDown size={17} className="text-[#b72429]" />
                  ) : (
                    <ChevronRight size={17} className="text-gray-400" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedLeft === 'voice' && (
                  <div className="p-4 pt-1 border-t border-[#E6EAF0] bg-white text-xs text-gray-600 space-y-3 animate-in fade-in">
                    <p className="leading-relaxed">
                      {isMn
                        ? 'Бид бодлого тодорхойлогчид, УИХ, Засгийн газрын түвшинд залуусын байр суурийг бодит тоо баримт, судалгаагаар хамгаалдаг.'
                        : 'We represent youth priorities in national legislation with verified demographic data and policy research.'}
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b72429]" />
                        <span>{isMn ? 'Хөдөлмөр эрхлэлт ба гарааны бизнесийн эрх зүйн орчин' : 'Youth employment & startup legal ecosystem'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b72429]" />
                        <span>{isMn ? 'Орон сууцны урьдчилгаа ба залуу гэр бүлийн дэмжлэг' : 'Housing down payment support for young families'}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b72429]" />
                        <span>{isMn ? 'Орон нутгийн залуусын тэтгэлэгт хөтөлбөр' : 'Regional educational scholarship initiatives'}</span>
                      </li>
                    </ul>
                    <div className="pt-1">
                      <button
                        onClick={() => onSelectCategory('hearings')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline transition-colors"
                      >
                        <span>{isMn ? 'Нөлөөллийн хөтөлбөрүүд үзэх' : 'View Advocacy Programs'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 3: Санал бодлоо илэрхийлэх / Express Opinion */}
              <div className="rounded-xl border border-[#E6EAF0] overflow-hidden transition-all bg-[#FAFAFA]">
                <button
                  onClick={() => setExpandedLeft(expandedLeft === 'feedback' ? null : 'feedback')}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-left hover:bg-[#f6eddc] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold">
                      <Send size={16} />
                    </div>
                    <span className="text-sm font-bold text-black tracking-tight">
                      {isMn ? 'Санал бодлоо илэрхийлэх' : 'Submit Voice & Feedback'}
                    </span>
                  </div>
                  {expandedLeft === 'feedback' ? (
                    <ChevronDown size={17} className="text-[#b72429]" />
                  ) : (
                    <ChevronRight size={17} className="text-gray-400" />
                  )}
                </button>

                {/* Expanded Content with interactive submission */}
                {expandedLeft === 'feedback' && (
                  <div className="p-4 pt-1 border-t border-[#E6EAF0] bg-white text-xs space-y-3 animate-in fade-in">
                    {proposalSent ? (
                      <div className="p-4 rounded-xl bg-[#f6eddc] text-black border border-[#ebdcc0] flex items-center gap-3">
                        <CheckCircle2 size={24} className="text-[#b72429] flex-shrink-0" />
                        <div>
                          <p className="font-bold text-xs">{isMn ? 'Таны санал амжилттай бүртгэгдлээ!' : 'Your proposal was submitted successfully!'}</p>
                          <p className="text-[11px] text-gray-700 mt-0.5">{isMn ? 'NYV Ажлын хэсэг таны саналыг хянаж, хариу илгээх болно.' : 'NYV Committee will review and incorporate your proposal.'}</p>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSendInlineProposal} className="space-y-2.5">
                        <p className="text-gray-600 text-[11.5px]">
                          {isMn ? 'Залуусын өмнө тулгамдаж буй асуудал эсвэл шийдлийг илгээнэ үү:' : 'Share a youth issue or recommended policy solution:'}
                        </p>
                        <input
                          type="text"
                          required
                          value={proposalName}
                          onChange={(e) => setProposalName(e.target.value)}
                          placeholder={isMn ? 'Таны нэр эсвэл хаяг (Заавал биш)' : 'Your name / organization (Optional)'}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:ring-2 focus:ring-[#b72429]/20 focus:outline-none"
                        />
                        <textarea
                          required
                          rows={3}
                          value={proposalText}
                          onChange={(e) => setProposalText(e.target.value)}
                          placeholder={isMn ? 'Санал бодлоо энд бичнэ үү...' : 'Type your idea or policy proposal here...'}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:ring-2 focus:ring-[#b72429]/20 focus:outline-none resize-none"
                        />
                        <div className="flex items-center justify-between pt-1">
                          <button
                            type="button"
                            onClick={onOpenFeedback}
                            className="text-[11px] font-semibold text-gray-500 hover:text-black"
                          >
                            {isMn ? 'Дэлгэрэнгүй маягт ›' : 'Full Application ›'}
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-[6px] bg-[#b72429] hover:bg-[#961c20] text-white font-bold text-xs tracking-wide transition-all shadow-xs font-btn"
                          >
                            {isMn ? 'Санал илгээх' : 'Submit Idea'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* RIGHT PANEL: СУДАЛГАА, МЭДЭЭЛЭЛ / RESEARCH & DATA */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg border border-[#E6EAF0] flex flex-col transition-all">
            
            {/* Warm Cream Header Banner */}
            <div className="relative w-full bg-[#f6eddc] text-black rounded-xl p-5 sm:p-6 mb-5 overflow-hidden shadow-xs border border-[#ebdcc0]">
              {/* Monogram Watermark */}
              <div className="absolute -right-4 -bottom-6 text-black/5 font-black text-8xl select-none pointer-events-none">
                DATA
              </div>

              <div className="relative z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-[4px] text-[10px] font-extrabold bg-[#b72429] text-white tracking-widest uppercase mb-2">
                  {isMn ? 'ӨГӨГДӨЛ БА ДҮН ШИНЖИЛГЭЭ' : 'DATA & ANALYTICS'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-black uppercase">
                  {isMn ? 'СУДАЛГАА, МЭДЭЭЛЭЛ' : 'RESEARCH & INFORMATION'}
                </h2>
                <p className="text-xs text-gray-700 mt-1 max-w-md">
                  {isMn 
                    ? 'Монголын залуучуудын статистик, хөдөлмөр эрхлэлт, бүс нутгийн судалгааны нээлттэй тайлангууд'
                    : 'Open data reports on youth demographics, employment rates, and regional economic analysis'}
                </p>
              </div>
            </div>

            {/* Interactive text options (Accordion Rows) */}
            <div className="space-y-3">
              
              {/* Option 1: Судалгаа, тайлан / Reports */}
              <div className="rounded-xl border border-[#E6EAF0] overflow-hidden transition-all bg-[#FAFAFA]">
                <button
                  onClick={() => setExpandedRight(expandedRight === 'reports' ? null : 'reports')}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-left hover:bg-[#f6eddc] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold">
                      <FileSpreadsheet size={16} />
                    </div>
                    <span className="text-sm font-bold text-black tracking-tight">
                      {isMn ? 'Судалгаа, тайлан' : 'Research & Policy Briefs'}
                    </span>
                  </div>
                  {expandedRight === 'reports' ? (
                    <ChevronDown size={17} className="text-[#b72429]" />
                  ) : (
                    <ChevronRight size={17} className="text-gray-400" />
                  )}
                </button>

                {/* Expanded Content: Available reports */}
                {expandedRight === 'reports' && (
                  <div className="p-4 pt-1 border-t border-[#E6EAF0] bg-white text-xs text-gray-600 space-y-3 animate-in fade-in">
                    <p className="leading-relaxed">
                      {isMn ? 'Нээлттэй татах боломжтой сүүлийн үеийн бодлогын тайлан ба өгөгдлийн багцууд:' : 'Latest downloadable policy whitepapers and open datasets:'}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg border border-gray-200/80 hover:border-[#b72429]/50 hover:bg-[#f6eddc]/40 transition-all flex items-center justify-between">
                        <div>
                          <p className="font-bold text-black text-[11.5px]">
                            {isMn ? 'Монголын залуусын нийгмийн дүр төрх 2026' : 'Mongolian Youth Social Portrait 2026'}
                          </p>
                          <span className="text-[10px] text-gray-400">PDF · 4.8 MB · 2026.10</span>
                        </div>
                        <button
                          onClick={() => onSelectCategory('demographics')}
                          className="p-1.5 rounded-md text-[#b72429] hover:bg-[#f6eddc] transition-colors"
                          title="Download"
                        >
                          <Download size={15} />
                        </button>
                      </div>

                      <div className="p-2.5 rounded-lg border border-gray-200/80 hover:border-[#b72429]/50 hover:bg-[#f6eddc]/40 transition-all flex items-center justify-between">
                        <div>
                          <p className="font-bold text-black text-[11.5px]">
                            {isMn ? '21 аймгийн залуусын хөдөлмөр эрхлэлтийн атлас' : '21 Provinces Youth Employment Atlas'}
                          </p>
                          <span className="text-[10px] text-gray-400">PDF · 3.2 MB · 2026.09</span>
                        </div>
                        <button
                          onClick={() => onSelectCategory('demographics')}
                          className="p-1.5 rounded-md text-[#b72429] hover:bg-[#f6eddc] transition-colors"
                          title="Download"
                        >
                          <Download size={15} />
                        </button>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between">
                      <button
                        onClick={() => onSelectCategory('demographics')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline transition-colors"
                      >
                        <span>{isMn ? 'Бүсчилсэн интерактив дашборд руу очих' : 'Explore Interactive Regional Dashboard'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 2: Мэдээ, мэдээлэл / News */}
              <div className="rounded-xl border border-[#E6EAF0] overflow-hidden transition-all bg-[#FAFAFA]">
                <button
                  onClick={() => setExpandedRight(expandedRight === 'news' ? null : 'news')}
                  className="w-full py-3.5 px-4 flex items-center justify-between text-left hover:bg-[#f6eddc] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold">
                      <Newspaper size={16} />
                    </div>
                    <span className="text-sm font-bold text-black tracking-tight">
                      {isMn ? 'Мэдээ, мэдээлэл' : 'Latest News & Events'}
                    </span>
                  </div>
                  {expandedRight === 'news' ? (
                    <ChevronDown size={17} className="text-[#b72429]" />
                  ) : (
                    <ChevronRight size={17} className="text-gray-400" />
                  )}
                </button>

                {/* Expanded Content: News entries */}
                {expandedRight === 'news' && (
                  <div className="p-4 pt-1 border-t border-[#E6EAF0] bg-white text-xs text-gray-600 space-y-2.5 animate-in fade-in">
                    <p className="text-[11px] text-gray-500">{isMn ? 'Сүүлийн үеийн албан ёсны мэдээллүүд:' : 'Official announcements and assemblies:'}</p>
                    
                    <div className="space-y-2">
                      <div 
                        onClick={() => onSelectCategory('news')}
                        className="p-2 rounded-lg hover:bg-[#f6eddc] cursor-pointer border border-transparent hover:border-[#ebdcc0] transition-all"
                      >
                        <p className="font-semibold text-black text-[11.5px] line-clamp-1">
                          {isMn ? 'Залуучуудын гарааны бизнесийн "Voice Pitch 2026" шалгаруулалт эхэллээ' : 'Youth Startup "Voice Pitch 2026" applications now open'}
                        </p>
                        <span className="text-[10px] text-gray-400">2026-10-02 · {isMn ? 'Төсөл' : 'Initiative'}</span>
                      </div>

                      <div 
                        onClick={() => onSelectCategory('news')}
                        className="p-2 rounded-lg hover:bg-[#f6eddc] cursor-pointer border border-transparent hover:border-[#ebdcc0] transition-all"
                      >
                        <p className="font-semibold text-black text-[11.5px] line-clamp-1">
                          {isMn ? '21 аймгийн залуусын чуулга уулзалт: Тогтвортой шийдлүүд' : '21 Provinces Youth Summit: Sustainable Community Decisions'}
                        </p>
                        <span className="text-[10px] text-gray-400">2026-10-09 · {isMn ? 'Чуулган' : 'Assembly'}</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <button
                        onClick={() => onSelectCategory('news')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b72429] hover:underline transition-colors"
                      >
                        <span>{isMn ? 'Бүх мэдээг үзэх' : 'View All News & Updates'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
