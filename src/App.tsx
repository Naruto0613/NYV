/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { EditorialHero } from './components/EditorialHero';
import { SecondSection } from './components/SecondSection';
import { TwoContentPanels } from './components/TwoContentPanels';
import { RegionalDashboard } from './components/RegionalDashboard';
import { PollsSection } from './components/PollsSection';
import { NewsSection } from './components/NewsSection';
import { CouncilAttendance } from './components/CouncilAttendance';
import { ProposalsSection } from './components/ProposalsSection';
import { AboutSection } from './components/AboutSection';
import { CouncilSections } from './components/CouncilSections';
import { Footer } from './components/Footer';
import { FeedbackModal } from './components/FeedbackModal';
import { FigmaShowcaseModal } from './components/FigmaShowcaseModal';
import { NavCategory } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Layers } from 'lucide-react';

function AppContent() {
  const { language } = useLanguage();
  const [currentCategory, setCurrentCategory] = useState<NavCategory>('home');
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [figmaModalOpen, setFigmaModalOpen] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  const handleSelectCategory = (category: NavCategory) => {
    setCurrentCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectNewsItem = (id: string) => {
    setSelectedNewsId(id);
    setCurrentCategory('news');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToMission = () => {
    if (currentCategory !== 'home') {
      setCurrentCategory('home');
      setTimeout(() => {
        document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-['Inter',_'Noto_Sans',_sans-serif]">
      {/* 1. Transparent Header (Transitions to Solid White on Scroll) */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        onOpenJoinModal={() => setFeedbackModalOpen(true)}
        onToggleFigmaSpec={() => setFigmaModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentCategory === 'home' && (
          <>
            {/* 2. 100svh Cinematic Editorial Hero Screen */}
            <EditorialHero
              onExploreClick={scrollToMission}
              onMissionClick={() => handleSelectCategory('about')}
              onSelectCategory={handleSelectCategory}
            />

            {/* 3. Second Section in Warm Cream (#f6eddc): "A generation that deserves to be heard." */}
            <SecondSection
              onSelectCategory={handleSelectCategory}
              onOpenJoinModal={() => setFeedbackModalOpen(true)}
            />

            {/* 4. Interactive Two Content Panels */}
            <div className="bg-[#FAFAFA] pt-12 pb-6">
              <TwoContentPanels
                onSelectCategory={handleSelectCategory}
                onOpenFeedback={() => setFeedbackModalOpen(true)}
              />
            </div>
          </>
        )}

        {currentCategory === 'about' && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <AboutSection />
          </div>
        )}

        {currentCategory === 'demographics' && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <RegionalDashboard />
          </div>
        )}

        {currentCategory === 'polls' && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <PollsSection />
          </div>
        )}

        {currentCategory === 'news' && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <NewsSection initialArticleId={selectedNewsId} />
          </div>
        )}

        {currentCategory === 'attendance' && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <CouncilAttendance />
          </div>
        )}

        {currentCategory === 'proposals' && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <ProposalsSection />
          </div>
        )}

        {(currentCategory === 'schedule' || 
          currentCategory === 'records' || 
          currentCategory === 'inquiries' || 
          currentCategory === 'hearings') && (
          <div className="pt-14 sm:pt-16 lg:pt-20">
            <CouncilSections 
              category={currentCategory}
              onSelectCategory={handleSelectCategory}
              onOpenFeedback={() => setFeedbackModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenFeedback={() => setFeedbackModalOpen(true)}
      />

      {/* Join NYV / Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackModalOpen}
        onClose={() => setFeedbackModalOpen(false)}
        title={language === 'mn' ? 'NYV-д нэгдэх — Үндэсний Залуусын Дуу Хоолой' : 'Join NYV — National Youth Voice'}
      />

      {/* Figma Component Showcase & Spec Inspector Modal */}
      <FigmaShowcaseModal
        isOpen={figmaModalOpen}
        onClose={() => setFigmaModalOpen(false)}
      />

      {/* Floating Figma Spec Trigger Button */}
      <button
        onClick={() => setFigmaModalOpen(true)}
        className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-40 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-black/90 hover:bg-[#b72429] text-white text-[11px] sm:text-xs font-semibold shadow-xl border border-white/20 transition-all flex items-center gap-1.5 sm:gap-2 group backdrop-blur-sm cursor-pointer"
        title="Inspect Figma Component System & Tokens"
      >
        <Layers size={13} className="text-[#f6eddc] group-hover:rotate-12 transition-transform" />
        <span className="hidden xs:inline">Figma Specs & Typography</span>
        <span className="xs:hidden">Specs</span>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
