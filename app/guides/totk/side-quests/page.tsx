'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GiScrollQuill, GiTowngate } from 'react-icons/gi';

const sideQuests = [
  {
    region: "Lookout Landing",
    quests: [
      {
        title: "A Picture for the Sensor",
        description: "Help Robbie upgrade your Purah Pad with picture-taking capabilities.",
        reward: "Camera feature for Purah Pad",
        difficulty: "Easy",
        prerequisites: "Complete 'Crisis at Lookout Landing'"
      },
      {
        title: "The Mayoral Election",
        description: "Help resolve the election dispute in Lookout Landing.",
        reward: "100 Rupees, Citizen's Gratitude",
        difficulty: "Medium",
        prerequisites: "None"
      }
    ]
  },
  {
    region: "Kakariko Village",
    quests: [
      {
        title: "The Missing Cuccos",
        description: "Help find and return the missing Cuccos to their owner.",
        reward: "Purple Rupee (50)",
        difficulty: "Easy",
        prerequisites: "None"
      },
      {
        title: "Protecting the Village",
        description: "Help set up defenses around Kakariko Village.",
        reward: "Stealth Armor Set",
        difficulty: "Medium",
        prerequisites: "Complete 'The Missing Cuccos'"
      }
    ]
  },
  {
    region: "Hateno Village",
    quests: [
      {
        title: "The Ancient Tech Lab",
        description: "Help restore power to the Ancient Tech Lab.",
        reward: "Sensor Upgrade",
        difficulty: "Medium",
        prerequisites: "Camera feature unlocked"
      },
      {
        title: "Farm Troubles",
        description: "Help the local farmers with their monster problem.",
        reward: "Fresh Milk, Farming Tips",
        difficulty: "Easy",
        prerequisites: "None"
      }
    ]
  }
];

export default function SideQuestsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];

  const filteredQuests = sideQuests.map(region => ({
    ...region,
    quests: region.quests.filter(quest => 
      (searchTerm === '' || 
       quest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       quest.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (difficultyFilter === 'all' || quest.difficulty === difficultyFilter)
    )
  })).filter(region => region.quests.length > 0);

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <GiScrollQuill className="text-6xl mx-auto mb-4 text-[rgb(var(--gold))]" />
          <h1 className="text-4xl md:text-5xl font-bold zelda-title mb-4">
            Side Quests
          </h1>
          <p className="text-[rgb(var(--muted))] text-xl">
            Additional adventures and rewards across Hyrule
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search quests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-lg bg-[rgba(var(--primary),0.3)] 
                     border border-[rgba(var(--gold),0.2)] text-[rgb(var(--foreground))]
                     focus:border-[rgb(var(--gold))] focus:outline-none"
          />
          
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setDifficultyFilter(difficulty)}
                className={`px-4 py-2 rounded-lg transition-all duration-300
                          ${difficultyFilter === difficulty
                            ? 'bg-[rgba(var(--gold),0.2)] text-[rgb(var(--gold))]'
                            : 'bg-[rgba(var(--primary),0.3)] text-[rgb(var(--muted))] hover:text-[rgb(var(--gold))]'
                          }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Quest List */}
        <div className="space-y-8">
          {filteredQuests.map((region, regionIndex) => (
            <div 
              key={regionIndex}
              className="zelda-card bg-[rgba(var(--primary),0.3)] backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-[rgb(var(--gold))] mb-6 flex items-center gap-3">
                <GiTowngate className="text-3xl" />
                {region.region}
              </h2>
              
              <div className="space-y-6">
                {region.quests.map((quest, questIndex) => (
                  <div 
                    key={questIndex}
                    className="border-l-2 border-[rgba(var(--gold),0.3)] pl-6 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[rgb(var(--gold))]">
                        {quest.title}
                      </h3>
                      <span className={`text-sm px-3 py-1 rounded-full
                                    ${quest.difficulty === 'Easy' 
                                      ? 'bg-green-500/20 text-green-300'
                                      : quest.difficulty === 'Medium'
                                      ? 'bg-yellow-500/20 text-yellow-300'
                                      : 'bg-red-500/20 text-red-300'
                                    }`}>
                        {quest.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-[rgb(var(--muted))] leading-relaxed">
                      {quest.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-[rgb(var(--foreground))] mb-2">Reward:</h4>
                        <p className="text-[rgb(var(--muted))]">{quest.reward}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[rgb(var(--foreground))] mb-2">Prerequisites:</h4>
                        <p className="text-[rgb(var(--muted))]">{quest.prerequisites}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 flex justify-between items-center">
          <Link 
            href="/guides/totk"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-x-1 transform duration-300"
          >
            ← Back to TOTK Guides
          </Link>
          <Link 
            href="#"
            className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold-hover))] transition-colors hover:-translate-y-1 transform duration-300"
          >
            Back to Top ↑
          </Link>
        </div>
      </div>
    </div>
  );
} 