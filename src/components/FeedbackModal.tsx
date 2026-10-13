import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { MONGOLIA_REGIONS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ 
  isOpen, 
  onClose,
  title
}) => {
  const { language } = useLanguage();
  const isMn = language === 'mn';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: 'Улаанбаатар хот',
    category: 'Хөдөлмөр эрхлэлт & Гарааны бизнес',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        email: '',
        region: 'Улаанбаатар хот',
        category: 'Хөдөлмөр эрхлэлт & Гарааны бизнес',
        message: ''
      });
    }, 2200);
  };

  const modalTitle = title || (isMn ? 'NYV-д нэгдэх / Санал илгээх' : 'Join NYV / Submit Feedback');

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col p-5 sm:p-8 landscape:p-5 shadow-2xl border border-[#E6EAF0] relative my-auto overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-lg hover:bg-gray-100 text-[#667085] hover:text-black transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 sm:py-10 text-center space-y-3 overflow-y-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f6eddc] text-[#b72429] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black">
              {isMn ? 'Амжилттай бүртгэгдлээ!' : 'Successfully Submitted!'}
            </h3>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              {isMn 
                ? 'Үндэсний Залуусын Дуу Хоолой (NYV) зөвлөлд нэгдэх хүсэлт болон таны санал ажлын албанд бүртгэгдлээ.'
                : 'Thank you for connecting with National Youth Voice (NYV). Our coordinating team will review your application and get in touch.'}
            </p>
          </div>
        ) : (
          <div className="overflow-y-auto flex-1 pr-1">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#f6eddc] text-[#b72429] flex items-center justify-center font-bold shrink-0">
                <MessageSquare size={16} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black pr-6">
                {modalTitle}
              </h3>
            </div>
            
            <p className="text-xs text-[#667085] mb-4 sm:mb-5 leading-relaxed">
              {isMn 
                ? 'Монгол орны залуу үеийн бие даасан дуу хоолойг нэгтгэх үндэсний санаачилгад нэгдэх эсвэл санал хүсэлтээ илгээнэ үү.'
                : 'Join our national civic movement across Mongolia’s 21 aimags and 9 districts or send direct feedback to our policy committees.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    {isMn ? 'Таны нэр *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isMn ? 'Жишээ: Т. Болор' : 'John Doe'}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b72429]/20 focus:border-[#b72429]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    {isMn ? 'Утасны дугаар *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9911-XXXX"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b72429]/20 focus:border-[#b72429]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 landscape:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    {isMn ? 'Харьяалах бүс / Аймаг' : 'Region / Province'}
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b72429]/20 focus:border-[#b72429] bg-white"
                  >
                    <option value="Улаанбаатар хот">{isMn ? 'Улаанбаатар хот' : 'Ulaanbaatar'}</option>
                    {MONGOLIA_REGIONS.map((r) => (
                      <option key={r.id} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                    {isMn ? 'Сонирхож буй чиглэл' : 'Area of Interest'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b72429]/20 focus:border-[#b72429] bg-white"
                  >
                    <option value="Хөдөлмөр эрхлэлт">{isMn ? 'Хөдөлмөр эрхлэлт & Гарааны бизнес' : 'Employment & Startups'}</option>
                    <option value="Орон сууц">{isMn ? 'Залуусын орон сууц & Зээл' : 'Housing & Loans'}</option>
                    <option value="Боловсрол">{isMn ? 'Боловсрол & Тэтгэлэг' : 'Education & Scholarships'}</option>
                    <option value="Бүсийн хөгжил">{isMn ? 'Бүсийн залуусын хөгжил' : 'Regional Development'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-700 mb-1">
                  {isMn ? 'Санал, илгээх мессеж *' : 'Message or Proposal *'}
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isMn ? 'Таны дэвшүүлж буй санал эсвэл NYV-д хэрхэн оролцох хүсэлтэйгээ бичнэ үү...' : 'Share your message, proposal, or how you want to contribute...'}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b72429]/20 focus:border-[#b72429] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {isMn ? 'Болих' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#b72429] hover:bg-[#961c20] text-white font-medium flex items-center gap-1.5 transition-colors shadow-sm font-btn cursor-pointer"
                >
                  <Send size={13} />
                  <span>{isMn ? 'Илгээх' : 'Submit'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
