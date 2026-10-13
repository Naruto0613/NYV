import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'mn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  mn: {
    // Navigation
    'nav.home': 'Эхлэл',
    'nav.about': 'Бидний тухай',
    'nav.our_mission': 'Бидний зорилго',
    'nav.our_mission_desc': 'Үнэт зүйл, эрхэм зорилго ба үзэл баримтлал',
    'nav.organization': 'Бүтэц зохион байгуулалт',
    'nav.organization_desc': '21 аймаг, 9 дүүрэг дэх салбар зөвлөл',
    'nav.leadership': 'Удирдах зөвлөл',
    'nav.leadership_desc': 'Залуусын төлөөллийн зөвлөлийн гишүүд',
    'nav.contact': 'Холбоо барих',
    'nav.contact_desc': 'Иргэдийн санал хүсэлт, төв байрны хаяг',
    'nav.work': 'Үйл ажиллагаа',
    'nav.participation': 'Залуусын оролцоо',
    'nav.participation_desc': 'Нийгмийн идэвх ба иргэний боловсрол',
    'nav.policy': 'Бодлого ба өмгөөлөл',
    'nav.policy_desc': 'Хууль тогтоомжийн санал, зөвлөмж',
    'nav.programs': 'Хөтөлбөр, төслүүд',
    'nav.programs_desc': 'Бүсийн залуучуудын манлайллын чуулган',
    'nav.calendar': 'Хурлын тов',
    'nav.calendar_desc': 'Нээлттэй хэлэлцүүлэг, чуулганы хуваарь',
    'nav.news': 'Мэдээ мэдээлэл',
    'nav.resources': 'Мэдээллийн сан',
    'nav.research': 'Судалгаа ба тайлан',
    'nav.research_desc': 'Залуусын өгөгдөл, бодлогын судалгааны эмхэтгэл',
    'nav.demographics': 'Бүсчилсэн хүн ам зүй',
    'nav.demographics_desc': 'Монгол Улсын 5 бүсийн залуусын статистик',
    'nav.polls': 'Цахим санал асуулга',
    'nav.polls_desc': 'Нийтийн санал хураалт ба дуу хоолой',
    'nav.records': 'Хурлын протокол',
    'nav.records_desc': 'Шийдвэр, албан ёсны тогтоолын архив',
    'nav.attendance': 'Зөвлөлийн ирц',
    'nav.attendance_desc': 'Төлөөлөгчдийн бодит цагийн ирцийн бүртгэл',
    'nav.join_nyv': 'Нэгдэх',
    'nav.lang_toggle': 'Хэл солих',

    // Editorial Hero
    'hero.badge': 'ҮНДЭСНИЙ ЗАЛУУСЫН ДУУ ХООЛОЙ · МОНГОЛ УЛС',
    'hero.title_part1': 'ТАНЫ ДУУ ХООЛОЙ.',
    'hero.title_part2': 'ТАНЫ ',
    'hero.title_highlight': 'ИРЭЭДҮЙ.',
    'hero.description': 'Монгол Улсын залуу үеийн бие даасан эрх ашиг, нийгмийн оролцоо, шийдвэр гаргах түвшин дэх дуу хоолойг бодитоор нэгтгэн төлөөлөх үндэсний платформ.',
    'hero.cta_explore': 'Танилцах',
    'hero.cta_mission': 'Бидний зорилго',
    'hero.scroll': 'ДЭЛГЭРЭНГҮЙ ҮЗЭХ',

    // Second Section
    'second.eyebrow': 'БИД ХЭН БЭ БА БИДНИЙ ЭРХЭМ ЗОРИЛГО',
    'second.headline': 'Дуу хоолойгоо сонсгох эрхтэй шинэ үеийнхэн.',
    'second.subtext': 'Монгол орны 21 аймаг, нийслэлийн 9 дүүргийн залуусын санаачилга, эдийн засаг, боловсрол, нийгмийн тулгамдсан асуудлыг шийдвэр гаргах түвшинд хүргэдэг нээлттэй тогтолцоо.',
    'second.p1_title': 'Иргэний оролцоо',
    'second.p1_desc': '15–34 насны 1 сая гаруй залуусыг орон нутаг, хотын хөгжилд гар бие оролцуулах, хамтын шийдэл боловсруулах боломжоор хангана.',
    'second.p1_link': 'Залуусын зөвлөл ба ирц',
    'second.p2_title': 'Баримтад суурилсан бодлого',
    'second.p2_desc': 'Залуусын асуудлыг таамаглалаар бус, 5 бүсийн бодит хүн ам зүй, ажил эрхлэлт, боловсролын статистик өгөгдөлд түшиглэн тодорхойлно.',
    'second.p2_link': 'Бүсчилсэн дашборд үзэх',
    'second.p3_title': 'Шууд хэлэлцүүлэг & Санал хураалт',
    'second.p3_desc': 'Цахим санал асуулга, хууль тогтоомжийн төслийн саналыг УИХ, Засгийн газрын холбогдох бүтцүүдэд албан ёсоор хүргүүлнэ.',
    'second.p3_link': 'Санал асуулгад оролцох',
    'second.banner_title': 'Монгол Улсын ирээдүйг хамтдаа бүтээлцэхэд бэлэн үү?',
    'second.banner_desc': '21 аймаг дахь салбар бүлэгт нэгдэх, судалгааны багт ажиллах, эсвэл нийтийн санал хураалтад саналаа өгч оролцоорой.',
    'second.banner_btn1': 'NYV-д элсэх',
    'second.banner_btn2': 'Байгууллагын танилцуулга',

    // Two Content Panels
    'panels.p1_title': 'ЗАЛУУСЫН ОРОЛЦОО',
    'panels.p1_badge': 'НИЙТИЙН ХЭЛЭЛЦҮҮЛЭГ',
    'panels.p1_lead': 'Шийдвэр гаргах түвшинд залуучуудын төлөөллийг хангах үндсэн гарцууд',
    'panels.p2_title': 'СУДАЛГАА, МЭДЭЭЛЭЛ',
    'panels.p2_badge': 'НЭЭЛТТЭЙ ӨГӨГДӨЛ',
    'panels.p2_lead': 'Монгол орны 5 бүсийн залуусын хүн ам зүй, ажил эрхлэлт, өгөгдлийн сан',

    // Dashboard
    'dash.title': 'БҮСЧИЛСЭН ХҮН АМ ЗҮЙН ДАШБОРД',
    'dash.subtitle': 'Монгол Улсын бүсчилсэн хөгжлийн бодлогын хүрээнд 15-34 насны залуусын бодит өгөгдөл, хөдөлмөр эрхлэлт, боловсролын үзүүлэлт',
    'dash.youth_total': 'Нийт залуус (15–34 нас)',
    'dash.national_share': 'Хүн амд эзлэх хувь',
    'dash.employment': 'Ажил эрхлэлтийн түвшин',
    'dash.higher_ed': 'Дээд боловсрол эзэмшилт',
    'dash.civic_engage': 'Иргэний цахим оролцоо',

    // Polls
    'polls.title': 'ҮНДЭСНИЙ ЦАХИМ САНАЛ АСУУЛГА',
    'polls.subtitle': 'Залуусын өмнө тулгамдсан бодлогын шийдлүүдэд саналаа өгч, шийдвэр гаргагчдад дуу хоолойгоо шууд хүргээрэй.',
    'polls.active': 'Идэвхтэй санал асуулга',
    'polls.vote': 'Санал өгөх',
    'polls.voted': 'Санал өгсөн',
    'polls.total_votes': 'нийт санал',

    // News
    'news.title': 'МЭДЭЭ, МЭДЭЭЛЭЛ',
    'news.subtitle': 'Үндэсний Залуусын Дуу Хоолой байгууллагын үйл ажиллагаа, бодлогын хэлэлцүүлэг, орон нутгийн залуусын мэдээ',

    // Attendance
    'att.title': 'ЗАЛУУСЫН ТӨЛӨӨЛӨГЧДИЙН ЧУУЛГАНЫ ИРЦ',
    'att.subtitle': '21 аймаг, 9 дүүргийн төлөөлөгчдийн бодит цагийн ирц, хэлэлцэж буй асуудал',

    // Proposals
    'prop.title': 'ЗАЛУУСЫН САНААЧИЛГА, ТӨСЛИЙН САН',
    'prop.subtitle': 'Иргэд, залуучуудаас бодлогын түвшинд хэрэгжүүлэхээр ирүүлсэн саналууд',
    'prop.submit': 'Шинэ санал илгээх',

    // Common UI
    'ui.view_all': 'Бүгдийг харах',
    'ui.close': 'Хаах',
    'ui.back': 'Буцах',
    'ui.send': 'Илгээх',
    'ui.success': 'Амжилттай илгээгдлээ!',
    'ui.loading': 'Ачаалж байна...',
    'ui.search': 'Хайх...',
    'ui.filter': 'Шүүлтүүр',
    'ui.mongolian': 'Монгол',
    'ui.english': 'English'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.our_mission': 'Our Mission',
    'nav.our_mission_desc': 'Core purpose, civic principles and values',
    'nav.organization': 'Our Organization',
    'nav.organization_desc': 'Structure across 21 provinces & 9 districts',
    'nav.leadership': 'Leadership',
    'nav.leadership_desc': 'National youth council representatives',
    'nav.contact': 'Contact',
    'nav.contact_desc': 'Direct youth inquiries & headquarters',
    'nav.work': 'Our Work',
    'nav.participation': 'Youth Participation',
    'nav.participation_desc': 'Civic engagement initiatives nationwide',
    'nav.policy': 'Policy & Advocacy',
    'nav.policy_desc': 'Legislative proposals & recommendations',
    'nav.programs': 'Programs & Initiatives',
    'nav.programs_desc': 'Regional economic & youth summits',
    'nav.calendar': 'Events Calendar',
    'nav.calendar_desc': 'Official youth assemblies & forums schedule',
    'nav.news': 'News',
    'nav.resources': 'Resources',
    'nav.research': 'Research & Reports',
    'nav.research_desc': 'Downloadable whitepapers and data briefs',
    'nav.demographics': 'Regional Demographics',
    'nav.demographics_desc': 'Live data analytics dashboard for 5 regions',
    'nav.polls': 'Youth Polls & Voice',
    'nav.polls_desc': 'Digital voting and public opinion metrics',
    'nav.records': 'Meeting Records',
    'nav.records_desc': 'Official resolutions & session minutes archive',
    'nav.attendance': 'Council Attendance',
    'nav.attendance_desc': 'Live delegate roll call and participation',
    'nav.join_nyv': 'Join NYV',
    'nav.lang_toggle': 'Switch language',

    // Editorial Hero
    'hero.badge': 'NATIONAL YOUTH VOICE · MONGOLIA',
    'hero.title_part1': 'YOUR VOICE.',
    'hero.title_part2': 'YOUR ',
    'hero.title_highlight': 'FUTURE.',
    'hero.description': 'Empowering young people to participate in public life and help shape the future of Mongolia.',
    'hero.cta_explore': 'Explore NYV',
    'hero.cta_mission': 'Our Mission',
    'hero.scroll': 'SCROLL TO EXPLORE',

    // Second Section
    'second.eyebrow': 'WHO WE ARE & WHY WE EXIST',
    'second.headline': 'A generation that deserves to be heard.',
    'second.subtext': 'Across 21 provinces and 9 districts of Ulaanbaatar, National Youth Voice connects authentic civic dialogue with national decision-making.',
    'second.p1_title': 'Civic Participation',
    'second.p1_desc': 'Empowering over 1,000,000 young citizens aged 15–34 to actively participate in public life, debate civic issues, and co-create community solutions.',
    'second.p1_link': 'Youth Council & Attendance',
    'second.p2_title': 'Evidence-Based Policy',
    'second.p2_desc': 'Grounding youth advocacy in real-time regional demographics, employment data, and independent statistical research rather than assumptions.',
    'second.p2_link': 'Explore Demographics Dashboard',
    'second.p3_title': 'Direct Dialogue & Polls',
    'second.p3_desc': 'Providing verified digital polls and legislative submission channels directly submitted to the State Great Khural and government ministries.',
    'second.p3_link': 'Vote on Active Youth Polls',
    'second.banner_title': 'Ready to help shape the future of Mongolia?',
    'second.banner_desc': 'Join local branches across 21 aimags, contribute to policy working groups, or voice your opinion in national youth polls.',
    'second.banner_btn1': 'Join NYV Today',
    'second.banner_btn2': 'About Organization',

    // Two Content Panels
    'panels.p1_title': 'YOUTH PARTICIPATION',
    'panels.p1_badge': 'CIVIC DIALOGUE',
    'panels.p1_lead': 'Primary channels for youth engagement in national policy making',
    'panels.p2_title': 'RESEARCH & DATA',
    'panels.p2_badge': 'OPEN DATA',
    'panels.p2_lead': 'Demographic data, employment metrics, and youth analytics across 5 regions',

    // Dashboard
    'dash.title': 'REGIONAL DEMOGRAPHICS DASHBOARD',
    'dash.subtitle': 'Statistical analytics on 15–34 youth population across Mongolia’s 5 development regions',
    'dash.youth_total': 'Total Youth (Ages 15–34)',
    'dash.national_share': 'Share of Population',
    'dash.employment': 'Youth Employment Rate',
    'dash.higher_ed': 'Higher Education Attainment',
    'dash.civic_engage': 'Digital Civic Engagement',

    // Polls
    'polls.title': 'NATIONAL YOUTH POLLS',
    'polls.subtitle': 'Cast your verified vote on key youth policy initiatives and send direct feedback to national legislators.',
    'polls.active': 'Active Polls',
    'polls.vote': 'Cast Vote',
    'polls.voted': 'Voted',
    'polls.total_votes': 'total votes',

    // News
    'news.title': 'NEWS & UPDATES',
    'news.subtitle': 'Latest updates, policy roundtables, regional summits, and initiatives from National Youth Voice',

    // Attendance
    'att.title': 'YOUTH COUNCIL ATTENDANCE',
    'att.subtitle': 'Real-time roll call and debate tracking for youth delegates from 21 provinces and 9 districts',

    // Proposals
    'prop.title': 'YOUTH INITIATIVE PROPOSALS',
    'prop.subtitle': 'Civic initiatives and legislative recommendations submitted directly by young citizens',
    'prop.submit': 'Submit New Proposal',

    // Common UI
    'ui.view_all': 'View All',
    'ui.close': 'Close',
    'ui.back': 'Back',
    'ui.send': 'Submit',
    'ui.success': 'Successfully submitted!',
    'ui.loading': 'Loading...',
    'ui.search': 'Search...',
    'ui.filter': 'Filter',
    'ui.mongolian': 'Монгол',
    'ui.english': 'English'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'mn',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('nyv_preferred_lang');
      if (saved === 'mn' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'mn'; // Default to Mongolian Cyrillic
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('nyv_preferred_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'mn' ? 'en' : 'mn');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const text = translations[language]?.[key];
    if (text !== undefined) return text;
    // Fallback to English translation or fallback argument or key
    return translations.en?.[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
