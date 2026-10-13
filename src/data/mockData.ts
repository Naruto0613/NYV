import { DemographicRegion, AgeCohort, PollItem, NewsArticle, CouncilMemberAttendance, YouthProposal } from '../types';

export const MONGOLIA_REGIONS: DemographicRegion[] = [
  {
    id: 'ub',
    name: 'Улаанбаатар хот',
    nameEn: 'Ulaanbaatar',
    youthPopulation: 494200,
    totalPopulation: 1690000,
    youthPercentage: 48.2,
    employmentRate: 61.4,
    higherEducationRate: 46.8,
    digitalCivicEngagement: 84.5,
    aimags: ['Баянзүрх', 'Хан-Уул', 'Сонгинохайрхан', 'Баянгол', 'Сүхбаатар', 'Чингэлтэй', 'Налайх', 'Багануур', 'Багахангай'],
    topConcerns: ['Орон сууцны хүртээмж', 'Агаарын бохирдол', 'Түгжрэл ба нийтийн тээвэр', 'Гарааны бизнесийн орчин'],
    activeInitiatives: 38
  },
  {
    id: 'khangai',
    name: 'Хангайн бүс',
    nameEn: 'Khangai Region',
    youthPopulation: 188600,
    totalPopulation: 615000,
    youthPercentage: 18.4,
    employmentRate: 54.2,
    higherEducationRate: 36.5,
    digitalCivicEngagement: 68.2,
    aimags: ['Архангай', 'Баянхонгор', 'Булган', 'Орхон (Эрдэнэт)', 'Өвөрхангай', 'Хөвсгөл'],
    topConcerns: ['Орон нутгийн ажлын байр', 'Хөдөө аж ахуйн технологи', 'Эрүүл мэндийн үйлчилгээ'],
    activeInitiatives: 21
  },
  {
    id: 'central',
    name: 'Төвийн бүс',
    nameEn: 'Central Region',
    youthPopulation: 149600,
    totalPopulation: 520000,
    youthPercentage: 14.6,
    employmentRate: 56.8,
    higherEducationRate: 39.1,
    digitalCivicEngagement: 72.0,
    aimags: ['Дархан-Уул', 'Дорноговь', 'Дундговь', 'Өмнөговь', 'Сэлэнгэ', 'Төв', 'Говьсүмбэр'],
    topConcerns: ['Уул уурхайн бүсийн залуусын дэмжлэг', 'Мэргэжлийн боловсрол', 'Ногоон хөгжил'],
    activeInitiatives: 19
  },
  {
    id: 'western',
    name: 'Баруун бүс',
    nameEn: 'Western Region',
    youthPopulation: 114800,
    totalPopulation: 420000,
    youthPercentage: 11.2,
    employmentRate: 51.5,
    higherEducationRate: 34.2,
    digitalCivicEngagement: 64.8,
    aimags: ['Баян-Өлгий', 'Говь-Алтай', 'Завхан', 'Увс', 'Ховд'],
    topConcerns: ['Залуусын шилжилт хөдөлгөөн бууруулах', 'Цахим дэд бүтэц', 'Орон нутгийн тэтгэлэг'],
    activeInitiatives: 14
  },
  {
    id: 'eastern',
    name: 'Зүүн бүс',
    nameEn: 'Eastern Region',
    youthPopulation: 77600,
    totalPopulation: 235000,
    youthPercentage: 7.6,
    employmentRate: 53.0,
    higherEducationRate: 35.0,
    digitalCivicEngagement: 66.4,
    aimags: ['Дорнод', 'Сүхбаатар', 'Хэнтий'],
    topConcerns: ['Хилийн боомт, худалдааны боломж', 'Соёлын бүтээлч үйлдвэрлэл', 'Малчин залуусын дэмжлэг'],
    activeInitiatives: 11
  }
];

export const AGE_COHORTS: AgeCohort[] = [
  { range: '20-29', count: 1, percentage: 1.0, maleRatio: 49, femaleRatio: 51 },
  { range: '30-39', count: 7, percentage: 7.0, maleRatio: 51, femaleRatio: 49 },
  { range: '40-49', count: 45, percentage: 45.0, maleRatio: 53, femaleRatio: 47 },
  { range: '50-59', count: 29, percentage: 29.0, maleRatio: 52, femaleRatio: 48 },
  { range: '60-69', count: 6, percentage: 6.0, maleRatio: 55, femaleRatio: 45 },
  { range: '70-79', count: 1, percentage: 1.0, maleRatio: 60, femaleRatio: 40 }
];

export const YOUTH_AGE_DISTRIBUTION = [
  { range: '15-19 нас', count: 245000, label: 'ЕБС, Ахлах анги' },
  { range: '20-24 нас', count: 288000, label: 'Их, дээд сургууль' },
  { range: '25-29 нас', count: 264000, label: 'Карьерын гараа' },
  { range: '30-34 нас', count: 227800, label: 'Гэр бүл, бизнес' }
];

export const LIVE_ATTENDANCE_MEMBERS: CouncilMemberAttendance[] = [
  { time: '09:33', name: 'Батболд.Р', status: 'present', region: 'Улаанбаатар' },
  { time: '09:34', name: 'Ганбаатар.Ж', status: 'present', region: 'Дархан-Уул' },
  { time: '09:35', name: 'Шижир.Ө', status: 'present', region: 'Хөвсгөл' },
  { time: '09:35', name: 'Золжаргал.Ж', status: 'present', region: 'Архангай' },
  { time: '09:35', name: 'Дэлгэрсайхан.Б', status: 'present', region: 'Дорноговь' },
  { time: '09:35', name: 'Туваан.Ц', status: 'present', region: 'Төв' },
  { time: '09:35', name: 'Батсуурь.Ж', status: 'present', region: 'Сүхбаатар' },
  { time: '09:37', name: 'Мөнхсайхан.Т', status: 'present', region: 'Өвөрхангай' },
  { time: '09:38', name: 'Баясгалан.Ж', status: 'present', region: 'Ховд' },
  { time: '09:40', name: 'Ганбаатар.А', status: 'present', region: 'Баянхонгор' },
  { time: '09:41', name: 'Батбаатар.Б', status: 'present', region: 'Хэнтий' },
  { time: '09:43', name: 'Батнайрамдал.О', status: 'present', region: 'Орхон' },
  { time: '09:44', name: 'Сайханбилэг.Р', status: 'present', region: 'Улаанбаатар' },
  { time: '09:47', name: 'Энх-Амгалан.Л', status: 'speaking', region: 'Хөвсгөл' },
  { time: '09:47', name: 'Бат-Амгалан.Э', status: 'present', region: 'Улаанбаатар' },
  { time: '09:48', name: 'Батшугар.Э', status: 'voted', region: 'Улаанбаатар' },
  { time: '09:48', name: 'Алтанхуяг.Н', status: 'present', region: 'Увс' },
  { time: '09:50', name: 'Саранчулуун.О', status: 'present', region: 'Улаанбаатар' },
  { time: '09:51', name: 'Зулпхар.С', status: 'present', region: 'Баян-Өлгий' },
  { time: '09:52', name: 'Баярбаатар.Б', status: 'present', region: 'Дорнод' },
  { time: '09:53', name: 'Лувсанжамц.Г', status: 'present', region: 'Улаанбаатар' },
  { time: '09:54', name: 'Мөнхтуяа.Ц', status: 'present', region: 'Сэлэнгэ' }
];

export const INITIAL_POLLS: PollItem[] = [
  {
    id: 'poll-1',
    title: 'Залуусын орон сууцны хөнгөлөлттэй зээлийн урьдчилгаа төлбөрийг 15% болгон бууруулах санаачилга',
    description: 'Монгол Улсын Засгийн газар болон NYV зөвлөлөөс санаачилж буй анх удаа орон сууц худалдан авч буй 35 хүртэлх насны залуу гэр бүлүүдэд зориулсан урьдчилгаа батлан даалтын сан.',
    category: 'Орон сууц & Нийгмийн хамгаалал',
    votesCount: 8412,
    endDate: '2026-11-01',
    status: 'active',
    options: [
      { id: 'opt-1', text: 'Бүрэн дэмжиж байна (Нэн даруй хэрэгжүүлэх)', votes: 6120 },
      { id: 'opt-2', text: 'Дэмжиж байна (Гэхдээ орон нутагт түлхүү чиглүүлэх)', votes: 1690 },
      { id: 'opt-3', text: 'Татгалзаж байна (Санхүүгийн эрсдэл бий болгоно)', votes: 412 },
      { id: 'opt-4', text: 'Санал алга / Тодорхойгүй', votes: 190 }
    ]
  },
  {
    id: 'poll-2',
    title: 'Орон нутгийн залуусын гарааны бизнесийг дэмжих татварын хөнгөлөлт',
    description: 'Улаанбаатар хотоос бусад 21 аймаг, сумдад шинэ ажлын байр бий болгож буй залуу бизнес эрхлэгчдийн орлогын албан татварыг эхний 3 жил 90% чөлөөлөх санал.',
    category: 'Хөдөлмөр эрхлэлт & Инноваци',
    votesCount: 5290,
    endDate: '2026-11-15',
    status: 'active',
    options: [
      { id: 'opt-1', text: 'Маш чухал санаачилга (Бүс нутгийн хөгжлийг тэтгэнэ)', votes: 4410 },
      { id: 'opt-2', text: 'Тодорхой шалгуур тогтоож хэсэгчлэн олгох', votes: 620 },
      { id: 'opt-3', text: 'Дэмжихгүй байна', votes: 260 }
    ]
  },
  {
    id: 'poll-3',
    title: 'Их, дээд сургуулиудын хиймэл оюун ухаан ба технологийн сургалтын хөтөлбөрийг шинэчлэх',
    description: 'Монголын бүх их дээд сургууль, МСҮТ-үүдэд дижитал ур чадвар, AI технологийн суурь модулийг заавал үзэх хичээл болгон батлах.',
    category: 'Боловсрол & Цахим шилжилт',
    votesCount: 3940,
    endDate: '2026-10-30',
    status: 'active',
    options: [
      { id: 'opt-1', text: 'Санал нэг байна', votes: 3410 },
      { id: 'opt-2', text: 'Нэмэлт нөхцөлтэйгээр дэмжинэ', votes: 410 },
      { id: 'opt-3', text: 'Шаардлагагүй', votes: 120 }
    ]
  }
];

export const NEWS_LIST: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'ҮНДЭСНИЙ ЗАЛУУСЫН ДУУ ХООЛОЙ (NYV) БҮСЧИЛСЭН ХӨГЖИЛ БА ЗАЛУУЧУУДЫН ОРОЛЦООГ ДЭМЖИХ ҮНДЭСНИЙ ХӨТӨЛБӨРИЙН ҮР ДҮНГ ТАНИЛЦУУЛЛАА',
    summary: 'Монгол Улсын 21 аймаг, 9 дүүргийн залуусын төлөөллийг хамарсан өргөн хэмжээний хэлэлцүүлэг, судалгааны нэгдсэн тайланг олон нийтэд танилцуулж, шийдвэр гаргах түвшинд хүргэх ажлын хэсэг байгуулагдлаа.',
    date: '2026-10-11',
    category: 'Мэдээлэл',
    readTime: '4 мин',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
    views: 4820,
    author: 'NYV Хэвлэлийн алба',
    content: [
      'Үндэсний Залуусын Дуу Хоолой (NYV) нь Монгол Улсын залуучуудын нийгэм, улс төр, эдийн засгийн оролцоог хангах, тэдний санал санаачилгыг төрийн болон төрийн бус байгууллагуудтай хамтран бодит үр дүнд хүргэх чиглэлээр тасралтгүй ажиллаж байна.',
      'Энэ удаагийн арга хэмжээгээр 21 аймаг дахь NYV салбар зөвлөлүүдийн цуглуулсан 12,000 гаруй залуусын санал асуулгын нэгдсэн дүнд тулгуурласан зөвлөмжийг танилцуулав.',
      'Хэлэлцүүлэгт УИХ, холбогдох яам тамгын газрын төлөөлөл, олон улсын залуучуудын байгууллагууд болон их дээд сургуулиудын оюутны холбоод өргөнөөр оролцлоо.'
    ]
  },
  {
    id: 'news-2',
    title: '21 аймгийн залуусын чуулга уулзалт: Орон нутагт тогтвор суурьшилтай ажиллах шийдлүүд',
    summary: 'Хангай, Баруун, Төв, Зүүн бүсийн залуу манлайлагчдын нэгдсэн зөвлөгөөн Дархан болон Эрдэнэт хотод амжилттай болж өнгөрлөө.',
    date: '2026-10-09',
    category: 'Чуулган',
    readTime: '3 мин',
    imageUrl: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80',
    views: 2910,
    author: 'Бүсийн зохицуулалтын хэлтэс'
  },
  {
    id: 'news-3',
    title: 'NYV & Залуу эрдэмтдийн зөвлөл хамтарсан "Монголын залуусын нийгмийн дүр төрх 2026" судалгаа нийтлэгдлээ',
    summary: 'Хөдөлмөр эрхлэлт, сэтгэцийн эрүүл мэнд, санхүүгийн боловсрол, цахим ур чадварын чиглэлээр хийгдсэн хамгийн сүүлийн үеийн цогц судалгааны тайлан.',
    date: '2026-10-05',
    category: 'Судалгаа',
    readTime: '6 мин',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    views: 3740,
    author: 'Судалгаа, шинжилгээний алба'
  },
  {
    id: 'news-4',
    title: 'Залуучуудын гарааны бизнесийн "Voice Pitch 2026" шалгаруулалт эхэллээ',
    summary: 'Нийгмийн инноваци, ногоон эдийн засаг, технологийн чиглэлээр үйл ажиллагаа явуулж буй 50 залуу багт 500 сая төгрөгийн хөрөнгө оруулалтын сан нээлттэй боллоо.',
    date: '2026-10-02',
    category: 'Төсөл',
    readTime: '5 мин',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    views: 4190,
    author: 'Инновацийн хөтөлбөрийн баг'
  }
];

export const YOUTH_PROPOSALS: YouthProposal[] = [
  {
    id: 'prop-1',
    title: 'Орон нутгийн соёлын төвүүдийг залуусын залуучуудын коворкинг, кодинг төв болгон тохижуулах',
    author: 'Э.Батбаяр (Архангай аймаг)',
    region: 'Хангайн бүс',
    category: 'Дэд бүтэц & Боловсрол',
    supporters: 1420,
    date: '2026-10-08',
    status: 'Хэрэгжиж буй',
    description: 'Сум, аймгийн төвийн ашиглалт багатай танхимуудыг өндөр хурдны интернэт, дижитал сургалтын танхим болгох замаар орон нутгийн залуусыг алсын зайнаас ажиллах боломжоор хангах.'
  },
  {
    id: 'prop-2',
    title: 'Их дээд сургууль төгсөгчдийн анхны ажлын байрны дадлагажих цалинг төрөөс 50% татаас олгох',
    author: 'Н.Мишээл (Улаанбаатар хот)',
    region: 'Улаанбаатар хот',
    category: 'Хөдөлмөр эрхлэлт',
    supporters: 2890,
    date: '2026-10-05',
    status: 'Дэмжигдсэн',
    description: 'Ажил олгогчдод туршлагагүй шинэ төгсөгчийг ажилд авах хөшүүрэг болгож, 6 сарын турш үндсэн цалингийн 50 хувийг хөдөлмөр эрхлэлтийг дэмжих сангаас санхүүжүүлэх.'
  },
  {
    id: 'prop-3',
    title: 'Залуу малчдад зориулсан орчин үеийн ухаалаг мал аж ахуйн тоног төхөөрөмжийн хөнгөлөлттэй лизинг',
    author: 'Г.Тэмүүлэн (Сүхбаатар аймаг)',
    region: 'Зүүн бүс',
    category: 'Хөдөө аж ахуй',
    supporters: 980,
    date: '2026-10-01',
    status: 'Хянагдаж буй',
    description: 'Нарны цахилгаан үүсгүүр, GPS малын хүзүүвч, автомат хашаажуулалтын хэрэгслийг 0 хувийн хүүтэй худалдан авах боломж олгох.'
  }
];
