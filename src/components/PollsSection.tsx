import React, { useState } from 'react';
import { Vote, CheckCircle2, AlertCircle, Clock, Users, ArrowRight } from 'lucide-react';
import { INITIAL_POLLS } from '../data/mockData';
import { PollItem } from '../types';

export const PollsSection: React.FC = () => {
  const [polls, setPolls] = useState<PollItem[]>(INITIAL_POLLS);
  const [userVotes, setUserVotes] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState<string | null>(null);

  const handleVote = (pollId: string, optionId: string) => {
    if (userVotes[pollId]) return;

    setSubmitting(pollId);
    setTimeout(() => {
      setPolls(prevPolls =>
        prevPolls.map(poll => {
          if (poll.id !== pollId) return poll;
          return {
            ...poll,
            votesCount: poll.votesCount + 1,
            options: poll.options.map(opt =>
              opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
            )
          };
        })
      );
      setUserVotes(prev => ({ ...prev, [pollId]: optionId }));
      setSubmitting(null);
    }, 400);
  };

  return (
    <div className="w-full bg-[#f4f7fb] py-8 sm:py-12 animate-in fade-in duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="pb-6 mb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
            <span>Эхлэл</span>
            <span>›</span>
            <span className="text-[#0b2d5d]">Цахим талбар</span>
            <span>›</span>
            <span className="text-[#ff5938] font-bold">Санал хураалт</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            ЗАЛУУЧУУДЫН ЦАХИМ САНАЛ АСУУЛГА & БОДЛОГЫН САНАЛ
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
            Таны санал УИХ, Засгийн газар болон NYV зөвлөлийн дараагийн бодлогын хэлэлцүүлгийн суурь баримт болно.
          </p>
        </div>

        {/* Poll Cards List */}
        <div className="space-y-6">
          {polls.map((poll) => {
            const hasVoted = Boolean(userVotes[poll.id]);
            const selectedOptId = userVotes[poll.id];

            return (
              <div
                key={poll.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#0b2d5d] border border-blue-100 self-start">
                    {poll.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      <strong className="text-gray-700 font-mono">{poll.votesCount.toLocaleString()}</strong> санал
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>Дуусах: {poll.endDate}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {poll.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed">
                  {poll.description}
                </p>

                {/* Options */}
                <div className="space-y-2.5">
                  {poll.options.map((option) => {
                    const isSelected = selectedOptId === option.id;
                    const percent = poll.votesCount > 0
                      ? Math.round((option.votes / poll.votesCount) * 100)
                      : 0;

                    return (
                      <div
                        key={option.id}
                        onClick={() => !hasVoted && handleVote(poll.id, option.id)}
                        className={`relative rounded-xl border p-3.5 sm:p-4 transition-all overflow-hidden ${
                          hasVoted
                            ? isSelected
                              ? 'border-[#ff5938] bg-orange-50/40 ring-1 ring-[#ff5938]'
                              : 'border-gray-200 bg-gray-50/50'
                            : 'border-gray-200 hover:border-[#0b2d5d] hover:bg-blue-50/20 cursor-pointer'
                        }`}
                      >
                        {/* Fill Progress Bar (after voting) */}
                        {hasVoted && (
                          <div
                            className={`absolute inset-y-0 left-0 opacity-15 transition-all duration-700 ${
                              isSelected ? 'bg-[#ff5938]' : 'bg-[#0b2d5d]'
                            }`}
                            style={{ width: `${percent}%` }}
                          />
                        )}

                        <div className="relative z-10 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'border-[#ff5938] bg-[#ff5938] text-white'
                                  : 'border-gray-300 bg-white'
                              }`}
                            >
                              {isSelected && <CheckCircle2 size={13} className="stroke-[3]" />}
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-800">
                              {option.text}
                            </span>
                          </div>

                          {hasVoted && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-gray-900">
                                {percent}%
                              </span>
                              <span className="text-[10px] text-gray-400 font-mono">
                                ({option.votes.toLocaleString()})
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {hasVoted && (
                  <p className="text-[11px] font-semibold text-emerald-700 mt-3 flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    <span>Таны санал баталгаажсан бөгөөд бүсийн дүн шинжилгээнд нэмэгдлээ.</span>
                  </p>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
