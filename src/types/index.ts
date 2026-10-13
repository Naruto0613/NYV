export type NavCategory =
  | 'home'
  | 'news'
  | 'schedule'
  | 'attendance'
  | 'polls'
  | 'proposals'
  | 'records'
  | 'inquiries'
  | 'demographics'
  | 'hearings'
  | 'about';

export interface DemographicRegion {
  id: string;
  name: string;
  nameEn: string;
  youthPopulation: number;
  totalPopulation: number;
  youthPercentage: number;
  employmentRate: number;
  higherEducationRate: number;
  digitalCivicEngagement: number;
  aimags: string[];
  topConcerns: string[];
  activeInitiatives: number;
}

export interface AgeCohort {
  range: string;
  count: number;
  percentage: number;
  maleRatio: number;
  femaleRatio: number;
}

export interface PollItem {
  id: string;
  title: string;
  description: string;
  category: string;
  votesCount: number;
  endDate: string;
  status: 'active' | 'closed';
  options: {
    id: string;
    text: string;
    votes: number;
  }[];
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  views: number;
  author: string;
  content?: string[];
}

export interface CouncilMemberAttendance {
  time: string;
  name: string;
  status: 'present' | 'speaking' | 'voted' | 'absent';
  region: string;
}

export interface YouthProposal {
  id: string;
  title: string;
  author: string;
  region: string;
  category: string;
  supporters: number;
  date: string;
  status: 'Хянагдаж буй' | 'Дэмжигдсэн' | 'Хэрэгжиж буй';
  description: string;
}
